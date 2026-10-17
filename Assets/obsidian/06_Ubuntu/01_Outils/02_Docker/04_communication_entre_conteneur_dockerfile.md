#  Docker : Faire Communiquer les Conteneurs Entre Eux

Par défaut, Docker isole les conteneurs les uns des autres. Pour permettre à une application web d'échanger avec une base de données ou une API, il faut configurer le **réseau Docker** approprié.

---

##  1. Les Différents Modes de Réseau Docker

Docker propose plusieurs pilotes de réseau (*network drivers*) selon les besoins d'isolation et d'accès :

| Driver                  | Description                                                                    | Règle d'or / Usage                                                             |
| :---------------------- | :----------------------------------------------------------------------------- | :----------------------------------------------------------------------------- |
| **`bridge`** *(défaut)* | Crée un réseau virtuel interne sur la machine hôte (`docker0`).                | **À utiliser par défaut** pour faire communiquer des conteneurs isolés.        |
| **`host`**              | Supprime l'isolation réseau entre le conteneur et l'hôte (partage la pile IP). | Utilisé pour des performances maximales (pas de NAT), mais pas d'isolation.    |
| **`none`**              | Désactive complètement le réseau du conteneur.                                 | Conteneurs autonomes sans accès externe/interne (ex: batchs de calcul isolés). |
| **`macvlan`**           | Assigne une vraie adresse MAC/IP du LAN physique au conteneur.                 | Pour intégrer directement un conteneur au réseau local physique.               |

---

##  2. La Méthode Recommandée : Réseau Bridge Personnalisé

> [!WARNING] Piège classique en TP
> Sur le réseau `bridge` par défaut (*default bridge*), la **résolution DNS automatique par nom de conteneur ne fonctionne pas**. Il faut impérativement créer un **réseau bridge personnalisé** (*user-defined bridge*).

### Étape 1 : Créer le réseau personnalisé
```bash
docker network create mon-reseau-app
````

### Étape 2 : Lancer les conteneurs sur ce réseau

Bash

```
# 1. Lancer le conteneur de base de données (ex: Postgres)
docker run -d \
  --name db-postgres \
  --network mon-reseau-app \
  -e POSTGRES_PASSWORD=secret \
  postgres:alpine

# 2. Lancer l'application web sur le MÊME réseau
docker run -d \
  --name web-app \
  --network mon-reseau-app \
  -p 8080:80 \
  mon-image-web
```

### Étape 3 : Tester la communication via le DNS interne

Dans le conteneur `web-app`, l'application peut contacter la base de données directement avec son **nom de conteneur** comme nom d'hôte :

Bash

```
# Depuis le conteneur web-app :
ping db-postgres
curl http://db-postgres:5432
```

##  3. Avec Docker Compose (Méthode de Production)

**Docker Compose** simplifie la gestion multi-conteneurs. Par défaut, `docker compose` crée automatiquement un réseau dédié pour tous les services déclarés dans le même fichier.

Exemple de fichier `docker-compose.yml` :

YAML

```
version: '3.8'

services:
  web:
    build: .
    ports:
      - "8080:80"
    environment:
      - DB_HOST=db  # Résolution DNS vers le service "db"
    depends_on:
      - db

  db:
    image: postgres:alpine
    environment:
      POSTGRES_PASSWORD: secret
    # Pas besoin de publier le port sur l'hôte si seul 'web' doit y accéder
```

> [!NOTE] Comment ça marche ?
> 
> Docker Compose crée un réseau `nomduprojet_default`. Le service `web` peut joindre la base de données simplement en utilisant l'adresse `db` (le nom du service).

##  4. Commandes Utiles pour Déboguer le Réseau

Lors des labs réseau, ces commandes CLI permettent d'inspecter l'adressage IP et les flux :

|**Commande**|**Action / Utilité**|
|---|---|
|`docker network ls`|Lister tous les réseaux Docker existants sur l'hôte.|
|`docker network inspect <nom-reseau>`|Afficher les détails du réseau (plage d'IP, conteneurs connectés, IPs attribuées).|
|`docker network connect <reseau> <conteneur>`|Connecter à chaud un conteneur existant à un réseau.|
|`docker network disconnect <reseau> <conteneur>`|Déconnecter un conteneur d'un réseau.|

##  Astuce de Débogage en TP

Pour analyser le réseau depuis l'intérieur sans modifier vos conteneurs de prod/dev, lancez un conteneur éphémère d'outils réseau sur le même réseau :

Bash

```
docker run --rm -it --network mon-reseau-app nicolaka/netshoot
```

_Le conteneur `netshoot` contient `nmap`, `tcpdump`, `curl`, `dig`, `ip`, `ping`, idéal pour diagnostiquer les connexions._