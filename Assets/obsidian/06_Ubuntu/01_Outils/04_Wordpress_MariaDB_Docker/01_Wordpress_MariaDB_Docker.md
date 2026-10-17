
- on va créé le dossier :
```bash
mkdir ~/wordpress-docker #création du dossier
cd ~/wordpress-docker #on se déplace dedans
```

> [!info]
> voir [[01_Commande_de_base_linux]] si compliqué a comprendre

- création et modification du fichier avec un éditeur de texte :

```bash
nano docker-compose.yml #fichier avec la quelle on va monter notre infra wordpress & MariaDB
```

- écrire dans le fichier.yml :
```ylm
services:
  db:
    image: mariadb:10.6
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: test
      MYSQL_DATABASE: wordpress_db
      MYSQL_USER: test
      MYSQL_PASSWORD: test
    volumes:
      - db_data:/var/lib/mysql

  wordpress:
    image: wordpress:latest
    restart: always
    ports:
      - "8080:80"
    environment:
      WORDPRESS_DB_HOST: db
      WORDPRESS_DB_USER: test
      WORDPRESS_DB_PASSWORD: test
      WORDPRESS_DB_NAME: wordpress_db
    depends_on:
      - db
    volumes:
      - wp_data:/var/www/html

volumes:
  db_data:
  wp_data:
```

- une fois écrie plus qu'a le lancé :
```bash
sudo docker compose up -d #-d pour en arrière plan
```

si compliqué a comprendre aller voir [[02_docker_compose]]
