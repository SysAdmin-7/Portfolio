
```docker
docker --version
docker compose version
```

### 1. Pourquoi on a inventé Docker Compose ? 

Imagine que tu veux héberger un site web (comme un forum ou un blog WordPress) sur ton serveur.

Pour que ça marche, tu n'as pas besoin d'un seul logiciel, tu en as besoin de deux :

1. Un serveur web (ex: WordPress ou Nginx) pour afficher les pages.
    
2. Une base de données (ex: MySQL ou MariaDB) pour stocker les articles et les mots de passe.
    

Si tu devais le faire à la main avec les commandes classiques, tu devrais taper :

1. `docker run -d --name base_de_donnees -e MYSQL_ROOT_PASSWORD=secret mysql:latest`
    
2. Prier pour que la base démarre.
    
3. `docker run -d --name mon_site -p 80:80 --link base_de_donnees:mysql wordpress:latest`
    

C'est fastidieux, source d'erreurs, et si tu dois redémarrer ton serveur, tu dois tout retaper.

**La solution :** Docker Compose. Tu écris un seul fichier texte (le fichier `docker-compose.yml`), et avec **une seule commande**, Docker va télécharger, configurer, et relier tous tes conteneurs entre eux automatiquement.

### 2. Anatomie d'un fichier `docker-compose.yml` 

Le fichier utilise le format YAML. C'est un format très strict sur l'indentation (les espaces en début de ligne), donc il faut être rigoureux.

Voici l'architecture typique, expliquée ligne par ligne.

```c
# 1. La version du langage Compose
version: '3.8'

# 2. La déclaration des boîtes (Les Services)
services:

  # --- BOÎTE N°1 : La Base de données ---
  db:
    # L'image à télécharger
    image: mysql:8.0
    # On lui donne un nom sympa
    container_name: ma_base_mysql
    # On la redémarre automatiquement si le serveur plante
    restart: always
    # Les variables de configuration (mot de passe, etc.)
    environment:
      MYSQL_ROOT_PASSWORD: super_secret_password
      MYSQL_DATABASE: wordpress_db
    # On sauvegarde les données sur le PC physique pour ne rien perdre
    volumes:
      - mysql_data:/var/lib/mysql

  # --- BOÎTE N°2 : Le Site Web ---
  wordpress:
    image: wordpress:latest
    container_name: mon_site_wp
    restart: always
    # On ouvre le port 80 pour que le monde entier puisse voir le site
    ports:
      - "80:80"
    # On branche le site à la base de données
    environment:
      WORDPRESS_DB_HOST: db:3306 # Magie ! On utilise le nom de la boîte 'db' au lieu d'une IP
      WORDPRESS_DB_USER: root
      WORDPRESS_DB_PASSWORD: super_secret_password
      WORDPRESS_DB_NAME: wordpress_db
    # On dit à Docker : "Ne lance pas le site tant que la base de données n'est pas prête"
    depends_on:
      - db

# 3. La déclaration des sauvegardes (Volumes)
volumes:
  mysql_data:
```

### 3. Les Concepts Clés à retenir 

- **L'Isolation Réseau (La Magie du DNS) :**
    
    C'est la plus grande force de Compose. Quand tu lances ce fichier, Docker crée un réseau privé invisible. À l'intérieur, les conteneurs s'appellent par leur nom. Le site `wordpress` n'a pas besoin de connaître l'adresse IP de la base de données. Il lui suffit de crier _"Hé, `db` !"_ pour s'y connecter.
    
- **Les Volumes (La Sauvegarde) :**
    
    Si tu supprimes un conteneur, tout son contenu est effacé. C'est embêtant pour une base de données. Le bloc `volumes:` à la fin permet de créer un "disque dur persistant" stocké sur ton vrai PC. Même si tu détruis le conteneur MySQL, tes données sont sauves et le prochain conteneur les reprendra.
    
- **`depends_on` (L'Ordre de Démarrage) :**
    
    Un site web plante si sa base de données n'est pas allumée. Cette instruction dit à Docker l'ordre chronologique d'allumage.
    

### 4. Les 3 Commandes du Chef d'Orchestre 

Oublie les dizaines de commandes `docker run`. Avec Compose, tu te places dans le dossier où se trouve ton fichier `docker-compose.yml`, et tu utilises ces 3 commandes magiques :

1. **L'Allumage Général :**
    
    ```
    docker compose up -d
    ```
    
    _Le `-d` (Detached) fait tourner tout ça en arrière-plan. Docker va tout construire, tout relier, et t'afficher des petits "Done" verts. Ton empire est en ligne._
    
2. **L'Arrêt Général :**
    
    ```
    docker compose down
    ```
    
    _Détruit les conteneurs et le réseau proprement, MAIS conserve tes volumes (tes données)._
    
3. **La Supervision :**
    
    ```
    docker compose logs -f
    ```
    
    _Affiche en direct les journaux (logs) de tous tes conteneurs en même temps. Très pratique si un des deux services refuse de démarrer._


page précédente [[01_Dockerfile]]

page pour illustré [[03_Lab_Docker]]


Pour passer root sur Ubuntu, il ne faut pas faire `su -`, il faut utiliser `sudo` pour emprunter les droits. Tape cette commande :


```
sudo -i
```

Là, tu tapes ton mot de passe habituel (`ubuntu`), et ton invite de commande va se transformer en `root@ubuntu-virtual-machine:~#`. Tu seras le maître absolu du système.

### 2. L'erreur Docker `permission denied` 

Sur ta capture, on voit : `Error response from daemon: cannot stop container: ... permission denied`.

Le démon Docker s'est emmêlé les pinceaux avec AppArmor ou un conteneur planté en tâche de fond qui refuse de mourir, même avec `sudo docker compose`.

On va employer les grands moyens pour nettoyer ça proprement. Tape ces commandes une par une :

```
# 1. Passe en root complet pour écraser toutes les restrictions
sudo -i

# 2. Force l'arrêt brutal de TOUS les conteneurs qui tournent sur la machine
docker kill $(docker ps -q)

# 3. Supprime les conteneurs résiduels qui bloquent
docker rm $(docker ps -a -q)

# 4. Redémarre proprement le service Docker pour vider les erreurs de permissions
systemctl restart docker

# 5. Retourne dans ton dossier de projet (ajuste le chemin si nécessaire)
cd /home/ubuntu/infrastructure/docker/wordpress/

# 6. Relance le build à zéro
docker compose up -d
```


Exécute ces commandes spécifiques dans ton terminal (tu es déjà en `root`, donc pas besoin de `sudo`) :

### 1. Tuer brutalement tous les processus liés à containerd

On va forcer l'arrêt des conteneurs rebelles en visant directement le gestionnaire de bas niveau :


```
killall -9 containerd-shim
```

_(Cette commande va couper instantanément les conteneurs qui refusaient de s'arrêter)._

### 2. Forcer le nettoyage dans Docker

Maintenant que les processus sont morts en tâche de fond, on force Docker à supprimer les restes :

```
docker rm -f $(docker ps -a -q)
```

### 3. Redémarrer le moteur système

On réinitialise Docker et le gestionnaire de conteneurs pour nettoyer les bugs de permissions internes :

Bash

```
systemctl restart containerd
systemctl restart docker
```

### 4. Relancer le projet

Retourne dans ton dossier et tente le lancement :

```
cd /chemin/vers/docker/compose
docker compose up -d
```

