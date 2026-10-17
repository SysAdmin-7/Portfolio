/**
 * THEME 1 : VEILLE TECHNOLOGIQUE - PURPLE TEAM & CSI LINUX
 * BTS SIO SISR - Mathis Dubos
 */

document.addEventListener("DOMContentLoaded", function () {
    // --- Données détaillées des fiches d'analyses pour la modal ---
    const analysesData = {
        1: {
            title: "CSI Linux 2024 & Forensic Mémoire : Extraction et analyse d'artefacts d'attaques",
            date: "18 Février 2025",
            source: "CSI Linux Official & SANS DFIR",
            category: "CSI Linux & Forensic",
            mitre: "T1055 (Process Injection), T1014 (Rootkit), T1070 (Indicator Removal)",
            tools: "CSI Linux Analyst, LiME (Linux Memory Extractor), Volatility 3, Autopsy",
            problematic: "Comment identifier et extraire des preuves volatiles (mémoire vive) suite à une injection de code ou l'exécution d'un payload furtif ne laissant pas de traces sur le disque dur ?",
            techAnalysis: `
                <p>Dans un contexte de cyber-attaque sous Linux, les attaquants expérimentés privilégient l'exécution en mémoire (fileless malware) via des appels systèmes tels que <code>memfd_create</code> afin de contourner l'analyse antivirale classique basée sur le système de fichiers.</p>
                <div class="code-box">
# Exemple d'acquisition de mémoire vive sous CSI Linux avec LiME :
sudo insmod lime-6.8.0-generic.ko "path=/cases/evidence_01/ram.raw format=raw"

# Analyse sous Volatility 3 pour lister les processus cachés :
vol -f /cases/evidence_01/ram.raw linux.pslist
vol -f /cases/evidence_01/ram.raw linux.malfind
                </div>
                <p>L'arsenal CSI Linux fournit des profils de symboles précompilés pour les principaux noyaux Linux récents, permettant un gain de temps critique lors du tri initial (triage) en réponse à incident.</p>
            `,
            recommendations: [
                "Intégrer la capture mémoire LiME dans la procédure standard d'intervention d'urgence (CSIRT/CERT).",
                "Restreindre l'accès à <code>/dev/mem</code> et <code>/dev/kmem</code> et activer Kernel Lockdown (mode integrity/confidentiality).",
                "Confronter la liste des processus de <code>linux.pslist</code> avec <code>linux.psscan</code> pour débusquer les processus désindexés."
            ]
        },
        2: {
            title: "Atomic Red Team & MITRE ATT&CK sous Linux : Automatiser l'émulation d'adversaire",
            date: "04 Février 2025",
            source: "Red Canary & MITRE Engenuity",
            category: "Red Team",
            mitre: "T1548.003 (Sudo and Sudo Caching), T1059.004 (Unix Shell), T1078 (Valid Accounts)",
            tools: "Atomic Red Team, Invoke-Atomic, Bash, GTFOBins",
            problematic: "Comment mesurer objectivement l'efficacité des sondes de détection (EDR/SIEM) d'un parc de serveurs Linux face à des scénarios d'intrusion réalistes ?",
            techAnalysis: `
                <p>La Red Team s'appuie sur la bibliothèque Atomic Red Team pour déclencher des tests unitaires offensifs atomiques alignés avec la matrice MITRE ATT&CK pour Linux. L'objectif n'est pas de détruire mais de valider la télémétrie.</p>
                <div class="code-box">
# Exécution d'un test atomique ciblant l'abus de sudo (T1548.003) :
pwsh -Command "Invoke-AtomicTest T1548.003 -TestNumbers 1,2"

# Vérification manuelle de la persistance via cron (T1053.003) :
echo "* * * * * root /tmp/.hidden_script.sh" >> /etc/cron.d/test_persist
                </div>
                <p>L'émulation permet de tester directement si les règles de détection SIEM et les alertes de sécurité sont levées en moins de 5 minutes par le SOC.</p>
            `,
            recommendations: [
                "Automatiser l'exécution périodique des tests atomiques dans un environnement de pré-production ou laboratoire.",
                "Auditer la configuration <code>/etc/sudoers</code> et interdire l'utilisation de binaires à risques sans mot de passe (GTFOBins).",
                "Associer chaque test Red Team à une règle de corrélation Blue Team documentée."
            ]
        },
        3: {
            title: "CSI Linux Gateway & Isolation Tor : Sécuriser la posture de l'analyste cyber",
            date: "22 Janvier 2025",
            source: "CSI Linux Research Lab",
            category: "CSI Linux & Forensic",
            mitre: "T1090 (Proxy), T1583 (Acquire Infrastructure)",
            tools: "CSI Linux Gateway, Whonix-Gateway, Tor Network, DNSCrypt, Iptables",
            problematic: "Comment interagir avec des infrastructures d'attaque (C2, domaines de phishing, serveurs de commande) sans compromettre l'adresse IP de l'analyste ni alerter l'attaquant ?",
            techAnalysis: `
                <p>L'architecture modulaire de CSI Linux sépare strictement l'environnement d'analyse (CSI Linux Analyst) et la passerelle réseau (CSI Linux Gateway). Tout paquet sortant est intercepté et forcé dans le circuit Tor avec chiffrement DNS systématique.</p>
                <div class="code-box">
# Vérification du flux réseau via CSI Gateway :
curl -s https://check.torproject.org/api/ip | jq .

# Activation du mode Tor Strict et coupe-circuit (Kill Switch) :
sudo csi-gateway-ctl --enable-killswitch --route-all-tor
                </div>
                <p>Cette approche prévient les fuites DNS (DNS Leaks) et empêche l'attaquant de géolocaliser l'entreprise ou l'analyste qui mène l'enquête OSINT ou l'analyse de malware.</p>
            `,
            recommendations: [
                "Ne jamais analyser une URL suspecte ou un C2 depuis le réseau local d'entreprise ou l'IP publique directe.",
                "Valider l'étanchéité de la Gateway via des sondes de fuite avant chaque campagne d'investigation.",
                "Conserver des logs d'enquête horodatés et scellés pour valeur probante en cas de procédure judiciaire."
            ]
        },
        4: {
            title: "Télémétrie eBPF vs auditd : La révolution de la détection Blue Team sous Linux",
            date: "12 Janvier 2025",
            source: "ANSSI & Cilium/Tetragon Project",
            category: "Blue Team & Détection",
            mitre: "T1059 (Command Execution), T1574 (Hijack Execution Flow)",
            tools: "Tetragon (eBPF), auditd, Sysmon for Linux, Wazuh SIEM",
            problematic: "Comment collecter une télémétrie de haute fidélité sur les serveurs de production Linux sans dégrader les performances CPU et sans risque de contournement ?",
            techAnalysis: `
                <p>Le sous-système historique <code>auditd</code> génère une surcharge importante en environnement haute performance et peut être neutralisé par un attaquant disposant des droits root. Les sondes eBPF (Extended Berkeley Packet Filter) s'exécutent en espace noyau de manière sécurisée et non bloquante.</p>
                <div class="code-box">
# Exemple de politique de sécurité Tetragon pour bloquer les écritures sur /etc/passwd :
apiVersion: cilium.io/v1alpha1
kind: TracingPolicy
metadata:
  name: block-passwd-tampering
spec:
  kprobes:
    - call: "sys_openat"
      syscall: true
      args:
        - index: 1
          type: "string"
      selectors:
        - matchArgs:
            - index: 1
              operator: "Equal"
              values: ["/etc/passwd", "/etc/shadow"]
          matchActions:
            - action: Sigkill
                </div>
                <p>eBPF permet non seulement la détection temps réel mais aussi la prévention active (bloquer le processus instantanément au niveau du syscall).</p>
            `,
            recommendations: [
                "Déployer des sondes eBPF (Tetragon ou Falco) sur les conteneurs et clusters sensibles.",
                "Corréler les événements de création de processus suspects (spawn de <code>/bin/sh</code> depuis <code>apache2</code> ou <code>nginx</code>) dans le SIEM Wazuh.",
                "Définir des politiques de durcissement AppArmor/SELinux en complément."
            ]
        },
        5: {
            title: "Cycle d'amélioration Purple Team : Méthodologie d'exercice collaboratif",
            date: "19 Décembre 2024",
            source: "Purple Team Community & Guide CISA",
            category: "Purple Team",
            mitre: "Cadre global MITRE ATT&CK & D3FEND",
            tools: "Vectr, Atomic Red Team, Wazuh, TheHive, Obsidian",
            problematic: "Comment dépasser la rivalité historique entre attaquant (Red) et défenseur (Blue) pour accélérer la résilience globale de l'infrastructure ?",
            techAnalysis: `
                <p>La démarche Purple Team repose sur une boucle continue en 6 étapes :</p>
                <ol style="margin-left: 1.5rem; color: #d1d5db; margin-bottom: 1rem;">
                    <li><strong>Sélection du scénario :</strong> Choix d'un TTP pertinent (ex: Persistance SSH).</li>
                    <li><strong>Attaque contrôlée (Red) :</strong> Déclenchement de l'action dans le lab.</li>
                    <li><strong>Inspection Forensic (CSI Linux) :</strong> Étude des traces résiduelles laissées sur la cible.</li>
                    <li><strong>Vérification Détection (Blue) :</strong> Vérification de l'alerte SIEM/EDR.</li>
                    <li><strong>Remédiation :</strong> Création d'une règle Sigma et durcissement de la machine.</li>
                    <li><strong>Re-test :</strong> Validation que l'attaque est désormais interceptée.</li>
                </ol>
                <div class="code-box">
# Exemple de règle Sigma rédigée suite à un atelier Purple Team :
title: Suspicious Sudoers File Modification
status: test
logsource:
    product: linux
    service: auditd
detection:
    selection:
        type: 'SYSCALL'
        syscall: 'openat'
        file|contains: '/etc/sudoers'
    condition: selection
level: high
                </div>
            `,
            recommendations: [
                "Planifier des ateliers Purple Team réguliers (ex: 1 scénario par mois en BTS SIO / entreprise).",
                "Capitaliser les résultats dans une plateforme de suivi comme Vectr ou un wiki technique partagé.",
                "Mesurer l'évolution du taux de couverture MITRE ATT&CK au fil des itérations."
            ]
        },
        6: {
            title: "Détection de Rootkits noyau Linux avec CSI Linux et rkhunter/chkrootkit",
            date: "05 Décembre 2024",
            source: "Linux Security Hub & CERT-FR",
            category: "CSI Linux & Forensic",
            mitre: "T1014 (Rootkit), T1547.006 (Kernel Modules and Extensions)",
            tools: "CSI Linux, rkhunter, chkrootkit, lsmod, modinfo, unhide",
            problematic: "Comment détecter un malware furtif qui manipule directement les tables d'appels système du noyau Linux pour cacher ses processus, ports et fichiers ?",
            techAnalysis: `
                <p>Les LKM (Loadable Kernel Modules) malveillants altèrent la table <code>sys_call_table</code>. Un simple <code>ps aux</code> ou <code>netstat</code> mentira à l'administrateur car les données sont filtrées par le rootkit.</p>
                <div class="code-box">
# Utilisation de l'outil 'unhide' sous CSI Linux pour détecter les processus cachés :
sudo unhide proc
sudo unhide-tcp

# Comparaison des modules noyau chargés avec les signatures connues :
sudo rkhunter --check --sk
cat /proc/modules
ls -la /sys/module/
                </div>
                <p>En cas de doute, la règle d'or est de ne jamais faire confiance au système compromis : éteindre à chaud, extraire l'image disque et procéder à l'analyse post-mortem isolée dans CSI Linux.</p>
            `,
            recommendations: [
                "Désactiver le chargement dynamique de modules noyau en production après le boot (<code>sysctl kernel.modules_disabled=1</code>).",
                "Signer cryptographiquement tous les modules noyau légitimes avec Secure Boot activé.",
                "Vérifier périodiquement l'intégrité des binaires vitaux avec AIDE ou Tripwire."
            ]
        },
        7: {
            title: "Suricata 7 & Détection NIDS : Corrélation des Flux C2 et Empreintes Réseau MITRE ATT&CK",
            date: "15 Mars 2025",
            source: "OISF Suricata Official & Threat Hunting Community",
            category: "Purple Team & NIDS",
            mitre: "T1071 (Application Layer Protocol), T1043 (Commonly Used Port), T1046 (Network Service Discovery)",
            tools: "Suricata 7, EveBox, Wireshark, Zeek, Wazuh SIEM, Python Scapy",
            problematic: "Comment détecter en temps réel les communications furtives d'un implant ou agent C2 vers l'extérieur (balisage périodique) sans saturer l'infrastructure réseau par des faux positifs ?",
            techAnalysis: `
                <p>Lors d'un exercice Purple Team, l'attaquant simule l'établissement d'un canal de communication chiffré vers son serveur C2 (Command & Control). <strong>Suricata 7</strong>, configuré en mode multi-threading haute performance, inspecte les trames réseau au niveau des couches 4 à 7 (déchiffrement TLS via JA4/JA3 fingerprinting).</p>
                <div class="code-box">
# Règle Suricata personnalisée pour détecter un balisage périodique HTTP/2 suspect :
alert http any any -> $EXTERNAL_NET any (msg:"PURPLE-TEAM - Suspect C2 Beaconing Pattern Detected"; \
    flow:established,to_server; http.method; content:"POST"; http.uri; content:"/api/v1/telemetry"; \
    threshold:type both, track by_src, count 5, seconds 60; \
    classtype:trojan-activity; sid:1000951; rev:1;)

# Surveillance en direct des alertes dans le journal structuré EVE JSON :
tail -f /var/log/suricata/eve.json | jq 'select(.event_type=="alert") | {timestamp, src_ip, dest_ip, alert: .alert.signature}'
                </div>
                <p>L'intégration des empreintes TLS <strong>JA4</strong> permet d'identifier l'application cliente à l'origine de la session chiffrée, même sans déchiffrer le trafic SSL, et de corréler l'alerte réseau avec les logs d'accès du SIEM Wazuh.</p>
            `,
            recommendations: [
                "Déployer des sondes Suricata en mode passif (port mirroring / TAP) sur les segments clés (DMZ et passerelles de sortie).",
                "Calculer et surveiller les empreintes JA4 des binaires serveur pour repérer tout outil offensif injecté (Cobalt Strike, Sliver, Havoc).",
                "Automatiser l'ingestion des alertes Suricata dans le SIEM via le format standardisé <code>eve.json</code>."
            ]
        },
        8: {
            title: "Investigation Forensic sur Attaques Ransomware Linux : Triage Rapide avec CSI Linux & UAC",
            date: "08 Avril 2025",
            source: "SANS DFIR Institute & CSI Linux Security",
            category: "CSI Linux & Forensic",
            mitre: "T1486 (Data Encrypted for Impact), T1070.003 (Clear Command History), T1562 (Impair Defenses)",
            tools: "CSI Linux Analyst, UAC (Unix-like Artifacts Collector), Sleuth Kit (TSK), Autopsy, YARA",
            problematic: "Face à un chiffrement en cours ou achevé d'un serveur critique Linux (ESXi, Debian, RHEL), comment collecter les artefacts volatils avant extinction et reconstruire la chronologie exacte de l'intrusion ?",
            techAnalysis: `
                <p>Les ransomwares ciblant les environnements Linux (LockBit Linux, Babuk, Abyss Locker) ciblent en priorité les disques virtuels (fichiers <code>.vmdk</code>) et les bases de données. L'intervention d'urgence exige une méthodologie rigoureuse pour ne pas altérer les preuves (chaîne de possession).</p>
                <div class="code-box">
# Gel immédiat des processus suspects sans éteindre le système (préservation RAM) :
kill -STOP $(pgrep -f "encryptor")

# Triage forensique automatisé à chaud avec l'outil UAC (Unix-like Artifacts Collector) :
sudo ./uac -p full /cases/evidence_host01/

# Analyse hors-ligne sous CSI Linux avec règles YARA spécialisées :
yara -r /opt/csi-tools/rules/linux_ransomware.yar /cases/evidence_host01/
                </div>
                <p>Sous CSI Linux, l'analyste importe les archives collectées dans <strong>Autopsy</strong> pour générer la chronologie (timeline super-timeline) des accès fichiers, des connexions SSH et de l'effacement volontaire des journaux (<code>history -c</code>, <code>logrotate</code> forcé).</p>
            `,
            recommendations: [
                "Isoler immédiatement le serveur au niveau réseau (port de commutateur désactivé ou VLAN de quarantaine) sans redémarrer le système.",
                "Effectuer un triage forensique standardisé avec UAC avant toute tentative de restauration de sauvegarde.",
                "Durcir les accès distants SSH (clés uniquement, désactivation de l'accès root direct et MFA) et stocker les sauvegardes sur un stockage immuable déconnecté (WORM)."
            ]
        }
    };

    // --- 1. Gestion des Filtres de Catégories ---
    const filterButtons = document.querySelectorAll(".filter-btn");
    const articleCards = document.querySelectorAll(".article-card");

    filterButtons.forEach(btn => {
        btn.addEventListener("click", function () {
            filterButtons.forEach(b => b.classList.remove("active"));
            this.classList.add("active");

            const filterValue = this.getAttribute("data-filter");
            filterArticles();
        });
    });

    // --- 2. Recherche en direct ---
    const searchInput = document.getElementById("search-input");
    if (searchInput) {
        searchInput.addEventListener("input", function () {
            filterArticles();
        });
    }

    function filterArticles() {
        const activeFilter = document.querySelector(".filter-btn.active") ? document.querySelector(".filter-btn.active").getAttribute("data-filter") : "all";
        const query = searchInput ? searchInput.value.toLowerCase().trim() : "";

        articleCards.forEach(card => {
            const cardCat = card.getAttribute("data-category");
            const title = card.querySelector(".article-title").textContent.toLowerCase();
            const snippet = card.querySelector(".article-snippet").textContent.toLowerCase();
            const tags = card.querySelector(".article-tags").textContent.toLowerCase();

            const matchesCategory = (activeFilter === "all" || cardCat === activeFilter);
            const matchesQuery = !query || title.includes(query) || snippet.includes(query) || tags.includes(query);

            if (matchesCategory && matchesQuery) {
                card.style.display = "flex";
            } else {
                card.style.display = "none";
            }
        });
    }

    // --- 3. Modale d'Analyse Détaillée ---
    const modalOverlay = document.getElementById("analysis-modal");
    const modalTitle = document.getElementById("modal-article-title");
    const modalMeta = document.getElementById("modal-article-meta");
    const modalMitre = document.getElementById("modal-article-mitre");
    const modalTools = document.getElementById("modal-article-tools");
    const modalProblem = document.getElementById("modal-article-problem");
    const modalTech = document.getElementById("modal-article-tech");
    const modalRecom = document.getElementById("modal-article-recom");
    const closeBtn = document.getElementById("modal-close-btn");

    document.querySelectorAll(".btn-open-analysis").forEach(btn => {
        btn.addEventListener("click", function () {
            const id = this.getAttribute("data-id");
            const data = analysesData[id];
            if (!data) return;

            modalTitle.textContent = data.title;
            modalMeta.textContent = `${data.date} • Source : ${data.source} • [${data.category}]`;
            modalMitre.textContent = data.mitre;
            modalTools.textContent = data.tools;
            modalProblem.textContent = data.problematic;
            modalTech.innerHTML = data.techAnalysis;

            modalRecom.innerHTML = "";
            data.recommendations.forEach(rec => {
                const li = document.createElement("li");
                li.textContent = rec;
                modalRecom.appendChild(li);
            });

            modalOverlay.classList.add("active");
            document.body.style.overflow = "hidden"; // Bloque le scroll arrière
        });
    });

    function closeModal() {
        if (modalOverlay) {
            modalOverlay.classList.remove("active");
            document.body.style.overflow = "";
        }
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", closeModal);
    }

    if (modalOverlay) {
        modalOverlay.addEventListener("click", function (e) {
            if (e.target === modalOverlay) {
                closeModal();
            }
        });
    }

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && modalOverlay && modalOverlay.classList.contains("active")) {
            closeModal();
        }
    });
});
