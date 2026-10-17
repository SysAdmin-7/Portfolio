# WinSCP — Fiche complète de révision (Administration système & réseau)

# 1. Présentation de WinSCP

WinSCP est un logiciel **client de transfert de fichiers sécurisé** utilisé principalement par les administrateurs systèmes et réseaux.

Il permet de transférer des fichiers entre :

- Un poste Windows
    
- Un serveur distant (Linux, Windows Server, NAS, etc.)
    

via des protocoles sécurisés.

---

# 2. À quoi sert WinSCP ?

Utilisations courantes :

- Envoyer des fichiers vers un serveur
    
- Récupérer des fichiers depuis un serveur
    
- Modifier des fichiers de configuration à distance
    
- Déployer des applications
    
- Sauvegarder des données
    
- Administrer des serveurs Linux depuis Windows
    

Exemples en entreprise :

```text
Technicien Windows
        ↓
WinSCP
        ↓
Serveur Linux
        ↓
Fichiers de configuration
```

---

# 3. Fonctionnement client / serveur

WinSCP fonctionne selon un modèle :

```text
Client                          Serveur

Windows                         Linux
WinSCP  ───────────────────►    SSH Server

        Transfert fichiers
```

Le poste utilisateur est le **client**.

Le serveur doit avoir un service compatible :

- SSH
    
- SFTP
    
- FTP
    
- WebDAV
    

---

# 4. Protocoles supportés

## SFTP (recommandé)

**SSH File Transfer Protocol**

Port :

```text
22/TCP
```

Avantages :

 Chiffré  
 Authentification sécurisée  
 Utilisé en entreprise

Exemple :

```text
WinSCP → Serveur Linux via SSH
```

---

# SCP

**Secure Copy Protocol**

Port :

```text
22/TCP
```

Permet de copier des fichiers via SSH.

Exemple :

```bash
scp fichier.txt user@serveur:/home/user/
```

---

# FTP

**File Transfer Protocol**

Ports :

```text
21/TCP → Commandes
20/TCP → Données
```

Problème :

 Non chiffré

Les identifiants peuvent être interceptés.

---

# FTPS

FTP sécurisé avec TLS.

Avantages :

 Chiffrement  
 Compatible avec certains environnements FTP

---

# WebDAV

Permet de gérer des fichiers via HTTP/HTTPS.

---

# 5. Installation de WinSCP

Étapes :

1. Télécharger WinSCP depuis le site officiel
    
2. Installer le logiciel
    
3. Choisir l’interface :
    

Deux modes :

## Interface Commander

Ressemble à un gestionnaire de fichiers :

```
Gauche              Droite

PC local            Serveur distant
```

---

## Interface Explorer

Ressemble à Windows Explorer.

---

# 6. Connexion à un serveur

Fenêtre de connexion :

Informations nécessaires :

|Champ|Description|
|---|---|
|Protocole|SFTP, SCP, FTP|
|Nom d’hôte|Adresse IP ou DNS|
|Port|Port du service|
|Utilisateur|Compte serveur|
|Mot de passe|Authentification|

Exemple :

```
Protocole : SFTP
Hôte : 192.168.1.50
Port : 22
Utilisateur : admin
```

---

# 7. Authentification

## Mot de passe

Méthode simple :

```
Utilisateur
+
Mot de passe
```

Moins sécurisé.

---

## Clé SSH (recommandé)

Principe :

```text
Clé privée
     ↓
Poste client

Clé publique
     ↓
Serveur
```

Avantages :

 Pas de mot de passe envoyé  
 Plus sécurisé  
 Utilisé en entreprise

---

# 8. Transfert de fichiers

## Envoyer un fichier

```text
PC local
    ↓
Glisser-déposer
    ↓
Serveur
```

Exemple :

```
config.txt
        ↓
/etc/application/
```

---

## Télécharger un fichier

Inverse :

```
Serveur
    ↓
PC local
```

---

# 9. Gestion des permissions Linux

Lors d’un transfert vers Linux, il faut comprendre les droits :

Exemple :

```bash
-rwxr-xr--
```

Découpage :

```
- rwx r-x r--
│ │   │   │
│ │   │   └── Autres
│ │   └────── Groupe
│ └────────── Propriétaire
└──────────── Type
```

---

## Modifier les permissions dans WinSCP

Clic droit :

```
Propriétés
→ Permissions
```

Equivalent Linux :

```bash
chmod
```

Exemple :

```bash
chmod 755 fichier.sh
```

Résultat :

```
Propriétaire : lecture écriture exécution
Groupe       : lecture exécution
Autres       : lecture exécution
```

---

# 10. Édition de fichiers à distance

WinSCP permet :

```
Clic droit
→ Modifier
```

Exemples :

- Fichiers de configuration Linux
    
- Scripts Bash
    
- Pages Web
    
- Fichiers JSON/XML
    

---

Exemple :

Modifier :

```
/etc/ssh/sshd_config
```

Puis :

```
Sauvegarder
Redémarrer service SSH
```

---

# 11. Synchronisation de dossiers

Fonction :

```
Synchroniser
```

Permet de comparer :

```
PC local
     ↔
Serveur
```

Modes :

## Local → Distant

Envoi des modifications.

---

## Distant → Local

Récupération des modifications.

---

## Bidirectionnel

Synchronisation dans les deux sens.

---

# 12. Automatisation avec WinSCP

WinSCP possède une interface en ligne de commande.

Commande :

```cmd
winscp.com
```

---

Exemple script :

```txt
open sftp://user:password@192.168.1.50/

put fichier.txt

exit
```

---

Utilisation :

- Sauvegardes automatiques
    
- Déploiements
    
- Transferts planifiés
    

---

# 13. Journalisation (logs)

Les logs permettent de voir :

- Connexions
    
- Erreurs
    
- Transferts
    
- Problèmes réseau
    

Activer :

```
Options
→ Préférences
→ Journalisation
```

---

# 14. Dépannage WinSCP

## Erreur : Connection refused

Causes :

- Serveur SSH arrêté
    
- Mauvais port
    
- Pare-feu
    

Vérifications :

Tester le port :

```powershell
Test-NetConnection IP -Port 22
```

---

# Erreur : Authentication failed

Causes :

- Mauvais utilisateur
    
- Mauvais mot de passe
    
- Clé SSH incorrecte
    

Solution :

- Vérifier le compte
    
- Vérifier les clés
    

---

# Erreur : Permission denied

Cause :

L’utilisateur n’a pas les droits.

Solutions :

Linux :

```bash
chmod
chown
```

Exemple :

```bash
sudo chown user:user fichier.txt
```

---

# Erreur : Timeout

Causes :

- Problème réseau
    
- Adresse IP incorrecte
    
- Serveur inaccessible
    

Tests :

```cmd
ping IP_du_serveur
```

Puis :

```cmd
tracert IP_du_serveur
```

---

# 15. Sécurité avec WinSCP

Bonnes pratiques :

 Utiliser SFTP plutôt que FTP  
 Utiliser des clés SSH  
 Ne pas enregistrer les mots de passe sensibles  
 Vérifier l’empreinte SSH du serveur  
 Limiter les droits utilisateurs

---

# 16. WinSCP en environnement professionnel

Exemples d’utilisation :

## Administration Linux

```
Windows Admin
      ↓
WinSCP
      ↓
Serveur Linux
```

---

## Déploiement Web

```
Développeur
      ↓
WinSCP
      ↓
Serveur Web Apache/Nginx
```

---

## Sauvegarde

```
Serveur
   ↓
WinSCP
   ↓
Stockage distant
```

---

# 17. Commandes Linux utiles avec WinSCP

Voir les fichiers :

```bash
ls
```

Changer de dossier :

```bash
cd
```

Créer un dossier :

```bash
mkdir
```

Copier :

```bash
cp
```

Déplacer :

```bash
mv
```

Supprimer :

```bash
rm
```

Permissions :

```bash
chmod
```

Propriétaire :

```bash
chown
```

---

# 18. Comparaison des protocoles

| Protocole | Sécurité | Port   | Utilisation            |
| --------- | -------- | ------ | ---------------------- |
| FTP       | Faible   | 21     | Ancien transfert       |
| FTPS      | TLS      | 21/990 | FTP sécurisé           |
| SCP       | SSH      | 22     | Copie simple           |
| SFTP      |  SSH     | 22     | Administration moderne |
| WebDAV    | Variable | 80/443 | Partage fichiers       |

---

# 19. À retenir pour une école d’ingénieur réseau

## WinSCP =

```
Client Windows
       +
SSH/SFTP
       +
Serveur distant
       =
Transfert sécurisé de fichiers
```

---

## Points essentiels :

- SFTP utilise SSH sur le port 22
    
- SCP permet la copie via SSH
    
- FTP n’est pas sécurisé
    
- Les permissions Linux sont importantes
    
- Les clés SSH sont préférées aux mots de passe
    
- WinSCP est un outil d’administration système
    

---

# Résumé rapide

|Élément|À retenir|
|---|---|
|Type|Client de transfert de fichiers|
|Principal protocole|SFTP|
|Port SFTP|22|
|Sécurité|SSH|
|Usage|Administration serveur|
|Alternative Linux|scp / sftp|
|Problèmes fréquents|Droits, SSH, réseau|
