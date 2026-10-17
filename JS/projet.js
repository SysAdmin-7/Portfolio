/**
 * ==========================================================================
 * GESTION DYNAMIQUE DES PROJETS & LABS TECHNIQUES
 * Portfolio BTS SIO SISR - Mathis Dubos
 * ==========================================================================
 */

document.addEventListener("DOMContentLoaded", function () {
    // --- 1. BASE DE DONNÉES TECHNIQUE POUR LA MODAL ---
    const projectsData = [
        {
            id: "debian-hardened",
            title: "VM Debian Hardened (Security Baseline)",
            category: "vm",
            categoryLabel: "Système & Sécurité",
            categoryIcon: "fa-shield-halved",
            status: "Ready to Clone",
            statusClass: "ready",
            icon: "fa-shield-halved",
            shortDesc: "Modèle de machine virtuelle Debian durcie selon les recommandations ANSSI. Pare-feu UFW restrictif, Fail2Ban actif et SSH sécurisé.",
            highlights: [
                "Pare-feu UFW pré-configuré (politique Drop par défaut)",
                "Authentification SSH durcie (clés Ed25519 uniquement, port custom)",
                "Fail2Ban avec détection d'attaques brute-force et jail active"
            ],
            tags: ["Debian", "UFW", "Fail2Ban", "Bash", "Sécurité", "Linux"],
            specs: {
                os: "Debian 11 / 12 minimal",
                infra: "Proxmox VE / VirtualBox",
                role: "Golden Image / Template VM de production",
                level: "Intermédiaire à Avancé"
            },
            fullContext: "Dans le cadre de l'administration système et de la conformité aux guides de durcissement (CIS Benchmark & ANSSI), cette image VM a été conçue pour servir de modèle socle sécurisé avant tout déploiement de service en réseau d'entreprise.",
            competences: [
                "Bloc 1 : Recenser et identifier les ressources numériques, appliquer les règles de sécurité",
                "Bloc 2 : Administrer sur site et à distance les serveurs GNU/Linux",
                "Gestion des incidents : Prévention contre les attaques par force brute et scans réseau"
            ],
            command: "# Script de durcissement complet disponible au téléchargement\ncurl -O Assets/projets/debian_hardened_setup.sh\nchmod +x debian_hardened_setup.sh && sudo ./debian_hardened_setup.sh",
            downloadUrl: "Assets/projets/debian_hardened_setup.sh",
            downloadFileName: "debian_hardened_setup.sh",
            isExternalDownload: false
        },
        {
            id: "cisco-vlan-ssh",
            title: "Architecture Réseau Cisco : VLANs 802.1Q & SSH Sécurisé",
            category: "network",
            categoryLabel: "Réseaux & Commutation",
            categoryIcon: "fa-route",
            status: "Lab Validé",
            statusClass: "tested",
            icon: "fa-route",
            shortDesc: "Conception et déploiement d'une infrastructure commutée Cisco avec segmentation VLAN, routage Inter-VLAN (Router-on-a-Stick) et accès distant SSH v2 chiffré.",
            highlights: [
                "Segmentation par VLANs métiers (Admin, Employés, Serveurs, Guest)",
                "Trunking 802.1Q et sécurisation des ports non utilisés",
                "Administration distante chiffrée via SSH v2 avec clés RSA 2048"
            ],
            tags: ["Cisco", "VLAN", "SSH", "Switching", "Réseau", "802.1Q"],
            specs: {
                os: "Cisco IOS v15.x",
                infra: "Cisco Packet Tracer / Commutateurs Catalyst 2960",
                role: "Segmentation réseau d'entreprise & sécurité LAN",
                level: "Intermédiaire"
            },
            fullContext: "Maquette d'infrastructure réseau validant la maîtrise de la commutation Cisco en BTS SISR : cloisonnement des flux utilisateurs, isolation du trafic de gestion et configuration des passerelles par sous-interfaces virtuelles.",
            competences: [
                "Bloc 1 : Participer à la conception de l'architecture d'un réseau local",
                "Bloc 2 : Configurer les commutateurs et routeurs Cisco, mettre en œuvre les protocoles de niveau 2/3",
                "Sécurité réseau : Bannissement de Telnet au profit de SSH v2 chiffré"
            ],
            command: "# Configuration type d'un trunk Cisco avec VLAN natif sécurisé\nenable\nconfigure terminal\ninterface GigabitEthernet0/1\n switchport mode trunk\n switchport trunk native vlan 99\n switchport trunk allowed vlan 10,20,30,99\n no shutdown",
            downloadUrl: "Assets/fichier pdf/2ème anné/lab1_fondation_vlan_ssh_packet_tracer.pkt",
            downloadFileName: "lab1_fondation_vlan_ssh_packet_tracer.pkt",
            isExternalDownload: false
        },
        {
            id: "monitoring-stack",
            title: "Stack Monitoring Prometheus & Grafana",
            category: "app",
            categoryLabel: "Supervision & Monitoring",
            categoryIcon: "fa-chart-line",
            status: "Lab Homelab",
            statusClass: "lab",
            icon: "fa-chart-line",
            shortDesc: "Supervision complète d'un parc de serveurs et conteneurs avec Prometheus pour la collecte métrique et Grafana pour la visualisation en temps réel.",
            highlights: [
                "Collecte métrique CPU, RAM, Disque et Réseau via Node Exporter",
                "Dashboards interactifs Grafana avec alertes temps réel",
                "Déploiement conteneurisé automatisé avec Docker Compose"
            ],
            tags: ["Grafana", "Prometheus", "Docker", "NodeExporter", "Linux"],
            specs: {
                os: "Ubuntu Server 22.04 LTS",
                infra: "Docker & Docker Compose",
                role: "Supervision d'infrastructure & observabilité",
                level: "Intermédiaire"
            },
            fullContext: "Mise en place d'un centre de supervision permettant d'anticiper les défaillances de capacité matérielle, surveiller l'état des services critiques et visualiser les pics d'utilisation réseau du homelab.",
            competences: [
                "Bloc 1 : Exploiter des référentiels, normes et standards pour la surveillance du système",
                "Bloc 2 : Déployer et superviser les composants de l'infrastructure",
                "Métrologie : Configuration des sondes et seuils de notification"
            ],
            command: "# Lancement de la pile complète depuis le fichier compose téléchargeable\ndocker compose -f docker_monitoring_stack.yml up -d\ncurl -I http://localhost:3000 # Accès à Grafana",
            downloadUrl: "Assets/projets/docker_monitoring_stack.yml",
            downloadFileName: "docker_monitoring_stack.yml",
            isExternalDownload: false
        },
        {
            id: "wireguard-easy",
            title: "Passerelle VPN WireGuard Easy",
            category: "vm",
            categoryLabel: "Réseau & VPN",
            categoryIcon: "fa-network-wired",
            status: "Testé & Actif",
            statusClass: "tested",
            icon: "fa-network-wired",
            shortDesc: "Serveur VPN WireGuard à très haute performance couplé à une interface d'administration Web pour générer des configurations et QR codes clients en 1 clic.",
            highlights: [
                "Chiffrement de pointe ChaCha20-Poly1305 avec WireGuard",
                "Génération instantanée de profils mobiles via QR Code",
                "Isolation des conteneurs et routage IP Forwarding sécurisé"
            ],
            tags: ["WireGuard", "VPN", "Docker", "Réseau", "Sécurité", "Web UI"],
            specs: {
                os: "Debian 12 / Docker",
                infra: "Conteneurisé avec accès au module noyau WireGuard",
                role: "Accès distant sécurisé au réseau local (LAN)",
                level: "Intermédiaire"
            },
            fullContext: "Déploiement d'un tunnel sécurisé pour accéder aux ressources internes du réseau local depuis l'extérieur en limitant la charge CPU et la latence par rapport aux solutions OpenVPN traditionnelles.",
            competences: [
                "Bloc 1 : Garantir la disponibilité et la sécurité des accès distants",
                "Bloc 2 : Mettre en œuvre et administrer un équipement de réseau et tunnel chiffré",
                "Gestion des clés cryptographiques asymétriques"
            ],
            command: "# Script de lancement rapide téléchargeable ci-dessous\nchmod +x wireguard_easy_docker.sh\n./wireguard_easy_docker.sh",
            downloadUrl: "Assets/projets/wireguard_easy_docker.sh",
            downloadFileName: "wireguard_easy_docker.sh",
            isExternalDownload: false
        },
        {
            id: "fog-pxe-server",
            title: "Serveur de Déploiement PXE d'Images FOG Project",
            category: "vm",
            categoryLabel: "Déploiement & Clonage",
            categoryIcon: "fa-clone",
            status: "En Prod (Stage)",
            statusClass: "prod",
            icon: "fa-clone",
            shortDesc: "Mise en place d'une solution FOG Project sous Linux pour la capture, le stockage et le masterisation en masse de postes de travail via le démarrage réseau PXE.",
            highlights: [
                "Déploiement d'images Windows 10/11 en Multicast et Unicast",
                "Intégration DHCP / PXE TFTP avec gestion des drivers Sysprep",
                "Automatisation de l'intégration au domaine Active Directory"
            ],
            tags: ["FOG", "PXE", "Linux", "Windows", "Clonage", "SysAdmin"],
            specs: {
                os: "Debian / Ubuntu Server",
                infra: "Serveur dédié avec stockage NFS et base MariaDB",
                role: "Masterisation & déploiement rapide du parc client",
                level: "Avancé"
            },
            fullContext: "Projet d'infrastructure majeur réalisé en entreprise : réduction du temps d'installation d'un poste utilisateur de 2 heures à moins de 12 minutes grâce au déploiement d'images standardisées sur le réseau local.",
            competences: [
                "Bloc 1 : Gérer le patrimoine informatique et déployer les postes clients",
                "Bloc 2 : Administrer les services réseau DHCP, TFTP et NFS",
                "Automatisation des tâches de support et industrialisation du parc"
            ],
            command: "# Téléchargement du dossier technique FOG Project\n# Consulter le livrable de procédure complet pour la configuration PXE",
            downloadUrl: "02_Stage_1ère_Année/06_deploiment_d'image_système_avec_FOG.md",
            downloadFileName: "06_deploiment_d_image_systeme_avec_FOG.md",
            isExternalDownload: false
        },
        {
            id: "ad-automation-ps",
            title: "Automatisation Active Directory & Audit PowerShell",
            category: "bot",
            categoryLabel: "Automatisation & Scripting",
            categoryIcon: "fa-terminal",
            status: "Validé",
            statusClass: "ready",
            icon: "fa-terminal",
            shortDesc: "Scripts d'administration système PowerShell pour la création en masse de comptes Active Directory depuis fichier CSV et l'audit des comptes inactifs.",
            highlights: [
                "Intégration automatique d'utilisateurs avec mot de passe et OU cible",
                "Détection des comptes orphelins ou inactifs depuis plus de 90 jours",
                "Export des rapports de sécurité au format CSV et console"
            ],
            tags: ["PowerShell", "Active Directory", "Windows", "Scripting", "Audit"],
            specs: {
                os: "Windows Server 2022 / Windows 11 RSAT",
                infra: "Module ActiveDirectory PowerShell",
                role: "Administration & audit des annuaires d'entreprise",
                level: "Intermédiaire"
            },
            fullContext: "Scripting d'outils d'automatisation pour l'équipe informatique afin de standardiser les embauches d'utilisateurs (onboarding) et renforcer la politique de sécurité en désactivant les comptes abandonnés.",
            competences: [
                "Bloc 1 : Automatiser les procédures d'administration du service",
                "Bloc 2 : Administrer l'annuaire Active Directory Domain Services (AD DS)",
                "Audit et conformité des identités et des accès (IAM)"
            ],
            command: "# Exécution du script PowerShell d'automatisation téléchargeable\n.\\active_directory_automation.ps1 -CsvPath .\\utilisateurs.csv",
            downloadUrl: "Assets/projets/active_directory_automation.ps1",
            downloadFileName: "active_directory_automation.ps1",
            isExternalDownload: false
        },
        {
            id: "discord-bot",
            title: "Bot Discord Support & Gestion de Tickets",
            category: "bot",
            categoryLabel: "Automatisation Python",
            categoryIcon: "fa-robot",
            status: "En Prod",
            statusClass: "prod",
            icon: "fa-robot",
            shortDesc: "Bot Discord développé en Python pour gérer le support technique. Salons privés éphémères, base SQLite, archivage des logs et exports HTML.",
            highlights: [
                "Création automatisée de channels de support avec permissions privées",
                "Génération de transcripts complets des conversations au format HTML",
                "Gestion de tickets avec base de données SQLite et persistance"
            ],
            tags: ["Python", "Discord.py", "SQLite", "Docker", "AsyncIO"],
            specs: {
                os: "Alpine Linux / Docker Container",
                infra: "Python 3.11 avec Discord.py 2.x",
                role: "Support client & helpdesk communautaire",
                level: "Intermédiaire"
            },
            fullContext: "Automatisation du processus d'assistance technique pour éliminer les demandes éparpillées en messages privés. Les utilisateurs ouvrent un ticket en un clic, assigné à l'équipe support avec historique complet.",
            competences: [
                "Bloc 1 : Répondre aux incidents et aux demandes d'assistance",
                "Automatisation : Programmation asynchrone Python et traitement des événements",
                "Gestion des données : Sauvegarde et requêtage relationnel SQLite"
            ],
            command: "# Lancement de l'agent Python téléchargeable ci-dessous\npython3 discord_ticket_bot.py",
            downloadUrl: "Assets/projets/discord_ticket_bot.py",
            downloadFileName: "discord_ticket_bot.py",
            isExternalDownload: false
        },
        {
            id: "vm-lamp-server",
            title: "Déploiement VM Linux & Serveur Web LAMP (7 Étapes)",
            category: "vm",
            categoryLabel: "Systèmes & Serveurs Web",
            categoryIcon: "fa-server",
            status: "Documentation Complète",
            statusClass: "ready",
            icon: "fa-server",
            shortDesc: "Projet structuré en 7 étapes : création d'une VM sous VirtualBox, installation Xubuntu/Debian, Guest Additions, utilisateurs, outils et serveur Apache2/PHP.",
            highlights: [
                "Guide complet pas à pas rédigé en 7 étapes d'ingénierie",
                "Configuration fine des VirtualHosts Apache2 et modules PHP",
                "Politiques de sécurité des utilisateurs et des permissions UNIX"
            ],
            tags: ["Apache2", "PHP", "VirtualBox", "Debian", "VirtualHost", "Linux"],
            specs: {
                os: "Xubuntu / Debian GNU/Linux",
                infra: "Oracle VM VirtualBox",
                role: "Hébergement Web autonome & environnement de test",
                level: "Fondamental à Intermédiaire"
            },
            fullContext: "Projet pivot de la formation SISR formalisant la démarche de bout en bout de création d'une infrastructure de service : du dimensionnement matériel de l'hyperviseur jusqu'à la mise en ligne d'un hôte virtuel sécurisé.",
            competences: [
                "Bloc 1 : Mettre à disposition des utilisateurs un service informatique",
                "Bloc 2 : Installer et configurer un serveur Web Apache et interpréteur PHP",
                "Documentation technique : Rédaction de guides de procédures d'installation"
            ],
            command: "# Fichier Word / Guide complet téléchargeable ci-dessous\nsudo apt update && sudo apt install -y apache2 php libapache2-mod-php\nsudo a2ensite monsite.conf && sudo systemctl restart apache2",
            downloadUrl: "Assets/fichier pdf/projet/VM ETAPE7 SERVEUR WEB COMPLET(1).docx",
            downloadFileName: "VM_ETAPE7_SERVEUR_WEB_COMPLET.docx",
            isExternalDownload: false
        },
        {
            id: "csi-linux-lab",
            title: "Laboratoire d'Investigation Cyber Forensics (CSI Linux)",
            category: "vm",
            categoryLabel: "Cybersécurité & DFIR",
            categoryIcon: "fa-user-secret",
            status: "Lab Recherche",
            statusClass: "lab",
            icon: "fa-user-secret",
            shortDesc: "Station d'analyse numérique et réponse à incident déployée sous CSI Linux 2024. Analyse de dumps mémoire RAM avec Volatility 3 et examen de disques Autopsy.",
            highlights: [
                "Environnement sandboxé et isolé pour l'analyse de preuves numériques",
                "Extraction d'artefacts mémoire et analyse de processus cachés",
                "Intégration d'outils OSINT pour le renseignement sur les menaces"
            ],
            tags: ["CSI Linux", "DFIR", "Forensics", "Volatility", "Sécurité", "OSINT"],
            specs: {
                os: "CSI Linux 2024 (Basé Ubuntu)",
                infra: "Oracle VirtualBox en réseau Host-Only sécurisé",
                role: "Poste d'investigation numérique et criminalistique",
                level: "Avancé"
            },
            fullContext: "Mise en pratique approfondie des compétences de veille technologique (Thème 1 & 2) : montage d'un laboratoire forensique pour collecter et analyser les preuves d'une intrusion sans altérer leur intégrité judiciaire.",
            competences: [
                "Bloc 1 : Développer son projet professionnel et sa veille technologique",
                "Bloc 2 : Participer à la sécurité globale et à la réponse aux incidents",
                "DFIR : Chaîne de conservation des preuves et analyse post-mortem"
            ],
            command: "# Télécharger le guide complet du laboratoire ci-dessous\ncat Assets/projets/csi_linux_lab_guide.md",
            downloadUrl: "Assets/projets/csi_linux_lab_guide.md",
            downloadFileName: "csi_linux_lab_guide.md",
            isExternalDownload: false
        },
        {
            id: "minecraft-docker",
            title: "Serveur Dédié Minecraft Conteneurisé",
            category: "vm",
            categoryLabel: "Conteneurisation Docker",
            categoryIcon: "fa-cubes",
            status: "Conteneurisé",
            statusClass: "tested",
            icon: "fa-cubes",
            shortDesc: "Environnement de serveur de jeu sous Ubuntu entièrement conteneurisé. Isolation complète, gestion fine de la mémoire vive et scripts de sauvegarde cron.",
            highlights: [
                "Isolation des processus au sein d'un conteneur Docker étanche",
                "Contrôle strict des quotas CPU et allocation RAM (Memory Limit)",
                "Sauvegardes automatisées rdiff des données de monde"
            ],
            tags: ["Docker", "Ubuntu", "SysAdmin", "Bash", "Sauvegarde"],
            specs: {
                os: "Ubuntu Server 22.04 LTS",
                infra: "Docker Engine & Docker Volume persistant",
                role: "Hébergement applicatif multi-utilisateurs",
                level: "Intermédiaire"
            },
            fullContext: "Mise en pratique des compétences de gestionnaire de conteneurs pour héberger un service persistant avec gestion des volumes de données et redémarrage automatique en cas de crash.",
            competences: [
                "Bloc 1 : Gérer le patrimoine informatique et planifier les sauvegardes",
                "Bloc 2 : Déployer un service conteneurisé et superviser la consommation des ressources",
                "Gestion du stockage persistant (Docker Volumes & Bind Mounts)"
            ],
            command: "# Téléchargez le fichier Docker Compose ci-dessous\ndocker compose -f minecraft_docker_compose.yml up -d",
            downloadUrl: "Assets/projets/minecraft_docker_compose.yml",
            downloadFileName: "minecraft_docker_compose.yml",
            isExternalDownload: false
        },
        {
            id: "minecraft-papermc",
            title: "Serveur PaperMC Haute Performance (Tuning JVM)",
            category: "vm",
            categoryLabel: "Optimisation & Performance",
            categoryIcon: "fa-cube",
            status: "Terminé",
            statusClass: "prod",
            icon: "fa-cube",
            shortDesc: "Serveur applicatif haute performance basé sur le fork PaperMC avec application des flags JVM Aikar pour minimiser les temps de pause du Garbage Collector.",
            highlights: [
                "Flags JVM Aikar personnalisés pour le Garbage Collector G1",
                "Tuning réseau (TCP no delay, buffer size) et élimination du lag",
                "Protection contre les requêtes malformées et anti-DDoS"
            ],
            tags: ["Java", "Linux", "Gaming", "Tuning", "Docker"],
            specs: {
                os: "Debian 12 Bookworm",
                infra: "OpenJDK 21 Temurin / PaperMC",
                role: "Serveur haute performance optimisé pour la charge",
                level: "Avancé"
            },
            fullContext: "Étude et mise en œuvre des optimisations de performances matérielles et de la machine virtuelle Java pour réduire les latences sous forte charge d'utilisateurs concurrents.",
            competences: [
                "Bloc 2 : Optimiser les performances d'une application serveur",
                "Paramétrage avancé de la mémoire vive et de la gestion du ramasse-miettes (GC)",
                "Audit des logs de performances et timing TPS"
            ],
            command: "# Téléchargez le script de lancement optimisé ci-dessous\nchmod +x papermc_performance_launch.sh && ./papermc_performance_launch.sh",
            downloadUrl: "Assets/projets/papermc_performance_launch.sh",
            downloadFileName: "papermc_performance_launch.sh",
            isExternalDownload: false
        },
        {
            id: "workstation-montage",
            title: "Conception & Assemblage Station Workstation SISR",
            category: "vm",
            categoryLabel: "Matériel & Architecture",
            categoryIcon: "fa-microchip",
            status: "Dossier Validé",
            statusClass: "ready",
            icon: "fa-microchip",
            shortDesc: "Étude de dimensionnement, sélection des composants matériels et assemblage complet d'une station de travail puissante pour la virtualisation et les labs SISR.",
            highlights: [
                "Sélection des composants CPU multi-cœurs et mémoire vive ECC / haute cadence",
                "Architecture du stockage en NVMe PCIe 4.0 et disques redondants",
                "Optimisation du flux d'air, alimentation certifiée et tests de stabilité"
            ],
            tags: ["Hardware", "Workstation", "Virtualisation", "Architecture", "Matériel"],
            specs: {
                os: "Architecture x86-64 / UEFI",
                infra: "Station de travail physique",
                role: "Plateforme hôte pour hyperviseur et maquettes",
                level: "Fondamental à Intermédiaire"
            },
            fullContext: "Dossier technique complet formalisant le choix des composants et les étapes d'assemblage physique d'une machine dédiée aux exigences lourdes de la virtualisation système et réseau.",
            competences: [
                "Bloc 1 : Recenser et identifier les besoins matériels des utilisateurs",
                "Assemblage, maintenance et diagnostic des composants informatiques",
                "Configuration et mise à jour du firmware UEFI / BIOS"
            ],
            command: "# Téléchargement du dossier PDF complet ci-dessous\n# Visualiser le document technique d'assemblage et tests de stress",
            downloadUrl: "Assets/fichier pdf/TP/Montag_PC dubos mathis.pdf",
            downloadFileName: "Montage_PC_Workstation_Mathis_Dubos.pdf",
            isExternalDownload: false
        },
        {
            id: "cisco-diagnostic-lab",
            title: "Maquette Diagnostic Réseau Cisco Packet Tracer",
            category: "network",
            categoryLabel: "Réseaux & Diagnostic",
            categoryIcon: "fa-network-wired",
            status: "Maquette .PKT",
            statusClass: "tested",
            icon: "fa-network-wired",
            shortDesc: "Topologie complète de simulation Packet Tracer modélisant un réseau multi-sites avec sous-réseaux IPv4, passerelles par défaut, NAT et routage statique.",
            highlights: [
                "Topologie de simulation Packet Tracer prête à ouvrir (.pkt)",
                "Tests de connectivité de bout en bout (ICMP, ARP, DNS)",
                "Résolution d'incidents de connectivité et diagnostic des tables de routage"
            ],
            tags: ["Cisco", "Packet Tracer", "IPv4", "Routage", "NAT", "Diagnostic"],
            specs: {
                os: "Cisco Packet Tracer v8.x",
                infra: "Routeurs Cisco 1941, Switchs 2960",
                role: "Laboratoire de test et résolution de pannes réseau",
                level: "Intermédiaire"
            },
            fullContext: "Laboratoire de validation pratique pour diagnostiquer méthodiquement les pannes de couche réseau (OSI 1 à 3) : mauvaise passerelle, masque incorrect, absence de route ou restriction d'interface.",
            competences: [
                "Bloc 1 : Traiter les incidents de connectivité réseau",
                "Bloc 2 : Déployer et dépanner une infrastructure réseau IP",
                "Analyse des paquets et flux via le mode simulation Packet Tracer"
            ],
            command: "# Fichier de topologie Packet Tracer téléchargeable directement ci-dessous\n# Ouvrez tp.pkt avec Cisco Packet Tracer",
            downloadUrl: "Assets/fichier pdf/TP/tp.pkt",
            downloadFileName: "tp_cisco_diagnostic.pkt",
            isExternalDownload: false
        },
        {
            id: "macos-tahoe",
            title: "Ubuntu Desktop macOS Tahoe (Custom Rice)",
            category: "vm",
            categoryLabel: "UI/UX & Personnalisation OS",
            categoryIcon: "fa-desktop",
            status: "Custom Rice",
            statusClass: "rice",
            icon: "fa-desktop",
            shortDesc: "Transformation esthétique intégrale d'un environnement Ubuntu pour répliquer le concept visuel macOS Tahoe : GNOME 44+, thème GTK personnalisé et dock fluide.",
            highlights: [
                "Personnalisation en profondeur du compositeur d'affichage GNOME",
                "Intégration d'effets de flou d'arrière-plan et polices typographiques SF Pro",
                "Pack d'icônes vectorielles et widgets d'indicateurs système Conky"
            ],
            tags: ["Ubuntu", "GNOME", "Rice", "UI/UX", "Linux"],
            specs: {
                os: "Ubuntu 24.04 LTS Desktop",
                infra: "Oracle VirtualBox / Machine Physique",
                role: "Station de travail personnalisée et ergonomique",
                level: "Intermédiaire"
            },
            fullContext: "Projet de recherche d'ergonomie et de confort utilisateur sur station de travail Linux, démontrant la souplesse extrême du système d'exploitation libre et de ses gestionnaires de fenêtres.",
            competences: [
                "Bloc 1 : Mettre en place et adapter un environnement de travail utilisateur",
                "Gestion des paquets et extensions de bureau sous GNU/Linux",
                "Fichiers de configuration utilisateur dotfiles"
            ],
            command: "# Téléchargement du pack et aperçus depuis le Google Drive partagé ci-dessous\n# Visitez le dossier Drive pour obtenir les fonds d'écran, thèmes et scripts",
            downloadUrl: "https://drive.google.com/drive/folders/1FWM_vpFIWbepzvbFTYor6MNsmkcrACrq?usp=sharing",
            downloadFileName: "macos_tahoe_rice_drive",
            isExternalDownload: true
        }
    ];

    // --- 2. SÉLECTEURS DU DOM ---
    const projectCards = document.querySelectorAll(".project-card");
    const searchInput = document.getElementById("search-projects-input");
    const clearSearchBtn = document.getElementById("clear-search-btn");
    const counterBadge = document.getElementById("results-counter-badge");
    const categoryTabs = document.querySelectorAll(".category-tab-btn");
    const techFilterChips = document.querySelectorAll(".tech-filter-chip");
    const emptyState = document.getElementById("empty-results-box");
    const resetFiltersBtn = document.getElementById("reset-filters-btn");
    const totalProjectsCountEl = document.getElementById("stat-total-projects");

    // Modal
    const modalOverlay = document.getElementById("project-modal-overlay");
    const modalCloseBtn = document.getElementById("modal-close-btn");
    const modalTitle = document.getElementById("modal-project-title");
    const modalMetaBadges = document.getElementById("modal-meta-badges");
    const modalDesc = document.getElementById("modal-project-desc");
    const modalSpecsGrid = document.getElementById("modal-specs-grid");
    const modalCompetences = document.getElementById("modal-competences-list");
    const modalCommand = document.getElementById("modal-snippet-code");
    const modalActionDownload = document.getElementById("modal-action-download");
    const copySnippetBtn = document.getElementById("copy-snippet-btn");
    const toastNotice = document.getElementById("toast-notice");

    // État courant
    let currentCategory = "all";
    let currentTechTag = "all";
    let currentSearchTerm = "";

    // Mettre à jour les compteurs des onglets
    function updateCategoryCounts() {
        if (totalProjectsCountEl) {
            totalProjectsCountEl.textContent = projectCards.length;
        }

        const counts = {
            all: projectCards.length,
            vm: 0,
            network: 0,
            bot: 0,
            app: 0
        };

        projectCards.forEach(card => {
            const cat = card.getAttribute("data-category");
            if (counts[cat] !== undefined) {
                counts[cat]++;
            }
        });

        categoryTabs.forEach(tab => {
            const cat = tab.getAttribute("data-category");
            const countEl = tab.querySelector(".tab-count");
            if (countEl && counts[cat] !== undefined) {
                countEl.textContent = counts[cat];
            }
        });
    }

    // --- 3. FILTRAGE EN TEMPS RÉEL DES CARTES ---
    function filterProjects() {
        const query = currentSearchTerm.toLowerCase().trim();
        let visibleCount = 0;

        projectCards.forEach(card => {
            const cardCat = card.getAttribute("data-category") || "";
            const cardId = card.getAttribute("data-id") || "";
            const cardText = card.textContent.toLowerCase();
            const cardTags = card.getAttribute("data-tags") ? card.getAttribute("data-tags").toLowerCase() : "";

            // Correspondance catégorie
            const matchCategory = (currentCategory === "all" || cardCat === currentCategory);

            // Correspondance tag techno
            const matchTech = (currentTechTag === "all" || cardTags.includes(currentTechTag.toLowerCase()));

            // Correspondance terme de recherche
            const matchSearch = !query || cardText.includes(query) || cardTags.includes(query) || cardId.includes(query);

            if (matchCategory && matchTech && matchSearch) {
                card.style.display = "flex";
                visibleCount++;
            } else {
                card.style.display = "none";
            }
        });

        // Mise à jour du compteur
        if (counterBadge) {
            counterBadge.textContent = `${visibleCount} projet${visibleCount > 1 ? "s" : ""} affiché${visibleCount > 1 ? "s" : ""}`;
        }

        // Affichage de l'état vide
        if (emptyState) {
            emptyState.style.display = (visibleCount === 0) ? "block" : "none";
        }
    }

    // --- 4. GESTION DE LA MODAL DÉTAILS ---
    function openProjectModal(projectId) {
        const project = projectsData.find(p => p.id === projectId);
        if (!project || !modalOverlay) return;

        modalTitle.textContent = project.title;

        // Badges d'en-tête de la modal
        modalMetaBadges.innerHTML = `
            <span class="hero-pill"><i class="fas ${project.categoryIcon}"></i> ${project.categoryLabel}</span>
            <span class="status-badge-custom ${project.statusClass}">
                <span class="pulse-dot" style="width:6px; height:6px;"></span> ${project.status}
            </span>
            <span class="hero-pill" style="color:var(--cyan); border-color:rgba(6,182,212,0.3);"><i class="fas fa-layer-group"></i> ${project.specs.level || "BTS SIO SISR"}</span>
        `;

        // Description
        modalDesc.textContent = project.fullContext || project.shortDesc;

        // Fiche technique (Specs)
        modalSpecsGrid.innerHTML = `
            <div class="spec-cell">
                <span class="spec-cell-label"><i class="fab fa-linux me-1"></i> Système d'Exploitation</span>
                <span class="spec-cell-value">${project.specs.os}</span>
            </div>
            <div class="spec-cell">
                <span class="spec-cell-label"><i class="fas fa-network-wired me-1"></i> Plateforme / Hyperviseur</span>
                <span class="spec-cell-value">${project.specs.infra}</span>
            </div>
            <div class="spec-cell">
                <span class="spec-cell-label"><i class="fas fa-bullseye me-1"></i> Rôle & Objectif</span>
                <span class="spec-cell-value">${project.specs.role}</span>
            </div>
            <div class="spec-cell">
                <span class="spec-cell-label"><i class="fas fa-shield-halved me-1"></i> Niveau & Périmètre</span>
                <span class="spec-cell-value">${project.specs.level}</span>
            </div>
        `;

        // Compétences BTS SIO SISR
        modalCompetences.innerHTML = project.competences.map(c => `
            <li><i class="fas fa-check-circle"></i> <span>${c}</span></li>
        `).join("");

        // Code / Commandes de déploiement
        modalCommand.textContent = project.command;

        // Bouton de Téléchargement dans le Footer de la Modal
        if (modalActionDownload) {
            modalActionDownload.href = project.downloadUrl;
            if (project.isExternalDownload) {
                modalActionDownload.target = "_blank";
                modalActionDownload.removeAttribute("download");
                modalActionDownload.innerHTML = `<i class="fas fa-cloud-arrow-down"></i> Télécharger les fichiers (Drive)`;
            } else {
                modalActionDownload.removeAttribute("target");
                modalActionDownload.setAttribute("download", project.downloadFileName);
                modalActionDownload.innerHTML = `<i class="fas fa-download"></i> Télécharger le livrable (${project.downloadFileName})`;
            }
        }

        // Afficher la modal avec animation
        modalOverlay.classList.add("active");
        document.body.style.overflow = "hidden"; // Bloquer le scroll d'arrière-plan
    }

    function closeProjectModal() {
        if (!modalOverlay) return;
        modalOverlay.classList.remove("active");
        document.body.style.overflow = "";
    }

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener("click", closeProjectModal);
    }

    if (modalOverlay) {
        modalOverlay.addEventListener("click", function (e) {
            if (e.target === modalOverlay) {
                closeProjectModal();
            }
        });
    }

    // Échap pour fermer la modal
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && modalOverlay && modalOverlay.classList.contains("active")) {
            closeProjectModal();
        }
    });

    // Copie du snippet de commande
    if (copySnippetBtn) {
        copySnippetBtn.addEventListener("click", function () {
            const codeText = modalCommand.textContent;
            navigator.clipboard.writeText(codeText).then(() => {
                showToast("Commande copiée dans le presse-papier !");
                const originalHtml = copySnippetBtn.innerHTML;
                copySnippetBtn.innerHTML = `<i class="fas fa-check" style="color:#10b981;"></i> Copié !`;
                setTimeout(() => {
                    copySnippetBtn.innerHTML = originalHtml;
                }, 2000);
            }).catch(err => {
                console.error("Erreur de copie :", err);
            });
        });
    }

    // Afficher une notification Toast
    function showToast(message) {
        if (!toastNotice) return;
        toastNotice.querySelector(".toast-message").textContent = message;
        toastNotice.classList.add("show");
        setTimeout(() => {
            toastNotice.classList.remove("show");
        }, 2600);
    }

    // --- 5. ÉVÉNEMENTS DE RECHERCHE ET FILTRES ---
    if (searchInput) {
        searchInput.addEventListener("input", function () {
            currentSearchTerm = this.value;
            if (clearSearchBtn) {
                clearSearchBtn.style.display = this.value.length > 0 ? "block" : "none";
            }
            filterProjects();
        });
    }

    if (clearSearchBtn) {
        clearSearchBtn.addEventListener("click", function () {
            if (searchInput) searchInput.value = "";
            currentSearchTerm = "";
            this.style.display = "none";
            filterProjects();
        });
    }

    // Onglets de catégorie
    categoryTabs.forEach(tab => {
        tab.addEventListener("click", function () {
            categoryTabs.forEach(t => t.classList.remove("active"));
            this.classList.add("active");
            currentCategory = this.getAttribute("data-category");
            filterProjects();
        });
    });

    // Filtres technologiques rapides (Chips)
    techFilterChips.forEach(chip => {
        chip.addEventListener("click", function () {
            const tag = this.getAttribute("data-tag");
            if (this.classList.contains("active")) {
                this.classList.remove("active");
                currentTechTag = "all";
            } else {
                techFilterChips.forEach(c => c.classList.remove("active"));
                this.classList.add("active");
                currentTechTag = tag;
            }
            filterProjects();
        });
    });

    // Réinitialisation des filtres
    if (resetFiltersBtn) {
        resetFiltersBtn.addEventListener("click", function () {
            currentCategory = "all";
            currentTechTag = "all";
            currentSearchTerm = "";
            if (searchInput) searchInput.value = "";
            if (clearSearchBtn) clearSearchBtn.style.display = "none";
            categoryTabs.forEach(t => t.classList.remove("active"));
            document.querySelector('.category-tab-btn[data-category="all"]').classList.add("active");
            techFilterChips.forEach(c => c.classList.remove("active"));
            filterProjects();
        });
    }

    // Boutons d'ouverture de modal
    document.querySelectorAll(".btn-open-modal").forEach(btn => {
        btn.addEventListener("click", function () {
            const projectId = this.getAttribute("data-id");
            openProjectModal(projectId);
        });
    });

    // Initialisation
    updateCategoryCounts();
    filterProjects();

    // Gestion du hash d'URL (si l'utilisateur arrive avec #cisco-vlan-ssh par ex.)
    if (window.location.hash) {
        const hashId = window.location.hash.substring(1);
        const targetProject = projectsData.find(p => p.id === hashId);
        if (targetProject) {
            setTimeout(() => {
                openProjectModal(hashId);
            }, 300);
        }
    }
});
