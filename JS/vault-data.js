/**
 * ==========================================================================
 * BASE DE CONNAISSANCES OBSIDIAN - BTS SIO SISR (Mathis Dubos)
 * Généré automatiquement à partir de Assets/obsidian (54 fiches)
 * ==========================================================================
 */

window.vaultImages = {
  "Pasted image 20260624134540.png": "Assets/obsidian/01_CCNA/01_Périphérique_Réseaux/images/Pasted image 20260624134540.png",
  "Pasted image 20260624140926.png": "Assets/obsidian/01_CCNA/01_Périphérique_Réseaux/images/Pasted image 20260624140926.png",
  "Pasted image 20260720142706.png": "Assets/obsidian/01_CCNA/01_Périphérique_Réseaux/images/Pasted image 20260720142706.png",
  "Pasted image 20260824155326.png": "Assets/obsidian/01_CCNA/02_Interface_&_Cables/images/Pasted image 20260824155326.png",
  "Pasted image 20260824155851.png": "Assets/obsidian/01_CCNA/02_Interface_&_Cables/images/Pasted image 20260824155851.png",
  "Pasted image 20260702132006.png": "Assets/obsidian/03_Kali_Linux/01_Outils/01_Wireshark/images/Pasted image 20260702132006.png",
  "Pasted image 20260625095225.png": "Assets/obsidian/05_Windows/images/Pasted image 20260625095225.png",
  "Pasted image 20260625095532.png": "Assets/obsidian/05_Windows/images/Pasted image 20260625095532.png",
  "Pasted image 20260625095611.png": "Assets/obsidian/05_Windows/images/Pasted image 20260625095611.png",
  "Pasted image 20260626095734.png": "Assets/obsidian/06_Ubuntu/01_Outils/01_FOG/images/Pasted image 20260626095734.png",
  "Pasted image 20260626100140.png": "Assets/obsidian/06_Ubuntu/01_Outils/01_FOG/images/Pasted image 20260626100140.png",
  "Pasted image 20260628114728.png": "Assets/obsidian/06_Ubuntu/01_Outils/02_Docker/images/lab_dockerfile/Pasted image 20260628114728.png",
  "Pasted image 20260628114827.png": "Assets/obsidian/06_Ubuntu/01_Outils/02_Docker/images/lab_dockerfile/Pasted image 20260628114827.png",
  "Pasted image 20260628115030.png": "Assets/obsidian/06_Ubuntu/01_Outils/02_Docker/images/lab_dockerfile/Pasted image 20260628115030.png",
  "Pasted image 20260628112158.png": "Assets/obsidian/06_Ubuntu/01_Outils/02_Docker/images/lab_docker_compose/Pasted image 20260628112158.png",
  "Pasted image 20260628113239.png": "Assets/obsidian/06_Ubuntu/01_Outils/02_Docker/images/lab_docker_compose/Pasted image 20260628113239.png",
  "Pasted image 20260628113320.png": "Assets/obsidian/06_Ubuntu/01_Outils/02_Docker/images/lab_docker_compose/Pasted image 20260628113320.png",
  "Pasted image 20260628113602.png": "Assets/obsidian/06_Ubuntu/01_Outils/02_Docker/images/lab_docker_compose/Pasted image 20260628113602.png"
};

window.vaultNotes = [
  {
    "id": "reseau-01-peripherique-reseaux",
    "title": "Périphériques Réseaux & Architecture LAN",
    "category": "reseau",
    "categoryName": "🌐 Cisco & Réseaux",
    "date": "20 Juillet 2026",
    "readTime": "2 min",
    "tags": [
      "CCNA",
      "Cisco",
      "Réseau"
    ],
    "excerpt": "<u>firewall</u> = matériel ou logiciel",
    "filePath": "Assets/obsidian/01_CCNA/01_Périphérique_Réseaux/01_Périphérique_Réseaux.md",
    "content": "\n\n![[Pasted image 20260624134540.png]]\n\n<u>firewall</u> = matériel ou logiciel\n<u>un client</u> = un appareil qui accèdes a des service mis a disposition par un ou des serveurs \n\nles clients peuvent être des serveur  \n\n<u>un serveur</u> = c'est un appareil qui fournis des fonctions ou des services a un client \n\n![[Pasted image 20260624140926.png]]\n\n> [!important]\n> pc2 (serveur) fournie le service comme c'est lui qui envoie l'image par conséquence pc1 est le client \n\n\npour connecter plus d'appareil sur un réseau local il faut utilisé un commutateur(switch) afin d'augmenter les nombre d'appareil que l'on peut connecter sur le même réseaux local et leur permettre de communiquer entre eux en LAN (Local Area Network).\n\npour accédé a internet il faut connecter un commutateur(switch) a un routeur afin de le connecter a internet \n\n![[Pasted image 20260720142706.png]]\n\nsi  pc 1 veut un fichier de srv1 pour la réception c'est le même chemin mais inverse \n\n\n- caractéristique routeur :\nles routeur on moins de port Ethernet/interface réseau que les commutateur \nles routeur sont la pour assuré la connectivité entre les réseaux locaux \nles routeur son utiliser pour envoyer des données sur internet \n\nil faut installer un pare-feu interne ou externe pour la sécurité contre les attaquant et bien le config \n\n- caractéristique d'un par feu :\nsurveille et control le trafic réseau en fonction de réglé configuré \nles par feu peuvent être placé a l'intérieur ou a l'extérieur du réseau\npar feu appeler par feu de nouvelle génération si il a des fonctionnalité de filtrage plus avancé et plus moderne \n\npar feu réseau = sont des périphérique matériel qui filtre le trafic entre les réseaux \n\npar feu hôte : sont des par feu logiciel qui filtre le trafic entrant et sortant d'un machine hôte comme un pc (tout les pc doivent en avoir un )\n\n\n\nvoir la suite sur la page [[02_Packet_Tracert]]\n"
  },
  {
    "id": "reseau-02-packet-tracert",
    "title": "Initiation Cisco Packet Tracer & Câblage",
    "category": "reseau",
    "categoryName": "🌐 Cisco & Réseaux",
    "date": "24 Juin 2026",
    "readTime": "2 min",
    "tags": [
      "CCNA",
      "Cisco",
      "Réseau"
    ],
    "excerpt": "Fiche technique Obsidian détaillée : Initiation Cisco Packet Tracer & Câblage.",
    "filePath": "Assets/obsidian/01_CCNA/02.1_Packet_tracert/02_Packet_Tracert.md",
    "content": ""
  },
  {
    "id": "reseau-01-interface-cables",
    "title": "Interfaces Réseau & Types de Câbles",
    "category": "reseau",
    "categoryName": "🌐 Cisco & Réseaux",
    "date": "24 Août 2026",
    "readTime": "2 min",
    "tags": [
      "CCNA",
      "Cisco",
      "Réseau"
    ],
    "excerpt": "principe de ce chapitre : comment connecté l'équipement d'un réseaux avec des câbles.",
    "filePath": "Assets/obsidian/01_CCNA/02_Interface_&_Cables/01_Interface_&_Cables.md",
    "content": "principe de ce chapitre : comment connecté l'équipement d'un réseaux avec des câbles.\n\ninterface = port \n\nsur les commutateurs / switch nous avons des port RJ-45 (RJ = Registered Jack)\nles câbles RJ-45 / Ethernet se trouve au extrémité des câbles en cuivre mais les câbles en cuivre ne sont pas utilisé dans tout les cas. \n\nEthernet est un ensemble de normes et de protocole réseau plutôt qu'un protocole unique (c'est un ensembles de norme)\n\npourquoi avoir besoin de protocole et de norme réseaux ?\n\n- afin de permet la communication et la connectivité sur toute les machines \n- la vitesse des câbles et définie en bits, kbits, Mbits, Gbits et non octet/s Ko/s etc\n- 8bits = 1byte (octet)\n- la vitesse est mesuré en bit par seconde soir Bit/s\n\n![[Pasted image 20260824155326.png]]\n\nnormes Ethernet :\n- elle sont toute définie dans la norme IEEE 802.3 (IEEE = Institute of Electrical and Electronics Engineers)\n![[Pasted image 20260824155851.png]]\n\ndans informal Name : \n- BASE : fait référence a leur signalisation dans leur bande de base \n- T : câblage a pair torsader \n\n> [!NOTE]\n> les câble utilisé dans les normes Ethernet en cuivre sont des câbles UTP (pair torsadé non blindé) non blindé signifie qu'ils peuvent être vulnérable au interférence électrique car ils ont pas de blindage métallique \n\n"
  },
  {
    "id": "reseau-01-calcul-vlsm",
    "title": "Calcul et Découpage de Sous-Réseaux VLSM",
    "category": "reseau",
    "categoryName": "🌐 Cisco & Réseaux",
    "date": "6 Septembre 2026",
    "readTime": "2 min",
    "tags": [
      "CCNA",
      "Cisco",
      "Réseau",
      "VLSM"
    ],
    "excerpt": "Fiche technique Obsidian détaillée : Calcul et Découpage de Sous-Réseaux VLSM.",
    "filePath": "Assets/obsidian/01_CCNA/03_subnetting_VLSM/01_Calcul_VLSM.md",
    "content": "\n\n"
  },
  {
    "id": "windows-01-changement-mdp-utilisateur",
    "title": "Active Directory : Réinitialisation Mot de Passe Utilisateur",
    "category": "windows",
    "categoryName": "🪟 Windows & AD",
    "date": "20 Juillet 2026",
    "readTime": "4 min",
    "tags": [
      "ActiveDirectory",
      "Admin",
      "Windows"
    ],
    "excerpt": "Lorsqu’un utilisateur Active Directory oublie son mot de passe, un administrateur doit effectuer une **réinitialisation du mot de passe** depuis le serveur Wind...",
    "filePath": "Assets/obsidian/02_Windows_Serveur/01_Changement_MDP_utilisateur.md",
    "content": "# Réinitialiser le mot de passe d’un utilisateur Active Directory (Windows Server)\n\n## Contexte\n\nLorsqu’un utilisateur Active Directory oublie son mot de passe, un administrateur doit effectuer une **réinitialisation du mot de passe** depuis le serveur Windows qui héberge le domaine (contrôleur de domaine).\n\n> Objectif : permettre à l’utilisateur de se reconnecter tout en respectant les bonnes pratiques de sécurité.\n\n---\n\n# Méthode 1 — Avec la console Utilisateurs et ordinateurs Active Directory (GUI)\n\n## Prérequis\n\n- Avoir un compte avec des droits administrateur du domaine.\n    \n- Être connecté sur un contrôleur de domaine ou une machine avec les outils RSAT installés.\n    \n- Connaître le nom de l’utilisateur concerné.\n    \n\n---\n\n## Étapes\n\n### 1. Ouvrir la console Active Directory\n\nSur le serveur :\n\n```\nGestionnaire de serveur\n→ Outils\n→ Utilisateurs et ordinateurs Active Directory\n```\n\nRaccourci :\n\n```\ndsa.msc\n```\n\n---\n\n### 2. Rechercher l’utilisateur\n\nNaviguer dans :\n\n```\nDomaine\n └── OU contenant les utilisateurs\n      └── Utilisateur concerné\n```\n\nExemple :\n\n```\nentreprise.local\n └── Employés\n      └── jean.dupont\n```\n\n---\n\n### 3. Réinitialiser le mot de passe\n\nClic droit sur l’utilisateur :\n\n```\nRéinitialiser le mot de passe...\n```\n\nEntrer :\n\n```\nNouveau mot de passe\nConfirmation\n```\n\nValider.\n\n---\n\n### 4. Options recommandées\n\nCocher selon le besoin :\n\n **L’utilisateur doit changer le mot de passe à la prochaine ouverture de session**\n\n→ recommandé pour un utilisateur ayant oublié son mot de passe.\n\n---\n\nDécocher :\n\n **L’utilisateur ne peut pas changer son mot de passe**\n\n→ sauf cas particuliers (comptes techniques, services).\n\n---\n\n# Méthode 2 — Avec PowerShell\n\n## Réinitialiser le mot de passe\n\nOuvrir PowerShell en administrateur :\n\n```powershell\nSet-ADAccountPassword -Identity \"jean.dupont\" -Reset `\n-NewPassword (ConvertTo-SecureString \"NouveauMotDePasse123!\" -AsPlainText -Force)\n```\n\n---\n\n## Forcer le changement du mot de passe à la prochaine connexion\n\n```powershell\nSet-ADUser -Identity \"jean.dupont\" -ChangePasswordAtLogon $true\n```\n\n---\n\n## Vérifier l’état du compte\n\n```powershell\nGet-ADUser jean.dupont -Properties PasswordExpired, LockedOut\n```\n\n---\n\n# Méthode 3 — Déverrouiller un compte bloqué\n\nSi l’utilisateur a fait trop de tentatives :\n\n```powershell\nUnlock-ADAccount -Identity \"jean.dupont\"\n```\n\nVérification :\n\n```powershell\nGet-ADUser jean.dupont -Properties LockedOut\n```\n\nRésultat attendu :\n\n```\nLockedOut : False\n```\n\n---\n\n# Points importants pour un administrateur réseau\n\n## Différence entre réinitialisation et changement de mot de passe\n\n|Action|Qui peut le faire ?|Situation|\n|---|---|---|\n|Changer son mot de passe|Utilisateur|Il connaît son ancien mot de passe|\n|Réinitialiser le mot de passe|Administrateur|Mot de passe oublié|\n\n---\n\n# Bonnes pratiques sécurité\n\n Ne jamais communiquer un mot de passe permanent à l’utilisateur.\n\nPréférer :\n\n```\nMot de passe temporaire\n        ↓\nConnexion utilisateur\n        ↓\nChangement obligatoire\n```\n\n---\n\n Respecter la politique de mot de passe du domaine :\n\nVoir :\n\n```\nGPMC.msc\n→ Default Domain Policy\n→ Computer Configuration\n→ Windows Settings\n→ Security Settings\n→ Account Policies\n```\n\nParamètres importants :\n\n- Longueur minimale\n    \n- Complexité\n    \n- Historique des mots de passe\n    \n- Durée d’expiration\n    \n\n---\n\n# Commandes utiles Active Directory (fiche révision)\n\n|Action|Commande|\n|---|---|\n|Voir un utilisateur|`Get-ADUser`|\n|Réinitialiser un mot de passe|`Set-ADAccountPassword`|\n|Forcer changement au prochain login|`Set-ADUser -ChangePasswordAtLogon $true`|\n|Déverrouiller un compte|`Unlock-ADAccount`|\n|Modifier un utilisateur|`Set-ADUser`|\n\n---\n\n# À retenir pour un examen réseau\n\n**Utilisateur oublie son mot de passe :**\n\n```\nAdministrateur\n      ↓\nActive Directory Users and Computers\n      ↓\nUtilisateur\n      ↓\nReset Password\n      ↓\nForcer changement au prochain login\n      ↓\nUtilisateur récupère l’accès\n```\n\n**Outil principal :**\n\n```\ndsa.msc\n```\n\n**Commande PowerShell principale :**\n\n```powershell\nSet-ADAccountPassword\n```"
  },
  {
    "id": "cyber-01-utilisation-wireshark-http-trouver-un-login-mdp",
    "title": "Wireshark : Analyse de Trames HTTP & Extraction d'Identifiants",
    "category": "cyber",
    "categoryName": "🛡️ Cyber & DFIR",
    "date": "2 Juillet 2026",
    "readTime": "2 min",
    "tags": [
      "Audit",
      "Cyber",
      "DFIR",
      "Wireshark"
    ],
    "excerpt": "- pour lancement voir [[01_installation_wireshark]]",
    "filePath": "Assets/obsidian/03_Kali_Linux/01_Outils/01_Wireshark/01_utilisation_Wireshark_http_trouver_un_login_&_mdp.md",
    "content": "- pour lancement voir [[01_installation_wireshark]]\n\n\n> [!important]\n> 945 Post = contient le mdp\n\n## Analyse et Sniffing de paquets (Wireshark)\n\nLe protocole **HTTP** transmettant les données en texte brut (non chiffré), un attaquant sur le réseau peut intercepter les identifiants via un outil de capture.\n\n### Étape 1 : Lancement de Wireshark\n\nPour que Wireshark puisse écouter les cartes réseau, il doit impérativement être lancé avec les privilèges `root` :\n\n```\nsudo wireshark\n```\n\n### Étape 2 : Choix de l'interface réseau\n\nDans la liste des interfaces au démarrage :\n\n- **`docker0`** : Le switch virtuel par lequel passent les conteneurs Docker.\n    \n- **`lo` (Loopback)** ou **`any`** : À privilégier si le trafic passe par `127.0.0.1` directement sur la machine hôte.\n    \n\n_Double-cliquer sur l'interface pour démarrer la capture._\n\n### Étape 3 : Capture et Filtrage\n\n1. Ouvrir le navigateur sur `http://127.0.0.1:8082`.\n    \n2. Remplir le formulaire d'installation (ex: Identifiant: `admin`, Mot de passe: `Machine2026!`).\n    \n3. Valider le formulaire pour générer du trafic.\n    \n4. Dans Wireshark, utiliser la barre de recherche des filtres (en haut) et taper :\n    \n    ```\n    http\n    ```\n    \n5. Repérer la ligne avec la méthode **`POST`** (envoi des données du formulaire).\n    \n\n### Étape 4 : Extraction des données sensibles\n\n- **Méthode 1 (Analyse des couches)** : Sélectionner le paquet `POST`. Dans le volet central (Modèle OSI), dérouler la dernière couche : `Hypertext Transfer Protocol` -> `HTML Form URL Encoded`. Les variables `log` et `pwd` apparaissent en clair.\n\n![[Pasted image 20260702132006.png]]\n\n- **Méthode 2 (La plus rapide)** : Faire un **Clic droit sur le paquet POST -> Follow -> TCP Stream**. Une fenêtre s'ouvre affichant l'intégralité de la conversation en clair (Texte rouge = Données envoyées par l'utilisateur).\n    \n\n### 💡 Règle de Sécurité apprise (À retenir pour les exams)\n\nLe protocole **HTTP (Port 80)** est vulnérable aux attaques de type _Man-in-the-Middle (MitM)_ car le corps (Body) des requêtes `POST` circule sans chiffrement. C'est pourquoi l'implémentation de **HTTPS (Port 443)** avec un certificat SSL/TLS est obligatoire pour chiffrer le flux TCP et rendre la capture illisible pour un pirate."
  },
  {
    "id": "cyber-01-nmap",
    "title": "Nmap : Guide des Commandes Indispensables & Scans Réseau",
    "category": "cyber",
    "categoryName": "🛡️ Cyber & DFIR",
    "date": "15 Octobre 2026",
    "readTime": "5 min",
    "tags": [
      "Audit",
      "Cyber",
      "DFIR",
      "Nmap"
    ],
    "excerpt": "**Nmap** (*Network Mapper*) est l'outil de référence pour la découverte de réseau, le balayage de ports et l'audit de sécurité.",
    "filePath": "Assets/obsidian/03_Kali_Linux/01_Outils/02_Nmap/01_Nmap.md",
    "content": "#  Nmap : Le Guide des Commandes Indispensables\n\n**Nmap** (*Network Mapper*) est l'outil de référence pour la découverte de réseau, le balayage de ports et l'audit de sécurité.\n\n---\n\n##  1. Synthèse de la Syntaxe\n\n\nnmap [Type de Scan] [Options] [Cible]\n\n\n> [!NOTE] Cibles acceptées\n> \n> - IP unique : `192.168.1.1`\n>     \n> - Nom de domaine : `scanme.nmap.org`\n>     \n> - Plage IP / CIDR : `192.168.1.1-50` ou `192.168.1.0/24`\n>     \n> - Fichier de cibles : `-iL liste_cibles.txt`\n>     \n\n##  2. Découverte d'Hôtes (Host Discovery)\n\nIdentifie quelles machines sont en ligne sur le réseau sans forcément scanner tous leurs ports.\n\n| **Commande**              | **Description / Cas d'usage**                                                                        |\n| ------------------------- | ---------------------------------------------------------------------------------------------------- |\n| `nmap -sn 192.168.1.0/24` | **Ping Sweep** : Découvre uniquement les machines actives (pas de scan de ports).                    |\n| `nmap -PR 192.168.1.1`    | **Scan ARP** : Très rapide et précis sur un réseau local (LAN).                                      |\n| `nmap -Pn 192.168.1.1`    | **Ignorer le Ping** : Scanne la cible même si elle ne répond pas au Ping (utile face à un firewall). |\n\n## 🔌 3. Types de Scans de Ports\n\nNmap analyse les ports pour déterminer leur état : `Open` (Ouvert), `Closed` (Fermé), ou `Filtered` (Bloqué par un pare-feu).\n\n### Scans TCP & UDP principaux\n\n- **`nmap -sS <cible>`** _(Nécessite sudo)_ : **SYN Stealth Scan** (Scan semi-ouvert). Le scan par défaut le plus rapide et discret en TCP.\n    \n- **`nmap -sT <cible>`** : **TCP Connect Scan**. Effectue la connexion complète 3-way handshake. Utilisé si vous n'avez pas les droits root.\n    \n- **`nmap -sU <cible>`** _(Nécessite sudo)_ : **UDP Scan**. Essentiel pour trouver des services comme DNS (53), DHCP (67/68), SNMP (161). _Plus lent que TCP._\n    \n\n### Sélection des ports à scanner\n\n- **`nmap -p 80,443 <cible>`** : Scanne uniquement les ports spécifiques (ex: HTTP et HTTPS).\n    \n- **`nmap -p 1-1024 <cible>`** : Scanne une plage spécifique de ports.\n    \n- **`nmap -p- <cible>`** : **Scanne la totalité des 65 355 ports TCP**.\n    \n- **`nmap -F <cible>`** : **Fast Scan** (scanne les 100 ports les plus courants au lieu des 1000 habituels).\n    \n\n##  4. Détection de Services et Systèmes d'Exploitation\n\nDétaille ce qui tourne réellement derrière un port ouvert.\n\n- **`nmap -sV <cible>`** : **Détection de version des services** (ex: identifie la version exacte d'Apache, OpenSSH, etc.).\n    \n- **`nmap -O <cible>`** _(Nécessite sudo)_ : **Détection du système d'exploitation** (OS fingerprinting).\n    \n- **`nmap -A <cible>`** : **Scan agressif** (Combine `-sV`, `-O`, le traceroute et l'exécution de scripts de base). _À utiliser avec précaution sur des réseaux de production._\n    \n\n##  5. Moteur de Scripts Nmap (NSE - Nmap Scripting Engine)\n\nNmap intègre de nombreux scripts Lua situés dans `/usr/share/nmap/scripts/`.\n\n- **`nmap -sC <cible>`** : Exécute le jeu de scripts par défaut (_safe & discovery_).\n    \n- **`nmap --script=vuln <cible>`** : Recherche des vulnérabilités connues (CVE) sur les services détectés.\n    \n- **`nmap --script=http-enum <cible>`** : Enumère les répertoires et fichiers courants sur un serveur Web.\n    \n\n##  6. Performance, Format d'Output et Conseils\n\n### Ajustement de la vitesse de scan\n\n- **`nmap -T<0-5> <cible>`** : Ajuste la vitesse (Timing).\n    \n    - `-T0` / `-T1` : Très lent (esquive les systèmes de détection IDS/IPS).\n        \n    - **`-T4`** : **Recommandé en TP / Lab** (Rapide et agressif).\n        \n    - `-T5` : Extrêmement rapide (risque de louper des données sur des connexions instables).\n        \n\n### Sauvegarde des résultats\n\n> [!TIP] Le réflexe en Audit / TP\n> \n> Enregistrez toujours vos scans pour réutilisation ou compte-rendu :\n> \n> - **`nmap -oN scan.txt <cible>`** : Format texte lisible classique.\n>     \n> - **`nmap -oX scan.xml <cible>`** : Format XML (pratique pour importer dans Metasploit ou Zenmap).\n>     \n> - **`nmap -oA mon_scan <cible>`** : **Sauvegarde dans TOUS les formats** (Normal, XML, Grepable).\n>     \n\n##  Commande \"Boîte à Outils\" pour TP\n\nVoici la commande couteau-suisse optimale pour analyser un hôte rapidement sans perdre trop de temps :\n\nBash\n\n```\nsudo nmap -sS -sV -p- -T4 -oA audit_hote 192.168.1.50\n```\n\n_Explication : Scan SYN discret (`-sS`), détection des versions (`-sV`), sur tous les ports (`-p-`), vitesse rapide (`-T4`), résultats enregistrés dans tous les formats (`-oA`)._"
  },
  {
    "id": "cyber-02-lab-nmap",
    "title": "Lab Pratique Nmap : Cartographie & Audit de Cibles",
    "category": "cyber",
    "categoryName": "🛡️ Cyber & DFIR",
    "date": "15 Octobre 2026",
    "readTime": "2 min",
    "tags": [
      "Audit",
      "Cyber",
      "DFIR",
      "Nmap"
    ],
    "excerpt": "Fiche technique Obsidian détaillée : Lab Pratique Nmap : Cartographie & Audit de Cibles.",
    "filePath": "Assets/obsidian/03_Kali_Linux/01_Outils/02_Nmap/02_lab_nmap.md",
    "content": ""
  },
  {
    "id": "cyber-01-burpsuit",
    "title": "Burp Suite : Bases de l'Interception & Proxy d'Audit HTTP",
    "category": "cyber",
    "categoryName": "🛡️ Cyber & DFIR",
    "date": "20 Juillet 2026",
    "readTime": "5 min",
    "tags": [
      "Audit",
      "BurpSuite",
      "Cyber",
      "DFIR"
    ],
    "excerpt": "**Burp Suite** est l'outil incontournable d'audit et d'analyse des applications Web. Il s'intercale comme un **Proxy HTTP/HTTPS** (Man-in-the-Middle) entre le n...",
    "filePath": "Assets/obsidian/03_Kali_Linux/01_Outils/03_Burpsuit/01_Burpsuit.md",
    "content": "\n# Burp Suite : Les Bases de l'Analyse HTTP/HTTPS\n\n**Burp Suite** est l'outil incontournable d'audit et d'analyse des applications Web. Il s'intercale comme un **Proxy HTTP/HTTPS** (Man-in-the-Middle) entre le navigateur client et le serveur web pour intercepter et modifier le trafic.\n\n---\n\n##  1. Configuration Initiale (Le Setup de Lab)\n\nPour que Burp puisse intercepter le trafic du navigateur, il faut router le flux HTTP/HTTPS à travers son proxy local (par défaut sur `127.0.0.1:8080`).\n\n### Étapes de Configuration\n1. **Configurer le Proxy dans le navigateur** :\n   - Rediriger le trafic HTTP/HTTPS vers `127.0.0.1` sur le port `8080`.\n   - *Astuce :* Utiliser l'extension **FoxyProxy** (Firefox/Chrome) pour basculer la redirection en 1 clic.\n2. **Installer le Certificat CA de Burp (Indispensable pour HTTPS)** :\n   - Aller sur `http://burp` dans le navigateur pendant que Burp tourne.\n   - Télécharger le certificat (`CA Certificate`).\n   - L'importer dans le navigateur (*Paramètres > Vie privée et sécurité > Certificats > Importer*) et cocher *\"Faire confiance à cette CA pour identifier des sites web\"*.\n\n---\n\n##  2. Les Modules Principaux\n\nBurp Suite est divisé en plusieurs onglets (outils) spécialisés :\n\n| Module | Fonction Principale | Usage en TP |\n| :--- | :--- | :--- |\n| **Proxy** | Intercepte, affiche et modifie les requêtes/réponses HTTP en temps réel. | Analyser la structure d'une requête POST, modifier un champ d'un en-tête. |\n| **Repeater** | Rejoue manuellement une requête interceptée en modifiant ses paramètres à vol d'oiseau. | Tester rapidement les réactions d'une API ou d'un formulaire à différentes entrées. |\n| **Target** | Cartographie le site web (Site Map) et définit le périmètre d'analyse (*Scope*). | Isoler uniquement le domaine cible pour éviter de polluer l'historique avec du trafic parasite. |\n| **Intruder** | Automatise l'envoi de requêtes personnalisées (Fuzzing, bruteforce léger). | Tester des paramètres en masse avec des listes de dictionnaire (*Payloads*). |\n| **Decoder** | Encode et décode les données sous différents formats (Base64, URL Encoding, Hex, HTML). | Déchiffrer des cookies de session ou des jetons encodés en Base64. |\n| **Comparer** | Compare visuellement deux requêtes ou réponses pour identifier les différences. | Analyser ce qui change dans la réponse HTTP selon le rôle d'un utilisateur. |\n\n---\n\n## 3. Workflow Classique en Lab / TP\n\n```text\n[Navigateur Client] ---> ( Interception Proxy ) ---> [Serveur Web]\n                              |\n                     [ Envoyé au Repeater ]\n                              |\n                    ( Tests & Modifications )\n````\n\n1. **Interception** :\n    \n    - Activer `Intercept is ON` dans l'onglet **Proxy > Intercept**.\n        \n    - Soumettre un formulaire sur le site web.\n        \n    - Inspecter les en-têtes HTTP (`User-Agent`, `Cookie`, `Content-Type`, etc.) et le corps de la requête.\n        \n2. **Transfert vers le Repeater** :\n    \n    - Faire un clic droit sur la requête interceptée $\\rightarrow$ **`Send to Repeater`** (Raccourci : `Ctrl` + `R`).\n        \n    - Reprendre l'interception sur le Proxy (`Intercept is OFF`) pour laisser naviguer normalement.\n        \n3. **Analyse & Modification** :\n    \n    - Dans l'onglet **Repeater**, modifier les paramètres et cliquer sur **Send** pour observer la réponse brute du serveur.\n        \n\n##  4. Raccourcis Clés dans Burp Suite\n\n|**Raccourci**|**Action**|\n|---|---|\n|`Ctrl` + `R`|Envoyer la requête courante vers le **Repeater**|\n|`Ctrl` + `I`|Envoyer la requête courante vers l'**Intruder**|\n|`Ctrl` + `Shift` + `U`|Décoder / Encoder une chaîne sélectionnée en **URL format**|\n|`Ctrl` + `Shift` + `B`|Décoder / Encoder une chaîne sélectionnée en **Base64**|\n|`Ctrl` + `F`|Rechercher dans la requête ou la réponse HTTP|\n|`Ctrl` + `Space`|Faire défiler/avancer la requête interceptée (`Forward`)|\n\n##  5. Bonnes Pratiques & Astuces\n\n> [!TIP] Définir le \"Scope\" dès le début\n> \n> Pour éviter de capturer du trafic système inutile (mises à jour d'OS, télémétrie navigateur) :\n> \n> 1. Aller dans **Target > Scope Settings**.\n>     \n> 2. Ajouter l'URL cible (ex: `http://10.10.10.15/`).\n>     \n> 3. Dans **Proxy > HTTP history**, cocher l'option _\"Show only in-scope items\"_.\n>     \n\n> [!NOTE] Navigateur Intégré\n> \n> Burp Intègre désormais son propre navigateur basé sur Chromium (_Open Browser_ dans l'onglet Proxy). Il est déjà préconfiguré avec le proxy et le certificat CA de Burp, idéal si tu ne souhaites pas modifier la configuration de ton navigateur principal."
  },
  {
    "id": "windows-a1-raccourcie-windows-10",
    "title": "Windows 10 : Raccourcis Clavier & Astuces Sysadmin",
    "category": "windows",
    "categoryName": "🪟 Windows & AD",
    "date": "20 Juillet 2026",
    "readTime": "2 min",
    "tags": [
      "ActiveDirectory",
      "Admin",
      "Windows"
    ],
    "excerpt": "![[Pasted image 20260625095611.png]]",
    "filePath": "Assets/obsidian/05_Windows/A1_Raccourcie_Windows_10.md",
    "content": "> [!changement du nom du pc ou du domaine]\n> Windows + x = \n> ![[Pasted image 20260625095611.png]]\n> \n> Windows + r écrit sysdm.cpl =\n> ![[Pasted image 20260625095225.png]]\n> plus qu'à appuyer sur modifier pour aller changer le domaine et le nom du pc\n> ![[Pasted image 20260625095532.png]]\n\nWindows + i = aller dans les paramètre\nWindows + e = aller dans l'explorateur de fichier\nWindows + L = verrouiller la sessions \nWindows + p = pour l'écrans partager \nWindows + r écrire control = panneaux de configuration\nctrl + maj + Echap = gestionnaire des tâches \nalt + F4 = fermer la page (si pas de page propose d'arrêter l'ordinateur)\nctrl + f = recherche de mot dans un texte \n\n\n\n"
  },
  {
    "id": "windows-01-anydesk",
    "title": "AnyDesk : Prise en Main & Télémaintenance Sécurisée",
    "category": "windows",
    "categoryName": "🪟 Windows & AD",
    "date": "27 Juin 2026",
    "readTime": "5 min",
    "tags": [
      "ActiveDirectory",
      "Admin",
      "Windows"
    ],
    "excerpt": "Anydesk sert a prendre le contrôle du pc a distance.",
    "filePath": "Assets/obsidian/05_Windows/01_Outils/02_Anydesk/01_Anydesk.md",
    "content": "Anydesk sert a prendre le contrôle du pc a distance.\n\n- il est un outil parfait pour le support de proximité (Helpdesk). Pour l'administration d'infrastructures serveurs, privilégier des protocoles sécurisés comme SSH (clés privées) ou RDP via un tunnel VPN.\n\n````markdown\n# 📖 Tutoriel AnyDesk\n\n> **Objectif :** Se connecter à un autre ordinateur ou laisser quelqu'un se connecter au mien pour une assistance à distance.\n\n---\n\n#  Installation\n\n1. Télécharger AnyDesk depuis le site officiel.\n2. Lancer le programme.\n3. Installer AnyDesk (option recommandé) ou l'utiliser sans installation.\n\n✅ Une fois ouvert, une adresse AnyDesk apparaît.\n\n---\n\n# 🖥 Comprendre la fenêtre\n\n## Mon adresse\n\nC'est le numéro affiché en haut.\n\nExemple :\n\n```\n123 456 789\n```\n\n C'est ce numéro que je donne à la personne qui doit accéder à mon ordinateur.\n\n---\n\n## Adresse distante\n\nC'est l'endroit où je tape le numéro de l'autre ordinateur.\n\nExemple :\n\n```\n987 654 321\n```\n\nPuis je clique sur **Se connecter**.\n\n---\n\n# 🔗 Se connecter à un autre PC\n\n1. Ouvrir AnyDesk.\n2. Demander l'adresse AnyDesk de la personne.\n3. Entrer le numéro dans **Adresse distante**.\n4. Cliquer sur **Se connecter**.\n5. Attendre que la personne accepte.\n\nSi elle accepte :\n\n Je vois son écran.\n\n---\n\n# 🛠 Se faire dépanner\n\nSi quelqu'un doit m'aider :\n\n1. Ouvrir AnyDesk.\n2. Lui donner mon adresse AnyDesk.\n3. Attendre sa demande.\n4. Cliquer sur **Accepter**.\n\nL'autre personne peut maintenant voir mon écran.\n\n---\n\n# 🔒 Les autorisations\n\nAvant d'accepter, je peux choisir :\n\n- ☑ Voir mon écran\n- ☑ Contrôler le clavier\n- ☑ Contrôler la souris\n- ☑ Copier des fichiers\n- ☑ Utiliser le presse-papiers\n\nJe peux décocher ce que je ne souhaite pas autoriser.\n\n---\n\n#  Transfert de fichiers\n\nDeux méthodes :\n\n## Méthode 1\n\nGlisser-déposer un fichier entre les deux ordinateurs.\n\n## Méthode 2\n\nUtiliser :\n\n**Menu → Transfert de fichiers**\n\n---\n\n# 💬 Chat\n\nPendant la connexion :\n\nMenu → **Chat**\n\nPermet de discuter sans téléphone.\n\n---\n\n#  Copier / Coller\n\nLe copier/coller fonctionne entre les deux ordinateurs.\n\nExemple :\n\n- Copier un texte sur le PC distant.\n- Coller sur mon PC.\n\n---\n\n# ⚙ Paramètres utiles\n\n## Accès sans surveillance\n\nPermet de se connecter sans que quelqu'un accepte.\n\nConfiguration :\n\nParamètres → Sécurité\n\nPuis :\n\n- Activer l'accès sans surveillance.\n- Choisir un mot de passe solide.\n\n À utiliser uniquement sur un ordinateur personnel.\n\n---\n\n## Modifier le nom du PC\n\nParamètres → Interface\n\nPermet de remplacer le numéro par un nom plus facile à reconnaître.\n\nExemple :\n\n- PC Bureau\n- PC Maison\n- Serveur\n\n---\n\n#  Fin de la connexion\n\nPour arrêter :\n\nCliquer sur :\n\n**Déconnecter**\n\nou simplement fermer la fenêtre.\n\n---\n\n#  Bonnes pratiques\n\n Donner son adresse uniquement à une personne de confiance.\n\n Fermer AnyDesk lorsque je n'en ai plus besoin.\n\n Utiliser un mot de passe fort pour l'accès sans surveillance.\n\n Vérifier les autorisations avant d'accepter une connexion.\n\n---\n\n#  Problèmes fréquents\n\n## Impossible de se connecter\n\nVérifier :\n\n- Internet fonctionne.\n- Le numéro AnyDesk est correct.\n- AnyDesk est ouvert sur l'autre ordinateur.\n\n---\n\n## Écran noir\n\n- Redémarrer AnyDesk.\n- Vérifier les autorisations.\n- Redémarrer l'ordinateur si nécessaire.\n\n---\n\n## Impossible de contrôler la souris\n\nL'autre personne doit autoriser :\n\n- Contrôle du clavier\n- Contrôle de la souris\n\n---\n\n# ⌨ Raccourcis utiles\n\n| Action | Description |\n|---------|-------------|\n| F11 | Plein écran |\n| Ctrl + Alt + Suppr | Envoyer au PC distant |\n| Ctrl + C / Ctrl + V | Copier / Coller |\n\n---\n\n#  Pense-bête\n\n## Pour aider quelqu'un\n\n1. Demander son adresse AnyDesk.\n2. Entrer l'adresse.\n3. Cliquer sur **Se connecter**.\n4. Attendre l'acceptation.\n\n---\n\n## Pour recevoir de l'aide\n\n1. Ouvrir AnyDesk.\n2. Donner mon adresse.\n3. Accepter la connexion.\n\n---\n\n#  Astuces personnelles\n\n- Ajouter ici mes captures d'écran.\n- Noter les manipulations que j'utilise souvent.\n- Écrire les solutions aux problèmes déjà rencontrés.\n\n````\n"
  },
  {
    "id": "windows-01-sysprep",
    "title": "Sysprep : Généralisation & Préparation d'Images Windows",
    "category": "windows",
    "categoryName": "🪟 Windows & AD",
    "date": "20 Juillet 2026",
    "readTime": "2 min",
    "tags": [
      "ActiveDirectory",
      "Admin",
      "Windows"
    ],
    "excerpt": "**Sysprep (System Preparation Tool)** est un outil Microsoft qui sert à **préparer une installation de Windows pour qu'elle puisse être dupliquée ou déployée su...",
    "filePath": "Assets/obsidian/05_Windows/01_Outils/03_Sysprep/01_Sysprep.md",
    "content": "\n**Sysprep (System Preparation Tool)** est un outil Microsoft qui sert à **préparer une installation de Windows pour qu'elle puisse être dupliquée ou déployée sur d'autres ordinateurs**.\n\nConcrètement, il supprime les informations propres à un PC (identifiants, pilotes spécifiques, journaux, etc.) afin que Windows puisse être redémarré comme s'il venait d'être installé.\n\n### Les principales utilisations\n\n- **Créer une image Windows** : vous installez Windows, les mises à jour, les logiciels et les paramètres sur un PC de référence, puis vous exécutez Sysprep avant de créer une image disque à déployer sur d'autres machines.\n- **Éviter les conflits d'identité** : Sysprep réinitialise les informations uniques de l'installation afin que chaque PC obtienne sa propre identité au premier démarrage.\n- **Lancer l'expérience de premier démarrage (OOBE)** : le nouvel utilisateur voit l'assistant de configuration de Windows (choix de la langue, création du compte, etc.).\n\n> [!NOTE] emplacement\n> On trouve sysprep dans :\n> - C:\\Windows\\System32\\Sysprep\\Sysprep.exe\n> ou \n> - Windows + r ecrire sysprep\n\non peut s'en servir pour préparé l'image comme quand on utilise FOG Project pour masterisé des machines [[06_deploiment_d'image_système_avec_FOG]]\n\n\n\n\n"
  },
  {
    "id": "windows-01-putty-windows",
    "title": "PuTTY : Configuration et Gestion des Sessions SSH & Console",
    "category": "windows",
    "categoryName": "🪟 Windows & AD",
    "date": "20 Juillet 2026",
    "readTime": "7 min",
    "tags": [
      "ActiveDirectory",
      "Admin",
      "Windows"
    ],
    "excerpt": "Objectif : Se connecter à des équipements réseau (Linux, Cisco, switchs, routeurs, VM) via SSH, Telnet ou Console série.",
    "filePath": "Assets/obsidian/05_Windows/01_Outils/04_Putty/01_Putty_Windows.md",
    "content": "> Objectif : Se connecter à des équipements réseau (Linux, Cisco, switchs, routeurs, VM) via SSH, Telnet ou Console série.\n\n---\n\n# Sommaire\n\n- Présentation\n- Installation\n- Les protocoles\n- Interface de PuTTY\n- Connexion SSH\n- Authentification par clé\n- Connexion Telnet\n- Connexion Série (Console Cisco)\n- Sauvegarde des sessions\n- Transfert de fichiers (PSCP / PSFTP)\n- Génération de clés (PuTTYgen)\n- Bonnes pratiques\n- Dépannage\n\n---\n\n# 1. Présentation\n\nPuTTY est un client permettant de se connecter à des machines distantes.\n\nIl supporte :\n\n- SSH \n- Telnet\n- Serial (Console)\n- Rlogin (ancien)\n- Raw TCP\n\nIl est principalement utilisé sous Windows.\n\n---\n\n# 2. Installation\n\nTélécharger PuTTY :\n\nhttps://www.putty.org/\n\nOu via Winget :\n\n```powershell\nwinget install PuTTY.PuTTY\n```\n\n---\n\n# 3. Les protocoles\n\n## SSH (Secure Shell)\n\nPort :\n\n```\n22\n```\n\nUtilisé pour :\n\n- Linux\n- Cisco IOS\n- VMware\n- Hyper-V\n- Serveurs\n\nConnexion chiffrée.\n\n---\n\n## Telnet\n\nPort :\n\n```\n23\n```\n\nConnexion NON chiffrée.\n\nÀ éviter en production.\n\n---\n\n## Console série\n\nUtilisée lorsque :\n\n- pas d'adresse IP\n- configuration initiale d'un switch\n- configuration initiale d'un routeur\n\nConnexion via câble console USB.\n\n---\n\n# 4. Interface de PuTTY\n\nLes champs importants :\n\n```\nHost Name\n```\n\nAdresse IP ou nom DNS.\n\nExemple :\n\n```\n192.168.1.10\n```\n\nou\n\n```\nsrv-linux.local\n```\n\n---\n\nPort :\n\nSSH\n\n```\n22\n```\n\nTelnet\n\n```\n23\n```\n\n---\n\nConnection Type\n\n- SSH\n- Telnet\n- Serial\n\n---\n\n# 5. Première connexion SSH\n\nExemple :\n\nHost :\n\n```\n192.168.1.100\n```\n\nPort\n\n```\n22\n```\n\nType\n\n```\nSSH\n```\n\nCliquer sur :\n\n```\nOpen\n```\n\n---\n\nPremière connexion :\n\nPuTTY affiche :\n\n```\nThe server's host key is not cached.\n```\n\nCliquer sur\n\n```\nAccept\n```\n\n---\n\nConnexion :\n\n```\nlogin as:\n```\n\nEntrer :\n\n```\nroot\n```\n\nou\n\n```\nadmin\n```\n\nPuis le mot de passe.\n\n---\n\n# 6. Exemple Linux\n\nConnexion :\n\n```\nssh utilisateur@192.168.1.100\n```\n\nUne fois connecté :\n\nAfficher le dossier courant :\n\n```bash\npwd\n```\n\nLister les fichiers :\n\n```bash\nls\n```\n\nAfficher les interfaces :\n\n```bash\nip a\n```\n\nAfficher les processus :\n\n```bash\nps\n```\n\n---\n\n# 7. Connexion à un Switch Cisco\n\nAdresse :\n\n```\n10.0.0.1\n```\n\nSSH\n\n```\n22\n```\n\nUtilisateur :\n\n```\nadmin\n```\n\nMot de passe :\n\n```\n*******\n```\n\nUne fois connecté :\n\n```cisco\nenable\n```\n\nPuis\n\n```cisco\nshow running-config\n```\n\nAfficher les interfaces :\n\n```cisco\nshow ip interface brief\n```\n\n---\n\n# 8. Connexion Console Série\n\nChoisir\n\n```\nSerial\n```\n\nPort :\n\n```\nCOM3\n```\n\nou\n\n```\nCOM5\n```\n\nSelon Windows.\n\nParamètres Cisco :\n\n```\nSpeed : 9600\n\nData bits : 8\n\nStop bits : 1\n\nParity : None\n\nFlow control : None\n```\n\n---\n\n# 9. Sauvegarder une session\n\nDans\n\n```\nSaved Sessions\n```\n\nÉcrire :\n\n```\nServeurLinux\n```\n\nCliquer\n\n```\nSave\n```\n\nLa prochaine fois :\n\n- sélectionner la session\n- cliquer sur **Load**\n- puis **Open**\n\n---\n\n# 10. Copier / Coller\n\nDans PuTTY :\n\nCopier :\n\nSélection avec la souris.\n\n Copie automatique.\n\nColler :\n\nClic droit.\n\n---\n\n# 11. Authentification par clé SSH\n\nPlus sécurisé qu'un mot de passe.\n\nCréation :\n\n```\nPuTTYgen\n```\n\nCréer :\n\n```\nRSA 4096 bits\n```\n\nou\n\n```\nEd25519\n```\n\nEnregistrer :\n\n```\nprivate.ppk\n```\n\nCopie de la clé publique :\n\n```\nssh-rsa AAAAB3...\n```\n\nÀ placer dans :\n\n```bash\n~/.ssh/authorized_keys\n```\n\nDans PuTTY :\n\n```\nConnection\n\nSSH\n\nAuth\n\nCredentials\n```\n\nChoisir\n\n```\nprivate.ppk\n```\n\n---\n\n# 12. PSCP\n\nCopie de fichiers.\n\nExemple :\n\n```powershell\npscp fichier.txt utilisateur@192.168.1.100:/home/user/\n```\n\nTéléchargement :\n\n```powershell\npscp utilisateur@192.168.1.100:/home/user/test.txt .\n```\n\n---\n\n# 13. PSFTP\n\nConnexion :\n\n```powershell\npsftp utilisateur@192.168.1.100\n```\n\nCommandes :\n\n```bash\nls\n```\n\n```bash\ncd\n```\n\n```bash\nput fichier.txt\n```\n\n```bash\nget fichier.txt\n```\n\n---\n\n# 14. Bonnes pratiques\n\n Utiliser SSH\n\n Désactiver Telnet\n\n Sauvegarder les sessions\n\n Utiliser des clés SSH\n\n Vérifier l'empreinte du serveur\n\n Changer les mots de passe par défaut\n\n---\n\n# 15. Dépannage\n\n## Connection refused\n\nCause :\n\nLe service SSH est arrêté.\n\nSolution :\n\n```bash\nsudo systemctl start ssh\n```\n\n---\n\n## Network error\n\nCause :\n\nPas de réseau.\n\nVérifier :\n\n```bash\nping 192.168.1.100\n```\n\n---\n\n## Access denied\n\nCause :\n\nMauvais identifiant.\n\nVérifier :\n\n- utilisateur\n- mot de passe\n- clé SSH\n\n---\n\n## Timeout\n\nCauses :\n\n- Firewall\n- Mauvaise IP\n- Port fermé\n\nTester :\n\n```bash\ntelnet IP 22\n```\n\nou\n\n```bash\nTest-NetConnection IP -Port 22\n```\n\n---\n\n# 16. Raccourcis utiles\n\nNouvelle fenêtre :\n\n```\nCtrl + N\n```\n\nFermer :\n\n```\nAlt + F4\n```\n\nCopier :\n\nSélection souris\n\nColler :\n\nClic droit\n\n---\n\n# 17. Schéma de connexion\n\n```text\n           +-------------------+\n           |      PuTTY        |\n           +---------+---------+\n                     |\n          SSH (22)   |   Telnet (23)\n                     |\n         +-----------+-----------+\n         |                       |\n     Linux Server          Cisco Switch\n         |                       |\n         +-----------+-----------+\n                     |\n              Console Série\n                 (COM3)\n```\n\n---\n\n# 18. À retenir pour les examens\n\n| Élément | Valeur |\n|----------|--------|\n| SSH | Port 22 |\n| Telnet | Port 23 |\n| Console Cisco | 9600 bauds |\n| Protocole sécurisé | SSH |\n| Copier | Sélection souris |\n| Coller | Clic droit |\n| Clé privée | `.ppk` |\n| Générateur de clés | PuTTYgen |\n| Copie de fichiers | PSCP |\n| SFTP | PSFTP |\n\n---\n\n# 19. Résumé\n\n✔ PuTTY est un client de connexion à distance sous Windows.\n\n✔ SSH (port 22) est le protocole à privilégier pour une connexion sécurisée.\n\n✔ Telnet (port 23) est obsolète et non chiffré.\n\n✔ La connexion série est indispensable pour la configuration initiale des équipements réseau.\n\n✔ Les sessions enregistrées permettent de gagner du temps.\n\n✔ Les clés SSH offrent une authentification plus sécurisée que les mots de passe.\n\n✔ Les outils PSCP et PSFTP permettent de transférer des fichiers de manière sécurisée."
  },
  {
    "id": "windows-01-diskpart",
    "title": "DiskPart : Gestion Avancée des Disques et Partitions",
    "category": "windows",
    "categoryName": "🪟 Windows & AD",
    "date": "20 Juillet 2026",
    "readTime": "7 min",
    "tags": [
      "ActiveDirectory",
      "Admin",
      "Windows"
    ],
    "excerpt": "**DiskPart** est un outil en ligne de commande intégré à Windows permettant de gérer les **disques, partitions et volumes**.",
    "filePath": "Assets/obsidian/05_Windows/01_Outils/05_Diskpart/01_Diskpart.md",
    "content": "# DiskPart — Gestion avancée des disques Windows\n\n## 1. Présentation\n\n**DiskPart** est un outil en ligne de commande intégré à Windows permettant de gérer les **disques, partitions et volumes**.\n\nIl permet de remplacer l’outil graphique **Gestion des disques** (`diskmgmt.msc`) avec davantage de possibilités.\n\n### Utilisations principales\n\n- Initialiser un disque\n    \n- Créer / supprimer des partitions\n    \n- Formater un volume\n    \n- Modifier une lettre de lecteur\n    \n- Étendre ou réduire une partition\n    \n- Nettoyer complètement un disque\n    \n- Convertir MBR ↔ GPT\n    \n- Dépanner un démarrage Windows\n    \n\nCommande d’ouverture :\n\n```cmd\ndiskpart\n```\n\n DiskPart nécessite généralement des droits **administrateur**.\n\n---\n\n# 2. Notions importantes\n\n## Disque physique\n\nUn disque réel connecté à la machine :\n\nExemples :\n\n```\nDisque 0 → SSD système\nDisque 1 → HDD données\nDisque 2 → Clé USB\n```\n\n---\n\n## Partition\n\nUne division logique d’un disque.\n\nExemple :\n\n```\nDisque 0\n│\n├── Partition EFI (démarrage)\n├── C: Windows\n└── D: Données\n```\n\n---\n\n## Volume\n\nUne partition formatée avec un système de fichiers.\n\nExemple :\n\n```\nPartition\n      ↓\nFormatage NTFS\n      ↓\nVolume C:\n```\n\n---\n\n# 3. Lancer DiskPart\n\nOuvrir CMD ou PowerShell en administrateur :\n\n```cmd\ndiskpart\n```\n\nSortir :\n\n```cmd\nexit\n```\n\n---\n\n# 4. Voir les disques disponibles\n\n## Afficher les disques\n\n```cmd\nlist disk\n```\n\nExemple :\n\n```\n  Disque ###   Taille\n  ----------   ------\n  Disque 0     512 GB\n  Disque 1     1 TB\n```\n\n---\n\n## Sélectionner un disque\n\n```cmd\nselect disk X\n```\n\nExemple :\n\n```cmd\nselect disk 1\n```\n\nVérifier le disque sélectionné :\n\n```cmd\ndetail disk\n```\n\n Toujours vérifier avant une suppression.\n\n---\n\n# 5. Gestion des partitions\n\n## Afficher les partitions\n\n```cmd\nlist partition\n```\n\n---\n\n## Sélectionner une partition\n\n```cmd\nselect partition X\n```\n\nExemple :\n\n```cmd\nselect partition 2\n```\n\n---\n\n## Supprimer une partition\n\n```cmd\ndelete partition\n```\n\nSuppression forcée :\n\n```cmd\ndelete partition override\n```\n\n Supprime définitivement les données.\n\n---\n\n# 6. Création d'une partition\n\n## Créer une partition primaire\n\n```cmd\ncreate partition primary\n```\n\nAvec une taille précise :\n\n```cmd\ncreate partition primary size=50000\n```\n\nLa taille est en Mo.\n\nExemple :\n\n```\n50000 Mo ≈ 50 Go\n```\n\n---\n\n## Créer une partition EFI\n\nPour un système UEFI :\n\n```cmd\ncreate partition efi size=100\n```\n\n---\n\n## Créer une partition MSR\n\nPartition réservée Microsoft :\n\n```cmd\ncreate partition msr size=16\n```\n\n---\n\n# 7. Formatage d’un volume\n\n## Formatage rapide NTFS\n\n```cmd\nformat fs=ntfs quick\n```\n\n---\n\n## Formatage FAT32\n\n```cmd\nformat fs=fat32 quick\n```\n\n---\n\n## Donner un nom au volume\n\n```cmd\nformat fs=ntfs label=\"DATA\" quick\n```\n\nRésultat :\n\n```\nVolume DATA\n```\n\n---\n\n# 8. Attribution d’une lettre de lecteur\n\n## Ajouter une lettre\n\n```cmd\nassign letter=E\n```\n\nRésultat :\n\n```\nPartition → E:\n```\n\n---\n\n## Supprimer une lettre\n\n```cmd\nremove letter=E\n```\n\n---\n\n# 9. Nettoyer un disque\n\n## Nettoyage classique\n\n```cmd\nclean\n```\n\nEfface :\n\n- Table des partitions\n    \n- Informations de formatage\n    \n\nLes données deviennent invisibles mais peuvent parfois être récupérées.\n\n---\n\n## Effacement complet\n\n```cmd\nclean all\n```\n\nÉcrit des zéros sur tout le disque.\n\nAvantages :\n\n- Suppression définitive\n    \n- Préparation avant revente\n    \n\nInconvénient :\n\n- Très long\n    \n\n---\n\n# 10. Conversion MBR / GPT\n\n## Voir le type de partition\n\n```cmd\nlist disk\n```\n\nColonne :\n\n```\nGPT\n *\n```\n\nSi une étoile apparaît :\n\n```\nDisque GPT\n```\n\n---\n\n## Convertir en GPT\n\n```cmd\nconvert gpt\n```\n\nUtilisation :\n\n- Machines UEFI\n    \n- Windows 10/11 modernes\n    \n- Disques > 2 To\n    \n\n---\n\n## Convertir en MBR\n\n```cmd\nconvert mbr\n```\n\nUtilisation :\n\n- Anciennes machines BIOS\n    \n\n Nécessite généralement un disque vide.\n\n---\n\n# 11. Gestion des volumes\n\n## Voir les volumes\n\n```cmd\nlist volume\n```\n\nExemple :\n\n```\nVolume 0   C   NTFS\nVolume 1   D   NTFS\n```\n\n---\n\n## Sélectionner un volume\n\n```cmd\nselect volume X\n```\n\n---\n\n## Étendre un volume\n\n```cmd\nextend\n```\n\nAvec une taille :\n\n```cmd\nextend size=10000\n```\n\n---\n\n## Réduire un volume\n\nVoir l’espace disponible :\n\n```cmd\nshrink querymax\n```\n\nRéduire :\n\n```cmd\nshrink desired=5000\n```\n\n---\n\n# 12. Cas dépannage Windows\n\n## Réparer le démarrage avec DiskPart\n\nAfficher les partitions :\n\n```cmd\nlist volume\n```\n\nTrouver :\n\n```\nPartition EFI\nFAT32\n100-300 Mo\n```\n\nSélection :\n\n```cmd\nselect volume X\n```\n\nAttribuer une lettre temporaire :\n\n```cmd\nassign letter=S\n```\n\nPuis réparer le boot :\n\n```cmd\nbcdboot C:\\Windows /s S:\n```\n\n---\n\n# 13. Disques dynamiques\n\nAfficher les détails :\n\n```cmd\ndetail disk\n```\n\nConversion :\n\n```cmd\nconvert dynamic\n```\n\nRetour :\n\n```cmd\nconvert basic\n```\n\nUtilisation des disques dynamiques :\n\n- RAID logiciel\n    \n- Volumes étendus\n    \n- Volumes fractionnés\n    \n\n---\n\n# 14. Commandes essentielles à connaître\n\n|Action|Commande|\n|---|---|\n|Lancer DiskPart|`diskpart`|\n|Voir les disques|`list disk`|\n|Choisir un disque|`select disk X`|\n|Voir les partitions|`list partition`|\n|Créer une partition|`create partition primary`|\n|Supprimer une partition|`delete partition`|\n|Formater NTFS|`format fs=ntfs quick`|\n|Donner une lettre|`assign letter=X`|\n|Voir les volumes|`list volume`|\n|Nettoyer un disque|`clean`|\n|Effacer totalement|`clean all`|\n|Convertir GPT|`convert gpt`|\n|Convertir MBR|`convert mbr`|\n\n---\n\n# 15. MBR vs GPT (à connaître en réseau/système)\n\n|MBR|GPT|\n|---|---|\n|Ancien standard|Nouveau standard|\n|BIOS|UEFI|\n|Maximum ~2 To|Plusieurs To|\n|4 partitions principales|Jusqu’à 128 partitions|\n|Moins sécurisé|Table de partition protégée|\n\n---\n\n# 16. Exemple complet : préparer un disque neuf\n\nObjectif :\n\nCréer un disque NTFS avec une partition complète.\n\n```cmd\ndiskpart\n\nlist disk\n\nselect disk 1\n\nclean\n\nconvert gpt\n\ncreate partition primary\n\nformat fs=ntfs quick\n\nassign letter=D\n\nexit\n```\n\nRésultat :\n\n```\nDisque 1\n└── Partition NTFS\n        └── D:\n```\n\n---\n\n# À retenir pour une école d’ingénieur réseau\n\n## Les commandes indispensables :\n\n```cmd\nlist disk\nselect disk\nclean\nconvert gpt\ncreate partition primary\nformat fs=ntfs quick\nassign letter=\nlist volume\n```\n\n## Logique générale :\n\n```\nDisque physique\n        ↓\nPartition\n        ↓\nFormatage\n        ↓\nVolume\n        ↓\nLettre de lecteur\n```\n\n"
  },
  {
    "id": "windows-01-winscp",
    "title": "WinSCP : Transferts Sécurisés SFTP/SCP & Gestion Distante",
    "category": "windows",
    "categoryName": "🪟 Windows & AD",
    "date": "20 Juillet 2026",
    "readTime": "8 min",
    "tags": [
      "ActiveDirectory",
      "Admin",
      "Windows"
    ],
    "excerpt": "WinSCP est un logiciel **client de transfert de fichiers sécurisé** utilisé principalement par les administrateurs systèmes et réseaux.",
    "filePath": "Assets/obsidian/05_Windows/01_Outils/06_WinSCP/01_WinSCP.md",
    "content": "# WinSCP — Fiche complète de révision (Administration système & réseau)\n\n# 1. Présentation de WinSCP\n\nWinSCP est un logiciel **client de transfert de fichiers sécurisé** utilisé principalement par les administrateurs systèmes et réseaux.\n\nIl permet de transférer des fichiers entre :\n\n- Un poste Windows\n    \n- Un serveur distant (Linux, Windows Server, NAS, etc.)\n    \n\nvia des protocoles sécurisés.\n\n---\n\n# 2. À quoi sert WinSCP ?\n\nUtilisations courantes :\n\n- Envoyer des fichiers vers un serveur\n    \n- Récupérer des fichiers depuis un serveur\n    \n- Modifier des fichiers de configuration à distance\n    \n- Déployer des applications\n    \n- Sauvegarder des données\n    \n- Administrer des serveurs Linux depuis Windows\n    \n\nExemples en entreprise :\n\n```text\nTechnicien Windows\n        ↓\nWinSCP\n        ↓\nServeur Linux\n        ↓\nFichiers de configuration\n```\n\n---\n\n# 3. Fonctionnement client / serveur\n\nWinSCP fonctionne selon un modèle :\n\n```text\nClient                          Serveur\n\nWindows                         Linux\nWinSCP  ───────────────────►    SSH Server\n\n        Transfert fichiers\n```\n\nLe poste utilisateur est le **client**.\n\nLe serveur doit avoir un service compatible :\n\n- SSH\n    \n- SFTP\n    \n- FTP\n    \n- WebDAV\n    \n\n---\n\n# 4. Protocoles supportés\n\n## SFTP (recommandé)\n\n**SSH File Transfer Protocol**\n\nPort :\n\n```text\n22/TCP\n```\n\nAvantages :\n\n Chiffré  \n Authentification sécurisée  \n Utilisé en entreprise\n\nExemple :\n\n```text\nWinSCP → Serveur Linux via SSH\n```\n\n---\n\n# SCP\n\n**Secure Copy Protocol**\n\nPort :\n\n```text\n22/TCP\n```\n\nPermet de copier des fichiers via SSH.\n\nExemple :\n\n```bash\nscp fichier.txt user@serveur:/home/user/\n```\n\n---\n\n# FTP\n\n**File Transfer Protocol**\n\nPorts :\n\n```text\n21/TCP → Commandes\n20/TCP → Données\n```\n\nProblème :\n\n Non chiffré\n\nLes identifiants peuvent être interceptés.\n\n---\n\n# FTPS\n\nFTP sécurisé avec TLS.\n\nAvantages :\n\n Chiffrement  \n Compatible avec certains environnements FTP\n\n---\n\n# WebDAV\n\nPermet de gérer des fichiers via HTTP/HTTPS.\n\n---\n\n# 5. Installation de WinSCP\n\nÉtapes :\n\n1. Télécharger WinSCP depuis le site officiel\n    \n2. Installer le logiciel\n    \n3. Choisir l’interface :\n    \n\nDeux modes :\n\n## Interface Commander\n\nRessemble à un gestionnaire de fichiers :\n\n```\nGauche              Droite\n\nPC local            Serveur distant\n```\n\n---\n\n## Interface Explorer\n\nRessemble à Windows Explorer.\n\n---\n\n# 6. Connexion à un serveur\n\nFenêtre de connexion :\n\nInformations nécessaires :\n\n|Champ|Description|\n|---|---|\n|Protocole|SFTP, SCP, FTP|\n|Nom d’hôte|Adresse IP ou DNS|\n|Port|Port du service|\n|Utilisateur|Compte serveur|\n|Mot de passe|Authentification|\n\nExemple :\n\n```\nProtocole : SFTP\nHôte : 192.168.1.50\nPort : 22\nUtilisateur : admin\n```\n\n---\n\n# 7. Authentification\n\n## Mot de passe\n\nMéthode simple :\n\n```\nUtilisateur\n+\nMot de passe\n```\n\nMoins sécurisé.\n\n---\n\n## Clé SSH (recommandé)\n\nPrincipe :\n\n```text\nClé privée\n     ↓\nPoste client\n\nClé publique\n     ↓\nServeur\n```\n\nAvantages :\n\n Pas de mot de passe envoyé  \n Plus sécurisé  \n Utilisé en entreprise\n\n---\n\n# 8. Transfert de fichiers\n\n## Envoyer un fichier\n\n```text\nPC local\n    ↓\nGlisser-déposer\n    ↓\nServeur\n```\n\nExemple :\n\n```\nconfig.txt\n        ↓\n/etc/application/\n```\n\n---\n\n## Télécharger un fichier\n\nInverse :\n\n```\nServeur\n    ↓\nPC local\n```\n\n---\n\n# 9. Gestion des permissions Linux\n\nLors d’un transfert vers Linux, il faut comprendre les droits :\n\nExemple :\n\n```bash\n-rwxr-xr--\n```\n\nDécoupage :\n\n```\n- rwx r-x r--\n│ │   │   │\n│ │   │   └── Autres\n│ │   └────── Groupe\n│ └────────── Propriétaire\n└──────────── Type\n```\n\n---\n\n## Modifier les permissions dans WinSCP\n\nClic droit :\n\n```\nPropriétés\n→ Permissions\n```\n\nEquivalent Linux :\n\n```bash\nchmod\n```\n\nExemple :\n\n```bash\nchmod 755 fichier.sh\n```\n\nRésultat :\n\n```\nPropriétaire : lecture écriture exécution\nGroupe       : lecture exécution\nAutres       : lecture exécution\n```\n\n---\n\n# 10. Édition de fichiers à distance\n\nWinSCP permet :\n\n```\nClic droit\n→ Modifier\n```\n\nExemples :\n\n- Fichiers de configuration Linux\n    \n- Scripts Bash\n    \n- Pages Web\n    \n- Fichiers JSON/XML\n    \n\n---\n\nExemple :\n\nModifier :\n\n```\n/etc/ssh/sshd_config\n```\n\nPuis :\n\n```\nSauvegarder\nRedémarrer service SSH\n```\n\n---\n\n# 11. Synchronisation de dossiers\n\nFonction :\n\n```\nSynchroniser\n```\n\nPermet de comparer :\n\n```\nPC local\n     ↔\nServeur\n```\n\nModes :\n\n## Local → Distant\n\nEnvoi des modifications.\n\n---\n\n## Distant → Local\n\nRécupération des modifications.\n\n---\n\n## Bidirectionnel\n\nSynchronisation dans les deux sens.\n\n---\n\n# 12. Automatisation avec WinSCP\n\nWinSCP possède une interface en ligne de commande.\n\nCommande :\n\n```cmd\nwinscp.com\n```\n\n---\n\nExemple script :\n\n```txt\nopen sftp://user:password@192.168.1.50/\n\nput fichier.txt\n\nexit\n```\n\n---\n\nUtilisation :\n\n- Sauvegardes automatiques\n    \n- Déploiements\n    \n- Transferts planifiés\n    \n\n---\n\n# 13. Journalisation (logs)\n\nLes logs permettent de voir :\n\n- Connexions\n    \n- Erreurs\n    \n- Transferts\n    \n- Problèmes réseau\n    \n\nActiver :\n\n```\nOptions\n→ Préférences\n→ Journalisation\n```\n\n---\n\n# 14. Dépannage WinSCP\n\n## Erreur : Connection refused\n\nCauses :\n\n- Serveur SSH arrêté\n    \n- Mauvais port\n    \n- Pare-feu\n    \n\nVérifications :\n\nTester le port :\n\n```powershell\nTest-NetConnection IP -Port 22\n```\n\n---\n\n# Erreur : Authentication failed\n\nCauses :\n\n- Mauvais utilisateur\n    \n- Mauvais mot de passe\n    \n- Clé SSH incorrecte\n    \n\nSolution :\n\n- Vérifier le compte\n    \n- Vérifier les clés\n    \n\n---\n\n# Erreur : Permission denied\n\nCause :\n\nL’utilisateur n’a pas les droits.\n\nSolutions :\n\nLinux :\n\n```bash\nchmod\nchown\n```\n\nExemple :\n\n```bash\nsudo chown user:user fichier.txt\n```\n\n---\n\n# Erreur : Timeout\n\nCauses :\n\n- Problème réseau\n    \n- Adresse IP incorrecte\n    \n- Serveur inaccessible\n    \n\nTests :\n\n```cmd\nping IP_du_serveur\n```\n\nPuis :\n\n```cmd\ntracert IP_du_serveur\n```\n\n---\n\n# 15. Sécurité avec WinSCP\n\nBonnes pratiques :\n\n Utiliser SFTP plutôt que FTP  \n Utiliser des clés SSH  \n Ne pas enregistrer les mots de passe sensibles  \n Vérifier l’empreinte SSH du serveur  \n Limiter les droits utilisateurs\n\n---\n\n# 16. WinSCP en environnement professionnel\n\nExemples d’utilisation :\n\n## Administration Linux\n\n```\nWindows Admin\n      ↓\nWinSCP\n      ↓\nServeur Linux\n```\n\n---\n\n## Déploiement Web\n\n```\nDéveloppeur\n      ↓\nWinSCP\n      ↓\nServeur Web Apache/Nginx\n```\n\n---\n\n## Sauvegarde\n\n```\nServeur\n   ↓\nWinSCP\n   ↓\nStockage distant\n```\n\n---\n\n# 17. Commandes Linux utiles avec WinSCP\n\nVoir les fichiers :\n\n```bash\nls\n```\n\nChanger de dossier :\n\n```bash\ncd\n```\n\nCréer un dossier :\n\n```bash\nmkdir\n```\n\nCopier :\n\n```bash\ncp\n```\n\nDéplacer :\n\n```bash\nmv\n```\n\nSupprimer :\n\n```bash\nrm\n```\n\nPermissions :\n\n```bash\nchmod\n```\n\nPropriétaire :\n\n```bash\nchown\n```\n\n---\n\n# 18. Comparaison des protocoles\n\n| Protocole | Sécurité | Port   | Utilisation            |\n| --------- | -------- | ------ | ---------------------- |\n| FTP       | Faible   | 21     | Ancien transfert       |\n| FTPS      | TLS      | 21/990 | FTP sécurisé           |\n| SCP       | SSH      | 22     | Copie simple           |\n| SFTP      |  SSH     | 22     | Administration moderne |\n| WebDAV    | Variable | 80/443 | Partage fichiers       |\n\n---\n\n# 19. À retenir pour une école d’ingénieur réseau\n\n## WinSCP =\n\n```\nClient Windows\n       +\nSSH/SFTP\n       +\nServeur distant\n       =\nTransfert sécurisé de fichiers\n```\n\n---\n\n## Points essentiels :\n\n- SFTP utilise SSH sur le port 22\n    \n- SCP permet la copie via SSH\n    \n- FTP n’est pas sécurisé\n    \n- Les permissions Linux sont importantes\n    \n- Les clés SSH sont préférées aux mots de passe\n    \n- WinSCP est un outil d’administration système\n    \n\n---\n\n# Résumé rapide\n\n|Élément|À retenir|\n|---|---|\n|Type|Client de transfert de fichiers|\n|Principal protocole|SFTP|\n|Port SFTP|22|\n|Sécurité|SSH|\n|Usage|Administration serveur|\n|Alternative Linux|scp / sftp|\n|Problèmes fréquents|Droits, SSH, réseau|\n"
  },
  {
    "id": "windows-01-connexion-ssh-sur-machine-linux-de-base-depuis-windows",
    "title": "SSH Windows vers Linux : Connexion, Clés & Authentification",
    "category": "windows",
    "categoryName": "🪟 Windows & AD",
    "date": "28 Juin 2026",
    "readTime": "2 min",
    "tags": [
      "ActiveDirectory",
      "Admin",
      "SSH",
      "Windows",
      "demande"
    ],
    "excerpt": "- il faut une machine linux avec SSH d'installer dessus sinon voir [[01_Installation_SSH]]",
    "filePath": "Assets/obsidian/05_Windows/02_Administrations/01_Connexion_SSH_sur_machine_linux_de_base_depuis_Windows.md",
    "content": "prérequis :\n- il faut une machine linux avec SSH d'installer dessus sinon voir [[01_Installation_SSH]]\n- avoir l'IP de la machine, le nom d'utilisateur et le mot de passe de l'utilisateur voir [[01_Commande_de_base_linux]]\n\nsur Windows :\n- aller dans le cmd (appuyer sur les touches Windows + r et écrire cmd puis appuyer sur entrée)\n\n- dans le cmd :\n```bash\nssh nom_utilisateur@ip_machine\n#saisir le mot de passe\n#demande pour la 1ère connexion si on est sûr écrire yes\n```\n\n> [!warning]\n> important : \n> - il ne faut pas faire de faute d'orthographe sinon ça ne marche pas \n\n"
  },
  {
    "id": "linux-a1-raccourcie-ubuntu",
    "title": "Ubuntu & Terminal : Raccourcis Bash et Commandes Clés",
    "category": "linux",
    "categoryName": "🐧 GNU/Linux",
    "date": "20 Juillet 2026",
    "readTime": "5 min",
    "tags": [
      "Linux",
      "SysAdmin",
      "Ubuntu"
    ],
    "excerpt": "Raccourcis indispensables au quotidien pour gérer plusieurs fenêtres et terminaux sous l'environnement Gnome d'Ubuntu.",
    "filePath": "Assets/obsidian/06_Ubuntu/A1_Raccourcie_Ubuntu.md",
    "content": "\n#  Raccourcis Clés Ubuntu & Terminal\n\n---\n\n##  1. Navigation Système & Fenêtres (GUI)\n\nRaccourcis indispensables au quotidien pour gérer plusieurs fenêtres et terminaux sous l'environnement Gnome d'Ubuntu.\n\n| Raccourci | Action | Utilité en TP / Lab |\n| :--- | :--- | :--- |\n| `Ctrl` + `Alt` + `T` | **Ouvrir un nouveau Terminal** | L'un des raccourcis les plus utilisés |\n| `Super` (Touche Windows) | **Vue d'ensemble / Recherche d'apps** | Lancer rapidement Wireshark, GNS3, etc. |\n| `Super` + `Flèche Gauche / Droite` | **Ancrer la fenêtre à gauche / droite** | Mettre un cours à gauche et le terminal à droite |\n| `Super` + `Tab` ou `Alt` + `Tab` | **Passer d'une application à l'autre** | Navigation rapide inter-fenêtres |\n| `Ctrl` + `Alt` + `Flèche Haut / Bas` | **Changer d'espace de travail (Workspace)** | Séparer la partie Web / Documentation des Labs réseau |\n| `Super` + `L` | **Verrouiller la session** | Bon réflexe de sécurité en salle de TP |\n\n---\n\n##  2. Gestion du Terminal (La base du travail Réseau)\n\nLe terminal est votre outil principal. Maîtriser sa manipulation gagne un temps précieux lors des configurations.\n\n### Onglets et Fenêtres\n- **`Ctrl` + `Shift` + `T`** : Ouvrir un nouvel onglet dans le terminal.\n- **`Ctrl` + `Shift` + `W`** : Fermer l'onglet actuel.\n- **`Ctrl` + `Shift` + `N`** : Ouvrir une nouvelle fenêtre de terminal.\n- **`Alt` + `1`, `2`, `3`...** : Passer directement à l'onglet $N$.\n\n### Affichage & Lecture\n- **`Ctrl` + `Shift` + `+` / `Ctrl` + `-`** : Zoomer / Dézoomer dans le terminal (très pratique pour les présentations ou analyses de logs).\n- **`Ctrl` + `L`** : Effacer l'écran (*équivalent de la commande `clear`*).\n- **`Shift` + `Page Up` / `Page Down`** : Défiler dans le terminal sans toucher à la souris.\n\n---\n\n##  3. Édition & Navigation en Ligne de Commande (Bash)\n\nGagner en vitesse lors de la saisie de commandes longues (SSH, scripts, adresses IP).\n\n### Déplacement du Curseur\n- **`Ctrl` + `A`** : Aller au tout début de la ligne.\n- **`Ctrl` + `E`** : Aller à la toute fin de la ligne.\n- **`Alt` + `B`** : Reculer d'un mot (*Back*).\n- **`Alt` + `F`** : Avancer d'un mot (*Forward*).\n\n### Correction & Suppression\n- **`Ctrl` + `U`** : Effacer tout du curseur jusqu'au début de la ligne.\n- **`Ctrl` + `K`** : Effacer tout du curseur jusqu'à la fin de la ligne.\n- **`Ctrl` + `W`** : Effacer le mot précédent le curseur.\n- **`Ctrl` + `Y`** : Coller le texte supprimé récemment via `Ctrl+U/K/W` (*Yank*).\n\n### Historique & Auto-complétion\n- **`Tab`** : **Auto-complétion** (appuyer 2 fois pour afficher toutes les propositions). *À utiliser sans modération.*\n- **`Ctrl` + `R`** : **Recherche inversée dans l'historique** (taper quelques lettres d'une ancienne commande pour la retrouver).\n- **`Ctrl` + `G`** : Quitter la recherche d'historique (`Ctrl + R`).\n- **`!!`** : Re-exécuter la toute dernière commande (*ex: `sudo !!` si vous avez oublié `sudo`*).\n- **`!$`** : Récupérer le dernier argument de la commande précédente (*ex: `cat !$`*).\n\n---\n\n##  4. Contrôle des Processus & Signaux\n\nSécurité et gestion des processus bloqués (Pings infinis, scripts, captures réseau).\n\n- **`Ctrl` + `C`** : Interrompre/Stopper le processus en cours (*Envoyer SIGINT* — ex: arrêter un `ping` ou une capture `tcpdump`).\n- **`Ctrl` + `Z`** : Suspendre le processus en cours et le mettre en arrière-plan (*Envoyer SIGTSTP*).\n  - Pour le relancer au premier plan : taper `fg`.\n  - Pour le laisser tourner en arrière-plan : taper `bg`.\n- **`Ctrl` + `D`** : Envoyer la fin de fichier (*EOF*) / Quitter le shell ou la session SSH courante (*équivalent de `exit`*).\n\n---\n\n##  Conseils Spéciaux :\n\n> [!TIP] Outils recommandés pour aller plus loin\n> - **Tmux / Screen** : Indispensable pour gérer plusieurs sessions shell/SSH dans une seule fenêtre terminal.\n> - **Aliasing** : Créez des raccourcis personnalisés dans votre fichier `~/.bashrc` ou `~/.zshrc` :\n>   ```bash\n>   alias ipa='ip -c a'          # Affiche les IP avec de la couleur\n>   alias myip='curl ifconfig.me' # Affiche votre IP publique\n>   ```\n\n\n\n"
  },
  {
    "id": "linux-01-installation-fog-debian-serveur-de-deploiment",
    "title": "FOG Project : Installation & Déploiement PXE d'Images Systèmes",
    "category": "linux",
    "categoryName": "🐧 GNU/Linux",
    "date": "26 Juin 2026",
    "readTime": "2 min",
    "tags": [
      "FOG",
      "Linux",
      "SysAdmin",
      "Ubuntu"
    ],
    "excerpt": "installation d' un serveur de déploiement FOG sous Debian",
    "filePath": "Assets/obsidian/06_Ubuntu/01_Outils/01_FOG/01_Installation_FOG_Debian_serveur_de_déploiment.md",
    "content": "\n> [!info]\n>installation d' un serveur de déploiement FOG sous Debian\n\n- Permission root \n```shell\nsu -\n```\n- demande le mot de passe admin/root\n\n![[Pasted image 20260626095734.png]]\n\n- Déplacez-vous dans le répertoire tmp :\n\n```shell\ncd /tmp\n```\n\n- Téléchargez l’archive de la dernière version stable disponible de Fog Server : \n\n```shell\nwget https://github.com/FOGProject/fogproject/archive/stable.tar.gz\n```\n\n- Décompressez l’archive : \n\n```shell\ntar xvf stable.tar.gz\n```\n\n- Exécutez le script d’installation de Fog : \n\n```shell\nfogproject-stable/bin/installfog.sh\n```\n\nÀ partir de maintenant, il faudra répondre aux questions du setup afin de procéder aux configurations.\n\n- Saisissez le numéro correspondant au système d’exploitation sur lequel l’installation va s’effectuer. Pour ce cours nous sommes sur Debian, il faut donc saisir “2” et appuyer sur la touche Entrée.\n\n![[Pasted image 20260626100140.png]]\n\nfaire suite "
  },
  {
    "id": "docker-00-installation-docker",
    "title": "Docker : Installation et Configuration sous Ubuntu / Debian",
    "category": "docker",
    "categoryName": "🐳 Docker & Conteneurs",
    "date": "28 Juin 2026",
    "readTime": "2 min",
    "tags": [
      "Compose",
      "Conteneurs",
      "Docker"
    ],
    "excerpt": "- docker permet de faire des conteneur de service et les automatise et les rends portable si volume.",
    "filePath": "Assets/obsidian/06_Ubuntu/01_Outils/02_Docker/00_Installation_Docker.md",
    "content": "- docker permet de faire des conteneur de service et les automatise et les rends portable si volume.\n\n```bash\n# 1. Mise à jour du système\nsudo apt update && sudo apt upgrade -y\n\n# 2. Installation de Docker et de son plugin Compose\nsudo apt install -y docker.io docker-compose-plugin\n\n# 3. Activation du service au démarrage\nsudo systemctl enable --now docker\n```\n\n- page suivante [[01_Dockerfile]]\n"
  },
  {
    "id": "docker-01-dockerfile",
    "title": "Dockerfile : Conception, Instructions & Création d'Images",
    "category": "docker",
    "categoryName": "🐳 Docker & Conteneurs",
    "date": "27 Juin 2026",
    "readTime": "11 min",
    "tags": [
      "Compose",
      "Conteneurs",
      "Docker"
    ],
    "excerpt": "Un Dockerfile, c'est littéralement une **une image que tu crée**. C'est un simple fichier texte qui dit à Docker étape par étape comment fabriquer ton conteneur...",
    "filePath": "Assets/obsidian/06_Ubuntu/01_Outils/02_Docker/01_Dockerfile.md",
    "content": "\n### 1. C'est quoi un Dockerfile ?\n\nUn Dockerfile, c'est littéralement une **une image que tu crée**. C'est un simple fichier texte qui dit à Docker étape par étape comment fabriquer ton conteneur.\n\n### 2. notion de Base : \n\n- Le `Dockerfile` est le plan de construction de la maison.\n- L'`Image` est la maison construite mais vide. \n- Le `Conteneur`, c'est quand tu rentres dans la maison et que tu allumes la lumière.\n\n### 3. pratique a la créations du fichier :\n\n> [!warning]\n> \n> - il faut impérativement appeler le fichier Dockerfile\n> - ne pas oublier les ==.== dans les commande\n> \n\n> [!example]\n> \n> ```Dockerfile\n> # Étape 1 : Les fondations\n> FROM python:3.12-slim\n> \n> # Étape 2 : Le bureau de travail\n> WORKDIR /app\n> \n> # Étape 3 : Le transfert\n> COPY traqueur.py .\n> \n> # Étape 4 : L'installation\n> RUN pip install requests beautifulsoup4\n> \n> # Étape 5 : L'allumage\n> CMD [\"python\", \"traqueur.py\"]\n> ```\n\n\n> [!Explication]\n> - **`FROM` (Le point de départ) :** Tu ne crées jamais un conteneur à partir de rien. Ici, tu dis : _\"Docker, va chercher une boîte vide sur Internet, mais qui a déjà un mini Linux et Python 3.12 d'installés dedans\"_.\n>     \n> - **`WORKDIR` (Le dossier de travail) :** C'est l'équivalent de faire un `cd /app`. Ça dit à Docker : _\"Tout ce qu'on va faire ensuite, crée-le et range-le dans un dossier appelé /app à l'intérieur du conteneur\"_.\n>     \n> - `COPY` (Le transfert de ton PC vers la boîte) :** Tu dis : _\"Prends le fichier `traqueur.py` qui est sur mon vrai PC Windows, et copie le à l'intérieur de la boîte\"_.\n>     \n> - **`RUN` (Pendant la construction) :** Ce sont les commandes que Docker va taper **une seule fois**, au moment où il fabrique la boîte. Ici, il installe les bibliothèques Python nécessaires pour que ton code fonctionne.\n>     \n> - **`CMD` (À l'allumage) :** C'est la différence majeure avec `RUN` ! La commande `CMD` ne s'exécute **pas** quand tu fabriques la boîte. Elle s'exécute uniquement au moment où quelqu'un va appuyer sur \"Play\" pour allumer le conteneur. Ici, on lui dit : _\"Quand tu t'allumes, lance mon script Python\"_. et je lui dit allume python et mon script.\n> \n\n```Dockerfile\ndocker build -t bot .\n```\n\n- `-t` sert a mettre un tag/nom au conteneur afin de le retrouver plus simplement.\n- le `.` est super important car c'est pour dire cherche le `Dockerfile` la ou je suis actuellement\n- il crée l'image grâce au `Docker build` donc il télécharge python et met tout ça dans un seul et même block\n\n```Dockerfile\ndocker run bot\n```\n\n- le `docker run` va exécuté va crée le conteneur et exécute la commande `CMD`. le conteneur bot tourne.\n\n### Phase 1 : La Construction \n\nC'est ici que tu dis à Docker de lire ton fameux `Dockerfile`.\n\n- **`docker build -t nom_du_projet:v1 .`**\n    \n    - **À quoi ça sert :** Construit ton image à partir du Dockerfile.\n        \n    - **Le secret pro :** Le `-t` (Tag) permet de donner un nom et une version. Si tu ne mets pas `:v1`, Docker mettra `:latest` par défaut. Le `.` à la fin est vital : il dit \"le Dockerfile est dans ce dossier\".\n        \n- **`docker build --no-cache -t nom_du_projet .`**\n    \n    - **À quoi ça sert :** Force Docker à tout reconstruire de zéro.\n        \n    - **Le secret pro :** Par défaut, Docker est feignant (et intelligent). S'il a déjà téléchargé Python hier, il ne le refera pas (il utilise son \"cache\"). Mais parfois, ton code a changé et Docker ne s'en rend pas compte. Cette commande force un nettoyage de printemps lors de la construction.\n        \n\n###  Phase 2 : Le Lancement \n\nTon image est construite. Maintenant, on l'allume pour voir si elle explose.\n\n- **`docker run -d --name test_bot mon_image`**\n    \n    - **À quoi ça sert :** Lance le conteneur.\n        \n    - **Le secret pro :** `-d` (Detached) lance le conteneur en arrière-plan pour te rendre la main sur ton terminal. `--name` te permet de lui donner un petit nom sympa au lieu du nom généré aléatoirement par Docker (genre _crazy_einstein_).\n        \n- **`docker run --rm -it mon_image`**\n    \n    - **À quoi ça sert :** Le mode \"Bac à sable jetable\".\n        \n    - **Le secret pro :** La commande préférée des développeurs. `--rm` veut dire \"Dès que je ferme ce conteneur, supprime-le, je ne veux aucune trace\". C'est parfait pour tester un script une seule fois.\n        \n\n###  Phase 3 : Le Débogage \n\nSpoiler : la première fois, ça ne marche **jamais**. Voici comment l'ingénieur enquête.\n\n- **`docker logs -f nom_du_conteneur`**\n    \n    - **À quoi ça sert :** Lire les journaux du conteneur.\n        \n    - **Le secret pro :** Si ton bot Python plante, tu ne verras rien s'il tourne en arrière-plan. Cette commande affiche ce que le conteneur \"écrit\" à l'écran. Le `-f` (Follow) laisse l'écran ouvert et affiche les nouvelles erreurs en temps réel.\n        \n- **`docker exec -it nom_du_conteneur /bin/sh` (ou `/bin/bash`)**\n    \n    - **À quoi ça sert :** Pénétrer à l'intérieur de la boîte pendant qu'elle tourne.\n        \n    - **Le secret pro :** C'est le **God Mode**. Ton conteneur tourne, mais il y a un bug ? Tu tapes cette commande et BOOM, ton terminal change. Tu es _à l'intérieur_ du Linux du conteneur. Tu peux fouiller dans les dossiers, voir si tes fichiers sont bien là, et comprendre pourquoi ça plante. Pour ressortir, tu tapes `exit`.\n        \n\n###  Phase 4 : Le Nettoyage\n\nDocker est un ogre. Si tu crées des images tous les jours, il va manger 50 Go de ton disque dur en un mois.\n\n- **`docker images`** et **`docker ps -a`**\n    \n    - **À quoi ça sert :** Voir toutes tes images stockées (`images`) et tous tes conteneurs, même éteints (`ps -a`).\n        \n- **`docker system prune -a`**\n    \n    - **À quoi ça sert :** Le bouton nucléaire. \n        \n    - **Le secret pro :** Cette commande efface **absolument tout** ce qui ne tourne pas actuellement (Les conteneurs éteints, les images inutilisées, les caches de construction). À faire une fois par mois pour récupérer 20 Go d'espace libre d'un coup.\n\n- **`FROM`**\n    \n    - **Utilité :** Définit le point de départ de ton conteneur. Tu ne pars jamais de zéro, tu prends toujours un système d'exploitation de base existant. **C'est toujours la première ligne d'un Dockerfile.**\n        \n    - _Exemple :_ `FROM ubuntu:22.04` ou `FROM python:3.12`\n        \n- **`WORKDIR`**\n    \n    - **Utilité :** Crée un dossier de travail à l'intérieur du conteneur et s'y déplace (c'est l'équivalent de faire `mkdir` suivi de `cd`). Tout ce qui suit se passera dans ce dossier.\n        \n    - _Exemple :_ `WORKDIR /app`\n        \n- **`COPY`**\n    \n    - **Utilité :** Copie des fichiers ou des dossiers depuis ton vrai PC (Windows) vers l'intérieur du conteneur.\n        \n    - _Exemple :_ `COPY traqueur.py .` _(Copie le fichier dans le dossier de travail actuel)_\n        \n- **`RUN`**\n    \n    - **Utilité :** Exécute une commande **pendant la fabrication** du conteneur (la phase de \"cuisson\"). C'est ici qu'on installe des logiciels, des mises à jour ou des bibliothèques.\n        \n    - _Exemple :_ `RUN apt-get update && apt-get install -y curl`\n        \n- **`CMD`**\n    \n    - **Utilité :** Définit l'action par défaut qui s'exécutera **uniquement quand le conteneur s'allume** (la phase \"Play\"). Il ne peut y avoir qu'un seul `CMD` par Dockerfile.\n        \n    - _Exemple :_ `CMD [\"python\", \"traqueur.py\"]`\n        \n\n###  Les Commandes Avancées (Pour sécuriser et optimiser)\n\n- **`ENV`**\n    \n    - **Utilité :** Déclare des \"Variables d'environnement\". C'est super utile pour stocker des mots de passe ou des paramètres modifiables sans avoir à les coder en dur dans tes scripts.\n        \n    - _Exemple :_ `ENV PORT=8080` ou `ENV DATABASE_PASSWORD=secret`\n        \n- **`EXPOSE`**\n    \n    - **Utilité :** C'est une instruction de documentation. Ça ne fait rien techniquement, mais ça prévient la personne qui lit le Dockerfile : _\"Attention, ce conteneur a besoin d'ouvrir ce port réseau pour fonctionner correctement.\"_\n        \n    - _Exemple :_ `EXPOSE 3000` _(Très utilisé pour des serveurs web ou Grafana)_\n        \n- **`USER`**\n    \n    - **Utilité :** Par défaut, un conteneur tourne avec les droits d'administrateur suprême (`root`). En cybersécurité, c'est dangereux. `USER` permet de dire au conteneur de tourner avec un compte utilisateur limité.\n        \n    - _Exemple :_ `USER bot_runner`\n        \n- **`VOLUME`**\n    \n    - **Utilité :** Crée un point de sauvegarde. Quand un conteneur est supprimé, tout ce qui est à l'intérieur disparaît. `VOLUME` permet de connecter un dossier du conteneur à un dossier de ton vrai PC pour que les données survivent (indispensable pour les bases de données ou les serveurs Minecraft).\n        \n    - _Exemple :_ `VOLUME /var/lib/mysql`\n        \n- **`ADD`**\n    \n    - **Utilité :** C'est le grand frère de `COPY`. Il copie des fichiers, mais il a deux super-pouvoirs : il peut télécharger un fichier directement depuis une adresse internet (URL), et il décompresse automatiquement les fichiers `.tar` ou `.zip` en les copiant.\n        \n    - _Exemple :_ `ADD https://site.com/fichier.zip /app/`\n        \n- **`ENTRYPOINT`**\n    \n    - **Utilité :** C'est le cousin de `CMD`. Il sert aussi à lancer le programme au démarrage, mais de manière beaucoup plus stricte. Si tu utilises `ENTRYPOINT`, l'utilisateur ne pourra pas facilement écraser la commande de démarrage en lançant le conteneur.\n        \n    - _Exemple :_ `ENTRYPOINT [\"nginx\", \"-g\", \"daemon off;\"]`\n\npage suivante [[02_docker_compose]]\n\npage pour illustré [[03_Lab_Docker]]\n"
  },
  {
    "id": "docker-02-docker-compose",
    "title": "Docker Compose : Architecture Multi-Conteneurs & Fichiers YAML",
    "category": "docker",
    "categoryName": "🐳 Docker & Conteneurs",
    "date": "2 Juillet 2026",
    "readTime": "7 min",
    "tags": [
      "Compose",
      "Conteneurs",
      "Docker"
    ],
    "excerpt": "docker compose version",
    "filePath": "Assets/obsidian/06_Ubuntu/01_Outils/02_Docker/02_docker_compose.md",
    "content": "\n```docker\ndocker --version\ndocker compose version\n```\n\n### 1. Pourquoi on a inventé Docker Compose ? \n\nImagine que tu veux héberger un site web (comme un forum ou un blog WordPress) sur ton serveur.\n\nPour que ça marche, tu n'as pas besoin d'un seul logiciel, tu en as besoin de deux :\n\n1. Un serveur web (ex: WordPress ou Nginx) pour afficher les pages.\n    \n2. Une base de données (ex: MySQL ou MariaDB) pour stocker les articles et les mots de passe.\n    \n\nSi tu devais le faire à la main avec les commandes classiques, tu devrais taper :\n\n1. `docker run -d --name base_de_donnees -e MYSQL_ROOT_PASSWORD=secret mysql:latest`\n    \n2. Prier pour que la base démarre.\n    \n3. `docker run -d --name mon_site -p 80:80 --link base_de_donnees:mysql wordpress:latest`\n    \n\nC'est fastidieux, source d'erreurs, et si tu dois redémarrer ton serveur, tu dois tout retaper.\n\n**La solution :** Docker Compose. Tu écris un seul fichier texte (le fichier `docker-compose.yml`), et avec **une seule commande**, Docker va télécharger, configurer, et relier tous tes conteneurs entre eux automatiquement.\n\n### 2. Anatomie d'un fichier `docker-compose.yml` \n\nLe fichier utilise le format YAML. C'est un format très strict sur l'indentation (les espaces en début de ligne), donc il faut être rigoureux.\n\nVoici l'architecture typique, expliquée ligne par ligne.\n\n```c\n# 1. La version du langage Compose\nversion: '3.8'\n\n# 2. La déclaration des boîtes (Les Services)\nservices:\n\n  # --- BOÎTE N°1 : La Base de données ---\n  db:\n    # L'image à télécharger\n    image: mysql:8.0\n    # On lui donne un nom sympa\n    container_name: ma_base_mysql\n    # On la redémarre automatiquement si le serveur plante\n    restart: always\n    # Les variables de configuration (mot de passe, etc.)\n    environment:\n      MYSQL_ROOT_PASSWORD: super_secret_password\n      MYSQL_DATABASE: wordpress_db\n    # On sauvegarde les données sur le PC physique pour ne rien perdre\n    volumes:\n      - mysql_data:/var/lib/mysql\n\n  # --- BOÎTE N°2 : Le Site Web ---\n  wordpress:\n    image: wordpress:latest\n    container_name: mon_site_wp\n    restart: always\n    # On ouvre le port 80 pour que le monde entier puisse voir le site\n    ports:\n      - \"80:80\"\n    # On branche le site à la base de données\n    environment:\n      WORDPRESS_DB_HOST: db:3306 # Magie ! On utilise le nom de la boîte 'db' au lieu d'une IP\n      WORDPRESS_DB_USER: root\n      WORDPRESS_DB_PASSWORD: super_secret_password\n      WORDPRESS_DB_NAME: wordpress_db\n    # On dit à Docker : \"Ne lance pas le site tant que la base de données n'est pas prête\"\n    depends_on:\n      - db\n\n# 3. La déclaration des sauvegardes (Volumes)\nvolumes:\n  mysql_data:\n```\n\n### 3. Les Concepts Clés à retenir \n\n- **L'Isolation Réseau (La Magie du DNS) :**\n    \n    C'est la plus grande force de Compose. Quand tu lances ce fichier, Docker crée un réseau privé invisible. À l'intérieur, les conteneurs s'appellent par leur nom. Le site `wordpress` n'a pas besoin de connaître l'adresse IP de la base de données. Il lui suffit de crier _\"Hé, `db` !\"_ pour s'y connecter.\n    \n- **Les Volumes (La Sauvegarde) :**\n    \n    Si tu supprimes un conteneur, tout son contenu est effacé. C'est embêtant pour une base de données. Le bloc `volumes:` à la fin permet de créer un \"disque dur persistant\" stocké sur ton vrai PC. Même si tu détruis le conteneur MySQL, tes données sont sauves et le prochain conteneur les reprendra.\n    \n- **`depends_on` (L'Ordre de Démarrage) :**\n    \n    Un site web plante si sa base de données n'est pas allumée. Cette instruction dit à Docker l'ordre chronologique d'allumage.\n    \n\n### 4. Les 3 Commandes du Chef d'Orchestre \n\nOublie les dizaines de commandes `docker run`. Avec Compose, tu te places dans le dossier où se trouve ton fichier `docker-compose.yml`, et tu utilises ces 3 commandes magiques :\n\n1. **L'Allumage Général :**\n    \n    ```\n    docker compose up -d\n    ```\n    \n    _Le `-d` (Detached) fait tourner tout ça en arrière-plan. Docker va tout construire, tout relier, et t'afficher des petits \"Done\" verts. Ton empire est en ligne._\n    \n2. **L'Arrêt Général :**\n    \n    ```\n    docker compose down\n    ```\n    \n    _Détruit les conteneurs et le réseau proprement, MAIS conserve tes volumes (tes données)._\n    \n3. **La Supervision :**\n    \n    ```\n    docker compose logs -f\n    ```\n    \n    _Affiche en direct les journaux (logs) de tous tes conteneurs en même temps. Très pratique si un des deux services refuse de démarrer._\n\n\npage précédente [[01_Dockerfile]]\n\npage pour illustré [[03_Lab_Docker]]\n\n\nPour passer root sur Ubuntu, il ne faut pas faire `su -`, il faut utiliser `sudo` pour emprunter les droits. Tape cette commande :\n\n\n```\nsudo -i\n```\n\nLà, tu tapes ton mot de passe habituel (`ubuntu`), et ton invite de commande va se transformer en `root@ubuntu-virtual-machine:~#`. Tu seras le maître absolu du système.\n\n### 2. L'erreur Docker `permission denied` \n\nSur ta capture, on voit : `Error response from daemon: cannot stop container: ... permission denied`.\n\nLe démon Docker s'est emmêlé les pinceaux avec AppArmor ou un conteneur planté en tâche de fond qui refuse de mourir, même avec `sudo docker compose`.\n\nOn va employer les grands moyens pour nettoyer ça proprement. Tape ces commandes une par une :\n\n```\n# 1. Passe en root complet pour écraser toutes les restrictions\nsudo -i\n\n# 2. Force l'arrêt brutal de TOUS les conteneurs qui tournent sur la machine\ndocker kill $(docker ps -q)\n\n# 3. Supprime les conteneurs résiduels qui bloquent\ndocker rm $(docker ps -a -q)\n\n# 4. Redémarre proprement le service Docker pour vider les erreurs de permissions\nsystemctl restart docker\n\n# 5. Retourne dans ton dossier de projet (ajuste le chemin si nécessaire)\ncd /home/ubuntu/infrastructure/docker/wordpress/\n\n# 6. Relance le build à zéro\ndocker compose up -d\n```\n\n\nExécute ces commandes spécifiques dans ton terminal (tu es déjà en `root`, donc pas besoin de `sudo`) :\n\n### 1. Tuer brutalement tous les processus liés à containerd\n\nOn va forcer l'arrêt des conteneurs rebelles en visant directement le gestionnaire de bas niveau :\n\n\n```\nkillall -9 containerd-shim\n```\n\n_(Cette commande va couper instantanément les conteneurs qui refusaient de s'arrêter)._\n\n### 2. Forcer le nettoyage dans Docker\n\nMaintenant que les processus sont morts en tâche de fond, on force Docker à supprimer les restes :\n\n```\ndocker rm -f $(docker ps -a -q)\n```\n\n### 3. Redémarrer le moteur système\n\nOn réinitialise Docker et le gestionnaire de conteneurs pour nettoyer les bugs de permissions internes :\n\nBash\n\n```\nsystemctl restart containerd\nsystemctl restart docker\n```\n\n### 4. Relancer le projet\n\nRetourne dans ton dossier et tente le lancement :\n\n```\ncd /chemin/vers/docker/compose\ndocker compose up -d\n```\n\n"
  },
  {
    "id": "docker-03-lab-docker",
    "title": "Lab Pratique Docker : Déploiement de Services & Volumes",
    "category": "docker",
    "categoryName": "🐳 Docker & Conteneurs",
    "date": "28 Juin 2026",
    "readTime": "3 min",
    "tags": [
      "Compose",
      "Conteneurs",
      "Docker",
      "chmod",
      "contenu"
    ],
    "excerpt": "- dans cette note je vais illustré ce que j'ai pu mettre/dire dans les 2 notes précédente qui sont :",
    "filePath": "Assets/obsidian/06_Ubuntu/01_Outils/02_Docker/03_Lab_Docker.md",
    "content": "> [!info]\n> - dans cette note je vais illustré ce que j'ai pu mettre/dire dans les 2 notes précédente qui sont :\n> - [[01_Dockerfile]]\n> - [[02_docker_compose]]\n\n> [!important]\n> - après l'installation de docker redémarré le système pour que ça soit pris en compte \n> - le nom du fichier pour les docker compose doit être docker-compose.ylm sinon ça fonctionne pas.\n\n\n- docker compose :\n\n```bash\ntouch docker-compose.yml # touch crée le ficher \n\nnano docker-compose.yml #nano édite ce dernier \n\nchmod +x docker-compose.yml #chmod +x permet de donné le droit d'éxecution \n```\n\n\n```yaml\n#contenu du fichier :\n\nversion: \"3.9\"\n\nservices:\n  nginx:\n    image: nginx:latest\n    container_name: nginx_server\n    ports:\n      - \"8080:80\"   # port hôte : port conteneur\n    volumes:\n      - ./html:/usr/share/nginx/html:ro  # contenu web\n      - ./nginx.conf:/etc/nginx/nginx.conf:ro  # config nginx (optionnel)\n    restart: unless-stopped\n\n```\n\n```docker-compose\ndocker compose up -d \n```\n\n- docker compose up va télécharger l'image et la lancé \n- -d (détaché) va le lancé en arrière plan\n\n![[Pasted image 20260628112158.png]]\n\n![[Pasted image 20260628113239.png]]\n\n![[Pasted image 20260628113320.png]]\n\n- dans le dossier html j'ai crée un index.html qui contient :\n\n```html\n<h1> ma super page nginx </h1>\n```\n\n![[Pasted image 20260628113602.png]]\n\n\n> [!important]\n> partie 2 Dockerfile :\n> pour utilisé un dockerfile il faut impérativement qu'il s'appel dockerfile\n\n\n\n\n```bash\ncd ../../nginx_file\nnano dockerfile\n```\n\n```dockerfile\n#contenue du dockerfile/peut être fait en ligne de commande\n\n# Utilise l'image officielle Nginx\nFROM nginx:alpine\n\n# Supprime la page par défaut\nRUN rm -rf /usr/share/nginx/html/*\n\n# Copie les fichiers du site\nCOPY . /usr/share/nginx/html/\n\n# Expose le port HTTP\nEXPOSE 80\n\n# Démarre Nginx\nCMD [\"nginx\", \"-g\", \"daemon off;\"]\n```\n\ncontenue du index.html : \n\n```html\n<h1>mon super dockerfile</h1>\n```\n\n- construit l'image :\n```bash\ndocker build -t mon-nginx .\n```\n-t = surnom du conteneur\n. = dossier ou je suis \n\nrésultat du build :\n\n![[Pasted image 20260628114728.png]]\n\n```docker\ndocker run -d -p 8081:80 --name mon-site mon-nginx\n```\n \n- docker run = lance le conteneur\n- -d = en arrière plan \n- -p 8081:80 = sur le port 8081\n- -- name = le nom\n\nrésultat : \n\n![[Pasted image 20260628115030.png]]\n\n> [!warning]\n> - important a retenir la version avec le dockerfile c'est une image le site on ne peut pas le modifier a par si on recréé le conteneur alors que le docker compose on peu le modifier en allant les changement se feront.\n> - on a vue comment mapper un port hôte:conteneur\n> - géré un volume pour rendre le conteneur potable/modifiable\n> - comment faire un conteneur avec docker compose et dockerfile \n> - géré les éventuel problème rencontré\n> \n\n"
  },
  {
    "id": "docker-04-communication-entre-conteneur-dockerfile",
    "title": "Réseaux Docker : Communication entre Conteneurs via Dockerfile",
    "category": "docker",
    "categoryName": "🐳 Docker & Conteneurs",
    "date": "20 Juillet 2026",
    "readTime": "4 min",
    "tags": [
      "Compose",
      "Conteneurs",
      "Docker"
    ],
    "excerpt": "Par défaut, Docker isole les conteneurs les uns des autres. Pour permettre à une application web d'échanger avec une base de données ou une API, il faut configu...",
    "filePath": "Assets/obsidian/06_Ubuntu/01_Outils/02_Docker/04_communication_entre_conteneur_dockerfile.md",
    "content": "#  Docker : Faire Communiquer les Conteneurs Entre Eux\n\nPar défaut, Docker isole les conteneurs les uns des autres. Pour permettre à une application web d'échanger avec une base de données ou une API, il faut configurer le **réseau Docker** approprié.\n\n---\n\n##  1. Les Différents Modes de Réseau Docker\n\nDocker propose plusieurs pilotes de réseau (*network drivers*) selon les besoins d'isolation et d'accès :\n\n| Driver                  | Description                                                                    | Règle d'or / Usage                                                             |\n| :---------------------- | :----------------------------------------------------------------------------- | :----------------------------------------------------------------------------- |\n| **`bridge`** *(défaut)* | Crée un réseau virtuel interne sur la machine hôte (`docker0`).                | **À utiliser par défaut** pour faire communiquer des conteneurs isolés.        |\n| **`host`**              | Supprime l'isolation réseau entre le conteneur et l'hôte (partage la pile IP). | Utilisé pour des performances maximales (pas de NAT), mais pas d'isolation.    |\n| **`none`**              | Désactive complètement le réseau du conteneur.                                 | Conteneurs autonomes sans accès externe/interne (ex: batchs de calcul isolés). |\n| **`macvlan`**           | Assigne une vraie adresse MAC/IP du LAN physique au conteneur.                 | Pour intégrer directement un conteneur au réseau local physique.               |\n\n---\n\n##  2. La Méthode Recommandée : Réseau Bridge Personnalisé\n\n> [!WARNING] Piège classique en TP\n> Sur le réseau `bridge` par défaut (*default bridge*), la **résolution DNS automatique par nom de conteneur ne fonctionne pas**. Il faut impérativement créer un **réseau bridge personnalisé** (*user-defined bridge*).\n\n### Étape 1 : Créer le réseau personnalisé\n```bash\ndocker network create mon-reseau-app\n````\n\n### Étape 2 : Lancer les conteneurs sur ce réseau\n\nBash\n\n```\n# 1. Lancer le conteneur de base de données (ex: Postgres)\ndocker run -d \\\n  --name db-postgres \\\n  --network mon-reseau-app \\\n  -e POSTGRES_PASSWORD=secret \\\n  postgres:alpine\n\n# 2. Lancer l'application web sur le MÊME réseau\ndocker run -d \\\n  --name web-app \\\n  --network mon-reseau-app \\\n  -p 8080:80 \\\n  mon-image-web\n```\n\n### Étape 3 : Tester la communication via le DNS interne\n\nDans le conteneur `web-app`, l'application peut contacter la base de données directement avec son **nom de conteneur** comme nom d'hôte :\n\nBash\n\n```\n# Depuis le conteneur web-app :\nping db-postgres\ncurl http://db-postgres:5432\n```\n\n##  3. Avec Docker Compose (Méthode de Production)\n\n**Docker Compose** simplifie la gestion multi-conteneurs. Par défaut, `docker compose` crée automatiquement un réseau dédié pour tous les services déclarés dans le même fichier.\n\nExemple de fichier `docker-compose.yml` :\n\nYAML\n\n```\nversion: '3.8'\n\nservices:\n  web:\n    build: .\n    ports:\n      - \"8080:80\"\n    environment:\n      - DB_HOST=db  # Résolution DNS vers le service \"db\"\n    depends_on:\n      - db\n\n  db:\n    image: postgres:alpine\n    environment:\n      POSTGRES_PASSWORD: secret\n    # Pas besoin de publier le port sur l'hôte si seul 'web' doit y accéder\n```\n\n> [!NOTE] Comment ça marche ?\n> \n> Docker Compose crée un réseau `nomduprojet_default`. Le service `web` peut joindre la base de données simplement en utilisant l'adresse `db` (le nom du service).\n\n##  4. Commandes Utiles pour Déboguer le Réseau\n\nLors des labs réseau, ces commandes CLI permettent d'inspecter l'adressage IP et les flux :\n\n|**Commande**|**Action / Utilité**|\n|---|---|\n|`docker network ls`|Lister tous les réseaux Docker existants sur l'hôte.|\n|`docker network inspect <nom-reseau>`|Afficher les détails du réseau (plage d'IP, conteneurs connectés, IPs attribuées).|\n|`docker network connect <reseau> <conteneur>`|Connecter à chaud un conteneur existant à un réseau.|\n|`docker network disconnect <reseau> <conteneur>`|Déconnecter un conteneur d'un réseau.|\n\n##  Astuce de Débogage en TP\n\nPour analyser le réseau depuis l'intérieur sans modifier vos conteneurs de prod/dev, lancez un conteneur éphémère d'outils réseau sur le même réseau :\n\nBash\n\n```\ndocker run --rm -it --network mon-reseau-app nicolaka/netshoot\n```\n\n_Le conteneur `netshoot` contient `nmap`, `tcpdump`, `curl`, `dig`, `ip`, `ping`, idéal pour diagnostiquer les connexions._"
  },
  {
    "id": "docker-05-communication-entre-conteneur-docker-compose",
    "title": "Réseaux Docker : Interconnexion et Bridge avec Docker Compose",
    "category": "docker",
    "categoryName": "🐳 Docker & Conteneurs",
    "date": "20 Juillet 2026",
    "readTime": "4 min",
    "tags": [
      "Compose",
      "Conteneurs",
      "Docker"
    ],
    "excerpt": "**Docker Compose** est un outil CLI permettant de définir et de lancer des applications multi-conteneurs. À l'aide d'un simple fichier YAML (`docker-compose.yml...",
    "filePath": "Assets/obsidian/06_Ubuntu/01_Outils/02_Docker/05_communication_entre_conteneur_docker_compose.md",
    "content": "#  Docker Compose : Guide de Référence & Exemple Complet\n\n**Docker Compose** est un outil CLI permettant de définir et de lancer des applications multi-conteneurs. À l'aide d'un simple fichier YAML (`docker-compose.yml`), il permet d'orchestrer les services, les réseaux internes et les volumes de données.\n\n---\n\n##  1. Architecture du fichier `docker-compose.yml`\n\nUn fichier Compose comporte généralement 3 sections majeures :\n1. **`services`** : Définition des conteneurs à exécuter (Web, DB, Cache...).\n2. **`networks`** *(optionnel)* : Définition des réseaux virtuels personnalisés.\n3. **`volumes`** *(optionnel)* : Définition des volumes de données persistantes.\n\n---\n\n##  2. Exemple Complet : Stack Web (Nginx + App Node.js + Base PostgreSQL)\n\nVoici un exemple concret d'architecture 3 tiers prête à l'emploi :\n\n```yaml\nservices:\n  # 1. Reverse Proxy Web\n  proxy:\n    image: nginx:alpine\n    container_name: reverse-proxy\n    ports:\n      - \"80:80\"\n      - \"443:443\"\n    volumes:\n      - ./nginx.conf:/etc/nginx/nginx.conf:ro\n    depends_on:\n      - app-api\n    networks:\n      - frontend-net\n\n  # 2. Application Backend / API\n  app-api:\n    build:\n      context: ./backend\n      dockerfile: Dockerfile\n    container_name: api-backend\n    environment:\n      - PORT=3000\n      - DB_HOST=db-postgres  # Connexion via nom du service DB\n      - DB_PASS_FILE=/run/secrets/db_password\n    restart: always\n    networks:\n      - frontend-net\n      - backend-net\n\n  # 3. Base de Données\n  db-postgres:\n    image: postgres:15-alpine\n    container_name: database\n    environment:\n      POSTGRES_DB: myapp_db\n      POSTGRES_USER: admin\n      POSTGRES_PASSWORD: SecretPassword123!\n    volumes:\n      - pgdata:/var/lib/postgresql/data\n    networks:\n      - backend-net\n\n# Définition des réseaux (Séparation des flux Frontend / Backend)\nnetworks:\n  frontend-net:\n    driver: bridge\n  backend-net:\n    driver: bridge\n\n# Définition de la persistance de données\nvolumes:\n  pgdata:\n    driver: local\n````\n\n> [!NOTE] Comprendre l'isolation réseau\n> \n> Dans l'exemple ci-dessus, la base de données `db-postgres` est uniquement sur le réseau `backend-net`. Elle est donc **totalement inaccessible depuis l'extérieur** ou depuis le reverse proxy, mais joignable par l'API `app-api`.\n\n##  3. Commandes CLI Indispensables\n\nToutes ces commandes doivent être exécutées dans le répertoire contenant le fichier `docker-compose.yml`.\n\n| **Commande**                       | **Action / Utilité**                                                                              |\n| ---------------------------------- | ------------------------------------------------------------------------------------------------- |\n| `docker compose up -d`             | **Démarrer toute la stack** en arrière-plan (_detached mode_).                                    |\n| `docker compose down`              | **Arrêter et supprimer** les conteneurs et réseaux de la stack.                                   |\n| `docker compose down -v`           | Arrêter la stack **ET supprimer les volumes** de données (remise à zéro).                         |\n| `docker compose ps`                | Afficher l'état de tous les conteneurs gérés par Compose.                                         |\n| `docker compose logs -f`           | **Suivre les logs** en temps réel de tous les services (_ctrl+c pour quitter_).                   |\n| `docker compose logs -f <service>` | Suivre les logs d'un service spécifique (ex: `docker compose logs -f app-api`).                   |\n| `docker compose exec <service> sh` | **Ouvrir un terminal** à l'intérieur d'un conteneur (ex: `docker compose exec db-postgres psql`). |\n| `docker compose build`             | Reconstruire les images personnalisées définies par un `build:`.                                  |\n\n##  4. Bonnes Pratiques & Directives Clés\n\n- **`restart: always` / `unless-stopped`** : S'assure que le conteneur redémarre automatiquement en cas de crash ou au redémarrage de la machine hôte.\n    \n- **Variables d'environnement (`.env`)** : Ne jamais stocker de mots de passe en clair dans le fichier YAML. Utilisez un fichier `.env` à côté du Compose :\n    \n    Extrait de code\n    \n    ```\n    POSTGRES_PASSWORD=SuperSecretPass!\n    ```\n    \n    Et faites-y référence dans le YAML : `POSTGRES_PASSWORD: ${POSTGRES_PASSWORD}`.\n    \n- **Port mapping (`HOST:CONTAINER`)** : Le format est toujours `Port_Machine_Hôte:Port_Interne_Conteneur`. Ex: `\"8080:80\"` redirige le trafic entrant sur le port 8080 de votre PC vers le port 80 du conteneur."
  },
  {
    "id": "linux-00-installation-et-configuration-de-git",
    "title": "Git : Installation, Configuration Initiale & Clés SSH",
    "category": "linux",
    "categoryName": "🐧 GNU/Linux",
    "date": "28 Juin 2026",
    "readTime": "2 min",
    "tags": [
      "Git",
      "Linux",
      "SysAdmin",
      "Ubuntu"
    ],
    "excerpt": "- installation de Git sur Ubuntu 22.04.5 LTS :",
    "filePath": "Assets/obsidian/06_Ubuntu/01_Outils/03_Git/00_Installation_et_configuration_de_Git.md",
    "content": "- installation de Git sur Ubuntu 22.04.5 LTS : \n\n```bash\n# 1. Installation de Git\nsudo apt update && sudo apt install git -y\n\n# 2. Configuration de ton identité (pour que ton nom apparaisse sur GitHub)\ngit config --global user.name \"TonPseudoGitHub\"\ngit config --global user.email \"ton.email@exemple.com\"\n```\n\n- Si 1ère ligne compliqué a comprendre voir [[01_Commande_de_base_linux]].\n\n### Récupérer l'URL HTTPS de ton dépôt GitHub\n\n1. Va sur ton site GitHub, sur la page du dépôt (le dossier) où tu veux stocker tes labs.\n    \n2. Clique sur le bouton vert **Code**.\n    \n3. Vérifie que tu es bien sur l'onglet **HTTPS** et copie le lien (il ressemble à `https://github.com/TonPseudo/TonDepot.git`).\n\n- voir la suite aller sur [[01_Git_basics]]\n\n"
  },
  {
    "id": "linux-01-git-basics",
    "title": "Git Basics : Commit, Push, Pull, Branches & Historique",
    "category": "linux",
    "categoryName": "🐧 GNU/Linux",
    "date": "28 Juin 2026",
    "readTime": "2 min",
    "tags": [
      "Git",
      "Linux",
      "SysAdmin",
      "Ubuntu",
      "demande"
    ],
    "excerpt": "Dans ton terminal, tape `git clone` suivi du lien que tu viens de copier :",
    "filePath": "Assets/obsidian/06_Ubuntu/01_Outils/03_Git/01_Git_basics.md",
    "content": "### Cloner (télécharger) le dépôt sur ton Ubuntu\n\nDans ton terminal, tape `git clone` suivi du lien que tu viens de copier :\n\n```bash\ngit clone https://github.com/TonPseudo/TonDepot.git\n```\n\nUne fois le téléchargement fini, entre dans le dossier qui vient d'être créé :\n\n```bash\ncd TonDepot\n```\n\n_(Remplace bien par le vrai nom de ton dossier !)_\n\n### Ajouter un fichier pour le test\n\nPour tester, on va copier ton fichier de config d'hier ou créer un fichier de test rapide :\n\n```bash\necho \"phrase_au_hasard\" > nom_fichier.extention\n```\n\n###  Le Push\n\nBalance ces trois commandes à la suite :\n\n```bash\ngit add nom_fichier.extension\ngit commit -m \"phrase de commit\"\ngit push origin main #demande un mot de passe mais on le remplace par un token\n```\n\n_(Note : Si ça râle sur `main`, essaie `git push origin master` selon l'âge de ton dépôt GitHub)._\n\n- pour généré un token pour remplacer le mot de passe aller voir [[02_Génération_de_token]]\n"
  },
  {
    "id": "linux-02-generation-de-token",
    "title": "GitHub / GitLab : Génération de Personal Access Token (PAT)",
    "category": "linux",
    "categoryName": "🐧 GNU/Linux",
    "date": "28 Juin 2026",
    "readTime": "2 min",
    "tags": [
      "Linux",
      "SysAdmin",
      "Ubuntu"
    ],
    "excerpt": "- Va sur [GitHub.com](https://github.com) et connecte-toi.",
    "filePath": "Assets/obsidian/06_Ubuntu/01_Outils/03_Git/02_génération_de_token.md",
    "content": "> [!warning] Génération de token\n> \n> - Va sur [GitHub.com](https://github.com) et connecte-toi.\n>     \n> - Clique sur ta **photo de profil** en haut à droite, puis sur **Settings** (Paramètres).\n>     \n> - Dans la colonne de gauche, descends tout en bas et clique sur **Developer settings**.\n>     \n> - Clique sur **Personal access tokens**, puis sur **Tokens (classic)**.\n>     \n> - Clique sur le bouton **Generate new token** (puis _Generate new token (classic)_).\n>     \n> - Donne-lui un nom (par exemple : _Ubuntu-Lab_).\n>     \n> - Coche simplement la case **`repo`** (ça donne le droit à ton terminal de modifier tes projets).\n>     \n> - Descends tout en bas de la page et clique sur le bouton vert **Generate token**.\n\n\n"
  },
  {
    "id": "linux-03-automatisation-de-git-basics",
    "title": "Git : Automatisation de Déploiements & Scripts de Sync Bash",
    "category": "linux",
    "categoryName": "🐧 GNU/Linux",
    "date": "1 Juillet 2026",
    "readTime": "2 min",
    "tags": [
      "Git",
      "Linux",
      "SysAdmin",
      "Ubuntu",
      "demande"
    ],
    "excerpt": "echo \"📝 Quel est le message de ton commit ?\"",
    "filePath": "Assets/obsidian/06_Ubuntu/01_Outils/03_Git/03_automatisation_de_Git_basics.md",
    "content": "```bash\n#!/bin/bash\n\n# 1. Demander le message de commit à l'utilisateur\necho \"📝 Quel est le message de ton commit ?\"\nread message\n\n# 2. Exécuter la suite de commandes Git\necho \"⏳ Préparation des fichiers...\"\ngit add .\n\necho \"💾 Création du checkpoint...\"\ngit commit -m \"$message\"\n\necho \"🚀 Envoi vers GitHub...\"\ngit push origin main\n#demande le nom utilisateur github et le token a la place du mot de passe\necho \"✅ Terminé ! Ton code est en ligne.\"\n```\n\n- on sauvegarde et on lui donne un nom_fichier.sh\n- on lui donne la permission de s'exécuter\n\n```bash\nchmod +x nom_fichier.sh\n```\n\n- pour avoir plus d'information sur le chmod voir [[04_Permission_des_fichiers]]\n- on le lance :\n\n```bash\n./auto-git.sh\n```\n\n- voilà c'est automatisé\n\npour la version non automatisé et expliqué voir [[01_Git_basics]]\n\n"
  },
  {
    "id": "docker-01-wordpress-mariadb-docker",
    "title": "Docker Compose : Stack WordPress + MariaDB & Volumes",
    "category": "docker",
    "categoryName": "🐳 Docker & Conteneurs",
    "date": "2 Juillet 2026",
    "readTime": "2 min",
    "tags": [
      "BaseDeDonnées",
      "Compose",
      "Conteneurs",
      "Docker",
      "WordPress"
    ],
    "excerpt": "- on va créé le dossier :",
    "filePath": "Assets/obsidian/06_Ubuntu/01_Outils/04_Wordpress_MariaDB_Docker/01_Wordpress_MariaDB_Docker.md",
    "content": "\n- on va créé le dossier :\n```bash\nmkdir ~/wordpress-docker #création du dossier\ncd ~/wordpress-docker #on se déplace dedans\n```\n\n> [!info]\n> voir [[01_Commande_de_base_linux]] si compliqué a comprendre\n\n- création et modification du fichier avec un éditeur de texte :\n\n```bash\nnano docker-compose.yml #fichier avec la quelle on va monter notre infra wordpress & MariaDB\n```\n\n- écrire dans le fichier.yml :\n```ylm\nservices:\n  db:\n    image: mariadb:10.6\n    restart: always\n    environment:\n      MYSQL_ROOT_PASSWORD: test\n      MYSQL_DATABASE: wordpress_db\n      MYSQL_USER: test\n      MYSQL_PASSWORD: test\n    volumes:\n      - db_data:/var/lib/mysql\n\n  wordpress:\n    image: wordpress:latest\n    restart: always\n    ports:\n      - \"8080:80\"\n    environment:\n      WORDPRESS_DB_HOST: db\n      WORDPRESS_DB_USER: test\n      WORDPRESS_DB_PASSWORD: test\n      WORDPRESS_DB_NAME: wordpress_db\n    depends_on:\n      - db\n    volumes:\n      - wp_data:/var/www/html\n\nvolumes:\n  db_data:\n  wp_data:\n```\n\n- une fois écrie plus qu'a le lancé :\n```bash\nsudo docker compose up -d #-d pour en arrière plan\n```\n\nsi compliqué a comprendre aller voir [[02_docker_compose]]\n"
  },
  {
    "id": "linux-01-htop",
    "title": "htop : Surveillance Interactive des Ressources et Processus Linux",
    "category": "linux",
    "categoryName": "🐧 GNU/Linux",
    "date": "2 Juillet 2026",
    "readTime": "2 min",
    "tags": [
      "Linux",
      "SysAdmin",
      "Ubuntu"
    ],
    "excerpt": "htop et un gestionnaire des tâche on voir les processus lancé ce qui consomme le plus etc.",
    "filePath": "Assets/obsidian/06_Ubuntu/01_Outils/05_htop/01_htop.md",
    "content": "\nhtop et un gestionnaire des tâche on voir les processus lancé ce qui consomme le plus etc.\n\n- installation : \n```bash\nsudo apt install htop\n```\n\n- si compliqué a comprendre voir [[08_Installation]]\n\n- lancement :\n```bash\nhtop\n```\n"
  },
  {
    "id": "linux-01-installation-wireshark",
    "title": "Wireshark : Installation et Capture de Paquets sous Linux",
    "category": "linux",
    "categoryName": "🐧 GNU/Linux",
    "date": "2 Juillet 2026",
    "readTime": "2 min",
    "tags": [
      "Linux",
      "SysAdmin",
      "Ubuntu",
      "Wireshark"
    ],
    "excerpt": "installation Wireshark :",
    "filePath": "Assets/obsidian/06_Ubuntu/01_Outils/06_Wireshark/01_installation_wireshark.md",
    "content": "\ninstallation Wireshark : \n\n```bash\nsudo apt install wireshark\n```\n\n- voir [[08_Installation]] si compliqué a comprendre\n\n> [!warning]\n> - lancement de Wireshark :\n> \n> ```bash\n> sudo wireshark\n> ```\n> \n> sinon pas toute les interfaces\n\n"
  },
  {
    "id": "linux-01-fail2ban-complet",
    "title": "Fail2ban : Sécurisation SSH & Protection Anti-Bruteforce",
    "category": "linux",
    "categoryName": "🐧 GNU/Linux",
    "date": "2 Juillet 2026",
    "readTime": "8 min",
    "tags": [
      "Fail2ban",
      "Linux",
      "SysAdmin",
      "Ubuntu"
    ],
    "excerpt": "**Fail2Ban** est un logiciel qui protège un serveur contre les attaques par force brute.",
    "filePath": "Assets/obsidian/06_Ubuntu/01_Outils/07_fail2ban/01_Fail2ban_complet.md",
    "content": "# 1. Qu'est-ce que Fail2Ban ?\n\n**Fail2Ban** est un logiciel qui protège un serveur contre les attaques par force brute.\n\nIl surveille les journaux (`/var/log/...` ou le journal systemd) et lorsqu'une même adresse IP effectue plusieurs tentatives échouées, il :\n\n- bloque l'adresse IP avec le pare-feu\n    \n- attend une durée définie\n    \n- débloque automatiquement l'IP à la fin de cette durée\n    \n\nIl protège notamment :\n\n- SSH\n    \n- Apache\n    \n- Nginx\n    \n- FTP\n    \n- Mail\n    \n- Nextcloud\n    \n- WordPress\n    \n- Docker\n    \n- beaucoup d'autres services\n    \n\n---\n\n# 2. Installation\n\n```bash\nsudo apt update\nsudo apt install fail2ban\n```\n\nVérifier qu'il fonctionne :\n\n```bash\nsudo systemctl status fail2ban\n```\n\nDémarrer :\n\n```bash\nsudo systemctl enable fail2ban\nsudo systemctl start fail2ban\n```\n\n---\n\n# 3. Structure des fichiers\n\nLe dossier principal :\n\n```\n/etc/fail2ban/\n```\n\nContient notamment :\n\n```\naction.d/\nfilter.d/\njail.conf\njail.d/\njail.local\nfail2ban.conf\n```\n\nLe plus important :\n\n```\njail.local\n```\n\nIl ne faut **jamais modifier** :\n\n```\njail.conf\n```\n\nCar il sera remplacé lors d'une mise à jour.\n\nToujours créer :\n\n```\n/etc/fail2ban/jail.local\n```\n\n---\n\n# 4. Créer jail.local\n\nExemple minimal :\n\n```ini\n[DEFAULT]\n\nbantime = 1h\nfindtime = 10m\nmaxretry = 5\n\nbackend = systemd\n\n[sshd]\n\nenabled = true\n```\n\n---\n\n# 5. Paramètres importants\n\n## bantime\n\nDurée du bannissement.\n\n```ini\nbantime = 10m\n```\n\nou\n\n```ini\nbantime = 1h\n```\n\nou\n\n```ini\nbantime = 1d\n```\n\nou\n\n```ini\nbantime = -1\n```\n\n`-1` = bannissement permanent.\n\n---\n\n## findtime\n\nFenêtre de temps.\n\nExemple :\n\n```\nfindtime = 10m\n```\n\nCela signifie :\n\n> si 5 erreurs arrivent en moins de 10 minutes\n\n---\n\n## maxretry\n\nNombre maximal d'erreurs.\n\n```ini\nmaxretry = 5\n```\n\n---\n\n## ignoreip\n\nIP jamais bannies.\n\n```ini\nignoreip =\n\n127.0.0.1\n192.168.1.0/24\n10.0.0.5\n```\n\nTrès utile pour :\n\n- votre PC\n    \n- VPN\n    \n- LAN\n    \n\n---\n\n## backend\n\nUbuntu récent :\n\n```ini\nbackend = systemd\n```\n\nAncien Ubuntu :\n\n```ini\nbackend = auto\n```\n\n---\n\n# 6. Les jails\n\nUne jail = protection d'un service.\n\nExemple SSH :\n\n```ini\n[sshd]\n\nenabled = true\n```\n\nApache :\n\n```ini\n[apache-auth]\n\nenabled = true\n```\n\nNginx :\n\n```ini\n[nginx-http-auth]\n\nenabled = true\n```\n\n---\n\n# 7. Redémarrer Fail2Ban\n\n```bash\nsudo systemctl restart fail2ban\n```\n\nou\n\n```bash\nsudo service fail2ban restart\n```\n\n---\n\n# 8. Vérifier la configuration\n\n```bash\nsudo fail2ban-client status\n```\n\nRésultat :\n\n```\nStatus\n|- Number of jail: 1\n`- Jail list: sshd\n```\n\n---\n\nVoir une jail :\n\n```bash\nsudo fail2ban-client status sshd\n```\n\nExemple :\n\n```\nStatus for the jail: sshd\n\nCurrently failed: 2\n\nCurrently banned: 1\n\nBanned IP list:\n\n203.0.113.25\n```\n\n---\n\n# 9. Bannir une IP\n\n```bash\nsudo fail2ban-client set sshd banip 1.2.3.4\n```\n\n---\n\n# 10. Débannir une IP\n\n```bash\nsudo fail2ban-client set sshd unbanip 1.2.3.4\n```\n\n---\n\n# 11. Voir les logs\n\n```bash\nsudo tail -f /var/log/fail2ban.log\n```\n\nou\n\n```bash\nsudo journalctl -u fail2ban\n```\n\n---\n\n# 12. Voir toutes les IP bannies\n\nPour SSH :\n\n```bash\nsudo fail2ban-client status sshd\n```\n\n---\n\n# 13. Tester un filtre\n\nCommande très utile :\n\n```bash\nsudo fail2ban-regex\n```\n\nExemple :\n\n```bash\nsudo fail2ban-regex /var/log/auth.log /etc/fail2ban/filter.d/sshd.conf\n```\n\nCela indique :\n\n- les lignes reconnues\n    \n- les lignes ignorées\n    \n- les erreurs\n    \n\n---\n\n# 14. Les filtres\n\nLes filtres sont dans :\n\n```\n/etc/fail2ban/filter.d/\n```\n\nExemple :\n\n```\nsshd.conf\n```\n\nIls utilisent des expressions régulières.\n\nExemple :\n\n```\nfailregex =\n```\n\n---\n\n# 15. Les actions\n\nLes actions sont dans :\n\n```\naction.d/\n```\n\nElles définissent :\n\n- comment bannir\n    \n- comment débannir\n    \n\nExemple :\n\n```\niptables\n```\n\nou\n\n```\nnftables\n```\n\nou\n\n```\nufw\n```\n\n---\n\n# 16. UFW\n\nSi vous utilisez le pare-feu **UFW** :\n\n```ini\nbanaction = ufw\n```\n\n---\n\n# 17. nftables\n\nUbuntu récent utilise souvent :\n\n```ini\nbanaction = nftables\n```\n\n---\n\n# 18. iptables\n\nAncien système :\n\n```ini\nbanaction = iptables-multiport\n```\n\n---\n\n# 19. Bannissement progressif\n\nExemple :\n\n```ini\nbantime = 10m\nbantime.increment = true\nbantime.factor = 2\n```\n\nChaque récidive double la durée :\n\n```\n10 min\n\n20 min\n\n40 min\n\n80 min\n\n...\n```\n\n---\n\n# 20. Bannissement permanent des récidivistes\n\n```ini\nbantime = 1h\nbantime.increment = true\nbantime.maxtime = 30d\n```\n\n---\n\n# 21. Notifications par mail\n\nExemple :\n\n```ini\ndestemail = admin@domaine.fr\n\nsender = serveur@domaine.fr\n\naction = %(action_mwl)s\n```\n\n`action_mwl`\n\nenvoie :\n\n- le mail\n    \n- les logs\n    \n- le WHOIS de l'IP (si disponible)\n    \n\n---\n\n# 22. Recharger sans redémarrer\n\n```bash\nsudo fail2ban-client reload\n```\n\n---\n\n# 23. Voir toute la configuration\n\n```bash\nsudo fail2ban-client -d\n```\n\nTrès utile pour le débogage.\n\n---\n\n# 24. Activer plusieurs protections\n\nExemple :\n\n```ini\n[sshd]\nenabled = true\n\n[apache-auth]\nenabled = true\n\n[nginx-http-auth]\nenabled = true\n\n[postfix]\nenabled = true\n\n[dovecot]\nenabled = true\n```\n\n---\n\n# 25. Ajouter une jail personnalisée\n\nExemple :\n\n```ini\n[monservice]\n\nenabled = true\nport = http\n\nfilter = monservice\n\nlogpath = /var/log/monservice.log\n\nmaxretry = 5\n```\n\nPuis créer :\n\n```\nfilter.d/monservice.conf\n```\n\n---\n\n# 26. Commandes essentielles\n\nInstallation\n\n```bash\nsudo apt install fail2ban\n```\n\nÉtat\n\n```bash\nsudo systemctl status fail2ban\n```\n\nRedémarrer\n\n```bash\nsudo systemctl restart fail2ban\n```\n\nLister les jails\n\n```bash\nsudo fail2ban-client status\n```\n\nVoir une jail\n\n```bash\nsudo fail2ban-client status sshd\n```\n\nBannir une IP\n\n```bash\nsudo fail2ban-client set sshd banip IP\n```\n\nDébannir\n\n```bash\nsudo fail2ban-client set sshd unbanip IP\n```\n\nLogs\n\n```bash\nsudo journalctl -u fail2ban\n```\n\nou\n\n```bash\nsudo tail -f /var/log/fail2ban.log\n```\n\nRecharger\n\n```bash\nsudo fail2ban-client reload\n```\n\nTester un filtre\n\n```bash\nsudo fail2ban-regex LOG FILTER\n```\n\n---\n\n# 27. Bonnes pratiques\n\n- Ne modifiez jamais `jail.conf`; utilisez `jail.local` ou des fichiers dans `/etc/fail2ban/jail.d/`.\n    \n- Ajoutez vos adresses IP de confiance dans `ignoreip` pour éviter de vous bloquer vous-même.\n    \n- Utilisez `backend = systemd` sur les versions récentes d'Ubuntu.\n    \n- Activez uniquement les jails correspondant aux services réellement utilisés.\n    \n- Combinez Fail2Ban avec un pare-feu (`ufw` ou `nftables`) et une authentification par clé SSH lorsque c'est possible.\n    \n- Vérifiez régulièrement les journaux et testez les nouveaux filtres avec `fail2ban-regex` avant leur mise en production.\n    \n- Pensez au bannissement progressif (`bantime.increment = true`) pour mieux gérer les récidivistes.\n    \n\nUne bonne configuration de base pour un serveur Ubuntu exposé sur Internet est par exemple :\n\n```ini\n[DEFAULT]\nbackend = systemd\nbanaction = nftables\nignoreip = 127.0.0.1/8 ::1\nfindtime = 10m\nmaxretry = 5\nbantime = 1h\nbantime.increment = true\nbantime.factor = 2\nbantime.maxtime = 30d\n\n[sshd]\nenabled = true\n```\n\nCette configuration offre un bon équilibre entre sécurité et limitation des faux positifs, et constitue une base solide pour la plupart des serveurs Ubuntu."
  },
  {
    "id": "docker-01-nexcloud-mariadb-docker",
    "title": "Docker Compose : Déploiement de Nextcloud Privé + MariaDB",
    "category": "docker",
    "categoryName": "🐳 Docker & Conteneurs",
    "date": "2 Juillet 2026",
    "readTime": "2 min",
    "tags": [
      "BaseDeDonnées",
      "Compose",
      "Conteneurs",
      "Docker",
      "Nextcloud"
    ],
    "excerpt": "mkdir -p ~/infrastructure/docker/nextcloud",
    "filePath": "Assets/obsidian/06_Ubuntu/01_Outils/08_Nexcloud_MariaDB_Docker/01_Nexcloud_mariaDB_Docker.md",
    "content": "### Étape 1 : Créer le dossier Nextcloud\n\n```\nmkdir -p ~/infrastructure/docker/nextcloud\ncd ~/infrastructure/docker/nextcloud\n```\n\n### Étape 2 : Le fichier `docker-compose.yml`\n\n```\nnano docker-compose.yml\n```\n\n```\nservices:\n  nextcloud_db:\n    image: mariadb:10.6\n    restart: always\n    environment:\n      MYSQL_ROOT_PASSWORD: root_password_nextcloud\n      MYSQL_DATABASE: nextcloud_db\n      MYSQL_USER: nc_user\n      MYSQL_PASSWORD: nc_password_nextcloud\n\n  nextcloud:\n    image: nextcloud:latest\n    restart: always\n    ports:\n      - \"8083:80\" # On prend le port 8083 pour éviter les conflits !\n    environment:\n      MYSQL_HOST: nextcloud_db\n      MYSQL_USER: nc_user\n      MYSQL_PASSWORD: nc_password_nextcloud\n      MYSQL_DATABASE: nextcloud_db\n    depends_on:\n      - nextcloud_db\n```\n\n_(Sauvegarde avec `Ctrl+O`, `Entrée`, `Ctrl+X`)._\n\n### Étape 3 : Le lancement \n\nTu connais la formule magique maintenant :\n\n```\nsudo docker compose up -d\n```\n\nLaisse-lui 15-20 secondes pour s'installer proprement en tâche de fond, puis ouvre ton navigateur sur :\n\nsur le navigateur :\n\n```\nhttp://127.0.0.1:8083\n```\n"
  },
  {
    "id": "docker-01-nginx-dns-docker-wordpress",
    "title": "Nginx Proxy Manager : Routage DNS, Reverse Proxy & SSL",
    "category": "docker",
    "categoryName": "🐳 Docker & Conteneurs",
    "date": "20 Juillet 2026",
    "readTime": "4 min",
    "tags": [
      "Compose",
      "Conteneurs",
      "Docker",
      "WordPress"
    ],
    "excerpt": "Architecture Reverse Proxy avec Nginx Proxy Manager & Docker",
    "filePath": "Assets/obsidian/06_Ubuntu/01_Outils/09_Nginx_Proxy_manager/01_nginx_dns_docker_wordpress.md",
    "content": " Architecture Reverse Proxy avec Nginx Proxy Manager & Docker\n## 1. Concepts d'Architecture & Utilité Pro\n\nDans une infrastructure de production, **aucun conteneur applicatif ne doit être exposé directement à l'extérieur** avec un port spécifique (ex: `:8082`, `:8083`).\n\n### Pourquoi utiliser un Reverse Proxy ?\n\n- **Point d'entrée unique (Port 80 / 443) :** Toutes les requêtes HTTP/HTTPS arrivent sur une seule sentinelle (Nginx).\n    \n- **Isolation & Sécurité :** Les applications (WordPress, Nextcloud) restent masquées sur un réseau interne fermé (`proxy-network`).\n    \n- **Centralisation du SSL/TLS :** La terminaison HTTPS se fait au niveau du proxy. Les conteneurs internes n'ont pas besoin de gérer leurs propres certificats SSL.\n    \n- **Routage applicatif par sous-domaine :** Redirection dynamique du trafic basé sur le nom d'hôte (`[http://wordpress.local](http://wordpress.local)`  Conteneur WordPress).\n    \n\n## 2. Étape 1 : Création du Réseau Docker Bridge Global\n\nPour que le Reverse Proxy et les conteneurs puissent communiquer par leurs noms de services, ils doivent être raccordés à un même commutateur virtuel externe.\n\nBash\n\n```\n# Création du réseau virtuel isolé\ndocker network create proxy-network\n```\n\n## 3. Étape 2 : Déploiement de Nginx Proxy Manager (NPM)\n\nL'interface de gestion de Nginx est déployée dans son propre dossier d'infrastructure.\n\nBash\n\n```\nmkdir -p ~/infrastructure/docker/proxy\ncd ~/infrastructure/docker/proxy\nnano docker-compose.yml\n```\n\n**Fichier `docker-compose.yml` :**\n\nYAML\n\n```\nservices:\n  app:\n    image: 'jc21/nginx-proxy-manager:latest'\n    restart: always\n    ports:\n      - '80:80'   # Trafic HTTP entrant\n      - '443:443' # Trafic HTTPS entrant\n      - '81:81'   # Interface Web d'administration\n    volumes:\n      - ./data:/data\n      - ./letsencrypt:/etc/letsencrypt\n    networks:\n      - proxy-network\n\nnetworks:\n  proxy-network:\n    external: true\n```\n\n**Démarrage :**\n\nBash\n\n```\ndocker compose up -d\n```\n\n- **Interface Admin :** `[http://127.0.0.1:81](http://127.0.0.1:81)`\n    \n- **Identifiants par défaut :** `admin@example.com` / `changeme`\n    \n\n## 4. Étape 3 : Isolation et Raccordement de l'Application (WordPress)\n\nOn supprime le mapping de port direct (`ports: - \"8082:80\"`) dans le service pour forcer le passage exclusif par le proxy.\n\nBash\n\n```\ncd ~/infrastructure/docker/wordpress\nnano docker-compose.yml\n```\n\n**Fichier `docker-compose.yml` (Version sécurisée) :**\n\nYAML\n\n```\nservices:\n  db:\n    image: mariadb:10.6\n    restart: always\n    environment:\n      MYSQL_ROOT_PASSWORD: root_password_machine\n      MYSQL_DATABASE: wordpress_db\n      MYSQL_USER: wp_user\n      MYSQL_PASSWORD: wp_password_machine\n    networks:\n      - proxy-network\n\n  wordpress:\n    image: wordpress:latest\n    restart: always\n    environment:\n      WORDPRESS_DB_HOST: db\n      WORDPRESS_DB_USER: wp_user\n      WORDPRESS_DB_PASSWORD: wp_password_machine\n      WORDPRESS_DB_NAME: wordpress_db\n    networks:\n      - proxy-network\n    depends_on:\n      - db\n\nnetworks:\n  proxy-network:\n    external: true\n```\n\n**Redémarrage de l'application :**\n\nBash\n\n```\ndocker compose up -d\n```\n\n## 5. Étape 4 : Configuration du Routage & Resolution DNS Local\n\n### 1. Configuration du Proxy Host dans Nginx (`[http://127.0.0.1:81](http://127.0.0.1:81)`)\n\n1. Onglet **Hosts** => **Proxy Hosts** => **Add Proxy Host**.\n    \n2. **Domain Names :** `wordpress.local`\n    \n3. **Scheme :** `http`\n    \n4. **Forward Hostname / IP :** `wordpress` _(Nom du service dans docker-compose)_\n    \n5. **Forward Port :** `80`\n    \n6. Activer **Block Common Exploits** (WAF de base).\n    \n7. Sauvegarder.\n    \n\n### 2. Redirection DNS locale (Fichier Hosts)\n\nPour simuler un vrai nom de domaine sans enregistrement DNS public, on ajoute une entrée locale dans le système hôte Ubuntu :\n\nBash\n\n```\necho \"127.0.0.1 wordpress.local\" | sudo tee -a /etc/hosts\n```\n\n## 6. Étape 5 : Validation & Recette\n\nOuvrir le navigateur et accéder à :\n\nPlaintext\n\n```\nhttp://wordpress.local\n```\n\n###  Vérification d'architecture\n\n- L'application réagit sur le port HTTP standard (`80`).\n    \n- Aucun port exotique (`:8082`) n'est nécessaire ni exposé.\n    \n- Le conteneur WordPress est inaccessible directement depuis le réseau externe, tout le flux passe obligatoirement par la couche d'inspection Nginx.\n"
  },
  {
    "id": "linux-01-installation-ssh",
    "title": "OpenSSH Server : Installation et Vérification du Service",
    "category": "linux",
    "categoryName": "🐧 GNU/Linux",
    "date": "28 Juin 2026",
    "readTime": "2 min",
    "tags": [
      "Linux",
      "SSH",
      "SysAdmin",
      "Ubuntu",
      "pour"
    ],
    "excerpt": "SSH est un protocole sécurisé pour ce connecter a une machine a distance et exécutée des commandes.",
    "filePath": "Assets/obsidian/06_Ubuntu/02_Administration/01_SSH/01_Installation_SSH.md",
    "content": "> [!info]\n> SSH est un protocole sécurisé pour ce connecter a une machine a distance et exécutée des commandes.\n\n- si les commandes sont compliqué a comprendre voir [[01_Commande_de_base_linux]]\n\n```bash\nsudo apt update\nsudo apt install openssh-serveur \nsudo systemctl status ssh #pour voir si il est lancé\n```\n\n- si ssh pas active voir [[03_Gestion_des_service_(systemctl)]]\n"
  },
  {
    "id": "linux-02-connexion-ssh-linux-a-linux",
    "title": "SSH Inter-Machines : Échange de Clés Linux à Linux",
    "category": "linux",
    "categoryName": "🐧 GNU/Linux",
    "date": "1 Juillet 2026",
    "readTime": "2 min",
    "tags": [
      "Linux",
      "SSH",
      "SysAdmin",
      "Ubuntu"
    ],
    "excerpt": "ssh nom_utilisateur@IP",
    "filePath": "Assets/obsidian/06_Ubuntu/02_Administration/01_SSH/02_Connexion_ssh_linux_a_linux.md",
    "content": "\n```bash\nssh nom_utilisateur@IP\n```\n\n"
  },
  {
    "id": "linux-03-modification-du-port-ssh",
    "title": "Sécurité SSH : Modification du Port d'Écoute Standard",
    "category": "linux",
    "categoryName": "🐧 GNU/Linux",
    "date": "15 Octobre 2026",
    "readTime": "2 min",
    "tags": [
      "Linux",
      "Port",
      "SSH",
      "SysAdmin",
      "Ubuntu"
    ],
    "excerpt": "Pour modifier le port SSH sur Ubuntu, procédez comme suit.",
    "filePath": "Assets/obsidian/06_Ubuntu/02_Administration/01_SSH/03_modification_du_port_ssh.md",
    "content": "Pour modifier le port SSH sur Ubuntu, procédez comme suit.\n\n### 1. Modifier le fichier de configuration SSH\n\nOuvrez le fichier :\n\n```bash\nsudo nano /etc/ssh/sshd_config\n```\n\nRecherchez la ligne :\n\n```text\n#Port 22\n```\n\nou\n\n```text\nPort 22\n```\n\nRemplacez-la par le port souhaité, par exemple **2222** :\n\n```text\nPort 2222\n```\n\nEnregistrez le fichier puis quittez (`Ctrl+O`, `Entrée`, `Ctrl+X` dans Nano).\n\n---\n\n### 2. Autoriser le nouveau port dans le pare-feu\n\nSi vous utilisez UFW :\n\n```bash\nsudo ufw allow 2222/tcp\n```\n\nVous pourrez supprimer l'ancien port plus tard :\n\n```bash\nsudo ufw delete allow 22/tcp\n```\n\n\n---\n\n### 3. Vérifier la configuration\n\nAvant de redémarrer le service, vérifiez que la configuration est valide :\n\n```bash\nsudo sshd -t\n```\n\nSi cette commande ne renvoie rien, la configuration est correcte.\n\n---\n\n### 4. Redémarrer le service SSH\n\n```bash\nsudo systemctl restart ssh\n```\n\nVérifiez qu'il est bien actif :\n\n```bash\nsudo systemctl status ssh\n```\n\n---\n\n### 5. Se connecter avec le nouveau port\n\nDepuis la machine cliente :\n\n```bash\nssh -p 2222 utilisateur@IP\n```\n\n---\n\n### 6. Vérifier que le serveur écoute sur le nouveau port\n\n```bash\nsudo ss -tlnp | grep ssh\n```\n\nVous devriez voir une ligne similaire à :\n\n```text\nLISTEN 0 128 0.0.0.0:2222\nLISTEN 0 128 [::]:2222\n```\n\n---\n\n> [!warning]\n> ## Conseil important\n> \n> Ne fermez **pas** votre session SSH actuelle si vous effectuez cette modification à distance. Ouvrez une **nouvelle** fenêtre de terminal et testez la connexion sur le nouveau port :\n> \n> ```bash\n> ssh -p 2222 utilisateur@adresse_ip\n> ```\n> \n> Une fois que cette connexion fonctionne, vous pouvez fermer l'ancienne session et, si vous le souhaitez, désactiver le port 22 dans le pare-feu. Cela évite de vous retrouver bloqué en cas d'erreur de configuration.\n\n"
  },
  {
    "id": "linux-01-commande-de-base-linux",
    "title": "GNU/Linux : Commandes de Base pour l'Administration Quotidienne",
    "category": "linux",
    "categoryName": "🐧 GNU/Linux",
    "date": "2 Juillet 2026",
    "readTime": "2 min",
    "tags": [
      "Linux",
      "SysAdmin",
      "Ubuntu",
      "affiche",
      "changer"
    ],
    "excerpt": "- changement d'emplacement :",
    "filePath": "Assets/obsidian/06_Ubuntu/02_Administration/02_Commande_linux/01_Commande_de_base_linux.md",
    "content": "- changement d'emplacement :\n```bash\ncd nom_dossier #changer de dossier\ncd ../ #revenir en arrière dans l'arborésence des dossier\n```\n\n- afficher les fichier & dossier dans le terminal :\n```bash\ndir #affiche dossier & fichier\n```\n\n- créations de fichier :\n```bash\ntouch nom_fichier #crée le fichier avec le nom donner en txt\ntouch nom_fichier.extention # crée le fichier avec le nom et l'extention donnée\n```\n\n- éditeur de texte : \n```bash\nnano nom_fichier #ouvre le fichier pour édité de dans \n```\n\n- avoir son IP :\n```bash\nip a #affiche l'ip de tout les carte réseau du pc\n```\n\n> [!warning] information\n> - pour plus d'information sur sudo voir [[02_Permission_administrateur]]\n\n- faire les mise a jours de paquet :\n```bash\nsudo apt update #met a jours les paquets\n```\n\n- mettre a jours la version de l'OS : \n```bash\nsudo apt upgrade #met a jours l'OS\n```\n\n- double commande :\n```bash\ncommande_1 && commande_2 #une double commande est possible en mettent && entree les 2 commandes de ce fait on peut en faire 2 sur la même ligne et elle s'éxécute l'une après l'autre.\n```\n\n- savoir qui on est (quel utilisateur) :\n```bash\nwhoami\n```\n\n- création de dossier :\n```bash\nmkdir nom_dossier\n```\n\n- suppression de dossier :\n\n```bash\nrmdir nom_dossier\n```\n\n"
  },
  {
    "id": "linux-02-permission-administrateur",
    "title": "Gestion des Privilèges : Sudo, Root & Fichier /etc/sudoers",
    "category": "linux",
    "categoryName": "🐧 GNU/Linux",
    "date": "2 Juillet 2026",
    "readTime": "2 min",
    "tags": [
      "Linux",
      "SysAdmin",
      "Ubuntu",
      "demande",
      "pour"
    ],
    "excerpt": "sudo suite_commande #pour exécuté en sudoeur/admin et demande le mot de passe pour confirmation",
    "filePath": "Assets/obsidian/06_Ubuntu/02_Administration/02_Commande_linux/02_permission_administrateur.md",
    "content": "- permission sudo :\n```bash\nsudo suite_commande #pour exécuté en sudoeur/admin et demande le mot de passe pour confirmation\n```\n\n- permission root (dieu) :\n```bash\nsu - #demande le mot de passe root et après a tout les pouvoir même supprimer tout l'OS\n```\n\n- sortir du mode root : \n```bash\nexit #quand en mode root permet d'en sortir\n#ou appuyer sur les touches ctrl + d\n```\n\n- pour ubuntu :\n```bash\nsudo -i #pour passer en root sur ubuntu\n```"
  },
  {
    "id": "linux-03-gestion-des-service-systemctl",
    "title": "systemd & systemctl : Démarrage, Arrêt et Audit des Services",
    "category": "linux",
    "categoryName": "🐧 GNU/Linux",
    "date": "1 Juillet 2026",
    "readTime": "2 min",
    "tags": [
      "Linux",
      "SysAdmin",
      "Ubuntu",
      "sert"
    ],
    "excerpt": "sudo systemctl status nom_service #sert a voir l'état du service (en cours, a l'arrêt ... etc)",
    "filePath": "Assets/obsidian/06_Ubuntu/02_Administration/02_Commande_linux/03_Gestion_des_service_(systemctl).md",
    "content": "```bash\nsudo systemctl status nom_service #sert a voir l'état du service (en cours, a l'arrêt ... etc)\nsudo systemctl stop nom_service #sert a arréter le service\nsudo systemctl start nom_service #sert a lancé le service\nsudo systemctl enable nom_service #sert a démaré le service au démarage\nsudo systemctl restart nom_service #sert a redémarré totalement le service\nsudo systemctl reload nom_service #sert a redémarré le service sans coupé la connexion\n```\n\n"
  },
  {
    "id": "linux-04-permission-des-fichiers",
    "title": "Droits & Sécurité : chmod, umask et Permissions Linux (rwx)",
    "category": "linux",
    "categoryName": "🐧 GNU/Linux",
    "date": "28 Juin 2026",
    "readTime": "2 min",
    "tags": [
      "Linux",
      "SysAdmin",
      "Ubuntu"
    ],
    "excerpt": "- on va voir les différente autorisation que l'on peu donné a un fichier et leur différente variante.",
    "filePath": "Assets/obsidian/06_Ubuntu/02_Administration/02_Commande_linux/04_Permission_des_fichiers.md",
    "content": "\n- on va voir les différente autorisation que l'on peu donné a un fichier et leur différente variante.\n\n> [!important] permission par les chiffres\n> - **`4`** = Lecture (**R**ead)\n> - **`2`** = Écriture (**W**rite)\n> - **`1`** = Exécution (e**X**ecute)\n> - **`0`** = Aucun droit\n> - il suffit de les additionner les permission que l'on souhaite donner.\n> ```bash\n> chmod 700 nom_fichier.extension #le 7 c'est pour le propriétaire, le 0 de la disaine pour les groupes et le dernier 0 c'est pour les autres\n> ```\n\n> [!important] permission avec les lettre\n> - `+` : Ajouter un droit.\n> - `-` : Supprimer un droit.\n> \n> On cible la catégorie avec : **`u`** (user), **`g`** (group), **`o`** (others), ou **`a`** (all - tout le monde).\n> \n> **Exemples :**\n> \n> - `chmod +x mon-script.sh` : Ajoute le droit d'**exécuter** (`x`) à tout le monde (c'est le raccourci pour `a+x`).\n>     \n> - `chmod u+w fichier.txt` : Ajoute le droit d'**écriture** (`w`) uniquement au **propriétaire** (`u`).\n>     \n> - `chmod o-rwx fichier.txt` : Retire **tous les droits** (`rwx`) aux **autres** (`o`).\n\n- vérification des droit d'un fichier : \n```bash\nls -l\n```\n\n- résultat : \n```bash\n-rwxr-xr-x\n```\n\n> [!important]\n> - on les sépare en paquet de 3 sauf le 1er tiré en partant de la gauche il est seul\n> - 1er tiré indique si c'est un dossier ou un fichier la dans notre cas c'est un fichier\n> - rwx = le propriétaire a le droit le lire, écrire, exécuté\n> - r-x = les groupes on le droit de lire et exécuté\n> - r-x = les autres on le droit de lire et exécuté\n\n"
  },
  {
    "id": "linux-05-gestion-utilisateur",
    "title": "Administration Utilisateurs & Groupes (useradd, passwd, usermod)",
    "category": "linux",
    "categoryName": "🐧 GNU/Linux",
    "date": "1 Juillet 2026",
    "readTime": "2 min",
    "tags": [
      "Linux",
      "SysAdmin",
      "Ubuntu",
      "adduser"
    ],
    "excerpt": "- créations d'un utilisateur :",
    "filePath": "Assets/obsidian/06_Ubuntu/02_Administration/02_Commande_linux/05_Gestion_Utilisateur.md",
    "content": "- créations d'un utilisateur :\n\n```bash\nsudo adduser nom_utilisateur #adduser veut dire ajoute utilisateur\n```\n\nou\n\n```bash\nsudo useradd -m nom_utilisateur\nsudo passwd nom_utilisateur\n```\n\n### Supprimer un utilisateur\n\nSupprimer uniquement le compte :\n\n```bash\nsudo userdel nom_utilisateur\n```\n\nSupprimer le compte et son répertoire personnel :\n\n```bash\nsudo userdel -r nom_utilisateur\n```\n\n### Modifier un utilisateur\n\nChanger le nom d'utilisateur :\n\n```bash\nsudo usermod -l nouveau_nom ancien_nom\n```\n\nChanger le répertoire personnel :\n\n```bash\nsudo usermod -d /home/nouveau_repertoire -m nom_utilisateur\n```\n\nChanger le shell par défaut :\n\n```bash\nsudo usermod -s /bin/bash nom_utilisateur\n```\n\nVerrouiller un compte :\n\n```bash\nsudo usermod -L nom_utilisateur\n```\n\nDéverrouiller un compte :\n\n```bash\nsudo usermod -U nom_utilisateur\n```\n\n### Changer le mot de passe\n\nPour un utilisateur :\n\n```bash\nsudo passwd nom_utilisateur\n```\n\nPour votre propre compte :\n\n```bash\npasswd\n```\n\n### Afficher les informations d'un utilisateur\n\n```bash\nid nom_utilisateur\n```\n\n```bash\nfinger nom_utilisateur\n```\n\n(si le paquet est installé)\n\n### Lister les utilisateurs\n\nAfficher tous les utilisateurs :\n\n```bash\ncat /etc/passwd\n```\n\nAfficher uniquement les noms :\n\n```bash\ncut -d: -f1 /etc/passwd\n```\n\nVoir l'utilisateur courant :\n\n```bash\nwhoami\n```\n\n### Gérer les groupes\n\nCréer un groupe :\n\n```bash\nsudo groupadd nom_groupe\n```\n\nSupprimer un groupe :\n\n```bash\nsudo groupdel nom_groupe\n```\n\nAjouter un utilisateur à un groupe :\n\n```bash\nsudo usermod -aG nom_groupe nom_utilisateur\n```\n\nRetirer un utilisateur d'un groupe :\n\n```bash\nsudo gpasswd -d nom_utilisateur nom_groupe\n```\n\nAfficher les groupes d'un utilisateur :\n\n```bash\ngroups nom_utilisateur\n```\n\n### Donner les droits administrateur (sudo)\n\nAjouter au groupe `sudo` :\n\n```bash\nsudo usermod -aG sudo nom_utilisateur\n```\n\nVérifier les groupes :\n\n```bash\ngroups nom_utilisateur\n```\n\n### Utilisateurs connectés\n\nAfficher les utilisateurs connectés :\n\n```bash\nwho\n```\n\nInformations détaillées :\n\n```bash\nw\n```\n\nDernières connexions :\n\n```bash\nlast\n```\n\n### Informations système utiles\n\nAfficher l'UID/GID :\n\n```bash\nid\n```\n\nAfficher votre UID :\n\n```bash\necho $UID\n```\n\n"
  },
  {
    "id": "linux-06-execution-d-un-script-automatise",
    "title": "Automatisation Bash : Droits d'Exécution, Shebang & Scripts",
    "category": "linux",
    "categoryName": "🐧 GNU/Linux",
    "date": "1 Juillet 2026",
    "readTime": "2 min",
    "tags": [
      "Linux",
      "SysAdmin",
      "Ubuntu",
      "chmod"
    ],
    "excerpt": "- il faut être dans le même dossier que le fichier (cd) ou noté le chemin (chemin/complet/nom_fichier.sh)",
    "filePath": "Assets/obsidian/06_Ubuntu/02_Administration/02_Commande_linux/06_Exécution_d'un_script_automatisé.md",
    "content": "- il faut être dans le même dossier que le fichier (cd) ou noté le chemin (chemin/complet/nom_fichier.sh)\n- rendre exécutable un script.sh :\n\n```bash\nsudo chmod +x nom_script.sh #chmod +x donne le droit de pouvoir exécuté le fichier visée\n```\n\n- si besoin plus d'information sur chmod voir [[04_Permission_des_fichiers]]\n\n- pour exécuter le fichier il faut être dans le même dossier avec le terminal puis écrire :\n```bash\n./nom_fichier.sh #le ./ veut dire dans le dossier actuel et vue que l'on appel le script auto il s'exécute\n```\n"
  },
  {
    "id": "linux-07-gestion-proprietaire-d-un-fichier-et-dossier",
    "title": "Propriété de Fichiers : chown, chgrp et Droits Récursifs",
    "category": "linux",
    "categoryName": "🐧 GNU/Linux",
    "date": "1 Juillet 2026",
    "readTime": "2 min",
    "tags": [
      "Linux",
      "SysAdmin",
      "Ubuntu",
      "chown"
    ],
    "excerpt": "- changement de propriétaire d'un fichier :",
    "filePath": "Assets/obsidian/06_Ubuntu/02_Administration/02_Commande_linux/07_Gestion_propriétaire_d'un_fichier_et_dossier.md",
    "content": "\n- changement de propriétaire d'un fichier :\n```bash\nsudo chown utilisateur:groupes nom_fichier.extention\n#chown veut dire change owner et après il change le propriétaire et groupes avec le nom de fichier donner\n```\n\n> [!info]\n> - pour vérifié on peut utilisé la commande ls -l nom_fichier.extension\n\n"
  },
  {
    "id": "linux-08-installation",
    "title": "Gestionnaire de Paquets APT : Dépôts, Mises à Jour & Logiciels",
    "category": "linux",
    "categoryName": "🐧 GNU/Linux",
    "date": "1 Juillet 2026",
    "readTime": "2 min",
    "tags": [
      "Linux",
      "SysAdmin",
      "Ubuntu",
      "dpkg",
      "rend"
    ],
    "excerpt": "- avant pour tous il faut aller dans le dossier ou se trouve le fichier d'installations",
    "filePath": "Assets/obsidian/06_Ubuntu/02_Administration/02_Commande_linux/08_Installation.md",
    "content": "\n> [!warning]\n> - avant pour tous il faut aller dans le dossier ou se trouve le fichier d'installations\n\n- installation d'un appImage :\n\n```bash\nsudo chmod +x nom_fichier.AppImage #rend exécutable\n./nom_fichier.AppImage\n```\n\n- installation d'un paquet référencé par Ubuntu :\n\n```bash\nsudo apt install nom_paquet #sudo donne les permission admin et apt install dit d'installer le paquet qui a le nom donner\n```\n\n- installation par script Shell :\n\n```bash\nsudo chmod +x nom_fichier.sh #rend exécutable\n./nom_fichier.sh\n```\n\n- installation de .deb :\n\n```bash\nsudo dpkg -i nom_fichier.deb #dpkg veut dire depackage -i install\n```\n\n"
  },
  {
    "id": "linux-09-planificateur-de-tache-au-demarrage-crontab",
    "title": "Planification de Tâches : Crontab, @reboot et Automatisation",
    "category": "linux",
    "categoryName": "🐧 GNU/Linux",
    "date": "1 Juillet 2026",
    "readTime": "2 min",
    "tags": [
      "Linux",
      "SysAdmin",
      "Ubuntu"
    ],
    "excerpt": "Sur Ubuntu, les commandes `crontab` les plus courantes sont :",
    "filePath": "Assets/obsidian/06_Ubuntu/02_Administration/02_Commande_linux/09_planificateur_de_tâche_au_démarrage_(crontab).md",
    "content": "Sur Ubuntu, les commandes `crontab` les plus courantes sont :\n\n|Commande|Description|\n|---|---|\n|`crontab -e`|Modifier les tâches cron de l'utilisateur courant.|\n|`crontab -l`|Afficher les tâches cron de l'utilisateur courant.|\n|`crontab -r`|Supprimer toutes les tâches cron de l'utilisateur courant.|\n|`crontab -i -r`|Supprimer les tâches cron avec confirmation.|\n|`crontab -u utilisateur -e`|Modifier les tâches cron d'un autre utilisateur (nécessite les droits root).|\n|`crontab -u utilisateur -l`|Lister les tâches cron d'un autre utilisateur.|\n\n### Structure d'une ligne cron\n\n```text\n* * * * * commande\n│ │ │ │ │\n│ │ │ │ └── Jour de la semaine (0-7) (0 et 7 = dimanche)\n│ │ │ └──── Mois (1-12)\n│ │ └────── Jour du mois (1-31)\n│ └──────── Heure (0-23)\n└────────── Minute (0-59)\n```\n\n### Exemples\n\nExécuter un script tous les jours à 2h30 :\n\n```cron\n30 2 * * * /home/user/script.sh\n```\n\nToutes les 5 minutes :\n\n```cron\n*/5 * * * * /home/user/script.sh\n```\n\nTous les lundis à 8h :\n\n```cron\n0 8 * * 1 /home/user/script.sh\n```\n\nLe premier jour de chaque mois à minuit :\n\n```cron\n0 0 1 * * /home/user/script.sh\n```\n\n### Vérifier que le service cron fonctionne\n\n```bash\nsudo systemctl status cron\n```\n\nLe démarrer si nécessaire :\n\n```bash\nsudo systemctl start cron\nsudo systemctl enable cron\n```\n\n### Consulter les logs cron\n\nSur Ubuntu :\n\n```bash\ngrep CRON /var/log/syslog\n```\n\nOu suivre les exécutions en temps réel :\n\n```bash\nsudo tail -f /var/log/syslog | grep CRON\n```\n\n### Rediriger les sorties vers un fichier de log\n\n```cron\n*/10 * * * * /home/user/script.sh >> /var/log/script.log 2>&1\n```\n\nCette syntaxe enregistre à la fois la sortie standard et les erreurs dans `script.log`."
  },
  {
    "id": "linux-10-allias",
    "title": "Terminal Bash : Création d'Alias Personnalisés (.bashrc)",
    "category": "linux",
    "categoryName": "🐧 GNU/Linux",
    "date": "15 Octobre 2026",
    "readTime": "3 min",
    "tags": [
      "Linux",
      "SysAdmin",
      "Ubuntu"
    ],
    "excerpt": "Un **alias** est un raccourci clavier personnalisé dans le [[Terminal]] permettant de remplacer une commande longue ou complexe par un mot simple.",
    "filePath": "Assets/obsidian/06_Ubuntu/02_Administration/02_Commande_linux/10_Allias.md",
    "content": "# Créer et gérer des Alias sous Linux (Ubuntu)\n\nUn **alias** est un raccourci clavier personnalisé dans le [[Terminal]] permettant de remplacer une commande longue ou complexe par un mot simple.\n\n> [!info] Fichier de configuration\n> Sur Ubuntu (qui utilise **Bash** par défaut), les alias permanents sont stockés dans le fichier caché `~/.bashrc` (ou `~/.bash_aliases`). Si vous utilisez **Zsh**, le fichier est `~/.zshrc`.\n\n---\n\n## 1. Syntaxe de base d'un alias\n\nLa structure générale ne doit comporter **aucun espace** autour du signe `=` :\n\n```bash\nalias nom_du_raccourci=\"commande_a_executer\"\n```\n\n### Exemples classiques\n```bash\n# Mettre à jour tout le système en un seul mot\nalias maj=\"sudo apt update && sudo apt upgrade -y\"\n\n# Lister les fichiers avec détails et couleurs\nalias ll=\"ls -la --color=auto\"\n```\n\n> [!warning] Alias temporaire vs permanent\n> Taper directement `alias ...` dans le terminal crée un alias **temporaire** : il disparaîtra dès que la fenêtre du terminal sera fermée.\n\n---\n\n## 2. Rendre un alias permanent\n\nPour conserver ses alias à chaque démarrage :\n\n1. **Ouvrir le fichier de configuration** :\n   ```bash\n   nano ~/.bashrc\n   ```\n2. **Ajouter les alias** tout en bas du fichier.\n3. **Sauvegarder et quitter Nano** :\n   * `Ctrl + O` puis `Entrée` (Sauvegarder)\n   * `Ctrl + X` (Quitter)\n4. **Recharger la configuration immédiatement** :\n   ```bash\n   source ~/.bashrc\n   ```\n\n---\n\n## 3. Créer un alias pour ouvrir un site web\n\nSous Linux, l'utilitaire natif `xdg-open` permet d'ouvrir un fichier ou une URL dans l'application par défaut (votre navigateur web).\n\n### Ouvrir un site fixe\nAjoutez ces lignes dans votre `~/.bashrc` :\n\n```bash\nalias youtube=\"xdg-open [https://www.youtube.com](https://www.youtube.com)\"\nalias azure=\"xdg-open [https://portal.azure.com](https://portal.azure.com)\"\nalias doc-ubuntu=\"xdg-open [https://doc.ubuntu-fr.org](https://doc.ubuntu-fr.org)\"\n```\n\n> [!tip] Masquer les messages dans le terminal\n> Parfois, le navigateur affiche des messages d'erreurs ou des logs dans le terminal à l'ouverture. Pour garder un terminal propre, redirigez la sortie vers `/dev/null` :\n> ```bash\n> alias youtube=\"xdg-open [https://www.youtube.com](https://www.youtube.com) >/dev/null 2>&1\"\n> ```\n\n---\n\n## 4. Aller plus loin : Fonction de recherche rapide\n\nUn `alias` classique ne prend pas d'arguments au milieu d'une chaîne. Pour taper `google ma recherche` dans le terminal, on utilise une **fonction Bash** dans `~/.bashrc` :\n\n```bash\n# Rechercher sur Google depuis le terminal\ngoogle() {\n    xdg-open \"[https://www.google.com/search?q=$](https://www.google.com/search?q=$)*\" >/dev/null 2>&1\n}\n```\n* **Utilisation :** `google comment faire un alias linux`\n\n---\n\n## 5. Commandes utiles pour gérer ses alias\n\n| Commande | Action |\n| :--- | :--- |\n| `alias` | Affiche la liste de tous les alias actifs |\n| `type nom_alias` | Indique quelle commande se cache derrière un alias |\n| `unalias nom_alias` | Désactive un alias pour la session en cours |\n| `\\commande` | Exécute la commande originale en ignorant l'alias (ex: `\\ls`) |\n\n---\n"
  },
  {
    "id": "linux-01-serveur-healf",
    "title": "Supervision Bash : Script de Santé Serveur (Server Health Check)",
    "category": "linux",
    "categoryName": "🐧 GNU/Linux",
    "date": "2 Juillet 2026",
    "readTime": "2 min",
    "tags": [
      "Linux",
      "SysAdmin",
      "Ubuntu"
    ],
    "excerpt": "NC='\\033[0m' # No Color",
    "filePath": "Assets/obsidian/06_Ubuntu/02_Administration/03_script/01_serveur_healf.md",
    "content": "\n```bash\n#!/bin/bash\n\n# Couleurs pour rendre le rapport propre\nGREEN='\\033[0;32m'\nRED='\\033[0;31m'\nNC='\\033[0m' # No Color\n\necho \"=========================================\"\necho \"   RAPPORT DE SANTÉ DU SERVEUR (UBUNTU)  \"\necho \"=========================================\"\n\n# 1. Vérification de l'espace disque\n# On récupère le % d'utilisation de la partition principale\nDISK_USAGE=$(df -h / | awk 'NR==2 {print $5}' | sed 's/%//')\n\necho -n \"Espace Disque : \"\nif [ \"$DISK_USAGE\" -gt 80 ]; then\n    echo -e \"${RED}ALERTE ! Disque rempli à $DISK_USAGE%${NC}\"\nelse\n    echo -e \"${GREEN}OK ($DISK_USAGE% utilisé)${NC}\"\nfi\n\n# 2. Vérification de la RAM disponible\nRAM_FREE=$(free -m | awk '/Mem:/ {print $4}')\necho -e \"RAM disponible : ${GREEN}${RAM_FREE} Mo${NC}\"\n\n# 3. Vérification du service Docker (Ce qu'on a fait aujourd'hui !)\nsystemctl is-active --quiet docker\nif [ $? -eq 0 ]; then\n    echo -e \"Statut Docker  : ${GREEN}Actif et fonctionnel${NC}\"\nelse\n    echo -e \"Statut Docker  : ${RED}ALERTE ! Le service Docker est ARRÊTÉ${NC}\"\nfi\necho \"=========================================\"\n```\n\n- pour le rendre exécutable aller voir [[06_Exécution_d'un_script_automatisé]]\n- pour l'ajouté au planificateur de tâche voir [[09_planificateur_de_tâche_au_démarrage_(crontab)]]\n"
  },
  {
    "id": "linux-02-serveur-healf-with-json-envoie-vers-discord",
    "title": "Supervision : Script Health Check JSON & Alerting Webhook Discord",
    "category": "linux",
    "categoryName": "🐧 GNU/Linux",
    "date": "15 Octobre 2026",
    "readTime": "3 min",
    "tags": [
      "Discord",
      "Linux",
      "SysAdmin",
      "Ubuntu"
    ],
    "excerpt": "NC='\\033[0m' # No Color",
    "filePath": "Assets/obsidian/06_Ubuntu/02_Administration/03_script/02_Serveur_healf_with_json_&_envoie_vers_discord.md",
    "content": "```bash\n#!/bin/bash\n\n# Couleurs pour rendre le rapport propre\nGREEN='\\033[0;32m'\nRED='\\033[0;31m'\nNC='\\033[0m' # No Color\n\necho \"=========================================\"\necho \"   RAPPORT DE SANTÉ DU SERVEUR (UBUNTU)  \"\necho \"=========================================\"\n\n# 1. Vérification de l'espace disque\n# On récupère le % d'utilisation de la partition principale\nDISK_USAGE=$(df -h / | awk 'NR==2 {print $5}' | sed 's/%//')\n\necho -n \"Espace Disque : \"\nif [ \"$DISK_USAGE\" -gt 80 ]; then\n    echo -e \"${RED}ALERTE ! Disque rempli à $DISK_USAGE%${NC}\"\nelse\n    echo -e \"${GREEN}OK ($DISK_USAGE% utilisé)${NC}\"\nfi\n\n# 2. Vérification de la RAM disponible\nRAM_FREE=$(free -m | awk '/Mem:/ {print $4}')\necho -e \"RAM disponible : ${GREEN}${RAM_FREE} Mo${NC}\"\n\n# 3. Vérification du service Docker (Ce qu'on a fait aujourd'hui !)\nsystemctl is-active --quiet docker\nif [ $? -eq 0 ]; then\n    echo -e \"Statut Docker  : ${GREEN}Actif et fonctionnel${NC}\"\nelse\n    echo -e \"Statut Docker  : ${RED}ALERTE ! Le service Docker est ARRÊTÉ${NC}\"\nfi\necho \"=========================================\"\n```\n\n- mettre au format json rajoute : \n\n```bash\n#!/bin/bash\n\n# Récupération des données brutes\nDISK_USAGE=$(df -h / | awk 'NR==2 {print $5}' | sed 's/%//')\nRAM_FREE=$(free -m | awk '/Mem:/ {print $4}')\n\nsystemctl is-active --quiet docker\nif [ $? -eq 0 ]; then DOCKER_STATUS=\"OK\"; else DOCKER_STATUS=\"ALERTE\"; fi\n\n# Génération d'un objet JSON propre\nJSON_REPORT=$(cat <<EOF\n{\n  \"statut_serveur\": \"analyse\",\n  \"disque_utilise_pourcent\": $DISK_USAGE,\n  \"ram_dispo_mo\": $RAM_FREE,\n  \"docker_status\": \"$DOCKER_STATUS\"\n}\nEOF\n)\n\n# On affiche le JSON à l'écran\necho \"$JSON_REPORT\"\n```\n\nou discord version :\n\n```bash\n#!/bin/bash\n\n# 1. Récupération des données brutes\nDISK_USAGE=$(df -h / | awk 'NR==2 {print $5}' | sed 's/%//')\nRAM_FREE=$(free -m | awk '/Mem:/ {print $4}')\n\nsystemctl is-active --quiet docker\nif [ $? -eq 0 ]; then DOCKER_STATUS=\"OK\"; else DOCKER_STATUS=\"ALERTE \"; fi\n\n# 2. Création du message formaté pour Discord (dans la variable \"content\")\nDISCORD_MESSAGE=\" **RAPPORT DE SANTÉ SERVEUR** \\n• Espace Disque: $DISK_USAGE%\\n• RAM Dispo: ${RAM_FREE}Mo\\n• Statut Docker: $DOCKER_STATUS\"\n\n# 3. Structuration du JSON au format strict de Discord\nJSON_REPORT=$(cat <<EOF\n{\n  \"username\": \"Ubuntu Monitoring Bot\",\n  \"content\": \"$DISCORD_MESSAGE\"\n}\nEOF\n)\n\n# 4. Envoi à Discord (Remplace URL_DISCORD par ton vrai lien)\nURL_DISCORD=\"METS_TON_LIEN_DISCORD_WEBHOOK_ICI\"\n\ncurl -X POST -H \"Content-Type: application/json\" -d \"$JSON_REPORT\" \"$URL_DISCORD\"\n```\n\nl'envoyer sur un serveur discord avec un webhook :\n\n```bash\n# Envoi du JSON vers l'API externe via une requête HTTP POST\ncurl -X POST -H \"Content-Type: application/json\" -d \"$JSON_REPORT\" TON_URL_WEBHOOK\n```\n\n"
  },
  {
    "id": "linux-01-par-feu-ufw",
    "title": "Pare-feu UFW : Filtrage Réseau, Règles Entrantes & Sortantes",
    "category": "linux",
    "categoryName": "🐧 GNU/Linux",
    "date": "1 Juillet 2026",
    "readTime": "3 min",
    "tags": [
      "Linux",
      "SysAdmin",
      "Ubuntu"
    ],
    "excerpt": "Voici les commandes les plus utiles :",
    "filePath": "Assets/obsidian/06_Ubuntu/03_Service/01_Par_feu_(ufw).md",
    "content": "Voici les commandes les plus utiles :\n\n|Action|Commande|\n|---|---|\n|Vérifier le statut|`sudo ufw status`|\n|Voir le statut détaillé|`sudo ufw status verbose`|\n|Activer le pare-feu|`sudo ufw enable`|\n|Désactiver le pare-feu|`sudo ufw disable`|\n|Recharger la configuration|`sudo ufw reload`|\n|Réinitialiser les règles|`sudo ufw reset`|\n\n> [!warning]\n> - si modification du port ssh voir [[03_modification_du_port_ssh]]\n\n### Autoriser des connexions\n\nAutoriser un port :\n\n```bash\nsudo ufw allow 22\n```\n\nAutoriser un service :\n\n```bash\nsudo ufw allow ssh\n```\n\nAutoriser HTTP :\n\n```bash\nsudo ufw allow 80/tcp\n```\n\nAutoriser HTTPS :\n\n```bash\nsudo ufw allow 443/tcp\n```\n\nAutoriser une plage de ports :\n\n```bash\nsudo ufw allow 10000:20000/tcp\n```\n\nAutoriser une adresse IP :\n\n```bash\nsudo ufw allow from 192.168.1.100\n```\n\nAutoriser une IP sur un port précis :\n\n```bash\nsudo ufw allow from 192.168.1.100 to any port 22\n```\n\n---\n\n### Bloquer des connexions\n\nRefuser un port :\n\n```bash\nsudo ufw deny 80\n```\n\nBloquer une IP :\n\n```bash\nsudo ufw deny from 192.168.1.100\n```\n\nRefuser un port pour une IP :\n\n```bash\nsudo ufw deny from 192.168.1.100 to any port 22\n```\n\n---\n\n### Supprimer une règle\n\nLister les règles numérotées :\n\n```bash\nsudo ufw status numbered\n```\n\nSupprimer une règle par numéro :\n\n```bash\nsudo ufw delete 3\n```\n\nOu supprimer directement :\n\n```bash\nsudo ufw delete allow 22\n```\n\n---\n\n### Définir les politiques par défaut\n\nBloquer toutes les connexions entrantes :\n\n```bash\nsudo ufw default deny incoming\n```\n\nAutoriser toutes les connexions sortantes :\n\n```bash\nsudo ufw default allow outgoing\n```\n\nBloquer toutes les connexions sortantes :\n\n```bash\nsudo ufw default deny outgoing\n```\n\n---\n\n### Journalisation\n\nActiver les logs :\n\n```bash\nsudo ufw logging on\n```\n\nNiveau de journalisation :\n\n```bash\nsudo ufw logging low\nsudo ufw logging medium\nsudo ufw logging high\n```\n\n---\n\n### Exemple de configuration pour un serveur\n\n```bash\nsudo ufw default deny incoming\nsudo ufw default allow outgoing\n\nsudo ufw allow ssh\nsudo ufw allow http\nsudo ufw allow https\n\nsudo ufw enable\n\nsudo ufw status verbose\n```\n\nCette configuration bloque toutes les connexions entrantes sauf **SSH (22)**, **HTTP (80)** et **HTTPS (443)**, tout en autorisant les connexions sortantes."
  },
  {
    "id": "reseau-01-port",
    "title": "Protocoles & Ports Réseau : Tableau des Services Essentiels",
    "category": "reseau",
    "categoryName": "🌐 Cisco & Réseaux",
    "date": "20 Juillet 2026",
    "readTime": "2 min",
    "tags": [
      "CCNA",
      "Cisco",
      "Réseau"
    ],
    "excerpt": "445 = port communication imprimante",
    "filePath": "Assets/obsidian/07_Réseau/01_Port.md",
    "content": "22 = ssh\n23 = telnet\n80 = http\n443 = https\n445 = port communication imprimante"
  },
  {
    "id": "reseau-02-configuration-de-switch",
    "title": "Cisco Catalyst : Configuration Initiale d'un Commutateur via Console",
    "category": "reseau",
    "categoryName": "🌐 Cisco & Réseaux",
    "date": "20 Juillet 2026",
    "readTime": "5 min",
    "tags": [
      "CCNA",
      "Cisco",
      "Réseau"
    ],
    "excerpt": "**Objectif :** Configurer un switch Cisco pour la première fois en utilisant **PuTTY** via une connexion console ou SSH.",
    "filePath": "Assets/obsidian/07_Réseau/02_Configuration_de_Switch.md",
    "content": "# Configurer un switch Cisco avec PuTTY\n\n> **Objectif :** Configurer un switch Cisco pour la première fois en utilisant **PuTTY** via une connexion console ou SSH.\n\n---\n\n# Prérequis\n\n- Putty (voir [[01_Putty_Windows]] si problème)\n- Un switch Cisco\n- Un PC sous Windows\n- PuTTY installé\n- Un câble console (USB ↔ RJ45 ou USB ↔ USB-C selon le matériel)\n\n---\n\n# Méthode 1 : Configuration via le câble console (première configuration)\n\n## Étape 1 : Brancher le câble\n\nConnecter :\n\n```\nPC\n │\n │ USB\n │\n ▼\nCâble Console\n │\n ▼\nPort Console du Switch\n```\n\n---\n\n## Étape 2 : Trouver le port COM\n\nSous Windows :\n\n1. **Gestionnaire de périphériques**\n2. **Ports (COM et LPT)**\n\nExemple :\n\n```\nUSB Serial Port (COM3)\n```\n\nLe port est donc :\n\n```\nCOM3\n```\n\n---\n\n## Étape 3 : Ouvrir PuTTY\n\nSélectionner :\n\n```\nConnection type :\n○ SSH\n○ Telnet\n● Serial\n```\n\nRemplir :\n\n```\nSerial line :\nCOM3\n\nSpeed :\n9600\n```\n\n---\n\n## Paramètres série Cisco\n\nDans :\n\n```\nConnection\n    └── Serial\n```\n\nConfigurer :\n\n| Paramètre | Valeur |\n|-----------|--------|\n| Speed | 9600 |\n| Data bits | 8 |\n| Stop bits | 1 |\n| Parity | None |\n| Flow Control | None |\n\nPuis cliquer sur :\n\n```\nOpen\n```\n\n---\n\n# Étape 4 : Accéder au switch\n\nAppuyer sur **Entrée**.\n\nVous obtenez :\n\n```text\nSwitch>\n```\n\n---\n\n# Étape 5 : Passer en mode privilégié\n\n```cisco\nenable\n```\n\nRésultat :\n\n```text\nSwitch#\n```\n\n---\n\n# Étape 6 : Passer en mode configuration\n\n```cisco\nconfigure terminal\n```\n\nRésultat :\n\n```text\nSwitch(config)#\n```\n\n---\n\n# Configuration de base\n\n## Changer le nom\n\n```cisco\nhostname SW-01\n```\n\nRésultat :\n\n```text\nSW-01(config)#\n```\n\n---\n\n## Désactiver la recherche DNS\n\nÉvite les longues attentes lorsqu'une commande est mal saisie.\n\n```cisco\nno ip domain-lookup\n```\n\n---\n\n## Définir le mot de passe du mode privilégié\n\n```cisco\nenable secret MonMotDePasse\n```\n\n---\n\n## Configurer un utilisateur administrateur\n\n```cisco\nusername admin privilege 15 secret MonPassword123\n```\n\n---\n\n## Sécuriser l'accès console\n\n```cisco\nline console 0\npassword Cisco123\nlogin\nexit\n```\n\n---\n\n## Sécuriser l'accès SSH\n\nDéfinir le nom de domaine :\n\n```cisco\nip domain-name reseau.local\n```\n\nCréer une clé RSA :\n\n```cisco\ncrypto key generate rsa\n```\n\nChoisir :\n\n```\n2048\n```\n\nConfigurer les lignes VTY :\n\n```cisco\nline vty 0 15\nlogin local\ntransport input ssh\nexit\n```\n\nActiver SSH version 2 :\n\n```cisco\nip ssh version 2\n```\n\n---\n\n# Configurer une adresse IP\n\nAccéder au VLAN de gestion :\n\n```cisco\ninterface vlan 1\n```\n\nAttribuer une adresse IP :\n\n```cisco\nip address 192.168.1.10 255.255.255.0\n```\n\nActiver l'interface :\n\n```cisco\nno shutdown\n```\n\nQuitter :\n\n```cisco\nexit\n```\n\n---\n\n# Configurer la passerelle\n\n```cisco\nip default-gateway 192.168.1.1\n```\n\n---\n\n# Sauvegarder la configuration\n\n```cisco\ncopy running-config startup-config\n```\n\nOu plus simplement :\n\n```cisco\nwrite memory\n```\n\n---\n\n# Vérifier la configuration\n\nAdresse IP :\n\n```cisco\nshow ip interface brief\n```\n\nConfiguration complète :\n\n```cisco\nshow running-config\n```\n\nVersion IOS :\n\n```cisco\nshow version\n```\n\nVLAN :\n\n```cisco\nshow vlan brief\n```\n\nSSH :\n\n```cisco\nshow ip ssh\n```\n\n---\n\n# Connexion SSH avec PuTTY\n\nUne fois l'adresse IP configurée :\n\nDans PuTTY :\n\n```\nHost Name :\n192.168.1.10\n\nPort :\n22\n\nConnection Type :\nSSH\n```\n\nCliquer sur :\n\n```\nOpen\n```\n\nSaisir :\n\n```text\nlogin as:\nadmin\n```\n\nPuis le mot de passe.\n\n---\n\n# Exemple complet\n\n```cisco\nenable\n\nconfigure terminal\n\nhostname SW-01\n\nno ip domain-lookup\n\nenable secret Cisco123\n\nusername admin privilege 15 secret Admin123\n\nip domain-name reseau.local\n\ncrypto key generate rsa\n\n2048\n\nip ssh version 2\n\nline vty 0 15\nlogin local\ntransport input ssh\nexit\n\ninterface vlan 1\nip address 192.168.1.10 255.255.255.0\nno shutdown\nexit\n\nip default-gateway 192.168.1.1\n\ncopy running-config startup-config\n```\n\n---\n\n# Schéma\n\n```text\n             Console (USB)\n      +------------------------+\n      |                        |\n+------------+          +---------------+\n|    PC      |──────────| Switch Cisco  |\n|   PuTTY    |          | Console Port  |\n+------------+          +---------------+\n                               │\n                               │\n                     Configuration initiale\n                               │\n                               ▼\n                     Adresse IP configurée\n                               │\n                        SSH (Port 22)\n                               │\n                               ▼\n                     Administration à distance\n```\n\n---\n\n# À retenir\n\n- **Connexion console** : utilisée pour la première configuration.\n- **Mode privilégié** : `enable`\n- **Mode configuration** : `configure terminal ou conf t`\n- **Adresse IP de gestion** : `interface vlan 1`\n- **Sauvegarde** : `copy running-config startup-config`\n- **SSH** : méthode recommandée pour administrer un switch à distance."
  },
  {
    "id": "reseau-03-modele-osi",
    "title": "Réseau : Modèle OSI (7 Couches) & Protocoles TCP/IP",
    "category": "reseau",
    "categoryName": "🌐 Cisco & Réseaux",
    "date": "20 Juillet 2026",
    "readTime": "8 min",
    "tags": [
      "CCNA",
      "Cisco",
      "Réseau"
    ],
    "excerpt": "Le **modèle OSI (Open Systems Interconnection)** est un modèle théorique créé par l’**ISO** permettant de comprendre comment les machines communiquent sur un ré...",
    "filePath": "Assets/obsidian/07_Réseau/03_modèle_OSI.md",
    "content": "# 1. Présentation du modèle OSI\n\nLe **modèle OSI (Open Systems Interconnection)** est un modèle théorique créé par l’**ISO** permettant de comprendre comment les machines communiquent sur un réseau.\n\nIl découpe la communication réseau en **7 couches**.\n\nObjectifs :\n\n- Comprendre le fonctionnement d’un réseau\n    \n- Faciliter le dépannage\n    \n- Standardiser les communications\n    \n- Identifier où se situe un problème\n    \n\n---\n\n# 2. Les 7 couches du modèle OSI\n\nReprésentation :\n\n```text\n7  Application\n6  Présentation\n5  Session\n4  Transport\n3  Réseau\n2  Liaison de données\n1  Physique\n```\n\nMémo :\n\n```\nA\nP\nS\nT\nR\nL\nP\n```\n\nPhrase mnémotechnique :\n\n**\"Aline Présente Son Travail Réseau Lorsqu'elle Parle\"**\n\n---\n\n# 3. Couche 1 — Physique (Physical)\n\n## Rôle\n\nLa couche physique transporte les **bits** (0 et 1) sous forme de signaux :\n\n- Électriques\n    \n- Lumineux\n    \n- Radio\n    \n\nElle concerne le matériel physique.\n\n---\n\n## Éléments concernés\n\n- Câbles RJ45\n    \n- Fibre optique\n    \n- Wi-Fi\n    \n- Connecteurs\n    \n- Cartes réseau\n    \n- Répéteurs\n    \n- Hubs\n    \n\n---\n\n## Unité de données\n\n```\nBit\n```\n\n---\n\n## Problèmes typiques N1\n\nSymptômes :\n\n- Aucun voyant réseau\n    \n- Câble débranché\n    \n- Carte réseau inactive\n    \n- Mauvais câble\n    \n\nSolutions :\n\n- Vérifier branchements\n    \n- Changer câble\n    \n- Tester un autre port\n    \n\n---\n\n# 4. Couche 2 — Liaison de données (Data Link)\n\n## Rôle\n\nPermet la communication entre deux machines sur un même réseau local.\n\nElle utilise les **adresses MAC**.\n\n---\n\n## Éléments concernés\n\n- Switch\n    \n- Carte réseau\n    \n- VLAN\n    \n- Adresse MAC\n    \n- Trames Ethernet\n    \n\n---\n\n## Unité de données\n\n```\nTrame (Frame)\n```\n\n---\n\n## Adresse utilisée\n\nAdresse MAC :\n\nExemple :\n\n```\n00:1A:2B:3C:4D:5E\n```\n\n---\n\n## Protocoles\n\n- Ethernet (802.3)\n    \n- Wi-Fi (802.11)\n    \n- ARP\n    \n- STP\n    \n\n---\n\n## Fonction importante : le switch\n\nUn switch apprend les adresses MAC :\n\n```\nMAC A → Port 1\nMAC B → Port 5\n```\n\nPuis il envoie les trames uniquement au bon port.\n\n---\n\n## Problèmes typiques\n\n- Mauvais VLAN\n    \n- Boucle réseau\n    \n- Carte réseau défectueuse\n    \n\nCommandes utiles :\n\n```cmd\nipconfig /all\n```\n\nVoir la MAC :\n\n```cmd\ngetmac\n```\n\n---\n\n# 5. Couche 3 — Réseau (Network)\n\n## Rôle\n\nPermet la communication entre plusieurs réseaux.\n\nElle utilise les adresses IP.\n\n---\n\n## Éléments concernés\n\n- Routeur\n    \n- Switch couche 3\n    \n- Pare-feu\n    \n\n---\n\n## Unité de données\n\n```\nPaquet (Packet)\n```\n\n---\n\n## Adresse utilisée\n\nAdresse IP :\n\nExemple IPv4 :\n\n```\n192.168.1.25\n```\n\nIPv6 :\n\n```\n2001:db8::1\n```\n\n---\n\n## Protocoles\n\n### IP\n\nAcheminement des paquets :\n\n```\nSource → Destination\n```\n\n---\n\n### ICMP\n\nUtilisé pour les tests réseau :\n\nCommande :\n\n```cmd\nping\n```\n\n---\n\n### ARP\n\nAssocie :\n\n```\nAdresse IP\n      ↓\nAdresse MAC\n```\n\nExemple :\n\n```\n192.168.1.20\n        =\n00:1A:2B:3C:4D\n```\n\n---\n\n## Équipement principal\n\nLe routeur :\n\n```\nRéseau A\n    |\n Routeur\n    |\nRéseau B\n```\n\n---\n\n## Problèmes typiques\n\n- Mauvaise adresse IP\n    \n- Mauvaise passerelle\n    \n- Problème de routage\n    \n\nCommandes :\n\nVoir IP :\n\n```cmd\nipconfig\n```\n\nTester passerelle :\n\n```cmd\nping 192.168.1.1\n```\n\nVoir route :\n\n```cmd\nroute print\n```\n\n---\n\n# 6. Couche 4 — Transport (Transport)\n\n## Rôle\n\nAssure la communication entre applications.\n\nElle gère :\n\n- Fiabilité\n    \n- Contrôle d’erreurs\n    \n- Segmentation\n    \n- Ports\n    \n\n---\n\n## Unité de données\n\n```\nSegment\n```\n\n---\n\n# TCP vs UDP\n\n## TCP\n\nProtocole fiable.\n\nFonctionnement :\n\n```\nConnexion\n    ↓\nTransmission\n    ↓\nConfirmation\n```\n\nUtilise un système d’accusé de réception.\n\nExemples :\n\n- HTTP/HTTPS\n    \n- FTP\n    \n- SSH\n    \n- SMTP\n    \n\n---\n\n## UDP\n\nProtocole rapide mais sans garantie.\n\nExemples :\n\n- Streaming\n    \n- Jeux vidéo\n    \n- VoIP\n    \n- DNS\n    \n\n---\n\n# Les ports réseau\n\nUn port identifie une application.\n\nExemples :\n\n|Service|Port|Protocole|\n|---|---|---|\n|HTTP|80|TCP|\n|HTTPS|443|TCP|\n|SSH|22|TCP|\n|FTP|21|TCP|\n|DNS|53|UDP/TCP|\n|DHCP|67/68|UDP|\n|RDP|3389|TCP|\n\n---\n\n## Problèmes typiques\n\n- Port bloqué\n    \n- Pare-feu\n    \n- Service arrêté\n    \n\nCommande :\n\n```cmd\nnetstat -ano\n```\n\n---\n\n# 7. Couche 5 — Session (Session)\n\n## Rôle\n\nGère l’ouverture, le maintien et la fermeture des sessions.\n\nElle contrôle :\n\n- Connexion\n    \n- Synchronisation\n    \n- Reprise après interruption\n    \n\n---\n\n## Exemples\n\n- Session Windows\n    \n- Connexion distante\n    \n- Appels vidéo\n    \n\n---\n\n## Problèmes\n\n- Session expirée\n    \n- Déconnexion utilisateur\n    \n- Authentification échouée\n    \n\n---\n\n# 8. Couche 6 — Présentation (Presentation)\n\n## Rôle\n\nConvertit les données pour qu’elles soient comprises par les applications.\n\nElle gère :\n\n- Encodage\n    \n- Chiffrement\n    \n- Compression\n    \n\n---\n\n## Exemples\n\n### Chiffrement\n\nHTTPS :\n\n```\nDonnées\n ↓\nChiffrement TLS\n ↓\nTransmission sécurisée\n```\n\n---\n\n### Formats\n\n- JPEG\n    \n- PNG\n    \n- MP3\n    \n- UTF-8\n    \n\n---\n\n## Problèmes\n\n- Certificat SSL expiré\n    \n- Format incompatible\n    \n\n---\n\n# 9. Couche 7 — Application (Application)\n\n## Rôle\n\nCouche proche de l’utilisateur.\n\nElle fournit les services réseau aux applications.\n\n---\n\n## Protocoles connus\n\n|Service|Protocole|\n|---|---|\n|Web|HTTP / HTTPS|\n|Mail|SMTP / IMAP|\n|Fichiers|FTP / SMB|\n|DNS|DNS|\n|Administration|SSH / RDP|\n\n---\n\n## Exemples\n\nNavigateur :\n\n```\nChrome\n ↓\nHTTPS\n ↓\nServeur Web\n```\n\n---\n\n## Problèmes typiques\n\n- Site inaccessible\n    \n- Application réseau HS\n    \n- Mauvaise configuration\n    \n\n---\n\n# 10. Encapsulation des données\n\nLorsqu’une donnée voyage sur le réseau :\n\n```\nApplication\n     ↓\nDonnées\n     ↓\nTransport\n     ↓\nSegment\n     ↓\nRéseau\n     ↓\nPaquet\n     ↓\nLiaison\n     ↓\nTrame\n     ↓\nPhysique\n     ↓\nBits\n```\n\nÀ la réception :\n\n```\nBits\n ↓\nTrame\n ↓\nPaquet\n ↓\nSegment\n ↓\nDonnées\n```\n\n---\n\n# 11. Modèle OSI et dépannage N1\n\nMéthode de diagnostic :\n\n```\nCouche 1\n↓\nCouche 2\n↓\nCouche 3\n↓\nCouche 4\n↓\nCouche 7\n```\n\nToujours commencer par le plus bas niveau.\n\n---\n\n## Exemple : \"Je n'ai pas Internet\"\n\n### Couche 1\n\nVérifier :\n\n- Câble\n    \n- Wi-Fi\n    \n- Voyants\n    \n\n---\n\n### Couche 2\n\nVérifier :\n\n- Carte réseau\n    \n- VLAN\n    \n- MAC\n    \n\n---\n\n### Couche 3\n\nTester :\n\n```cmd\nipconfig\n```\n\nPuis :\n\n```cmd\nping passerelle\n```\n\n---\n\n### Couche 4\n\nVérifier :\n\n- Pare-feu\n    \n- Ports\n    \n\n---\n\n### Couche 7\n\nTester :\n\n- Navigateur\n    \n- DNS\n    \n- Application\n    \n\n---\n\n# 12. Modèle OSI vs TCP/IP\n\nLe modèle TCP/IP est celui réellement utilisé sur Internet.\n\nCorrespondance :\n\n```\nOSI                 TCP/IP\n\n7 Application  ┐\n6 Présentation │ Application\n5 Session      ┘\n\n4 Transport       Transport\n\n3 Réseau          Internet\n\n2 Liaison     ┐\n1 Physique    ┘ Accès réseau\n```\n\n---\n\n# 13. Adresses selon les couches\n\n|Couche|Adresse|\n|---|---|\n|Couche 2|MAC|\n|Couche 3|IP|\n|Couche 4|Port|\n|Couche 7|Nom/service|\n\nExemple :\n\n```\nMAC\n ↓\nIP\n ↓\nPort\n ↓\nApplication\n```\n\n---\n\n# 14. À retenir pour une école d’ingénieur réseau\n\n## Les couches essentielles :\n\n|Couche|À retenir|\n|---|---|\n|7|Applications réseau|\n|6|Chiffrement / format|\n|5|Sessions|\n|4|TCP, UDP, ports|\n|3|IP, routage|\n|2|MAC, switch, VLAN|\n|1|Câbles, signaux|\n\n---\n\n## Diagnostic réseau :\n\n```\nPhysique\n   ↓\nLiaison\n   ↓\nRéseau\n   ↓\nTransport\n   ↓\nApplication\n```\n\n---\n\n## Commandes associées\n\n```cmd\nipconfig\nping\ntracert\nnslookup\nnetstat\narp -a\nroute print\ngetmac\n```\n\n---\n\n# Résumé final\n\nLe modèle OSI permet de localiser un problème réseau :\n\n- **Couche 1 :** le matériel fonctionne-t-il ?\n    \n- **Couche 2 :** le réseau local communique-t-il ?\n    \n- **Couche 3 :** les machines se routent-elles ?\n    \n- **Couche 4 :** les ports/services répondent-ils ?\n    \n- **Couche 7 :** l’application fonctionne-t-elle ?"
  },
  {
    "id": "systeme-01-boot-pxe",
    "title": "BIOS / UEFI : Architecture et Déploiement Réseau via Boot PXE",
    "category": "systeme",
    "categoryName": "⚙️ Système & Boot PXE",
    "date": "20 Juillet 2026",
    "readTime": "5 min",
    "tags": [
      "BIOS",
      "PXE",
      "Système"
    ],
    "excerpt": "Le **PXE Boot** (_Preboot eXecution Environment_) est une technologie qui permet à un ordinateur de **démarrer via le réseau**, sans avoir besoin d'un système d...",
    "filePath": "Assets/obsidian/10_BIOS_UEFI/01_Boot_PXE.md",
    "content": "Le **PXE Boot** (_Preboot eXecution Environment_) est une technologie qui permet à un ordinateur de **démarrer via le réseau**, sans avoir besoin d'un système d'exploitation installé sur son disque dur ou d'une clé USB bootable.\n\n## Comment fonctionne le PXE Boot :\n\nVoici les étapes principales :\n\n```text\n┌─────────────┐\n│ PC démarre  │\n└──────┬──────┘\n       │\n       ▼\n┌─────────────────────────┐\n│ La carte réseau envoie  │\n│ une requête DHCP        │\n└──────┬──────────────────┘\n       │\n       ▼\n┌─────────────────────────┐\n│ Le serveur DHCP répond  │\n│ avec une adresse IP et  │\n│ l'adresse du serveur PXE│\n└──────┬──────────────────┘\n       │\n       ▼\n┌─────────────────────────┐\n│ Le PC télécharge le     │\n│ programme de démarrage  │\n│ via TFTP                │\n└──────┬──────────────────┘\n       │\n       ▼\n┌─────────────────────────┐\n│ Le programme charge un  │\n│ noyau Linux, WinPE ou   │\n│ un installateur         │\n└──────┬──────────────────┘\n       │\n       ▼\n┌─────────────────────────┐\n│ Le système démarre      │\n└─────────────────────────┘\n```\n\n---\n\n## Les composants nécessaires\n\n### 1. Le client PXE\n\nC'est le PC qui démarre.\n\n- Le BIOS/UEFI doit prendre en charge le PXE.\n    \n- La carte réseau possède un firmware PXE.\n    \n\n---\n\n### 2. Le serveur DHCP\n\nSon rôle est de fournir :\n\n- une adresse IP au client ;\n    \n- l'adresse du serveur de boot ;\n    \n- le nom du fichier de démarrage.\n    \n\nPar exemple :\n\n```\nIP client : 192.168.1.50\nServeur PXE : 192.168.1.10\nFichier : bootx64.efi\n```\n\n---\n\n### 3. Le serveur TFTP\n\nLe protocole **TFTP** (_Trivial File Transfer Protocol_) sert à transférer les premiers fichiers de démarrage.\n\nIl fournit par exemple :\n\n- `pxelinux.0`\n    \n- `bootx64.efi`\n    \n- `grubx64.efi`\n    \n\n---\n\n### 4. Le serveur d'installation\n\nUne fois le chargeur lancé, celui-ci peut télécharger :\n\n- une image Linux (Ubuntu, Debian, etc.) ;\n    \n- WinPE pour installer Windows ;\n    \n- Clonezilla ;\n    \n- des outils de dépannage ;\n    \n- une image ISO montée via HTTP ou NFS.\n    \n\n---\n\n## Les protocoles utilisés\n\n|Protocole|Rôle|\n|---|---|\n|DHCP|Attribue une adresse IP et indique où trouver le boot|\n|TFTP|Télécharge le chargeur de démarrage|\n|HTTP|Télécharge le système ou l'image d'installation (souvent plus rapide que TFTP)|\n|NFS|Partage des fichiers Linux|\n|SMB|Partage Windows|\n\n---\n\n## Exemple concret\n\nImaginons une entreprise qui doit installer Windows sur 200 PC.\n\nAu lieu de :\n\n- préparer 200 clés USB ;\n    \n- démarrer chaque machine manuellement ;\n    \n\non configure un serveur PXE.\n\nEnsuite :\n\n1. Le PC démarre.\n    \n2. Il demande une adresse IP.\n    \n3. Il reçoit automatiquement les informations du serveur PXE.\n    \n4. Il télécharge WinPE.\n    \n5. WinPE lance automatiquement l'installation de Windows.\n    \n\nAucune clé USB n'est nécessaire.\n\n---\n\n## Avantages\n\n- Installation automatisée de nombreux postes.\n    \n- Plus besoin de support USB ou DVD.\n    \n- Déploiement rapide.\n    \n- Centralisation des images système.\n    \n- Idéal pour les entreprises et les laboratoires.\n    \n\n---\n\n## Inconvénients\n\n- Nécessite une infrastructure réseau (DHCP, TFTP, serveur PXE).\n    \n- Configuration initiale plus complexe.\n    \n- Dépendance au réseau.\n    \n- TFTP est lent pour les gros fichiers (on utilise souvent HTTP ensuite).\n    \n\n---\n\n## Exemple avec Linux\n\nUn serveur peut contenir :\n\n```\n/tftpboot/\n│\n├── pxelinux.0\n├── ldlinux.c32\n├── menu.c32\n├── pxelinux.cfg/\n│      default\n│\n├── ubuntu/\n│      vmlinuz\n│      initrd.img\n│\n└── windows/\n       bootx64.efi\n```\n\nLors du démarrage, un menu peut apparaître :\n\n```\n=========================\n      PXE BOOT MENU\n=========================\n\n1. Installer Ubuntu\n2. Installer Debian\n3. Installer Windows 11\n4. Clonezilla\n5. Outil de diagnostic\n6. MemTest86+\n```\n\nL'utilisateur choisit une option, puis le système correspondant est chargé depuis le réseau.\n\n---\n\n## Cas d'usage courants\n\n- Déploiement de Windows avec Microsoft Deployment Toolkit (MDT) ou Windows Deployment Services (WDS).\n    \n- Installation automatisée de distributions Linux.\n    \n- Clonage de postes avec Clonezilla.\n    \n- Démarrage d'outils de diagnostic ou de récupération.\n    \n- Environnements de calcul où les machines démarrent sur une image réseau.\n    \n\n### En résumé\n\nLe **PXE Boot** permet à un ordinateur de **démarrer un système d'exploitation ou un programme directement depuis le réseau**. Le processus repose généralement sur :\n\n1. **DHCP** pour obtenir une adresse IP et les informations de démarrage.\n    \n2. **TFTP** pour télécharger le premier chargeur de démarrage.\n    \n3. **HTTP, NFS ou SMB** pour récupérer le système d'exploitation ou les fichiers d'installation.\n    \n\nC'est une technologie largement utilisée pour le déploiement automatisé de systèmes, la maintenance et l'administration de parcs informatiques."
  }
];
