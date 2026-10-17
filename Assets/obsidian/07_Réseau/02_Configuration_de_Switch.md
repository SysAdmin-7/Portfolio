# Configurer un switch Cisco avec PuTTY

> **Objectif :** Configurer un switch Cisco pour la première fois en utilisant **PuTTY** via une connexion console ou SSH.

---

# Prérequis

- Putty (voir [[01_Putty_Windows]] si problème)
- Un switch Cisco
- Un PC sous Windows
- PuTTY installé
- Un câble console (USB ↔ RJ45 ou USB ↔ USB-C selon le matériel)

---

# Méthode 1 : Configuration via le câble console (première configuration)

## Étape 1 : Brancher le câble

Connecter :

```
PC
 │
 │ USB
 │
 ▼
Câble Console
 │
 ▼
Port Console du Switch
```

---

## Étape 2 : Trouver le port COM

Sous Windows :

1. **Gestionnaire de périphériques**
2. **Ports (COM et LPT)**

Exemple :

```
USB Serial Port (COM3)
```

Le port est donc :

```
COM3
```

---

## Étape 3 : Ouvrir PuTTY

Sélectionner :

```
Connection type :
○ SSH
○ Telnet
● Serial
```

Remplir :

```
Serial line :
COM3

Speed :
9600
```

---

## Paramètres série Cisco

Dans :

```
Connection
    └── Serial
```

Configurer :

| Paramètre | Valeur |
|-----------|--------|
| Speed | 9600 |
| Data bits | 8 |
| Stop bits | 1 |
| Parity | None |
| Flow Control | None |

Puis cliquer sur :

```
Open
```

---

# Étape 4 : Accéder au switch

Appuyer sur **Entrée**.

Vous obtenez :

```text
Switch>
```

---

# Étape 5 : Passer en mode privilégié

```cisco
enable
```

Résultat :

```text
Switch#
```

---

# Étape 6 : Passer en mode configuration

```cisco
configure terminal
```

Résultat :

```text
Switch(config)#
```

---

# Configuration de base

## Changer le nom

```cisco
hostname SW-01
```

Résultat :

```text
SW-01(config)#
```

---

## Désactiver la recherche DNS

Évite les longues attentes lorsqu'une commande est mal saisie.

```cisco
no ip domain-lookup
```

---

## Définir le mot de passe du mode privilégié

```cisco
enable secret MonMotDePasse
```

---

## Configurer un utilisateur administrateur

```cisco
username admin privilege 15 secret MonPassword123
```

---

## Sécuriser l'accès console

```cisco
line console 0
password Cisco123
login
exit
```

---

## Sécuriser l'accès SSH

Définir le nom de domaine :

```cisco
ip domain-name reseau.local
```

Créer une clé RSA :

```cisco
crypto key generate rsa
```

Choisir :

```
2048
```

Configurer les lignes VTY :

```cisco
line vty 0 15
login local
transport input ssh
exit
```

Activer SSH version 2 :

```cisco
ip ssh version 2
```

---

# Configurer une adresse IP

Accéder au VLAN de gestion :

```cisco
interface vlan 1
```

Attribuer une adresse IP :

```cisco
ip address 192.168.1.10 255.255.255.0
```

Activer l'interface :

```cisco
no shutdown
```

Quitter :

```cisco
exit
```

---

# Configurer la passerelle

```cisco
ip default-gateway 192.168.1.1
```

---

# Sauvegarder la configuration

```cisco
copy running-config startup-config
```

Ou plus simplement :

```cisco
write memory
```

---

# Vérifier la configuration

Adresse IP :

```cisco
show ip interface brief
```

Configuration complète :

```cisco
show running-config
```

Version IOS :

```cisco
show version
```

VLAN :

```cisco
show vlan brief
```

SSH :

```cisco
show ip ssh
```

---

# Connexion SSH avec PuTTY

Une fois l'adresse IP configurée :

Dans PuTTY :

```
Host Name :
192.168.1.10

Port :
22

Connection Type :
SSH
```

Cliquer sur :

```
Open
```

Saisir :

```text
login as:
admin
```

Puis le mot de passe.

---

# Exemple complet

```cisco
enable

configure terminal

hostname SW-01

no ip domain-lookup

enable secret Cisco123

username admin privilege 15 secret Admin123

ip domain-name reseau.local

crypto key generate rsa

2048

ip ssh version 2

line vty 0 15
login local
transport input ssh
exit

interface vlan 1
ip address 192.168.1.10 255.255.255.0
no shutdown
exit

ip default-gateway 192.168.1.1

copy running-config startup-config
```

---

# Schéma

```text
             Console (USB)
      +------------------------+
      |                        |
+------------+          +---------------+
|    PC      |──────────| Switch Cisco  |
|   PuTTY    |          | Console Port  |
+------------+          +---------------+
                               │
                               │
                     Configuration initiale
                               │
                               ▼
                     Adresse IP configurée
                               │
                        SSH (Port 22)
                               │
                               ▼
                     Administration à distance
```

---

# À retenir

- **Connexion console** : utilisée pour la première configuration.
- **Mode privilégié** : `enable`
- **Mode configuration** : `configure terminal ou conf t`
- **Adresse IP de gestion** : `interface vlan 1`
- **Sauvegarde** : `copy running-config startup-config`
- **SSH** : méthode recommandée pour administrer un switch à distance.