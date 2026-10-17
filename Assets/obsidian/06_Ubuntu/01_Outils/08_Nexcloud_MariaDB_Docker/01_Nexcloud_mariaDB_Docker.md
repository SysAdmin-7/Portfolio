### Étape 1 : Créer le dossier Nextcloud

```
mkdir -p ~/infrastructure/docker/nextcloud
cd ~/infrastructure/docker/nextcloud
```

### Étape 2 : Le fichier `docker-compose.yml`

```
nano docker-compose.yml
```

```
services:
  nextcloud_db:
    image: mariadb:10.6
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: root_password_nextcloud
      MYSQL_DATABASE: nextcloud_db
      MYSQL_USER: nc_user
      MYSQL_PASSWORD: nc_password_nextcloud

  nextcloud:
    image: nextcloud:latest
    restart: always
    ports:
      - "8083:80" # On prend le port 8083 pour éviter les conflits !
    environment:
      MYSQL_HOST: nextcloud_db
      MYSQL_USER: nc_user
      MYSQL_PASSWORD: nc_password_nextcloud
      MYSQL_DATABASE: nextcloud_db
    depends_on:
      - nextcloud_db
```

_(Sauvegarde avec `Ctrl+O`, `Entrée`, `Ctrl+X`)._

### Étape 3 : Le lancement 

Tu connais la formule magique maintenant :

```
sudo docker compose up -d
```

Laisse-lui 15-20 secondes pour s'installer proprement en tâche de fond, puis ouvre ton navigateur sur :

sur le navigateur :

```
http://127.0.0.1:8083
```
