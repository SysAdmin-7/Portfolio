#  Docker Compose : Guide de Référence & Exemple Complet

**Docker Compose** est un outil CLI permettant de définir et de lancer des applications multi-conteneurs. À l'aide d'un simple fichier YAML (`docker-compose.yml`), il permet d'orchestrer les services, les réseaux internes et les volumes de données.

---

##  1. Architecture du fichier `docker-compose.yml`

Un fichier Compose comporte généralement 3 sections majeures :
1. **`services`** : Définition des conteneurs à exécuter (Web, DB, Cache...).
2. **`networks`** *(optionnel)* : Définition des réseaux virtuels personnalisés.
3. **`volumes`** *(optionnel)* : Définition des volumes de données persistantes.

---

##  2. Exemple Complet : Stack Web (Nginx + App Node.js + Base PostgreSQL)

Voici un exemple concret d'architecture 3 tiers prête à l'emploi :

```yaml
services:
  # 1. Reverse Proxy Web
  proxy:
    image: nginx:alpine
    container_name: reverse-proxy
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf:ro
    depends_on:
      - app-api
    networks:
      - frontend-net

  # 2. Application Backend / API
  app-api:
    build:
      context: ./backend
      dockerfile: Dockerfile
    container_name: api-backend
    environment:
      - PORT=3000
      - DB_HOST=db-postgres  # Connexion via nom du service DB
      - DB_PASS_FILE=/run/secrets/db_password
    restart: always
    networks:
      - frontend-net
      - backend-net

  # 3. Base de Données
  db-postgres:
    image: postgres:15-alpine
    container_name: database
    environment:
      POSTGRES_DB: myapp_db
      POSTGRES_USER: admin
      POSTGRES_PASSWORD: SecretPassword123!
    volumes:
      - pgdata:/var/lib/postgresql/data
    networks:
      - backend-net

# Définition des réseaux (Séparation des flux Frontend / Backend)
networks:
  frontend-net:
    driver: bridge
  backend-net:
    driver: bridge

# Définition de la persistance de données
volumes:
  pgdata:
    driver: local
````

> [!NOTE] Comprendre l'isolation réseau
> 
> Dans l'exemple ci-dessus, la base de données `db-postgres` est uniquement sur le réseau `backend-net`. Elle est donc **totalement inaccessible depuis l'extérieur** ou depuis le reverse proxy, mais joignable par l'API `app-api`.

##  3. Commandes CLI Indispensables

Toutes ces commandes doivent être exécutées dans le répertoire contenant le fichier `docker-compose.yml`.

| **Commande**                       | **Action / Utilité**                                                                              |
| ---------------------------------- | ------------------------------------------------------------------------------------------------- |
| `docker compose up -d`             | **Démarrer toute la stack** en arrière-plan (_detached mode_).                                    |
| `docker compose down`              | **Arrêter et supprimer** les conteneurs et réseaux de la stack.                                   |
| `docker compose down -v`           | Arrêter la stack **ET supprimer les volumes** de données (remise à zéro).                         |
| `docker compose ps`                | Afficher l'état de tous les conteneurs gérés par Compose.                                         |
| `docker compose logs -f`           | **Suivre les logs** en temps réel de tous les services (_ctrl+c pour quitter_).                   |
| `docker compose logs -f <service>` | Suivre les logs d'un service spécifique (ex: `docker compose logs -f app-api`).                   |
| `docker compose exec <service> sh` | **Ouvrir un terminal** à l'intérieur d'un conteneur (ex: `docker compose exec db-postgres psql`). |
| `docker compose build`             | Reconstruire les images personnalisées définies par un `build:`.                                  |

##  4. Bonnes Pratiques & Directives Clés

- **`restart: always` / `unless-stopped`** : S'assure que le conteneur redémarre automatiquement en cas de crash ou au redémarrage de la machine hôte.
    
- **Variables d'environnement (`.env`)** : Ne jamais stocker de mots de passe en clair dans le fichier YAML. Utilisez un fichier `.env` à côté du Compose :
    
    Extrait de code
    
    ```
    POSTGRES_PASSWORD=SuperSecretPass!
    ```
    
    Et faites-y référence dans le YAML : `POSTGRES_PASSWORD: ${POSTGRES_PASSWORD}`.
    
- **Port mapping (`HOST:CONTAINER`)** : Le format est toujours `Port_Machine_Hôte:Port_Interne_Conteneur`. Ex: `"8080:80"` redirige le trafic entrant sur le port 8080 de votre PC vers le port 80 du conteneur.