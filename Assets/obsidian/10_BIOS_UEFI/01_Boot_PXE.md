Le **PXE Boot** (_Preboot eXecution Environment_) est une technologie qui permet à un ordinateur de **démarrer via le réseau**, sans avoir besoin d'un système d'exploitation installé sur son disque dur ou d'une clé USB bootable.

## Comment fonctionne le PXE Boot :

Voici les étapes principales :

```text
┌─────────────┐
│ PC démarre  │
└──────┬──────┘
       │
       ▼
┌─────────────────────────┐
│ La carte réseau envoie  │
│ une requête DHCP        │
└──────┬──────────────────┘
       │
       ▼
┌─────────────────────────┐
│ Le serveur DHCP répond  │
│ avec une adresse IP et  │
│ l'adresse du serveur PXE│
└──────┬──────────────────┘
       │
       ▼
┌─────────────────────────┐
│ Le PC télécharge le     │
│ programme de démarrage  │
│ via TFTP                │
└──────┬──────────────────┘
       │
       ▼
┌─────────────────────────┐
│ Le programme charge un  │
│ noyau Linux, WinPE ou   │
│ un installateur         │
└──────┬──────────────────┘
       │
       ▼
┌─────────────────────────┐
│ Le système démarre      │
└─────────────────────────┘
```

---

## Les composants nécessaires

### 1. Le client PXE

C'est le PC qui démarre.

- Le BIOS/UEFI doit prendre en charge le PXE.
    
- La carte réseau possède un firmware PXE.
    

---

### 2. Le serveur DHCP

Son rôle est de fournir :

- une adresse IP au client ;
    
- l'adresse du serveur de boot ;
    
- le nom du fichier de démarrage.
    

Par exemple :

```
IP client : 192.168.1.50
Serveur PXE : 192.168.1.10
Fichier : bootx64.efi
```

---

### 3. Le serveur TFTP

Le protocole **TFTP** (_Trivial File Transfer Protocol_) sert à transférer les premiers fichiers de démarrage.

Il fournit par exemple :

- `pxelinux.0`
    
- `bootx64.efi`
    
- `grubx64.efi`
    

---

### 4. Le serveur d'installation

Une fois le chargeur lancé, celui-ci peut télécharger :

- une image Linux (Ubuntu, Debian, etc.) ;
    
- WinPE pour installer Windows ;
    
- Clonezilla ;
    
- des outils de dépannage ;
    
- une image ISO montée via HTTP ou NFS.
    

---

## Les protocoles utilisés

|Protocole|Rôle|
|---|---|
|DHCP|Attribue une adresse IP et indique où trouver le boot|
|TFTP|Télécharge le chargeur de démarrage|
|HTTP|Télécharge le système ou l'image d'installation (souvent plus rapide que TFTP)|
|NFS|Partage des fichiers Linux|
|SMB|Partage Windows|

---

## Exemple concret

Imaginons une entreprise qui doit installer Windows sur 200 PC.

Au lieu de :

- préparer 200 clés USB ;
    
- démarrer chaque machine manuellement ;
    

on configure un serveur PXE.

Ensuite :

1. Le PC démarre.
    
2. Il demande une adresse IP.
    
3. Il reçoit automatiquement les informations du serveur PXE.
    
4. Il télécharge WinPE.
    
5. WinPE lance automatiquement l'installation de Windows.
    

Aucune clé USB n'est nécessaire.

---

## Avantages

- Installation automatisée de nombreux postes.
    
- Plus besoin de support USB ou DVD.
    
- Déploiement rapide.
    
- Centralisation des images système.
    
- Idéal pour les entreprises et les laboratoires.
    

---

## Inconvénients

- Nécessite une infrastructure réseau (DHCP, TFTP, serveur PXE).
    
- Configuration initiale plus complexe.
    
- Dépendance au réseau.
    
- TFTP est lent pour les gros fichiers (on utilise souvent HTTP ensuite).
    

---

## Exemple avec Linux

Un serveur peut contenir :

```
/tftpboot/
│
├── pxelinux.0
├── ldlinux.c32
├── menu.c32
├── pxelinux.cfg/
│      default
│
├── ubuntu/
│      vmlinuz
│      initrd.img
│
└── windows/
       bootx64.efi
```

Lors du démarrage, un menu peut apparaître :

```
=========================
      PXE BOOT MENU
=========================

1. Installer Ubuntu
2. Installer Debian
3. Installer Windows 11
4. Clonezilla
5. Outil de diagnostic
6. MemTest86+
```

L'utilisateur choisit une option, puis le système correspondant est chargé depuis le réseau.

---

## Cas d'usage courants

- Déploiement de Windows avec Microsoft Deployment Toolkit (MDT) ou Windows Deployment Services (WDS).
    
- Installation automatisée de distributions Linux.
    
- Clonage de postes avec Clonezilla.
    
- Démarrage d'outils de diagnostic ou de récupération.
    
- Environnements de calcul où les machines démarrent sur une image réseau.
    

### En résumé

Le **PXE Boot** permet à un ordinateur de **démarrer un système d'exploitation ou un programme directement depuis le réseau**. Le processus repose généralement sur :

1. **DHCP** pour obtenir une adresse IP et les informations de démarrage.
    
2. **TFTP** pour télécharger le premier chargeur de démarrage.
    
3. **HTTP, NFS ou SMB** pour récupérer le système d'exploitation ou les fichiers d'installation.
    

C'est une technologie largement utilisée pour le déploiement automatisé de systèmes, la maintenance et l'administration de parcs informatiques.