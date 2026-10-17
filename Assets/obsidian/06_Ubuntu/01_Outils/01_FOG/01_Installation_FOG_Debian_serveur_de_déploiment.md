
> [!info]
>installation d' un serveur de déploiement FOG sous Debian

- Permission root 
```shell
su -
```
- demande le mot de passe admin/root

![[Pasted image 20260626095734.png]]

- Déplacez-vous dans le répertoire tmp :

```shell
cd /tmp
```

- Téléchargez l’archive de la dernière version stable disponible de Fog Server : 

```shell
wget https://github.com/FOGProject/fogproject/archive/stable.tar.gz
```

- Décompressez l’archive : 

```shell
tar xvf stable.tar.gz
```

- Exécutez le script d’installation de Fog : 

```shell
fogproject-stable/bin/installfog.sh
```

À partir de maintenant, il faudra répondre aux questions du setup afin de procéder aux configurations.

- Saisissez le numéro correspondant au système d’exploitation sur lequel l’installation va s’effectuer. Pour ce cours nous sommes sur Debian, il faut donc saisir “2” et appuyer sur la touche Entrée.

![[Pasted image 20260626100140.png]]

faire suite 