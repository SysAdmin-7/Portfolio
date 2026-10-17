#  Nmap : Le Guide des Commandes Indispensables

**Nmap** (*Network Mapper*) est l'outil de référence pour la découverte de réseau, le balayage de ports et l'audit de sécurité.

---

##  1. Synthèse de la Syntaxe


nmap [Type de Scan] [Options] [Cible]


> [!NOTE] Cibles acceptées
> 
> - IP unique : `192.168.1.1`
>     
> - Nom de domaine : `scanme.nmap.org`
>     
> - Plage IP / CIDR : `192.168.1.1-50` ou `192.168.1.0/24`
>     
> - Fichier de cibles : `-iL liste_cibles.txt`
>     

##  2. Découverte d'Hôtes (Host Discovery)

Identifie quelles machines sont en ligne sur le réseau sans forcément scanner tous leurs ports.

| **Commande**              | **Description / Cas d'usage**                                                                        |
| ------------------------- | ---------------------------------------------------------------------------------------------------- |
| `nmap -sn 192.168.1.0/24` | **Ping Sweep** : Découvre uniquement les machines actives (pas de scan de ports).                    |
| `nmap -PR 192.168.1.1`    | **Scan ARP** : Très rapide et précis sur un réseau local (LAN).                                      |
| `nmap -Pn 192.168.1.1`    | **Ignorer le Ping** : Scanne la cible même si elle ne répond pas au Ping (utile face à un firewall). |

## 🔌 3. Types de Scans de Ports

Nmap analyse les ports pour déterminer leur état : `Open` (Ouvert), `Closed` (Fermé), ou `Filtered` (Bloqué par un pare-feu).

### Scans TCP & UDP principaux

- **`nmap -sS <cible>`** _(Nécessite sudo)_ : **SYN Stealth Scan** (Scan semi-ouvert). Le scan par défaut le plus rapide et discret en TCP.
    
- **`nmap -sT <cible>`** : **TCP Connect Scan**. Effectue la connexion complète 3-way handshake. Utilisé si vous n'avez pas les droits root.
    
- **`nmap -sU <cible>`** _(Nécessite sudo)_ : **UDP Scan**. Essentiel pour trouver des services comme DNS (53), DHCP (67/68), SNMP (161). _Plus lent que TCP._
    

### Sélection des ports à scanner

- **`nmap -p 80,443 <cible>`** : Scanne uniquement les ports spécifiques (ex: HTTP et HTTPS).
    
- **`nmap -p 1-1024 <cible>`** : Scanne une plage spécifique de ports.
    
- **`nmap -p- <cible>`** : **Scanne la totalité des 65 355 ports TCP**.
    
- **`nmap -F <cible>`** : **Fast Scan** (scanne les 100 ports les plus courants au lieu des 1000 habituels).
    

##  4. Détection de Services et Systèmes d'Exploitation

Détaille ce qui tourne réellement derrière un port ouvert.

- **`nmap -sV <cible>`** : **Détection de version des services** (ex: identifie la version exacte d'Apache, OpenSSH, etc.).
    
- **`nmap -O <cible>`** _(Nécessite sudo)_ : **Détection du système d'exploitation** (OS fingerprinting).
    
- **`nmap -A <cible>`** : **Scan agressif** (Combine `-sV`, `-O`, le traceroute et l'exécution de scripts de base). _À utiliser avec précaution sur des réseaux de production._
    

##  5. Moteur de Scripts Nmap (NSE - Nmap Scripting Engine)

Nmap intègre de nombreux scripts Lua situés dans `/usr/share/nmap/scripts/`.

- **`nmap -sC <cible>`** : Exécute le jeu de scripts par défaut (_safe & discovery_).
    
- **`nmap --script=vuln <cible>`** : Recherche des vulnérabilités connues (CVE) sur les services détectés.
    
- **`nmap --script=http-enum <cible>`** : Enumère les répertoires et fichiers courants sur un serveur Web.
    

##  6. Performance, Format d'Output et Conseils

### Ajustement de la vitesse de scan

- **`nmap -T<0-5> <cible>`** : Ajuste la vitesse (Timing).
    
    - `-T0` / `-T1` : Très lent (esquive les systèmes de détection IDS/IPS).
        
    - **`-T4`** : **Recommandé en TP / Lab** (Rapide et agressif).
        
    - `-T5` : Extrêmement rapide (risque de louper des données sur des connexions instables).
        

### Sauvegarde des résultats

> [!TIP] Le réflexe en Audit / TP
> 
> Enregistrez toujours vos scans pour réutilisation ou compte-rendu :
> 
> - **`nmap -oN scan.txt <cible>`** : Format texte lisible classique.
>     
> - **`nmap -oX scan.xml <cible>`** : Format XML (pratique pour importer dans Metasploit ou Zenmap).
>     
> - **`nmap -oA mon_scan <cible>`** : **Sauvegarde dans TOUS les formats** (Normal, XML, Grepable).
>     

##  Commande "Boîte à Outils" pour TP

Voici la commande couteau-suisse optimale pour analyser un hôte rapidement sans perdre trop de temps :

Bash

```
sudo nmap -sS -sV -p- -T4 -oA audit_hote 192.168.1.50
```

_Explication : Scan SYN discret (`-sS`), détection des versions (`-sV`), sur tous les ports (`-p-`), vitesse rapide (`-T4`), résultats enregistrés dans tous les formats (`-oA`)._