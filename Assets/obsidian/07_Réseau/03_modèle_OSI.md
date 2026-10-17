# 1. Présentation du modèle OSI

Le **modèle OSI (Open Systems Interconnection)** est un modèle théorique créé par l’**ISO** permettant de comprendre comment les machines communiquent sur un réseau.

Il découpe la communication réseau en **7 couches**.

Objectifs :

- Comprendre le fonctionnement d’un réseau
    
- Faciliter le dépannage
    
- Standardiser les communications
    
- Identifier où se situe un problème
    

---

# 2. Les 7 couches du modèle OSI

Représentation :

```text
7  Application
6  Présentation
5  Session
4  Transport
3  Réseau
2  Liaison de données
1  Physique
```

Mémo :

```
A
P
S
T
R
L
P
```

Phrase mnémotechnique :

**"Aline Présente Son Travail Réseau Lorsqu'elle Parle"**

---

# 3. Couche 1 — Physique (Physical)

## Rôle

La couche physique transporte les **bits** (0 et 1) sous forme de signaux :

- Électriques
    
- Lumineux
    
- Radio
    

Elle concerne le matériel physique.

---

## Éléments concernés

- Câbles RJ45
    
- Fibre optique
    
- Wi-Fi
    
- Connecteurs
    
- Cartes réseau
    
- Répéteurs
    
- Hubs
    

---

## Unité de données

```
Bit
```

---

## Problèmes typiques N1

Symptômes :

- Aucun voyant réseau
    
- Câble débranché
    
- Carte réseau inactive
    
- Mauvais câble
    

Solutions :

- Vérifier branchements
    
- Changer câble
    
- Tester un autre port
    

---

# 4. Couche 2 — Liaison de données (Data Link)

## Rôle

Permet la communication entre deux machines sur un même réseau local.

Elle utilise les **adresses MAC**.

---

## Éléments concernés

- Switch
    
- Carte réseau
    
- VLAN
    
- Adresse MAC
    
- Trames Ethernet
    

---

## Unité de données

```
Trame (Frame)
```

---

## Adresse utilisée

Adresse MAC :

Exemple :

```
00:1A:2B:3C:4D:5E
```

---

## Protocoles

- Ethernet (802.3)
    
- Wi-Fi (802.11)
    
- ARP
    
- STP
    

---

## Fonction importante : le switch

Un switch apprend les adresses MAC :

```
MAC A → Port 1
MAC B → Port 5
```

Puis il envoie les trames uniquement au bon port.

---

## Problèmes typiques

- Mauvais VLAN
    
- Boucle réseau
    
- Carte réseau défectueuse
    

Commandes utiles :

```cmd
ipconfig /all
```

Voir la MAC :

```cmd
getmac
```

---

# 5. Couche 3 — Réseau (Network)

## Rôle

Permet la communication entre plusieurs réseaux.

Elle utilise les adresses IP.

---

## Éléments concernés

- Routeur
    
- Switch couche 3
    
- Pare-feu
    

---

## Unité de données

```
Paquet (Packet)
```

---

## Adresse utilisée

Adresse IP :

Exemple IPv4 :

```
192.168.1.25
```

IPv6 :

```
2001:db8::1
```

---

## Protocoles

### IP

Acheminement des paquets :

```
Source → Destination
```

---

### ICMP

Utilisé pour les tests réseau :

Commande :

```cmd
ping
```

---

### ARP

Associe :

```
Adresse IP
      ↓
Adresse MAC
```

Exemple :

```
192.168.1.20
        =
00:1A:2B:3C:4D
```

---

## Équipement principal

Le routeur :

```
Réseau A
    |
 Routeur
    |
Réseau B
```

---

## Problèmes typiques

- Mauvaise adresse IP
    
- Mauvaise passerelle
    
- Problème de routage
    

Commandes :

Voir IP :

```cmd
ipconfig
```

Tester passerelle :

```cmd
ping 192.168.1.1
```

Voir route :

```cmd
route print
```

---

# 6. Couche 4 — Transport (Transport)

## Rôle

Assure la communication entre applications.

Elle gère :

- Fiabilité
    
- Contrôle d’erreurs
    
- Segmentation
    
- Ports
    

---

## Unité de données

```
Segment
```

---

# TCP vs UDP

## TCP

Protocole fiable.

Fonctionnement :

```
Connexion
    ↓
Transmission
    ↓
Confirmation
```

Utilise un système d’accusé de réception.

Exemples :

- HTTP/HTTPS
    
- FTP
    
- SSH
    
- SMTP
    

---

## UDP

Protocole rapide mais sans garantie.

Exemples :

- Streaming
    
- Jeux vidéo
    
- VoIP
    
- DNS
    

---

# Les ports réseau

Un port identifie une application.

Exemples :

|Service|Port|Protocole|
|---|---|---|
|HTTP|80|TCP|
|HTTPS|443|TCP|
|SSH|22|TCP|
|FTP|21|TCP|
|DNS|53|UDP/TCP|
|DHCP|67/68|UDP|
|RDP|3389|TCP|

---

## Problèmes typiques

- Port bloqué
    
- Pare-feu
    
- Service arrêté
    

Commande :

```cmd
netstat -ano
```

---

# 7. Couche 5 — Session (Session)

## Rôle

Gère l’ouverture, le maintien et la fermeture des sessions.

Elle contrôle :

- Connexion
    
- Synchronisation
    
- Reprise après interruption
    

---

## Exemples

- Session Windows
    
- Connexion distante
    
- Appels vidéo
    

---

## Problèmes

- Session expirée
    
- Déconnexion utilisateur
    
- Authentification échouée
    

---

# 8. Couche 6 — Présentation (Presentation)

## Rôle

Convertit les données pour qu’elles soient comprises par les applications.

Elle gère :

- Encodage
    
- Chiffrement
    
- Compression
    

---

## Exemples

### Chiffrement

HTTPS :

```
Données
 ↓
Chiffrement TLS
 ↓
Transmission sécurisée
```

---

### Formats

- JPEG
    
- PNG
    
- MP3
    
- UTF-8
    

---

## Problèmes

- Certificat SSL expiré
    
- Format incompatible
    

---

# 9. Couche 7 — Application (Application)

## Rôle

Couche proche de l’utilisateur.

Elle fournit les services réseau aux applications.

---

## Protocoles connus

|Service|Protocole|
|---|---|
|Web|HTTP / HTTPS|
|Mail|SMTP / IMAP|
|Fichiers|FTP / SMB|
|DNS|DNS|
|Administration|SSH / RDP|

---

## Exemples

Navigateur :

```
Chrome
 ↓
HTTPS
 ↓
Serveur Web
```

---

## Problèmes typiques

- Site inaccessible
    
- Application réseau HS
    
- Mauvaise configuration
    

---

# 10. Encapsulation des données

Lorsqu’une donnée voyage sur le réseau :

```
Application
     ↓
Données
     ↓
Transport
     ↓
Segment
     ↓
Réseau
     ↓
Paquet
     ↓
Liaison
     ↓
Trame
     ↓
Physique
     ↓
Bits
```

À la réception :

```
Bits
 ↓
Trame
 ↓
Paquet
 ↓
Segment
 ↓
Données
```

---

# 11. Modèle OSI et dépannage N1

Méthode de diagnostic :

```
Couche 1
↓
Couche 2
↓
Couche 3
↓
Couche 4
↓
Couche 7
```

Toujours commencer par le plus bas niveau.

---

## Exemple : "Je n'ai pas Internet"

### Couche 1

Vérifier :

- Câble
    
- Wi-Fi
    
- Voyants
    

---

### Couche 2

Vérifier :

- Carte réseau
    
- VLAN
    
- MAC
    

---

### Couche 3

Tester :

```cmd
ipconfig
```

Puis :

```cmd
ping passerelle
```

---

### Couche 4

Vérifier :

- Pare-feu
    
- Ports
    

---

### Couche 7

Tester :

- Navigateur
    
- DNS
    
- Application
    

---

# 12. Modèle OSI vs TCP/IP

Le modèle TCP/IP est celui réellement utilisé sur Internet.

Correspondance :

```
OSI                 TCP/IP

7 Application  ┐
6 Présentation │ Application
5 Session      ┘

4 Transport       Transport

3 Réseau          Internet

2 Liaison     ┐
1 Physique    ┘ Accès réseau
```

---

# 13. Adresses selon les couches

|Couche|Adresse|
|---|---|
|Couche 2|MAC|
|Couche 3|IP|
|Couche 4|Port|
|Couche 7|Nom/service|

Exemple :

```
MAC
 ↓
IP
 ↓
Port
 ↓
Application
```

---

# 14. À retenir pour une école d’ingénieur réseau

## Les couches essentielles :

|Couche|À retenir|
|---|---|
|7|Applications réseau|
|6|Chiffrement / format|
|5|Sessions|
|4|TCP, UDP, ports|
|3|IP, routage|
|2|MAC, switch, VLAN|
|1|Câbles, signaux|

---

## Diagnostic réseau :

```
Physique
   ↓
Liaison
   ↓
Réseau
   ↓
Transport
   ↓
Application
```

---

## Commandes associées

```cmd
ipconfig
ping
tracert
nslookup
netstat
arp -a
route print
getmac
```

---

# Résumé final

Le modèle OSI permet de localiser un problème réseau :

- **Couche 1 :** le matériel fonctionne-t-il ?
    
- **Couche 2 :** le réseau local communique-t-il ?
    
- **Couche 3 :** les machines se routent-elles ?
    
- **Couche 4 :** les ports/services répondent-ils ?
    
- **Couche 7 :** l’application fonctionne-t-elle ?