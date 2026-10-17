> [!info]
> - dans cette note je vais illustré ce que j'ai pu mettre/dire dans les 2 notes précédente qui sont :
> - [[01_Dockerfile]]
> - [[02_docker_compose]]

> [!important]
> - après l'installation de docker redémarré le système pour que ça soit pris en compte 
> - le nom du fichier pour les docker compose doit être docker-compose.ylm sinon ça fonctionne pas.


- docker compose :

```bash
touch docker-compose.yml # touch crée le ficher 

nano docker-compose.yml #nano édite ce dernier 

chmod +x docker-compose.yml #chmod +x permet de donné le droit d'éxecution 
```


```yaml
#contenu du fichier :

version: "3.9"

services:
  nginx:
    image: nginx:latest
    container_name: nginx_server
    ports:
      - "8080:80"   # port hôte : port conteneur
    volumes:
      - ./html:/usr/share/nginx/html:ro  # contenu web
      - ./nginx.conf:/etc/nginx/nginx.conf:ro  # config nginx (optionnel)
    restart: unless-stopped

```

```docker-compose
docker compose up -d 
```

- docker compose up va télécharger l'image et la lancé 
- -d (détaché) va le lancé en arrière plan

![[Pasted image 20260628112158.png]]

![[Pasted image 20260628113239.png]]

![[Pasted image 20260628113320.png]]

- dans le dossier html j'ai crée un index.html qui contient :

```html
<h1> ma super page nginx </h1>
```

![[Pasted image 20260628113602.png]]


> [!important]
> partie 2 Dockerfile :
> pour utilisé un dockerfile il faut impérativement qu'il s'appel dockerfile




```bash
cd ../../nginx_file
nano dockerfile
```

```dockerfile
#contenue du dockerfile/peut être fait en ligne de commande

# Utilise l'image officielle Nginx
FROM nginx:alpine

# Supprime la page par défaut
RUN rm -rf /usr/share/nginx/html/*

# Copie les fichiers du site
COPY . /usr/share/nginx/html/

# Expose le port HTTP
EXPOSE 80

# Démarre Nginx
CMD ["nginx", "-g", "daemon off;"]
```

contenue du index.html : 

```html
<h1>mon super dockerfile</h1>
```

- construit l'image :
```bash
docker build -t mon-nginx .
```
-t = surnom du conteneur
. = dossier ou je suis 

résultat du build :

![[Pasted image 20260628114728.png]]

```docker
docker run -d -p 8081:80 --name mon-site mon-nginx
```
 
- docker run = lance le conteneur
- -d = en arrière plan 
- -p 8081:80 = sur le port 8081
- -- name = le nom

résultat : 

![[Pasted image 20260628115030.png]]

> [!warning]
> - important a retenir la version avec le dockerfile c'est une image le site on ne peut pas le modifier a par si on recréé le conteneur alors que le docker compose on peu le modifier en allant les changement se feront.
> - on a vue comment mapper un port hôte:conteneur
> - géré un volume pour rendre le conteneur potable/modifiable
> - comment faire un conteneur avec docker compose et dockerfile 
> - géré les éventuel problème rencontré
> 

