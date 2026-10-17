- créations d'un utilisateur :

```bash
sudo adduser nom_utilisateur #adduser veut dire ajoute utilisateur
```

ou

```bash
sudo useradd -m nom_utilisateur
sudo passwd nom_utilisateur
```

### Supprimer un utilisateur

Supprimer uniquement le compte :

```bash
sudo userdel nom_utilisateur
```

Supprimer le compte et son répertoire personnel :

```bash
sudo userdel -r nom_utilisateur
```

### Modifier un utilisateur

Changer le nom d'utilisateur :

```bash
sudo usermod -l nouveau_nom ancien_nom
```

Changer le répertoire personnel :

```bash
sudo usermod -d /home/nouveau_repertoire -m nom_utilisateur
```

Changer le shell par défaut :

```bash
sudo usermod -s /bin/bash nom_utilisateur
```

Verrouiller un compte :

```bash
sudo usermod -L nom_utilisateur
```

Déverrouiller un compte :

```bash
sudo usermod -U nom_utilisateur
```

### Changer le mot de passe

Pour un utilisateur :

```bash
sudo passwd nom_utilisateur
```

Pour votre propre compte :

```bash
passwd
```

### Afficher les informations d'un utilisateur

```bash
id nom_utilisateur
```

```bash
finger nom_utilisateur
```

(si le paquet est installé)

### Lister les utilisateurs

Afficher tous les utilisateurs :

```bash
cat /etc/passwd
```

Afficher uniquement les noms :

```bash
cut -d: -f1 /etc/passwd
```

Voir l'utilisateur courant :

```bash
whoami
```

### Gérer les groupes

Créer un groupe :

```bash
sudo groupadd nom_groupe
```

Supprimer un groupe :

```bash
sudo groupdel nom_groupe
```

Ajouter un utilisateur à un groupe :

```bash
sudo usermod -aG nom_groupe nom_utilisateur
```

Retirer un utilisateur d'un groupe :

```bash
sudo gpasswd -d nom_utilisateur nom_groupe
```

Afficher les groupes d'un utilisateur :

```bash
groups nom_utilisateur
```

### Donner les droits administrateur (sudo)

Ajouter au groupe `sudo` :

```bash
sudo usermod -aG sudo nom_utilisateur
```

Vérifier les groupes :

```bash
groups nom_utilisateur
```

### Utilisateurs connectés

Afficher les utilisateurs connectés :

```bash
who
```

Informations détaillées :

```bash
w
```

Dernières connexions :

```bash
last
```

### Informations système utiles

Afficher l'UID/GID :

```bash
id
```

Afficher votre UID :

```bash
echo $UID
```

