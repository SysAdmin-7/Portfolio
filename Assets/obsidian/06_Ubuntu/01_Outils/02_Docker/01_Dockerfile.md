
### 1. C'est quoi un Dockerfile ?

Un Dockerfile, c'est littéralement une **une image que tu crée**. C'est un simple fichier texte qui dit à Docker étape par étape comment fabriquer ton conteneur.

### 2. notion de Base : 

- Le `Dockerfile` est le plan de construction de la maison.
- L'`Image` est la maison construite mais vide. 
- Le `Conteneur`, c'est quand tu rentres dans la maison et que tu allumes la lumière.

### 3. pratique a la créations du fichier :

> [!warning]
> 
> - il faut impérativement appeler le fichier Dockerfile
> - ne pas oublier les ==.== dans les commande
> 

> [!example]
> 
> ```Dockerfile
> # Étape 1 : Les fondations
> FROM python:3.12-slim
> 
> # Étape 2 : Le bureau de travail
> WORKDIR /app
> 
> # Étape 3 : Le transfert
> COPY traqueur.py .
> 
> # Étape 4 : L'installation
> RUN pip install requests beautifulsoup4
> 
> # Étape 5 : L'allumage
> CMD ["python", "traqueur.py"]
> ```


> [!Explication]
> - **`FROM` (Le point de départ) :** Tu ne crées jamais un conteneur à partir de rien. Ici, tu dis : _"Docker, va chercher une boîte vide sur Internet, mais qui a déjà un mini Linux et Python 3.12 d'installés dedans"_.
>     
> - **`WORKDIR` (Le dossier de travail) :** C'est l'équivalent de faire un `cd /app`. Ça dit à Docker : _"Tout ce qu'on va faire ensuite, crée-le et range-le dans un dossier appelé /app à l'intérieur du conteneur"_.
>     
> - `COPY` (Le transfert de ton PC vers la boîte) :** Tu dis : _"Prends le fichier `traqueur.py` qui est sur mon vrai PC Windows, et copie le à l'intérieur de la boîte"_.
>     
> - **`RUN` (Pendant la construction) :** Ce sont les commandes que Docker va taper **une seule fois**, au moment où il fabrique la boîte. Ici, il installe les bibliothèques Python nécessaires pour que ton code fonctionne.
>     
> - **`CMD` (À l'allumage) :** C'est la différence majeure avec `RUN` ! La commande `CMD` ne s'exécute **pas** quand tu fabriques la boîte. Elle s'exécute uniquement au moment où quelqu'un va appuyer sur "Play" pour allumer le conteneur. Ici, on lui dit : _"Quand tu t'allumes, lance mon script Python"_. et je lui dit allume python et mon script.
> 

```Dockerfile
docker build -t bot .
```

- `-t` sert a mettre un tag/nom au conteneur afin de le retrouver plus simplement.
- le `.` est super important car c'est pour dire cherche le `Dockerfile` la ou je suis actuellement
- il crée l'image grâce au `Docker build` donc il télécharge python et met tout ça dans un seul et même block

```Dockerfile
docker run bot
```

- le `docker run` va exécuté va crée le conteneur et exécute la commande `CMD`. le conteneur bot tourne.

### Phase 1 : La Construction 

C'est ici que tu dis à Docker de lire ton fameux `Dockerfile`.

- **`docker build -t nom_du_projet:v1 .`**
    
    - **À quoi ça sert :** Construit ton image à partir du Dockerfile.
        
    - **Le secret pro :** Le `-t` (Tag) permet de donner un nom et une version. Si tu ne mets pas `:v1`, Docker mettra `:latest` par défaut. Le `.` à la fin est vital : il dit "le Dockerfile est dans ce dossier".
        
- **`docker build --no-cache -t nom_du_projet .`**
    
    - **À quoi ça sert :** Force Docker à tout reconstruire de zéro.
        
    - **Le secret pro :** Par défaut, Docker est feignant (et intelligent). S'il a déjà téléchargé Python hier, il ne le refera pas (il utilise son "cache"). Mais parfois, ton code a changé et Docker ne s'en rend pas compte. Cette commande force un nettoyage de printemps lors de la construction.
        

###  Phase 2 : Le Lancement 

Ton image est construite. Maintenant, on l'allume pour voir si elle explose.

- **`docker run -d --name test_bot mon_image`**
    
    - **À quoi ça sert :** Lance le conteneur.
        
    - **Le secret pro :** `-d` (Detached) lance le conteneur en arrière-plan pour te rendre la main sur ton terminal. `--name` te permet de lui donner un petit nom sympa au lieu du nom généré aléatoirement par Docker (genre _crazy_einstein_).
        
- **`docker run --rm -it mon_image`**
    
    - **À quoi ça sert :** Le mode "Bac à sable jetable".
        
    - **Le secret pro :** La commande préférée des développeurs. `--rm` veut dire "Dès que je ferme ce conteneur, supprime-le, je ne veux aucune trace". C'est parfait pour tester un script une seule fois.
        

###  Phase 3 : Le Débogage 

Spoiler : la première fois, ça ne marche **jamais**. Voici comment l'ingénieur enquête.

- **`docker logs -f nom_du_conteneur`**
    
    - **À quoi ça sert :** Lire les journaux du conteneur.
        
    - **Le secret pro :** Si ton bot Python plante, tu ne verras rien s'il tourne en arrière-plan. Cette commande affiche ce que le conteneur "écrit" à l'écran. Le `-f` (Follow) laisse l'écran ouvert et affiche les nouvelles erreurs en temps réel.
        
- **`docker exec -it nom_du_conteneur /bin/sh` (ou `/bin/bash`)**
    
    - **À quoi ça sert :** Pénétrer à l'intérieur de la boîte pendant qu'elle tourne.
        
    - **Le secret pro :** C'est le **God Mode**. Ton conteneur tourne, mais il y a un bug ? Tu tapes cette commande et BOOM, ton terminal change. Tu es _à l'intérieur_ du Linux du conteneur. Tu peux fouiller dans les dossiers, voir si tes fichiers sont bien là, et comprendre pourquoi ça plante. Pour ressortir, tu tapes `exit`.
        

###  Phase 4 : Le Nettoyage

Docker est un ogre. Si tu crées des images tous les jours, il va manger 50 Go de ton disque dur en un mois.

- **`docker images`** et **`docker ps -a`**
    
    - **À quoi ça sert :** Voir toutes tes images stockées (`images`) et tous tes conteneurs, même éteints (`ps -a`).
        
- **`docker system prune -a`**
    
    - **À quoi ça sert :** Le bouton nucléaire. 
        
    - **Le secret pro :** Cette commande efface **absolument tout** ce qui ne tourne pas actuellement (Les conteneurs éteints, les images inutilisées, les caches de construction). À faire une fois par mois pour récupérer 20 Go d'espace libre d'un coup.

- **`FROM`**
    
    - **Utilité :** Définit le point de départ de ton conteneur. Tu ne pars jamais de zéro, tu prends toujours un système d'exploitation de base existant. **C'est toujours la première ligne d'un Dockerfile.**
        
    - _Exemple :_ `FROM ubuntu:22.04` ou `FROM python:3.12`
        
- **`WORKDIR`**
    
    - **Utilité :** Crée un dossier de travail à l'intérieur du conteneur et s'y déplace (c'est l'équivalent de faire `mkdir` suivi de `cd`). Tout ce qui suit se passera dans ce dossier.
        
    - _Exemple :_ `WORKDIR /app`
        
- **`COPY`**
    
    - **Utilité :** Copie des fichiers ou des dossiers depuis ton vrai PC (Windows) vers l'intérieur du conteneur.
        
    - _Exemple :_ `COPY traqueur.py .` _(Copie le fichier dans le dossier de travail actuel)_
        
- **`RUN`**
    
    - **Utilité :** Exécute une commande **pendant la fabrication** du conteneur (la phase de "cuisson"). C'est ici qu'on installe des logiciels, des mises à jour ou des bibliothèques.
        
    - _Exemple :_ `RUN apt-get update && apt-get install -y curl`
        
- **`CMD`**
    
    - **Utilité :** Définit l'action par défaut qui s'exécutera **uniquement quand le conteneur s'allume** (la phase "Play"). Il ne peut y avoir qu'un seul `CMD` par Dockerfile.
        
    - _Exemple :_ `CMD ["python", "traqueur.py"]`
        

###  Les Commandes Avancées (Pour sécuriser et optimiser)

- **`ENV`**
    
    - **Utilité :** Déclare des "Variables d'environnement". C'est super utile pour stocker des mots de passe ou des paramètres modifiables sans avoir à les coder en dur dans tes scripts.
        
    - _Exemple :_ `ENV PORT=8080` ou `ENV DATABASE_PASSWORD=secret`
        
- **`EXPOSE`**
    
    - **Utilité :** C'est une instruction de documentation. Ça ne fait rien techniquement, mais ça prévient la personne qui lit le Dockerfile : _"Attention, ce conteneur a besoin d'ouvrir ce port réseau pour fonctionner correctement."_
        
    - _Exemple :_ `EXPOSE 3000` _(Très utilisé pour des serveurs web ou Grafana)_
        
- **`USER`**
    
    - **Utilité :** Par défaut, un conteneur tourne avec les droits d'administrateur suprême (`root`). En cybersécurité, c'est dangereux. `USER` permet de dire au conteneur de tourner avec un compte utilisateur limité.
        
    - _Exemple :_ `USER bot_runner`
        
- **`VOLUME`**
    
    - **Utilité :** Crée un point de sauvegarde. Quand un conteneur est supprimé, tout ce qui est à l'intérieur disparaît. `VOLUME` permet de connecter un dossier du conteneur à un dossier de ton vrai PC pour que les données survivent (indispensable pour les bases de données ou les serveurs Minecraft).
        
    - _Exemple :_ `VOLUME /var/lib/mysql`
        
- **`ADD`**
    
    - **Utilité :** C'est le grand frère de `COPY`. Il copie des fichiers, mais il a deux super-pouvoirs : il peut télécharger un fichier directement depuis une adresse internet (URL), et il décompresse automatiquement les fichiers `.tar` ou `.zip` en les copiant.
        
    - _Exemple :_ `ADD https://site.com/fichier.zip /app/`
        
- **`ENTRYPOINT`**
    
    - **Utilité :** C'est le cousin de `CMD`. Il sert aussi à lancer le programme au démarrage, mais de manière beaucoup plus stricte. Si tu utilises `ENTRYPOINT`, l'utilisateur ne pourra pas facilement écraser la commande de démarrage en lançant le conteneur.
        
    - _Exemple :_ `ENTRYPOINT ["nginx", "-g", "daemon off;"]`

page suivante [[02_docker_compose]]

page pour illustré [[03_Lab_Docker]]
