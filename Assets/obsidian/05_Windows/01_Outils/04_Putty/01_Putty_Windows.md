> Objectif : Se connecter à des équipements réseau (Linux, Cisco, switchs, routeurs, VM) via SSH, Telnet ou Console série.

---

# Sommaire

- Présentation
- Installation
- Les protocoles
- Interface de PuTTY
- Connexion SSH
- Authentification par clé
- Connexion Telnet
- Connexion Série (Console Cisco)
- Sauvegarde des sessions
- Transfert de fichiers (PSCP / PSFTP)
- Génération de clés (PuTTYgen)
- Bonnes pratiques
- Dépannage

---

# 1. Présentation

PuTTY est un client permettant de se connecter à des machines distantes.

Il supporte :

- SSH 
- Telnet
- Serial (Console)
- Rlogin (ancien)
- Raw TCP

Il est principalement utilisé sous Windows.

---

# 2. Installation

Télécharger PuTTY :

https://www.putty.org/

Ou via Winget :

```powershell
winget install PuTTY.PuTTY
```

---

# 3. Les protocoles

## SSH (Secure Shell)

Port :

```
22
```

Utilisé pour :

- Linux
- Cisco IOS
- VMware
- Hyper-V
- Serveurs

Connexion chiffrée.

---

## Telnet

Port :

```
23
```

Connexion NON chiffrée.

À éviter en production.

---

## Console série

Utilisée lorsque :

- pas d'adresse IP
- configuration initiale d'un switch
- configuration initiale d'un routeur

Connexion via câble console USB.

---

# 4. Interface de PuTTY

Les champs importants :

```
Host Name
```

Adresse IP ou nom DNS.

Exemple :

```
192.168.1.10
```

ou

```
srv-linux.local
```

---

Port :

SSH

```
22
```

Telnet

```
23
```

---

Connection Type

- SSH
- Telnet
- Serial

---

# 5. Première connexion SSH

Exemple :

Host :

```
192.168.1.100
```

Port

```
22
```

Type

```
SSH
```

Cliquer sur :

```
Open
```

---

Première connexion :

PuTTY affiche :

```
The server's host key is not cached.
```

Cliquer sur

```
Accept
```

---

Connexion :

```
login as:
```

Entrer :

```
root
```

ou

```
admin
```

Puis le mot de passe.

---

# 6. Exemple Linux

Connexion :

```
ssh utilisateur@192.168.1.100
```

Une fois connecté :

Afficher le dossier courant :

```bash
pwd
```

Lister les fichiers :

```bash
ls
```

Afficher les interfaces :

```bash
ip a
```

Afficher les processus :

```bash
ps
```

---

# 7. Connexion à un Switch Cisco

Adresse :

```
10.0.0.1
```

SSH

```
22
```

Utilisateur :

```
admin
```

Mot de passe :

```
*******
```

Une fois connecté :

```cisco
enable
```

Puis

```cisco
show running-config
```

Afficher les interfaces :

```cisco
show ip interface brief
```

---

# 8. Connexion Console Série

Choisir

```
Serial
```

Port :

```
COM3
```

ou

```
COM5
```

Selon Windows.

Paramètres Cisco :

```
Speed : 9600

Data bits : 8

Stop bits : 1

Parity : None

Flow control : None
```

---

# 9. Sauvegarder une session

Dans

```
Saved Sessions
```

Écrire :

```
ServeurLinux
```

Cliquer

```
Save
```

La prochaine fois :

- sélectionner la session
- cliquer sur **Load**
- puis **Open**

---

# 10. Copier / Coller

Dans PuTTY :

Copier :

Sélection avec la souris.

 Copie automatique.

Coller :

Clic droit.

---

# 11. Authentification par clé SSH

Plus sécurisé qu'un mot de passe.

Création :

```
PuTTYgen
```

Créer :

```
RSA 4096 bits
```

ou

```
Ed25519
```

Enregistrer :

```
private.ppk
```

Copie de la clé publique :

```
ssh-rsa AAAAB3...
```

À placer dans :

```bash
~/.ssh/authorized_keys
```

Dans PuTTY :

```
Connection

SSH

Auth

Credentials
```

Choisir

```
private.ppk
```

---

# 12. PSCP

Copie de fichiers.

Exemple :

```powershell
pscp fichier.txt utilisateur@192.168.1.100:/home/user/
```

Téléchargement :

```powershell
pscp utilisateur@192.168.1.100:/home/user/test.txt .
```

---

# 13. PSFTP

Connexion :

```powershell
psftp utilisateur@192.168.1.100
```

Commandes :

```bash
ls
```

```bash
cd
```

```bash
put fichier.txt
```

```bash
get fichier.txt
```

---

# 14. Bonnes pratiques

 Utiliser SSH

 Désactiver Telnet

 Sauvegarder les sessions

 Utiliser des clés SSH

 Vérifier l'empreinte du serveur

 Changer les mots de passe par défaut

---

# 15. Dépannage

## Connection refused

Cause :

Le service SSH est arrêté.

Solution :

```bash
sudo systemctl start ssh
```

---

## Network error

Cause :

Pas de réseau.

Vérifier :

```bash
ping 192.168.1.100
```

---

## Access denied

Cause :

Mauvais identifiant.

Vérifier :

- utilisateur
- mot de passe
- clé SSH

---

## Timeout

Causes :

- Firewall
- Mauvaise IP
- Port fermé

Tester :

```bash
telnet IP 22
```

ou

```bash
Test-NetConnection IP -Port 22
```

---

# 16. Raccourcis utiles

Nouvelle fenêtre :

```
Ctrl + N
```

Fermer :

```
Alt + F4
```

Copier :

Sélection souris

Coller :

Clic droit

---

# 17. Schéma de connexion

```text
           +-------------------+
           |      PuTTY        |
           +---------+---------+
                     |
          SSH (22)   |   Telnet (23)
                     |
         +-----------+-----------+
         |                       |
     Linux Server          Cisco Switch
         |                       |
         +-----------+-----------+
                     |
              Console Série
                 (COM3)
```

---

# 18. À retenir pour les examens

| Élément | Valeur |
|----------|--------|
| SSH | Port 22 |
| Telnet | Port 23 |
| Console Cisco | 9600 bauds |
| Protocole sécurisé | SSH |
| Copier | Sélection souris |
| Coller | Clic droit |
| Clé privée | `.ppk` |
| Générateur de clés | PuTTYgen |
| Copie de fichiers | PSCP |
| SFTP | PSFTP |

---

# 19. Résumé

✔ PuTTY est un client de connexion à distance sous Windows.

✔ SSH (port 22) est le protocole à privilégier pour une connexion sécurisée.

✔ Telnet (port 23) est obsolète et non chiffré.

✔ La connexion série est indispensable pour la configuration initiale des équipements réseau.

✔ Les sessions enregistrées permettent de gagner du temps.

✔ Les clés SSH offrent une authentification plus sécurisée que les mots de passe.

✔ Les outils PSCP et PSFTP permettent de transférer des fichiers de manière sécurisée.