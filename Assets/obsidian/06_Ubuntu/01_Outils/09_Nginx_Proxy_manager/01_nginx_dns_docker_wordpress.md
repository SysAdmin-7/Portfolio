 Architecture Reverse Proxy avec Nginx Proxy Manager & Docker
## 1. Concepts d'Architecture & Utilité Pro

Dans une infrastructure de production, **aucun conteneur applicatif ne doit être exposé directement à l'extérieur** avec un port spécifique (ex: `:8082`, `:8083`).

### Pourquoi utiliser un Reverse Proxy ?

- **Point d'entrée unique (Port 80 / 443) :** Toutes les requêtes HTTP/HTTPS arrivent sur une seule sentinelle (Nginx).
    
- **Isolation & Sécurité :** Les applications (WordPress, Nextcloud) restent masquées sur un réseau interne fermé (`proxy-network`).
    
- **Centralisation du SSL/TLS :** La terminaison HTTPS se fait au niveau du proxy. Les conteneurs internes n'ont pas besoin de gérer leurs propres certificats SSL.
    
- **Routage applicatif par sous-domaine :** Redirection dynamique du trafic basé sur le nom d'hôte (`[http://wordpress.local](http://wordpress.local)`  Conteneur WordPress).
    

## 2. Étape 1 : Création du Réseau Docker Bridge Global

Pour que le Reverse Proxy et les conteneurs puissent communiquer par leurs noms de services, ils doivent être raccordés à un même commutateur virtuel externe.

Bash

```
# Création du réseau virtuel isolé
docker network create proxy-network
```

## 3. Étape 2 : Déploiement de Nginx Proxy Manager (NPM)

L'interface de gestion de Nginx est déployée dans son propre dossier d'infrastructure.

Bash

```
mkdir -p ~/infrastructure/docker/proxy
cd ~/infrastructure/docker/proxy
nano docker-compose.yml
```

**Fichier `docker-compose.yml` :**

YAML

```
services:
  app:
    image: 'jc21/nginx-proxy-manager:latest'
    restart: always
    ports:
      - '80:80'   # Trafic HTTP entrant
      - '443:443' # Trafic HTTPS entrant
      - '81:81'   # Interface Web d'administration
    volumes:
      - ./data:/data
      - ./letsencrypt:/etc/letsencrypt
    networks:
      - proxy-network

networks:
  proxy-network:
    external: true
```

**Démarrage :**

Bash

```
docker compose up -d
```

- **Interface Admin :** `[http://127.0.0.1:81](http://127.0.0.1:81)`
    
- **Identifiants par défaut :** `admin@example.com` / `changeme`
    

## 4. Étape 3 : Isolation et Raccordement de l'Application (WordPress)

On supprime le mapping de port direct (`ports: - "8082:80"`) dans le service pour forcer le passage exclusif par le proxy.

Bash

```
cd ~/infrastructure/docker/wordpress
nano docker-compose.yml
```

**Fichier `docker-compose.yml` (Version sécurisée) :**

YAML

```
services:
  db:
    image: mariadb:10.6
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: root_password_machine
      MYSQL_DATABASE: wordpress_db
      MYSQL_USER: wp_user
      MYSQL_PASSWORD: wp_password_machine
    networks:
      - proxy-network

  wordpress:
    image: wordpress:latest
    restart: always
    environment:
      WORDPRESS_DB_HOST: db
      WORDPRESS_DB_USER: wp_user
      WORDPRESS_DB_PASSWORD: wp_password_machine
      WORDPRESS_DB_NAME: wordpress_db
    networks:
      - proxy-network
    depends_on:
      - db

networks:
  proxy-network:
    external: true
```

**Redémarrage de l'application :**

Bash

```
docker compose up -d
```

## 5. Étape 4 : Configuration du Routage & Resolution DNS Local

### 1. Configuration du Proxy Host dans Nginx (`[http://127.0.0.1:81](http://127.0.0.1:81)`)

1. Onglet **Hosts** => **Proxy Hosts** => **Add Proxy Host**.
    
2. **Domain Names :** `wordpress.local`
    
3. **Scheme :** `http`
    
4. **Forward Hostname / IP :** `wordpress` _(Nom du service dans docker-compose)_
    
5. **Forward Port :** `80`
    
6. Activer **Block Common Exploits** (WAF de base).
    
7. Sauvegarder.
    

### 2. Redirection DNS locale (Fichier Hosts)

Pour simuler un vrai nom de domaine sans enregistrement DNS public, on ajoute une entrée locale dans le système hôte Ubuntu :

Bash

```
echo "127.0.0.1 wordpress.local" | sudo tee -a /etc/hosts
```

## 6. Étape 5 : Validation & Recette

Ouvrir le navigateur et accéder à :

Plaintext

```
http://wordpress.local
```

###  Vérification d'architecture

- L'application réagit sur le port HTTP standard (`80`).
    
- Aucun port exotique (`:8082`) n'est nécessaire ni exposé.
    
- Le conteneur WordPress est inaccessible directement depuis le réseau externe, tout le flux passe obligatoirement par la couche d'inspection Nginx.
