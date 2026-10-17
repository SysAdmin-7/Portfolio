/**
 * ==========================================================================
 * GESTIONNAIRE DE NOTES OBSIDIAN - VAULT BTS SIO SISR
 * Mathis Dubos - Portfolio Professionnel
 * ==========================================================================
 */

// Données initiales des notes Obsidian (Vous pouvez ajouter vos propres notes ici)
const initialNotes = [
    {
        id: "cisco-vlan-routing",
        title: "Mémo Cisco IOS : VLANs, Trunk 802.1Q & Router-on-a-Stick",
        category: "reseau",
        categoryName: "🌐 Réseaux & Cisco",
        date: "14 Octobre 2024",
        readTime: "6 min",
        tags: ["Cisco", "VLAN", "802.1Q", "Routage", "CCNA"],
        excerpt: "Fiche récapitulative des configurations de commutateurs et routeurs Cisco : création de VLAN, Trunking 802.1Q, sous-interfaces et passerelle par défaut.",
        content: `# Mémo Cisco IOS : VLANs, Trunk 802.1Q & Router-on-a-Stick

> [!NOTE]
> Cette fiche synthétise les manipulations fondamentales pour le partitionnement réseau niveau 2 et l'interconnexion niveau 3 dans le cadre des épreuves E4 et des laboratoires Cisco.

---

## 1. Création et Attribution des VLANs sur Switch Cisco

Les VLANs (Virtual Local Area Networks) permettent d'isoler logiquement les domaines de diffusion (Broadcast domains).

\`\`\`cisco
! Passage en mode configuration globale
Switch# configure terminal
Switch(config)# hostname SW-CORE-01

! Création des VLANs administratifs et utilisateurs
SW-CORE-01(config)# vlan 10
SW-CORE-01(config-vlan)# name ADMIN_SYS
SW-CORE-01(config-vlan)# exit

SW-CORE-01(config)# vlan 20
SW-CORE-01(config-vlan)# name USERS_STAFF
SW-CORE-01(config-vlan)# exit

SW-CORE-01(config)# vlan 99
SW-CORE-01(config-vlan)# name MANAGEMENT
SW-CORE-01(config-vlan)# exit
\`\`\`

### Affectation d'un port d'accès (Access Port)

\`\`\`cisco
! Affectation de la plage Fa0/1 à Fa0/10 au VLAN 10
SW-CORE-01(config)# interface range FastEthernet0/1 - 10
SW-CORE-01(config-if-range)# switchport mode access
SW-CORE-01(config-if-range)# switchport access vlan 10
SW-CORE-01(config-if-range)# no shutdown
SW-CORE-01(config-if-range)# exit
\`\`\`

---

## 2. Configuration d'une liaison Trunk 802.1Q

Le Trunk permet de faire transiter les trames étiquetées (tagged) de plusieurs VLANs à travers une liaison physique unique.

\`\`\`cisco
SW-CORE-01(config)# interface GigabitEthernet0/1
SW-CORE-01(config-if)# description === LIAISON UPLINK VERS ROUTEUR R1 ===
! Sur certains commutateurs (Catalyst 3560/3750) : encapsulation préalable
SW-CORE-01(config-if)# switchport trunk encapsulation dot1q
SW-CORE-01(config-if)# switchport mode trunk
SW-CORE-01(config-if)# switchport trunk native vlan 99
SW-CORE-01(config-if)# switchport trunk allowed vlan 10,20,99
SW-CORE-01(config-if)# no shutdown
SW-CORE-01(config-if)# exit
\`\`\`

> [!WARNING]
> Pour des raisons de cybersécurité, veillez toujours à changer le **VLAN natif par défaut (VLAN 1)** pour neutraliser les attaques par double étiquetage (*VLAN Hopping*).

---

## 3. Routage Inter-VLAN (Router-on-a-Stick)

Configuration du routeur avec sous-interfaces logiques :

\`\`\`cisco
Router# configure terminal
Router(config)# interface GigabitEthernet0/0/0
Router(config-if)# no ip address
Router(config-if)# no shutdown
Router(config-if)# exit

! Sous-interface pour le VLAN 10 (ADMIN)
Router(config)# interface GigabitEthernet0/0/0.10
Router(config-subif)# encapsulation dot1Q 10
Router(config-subif)# ip address 192.168.10.254 255.255.255.0
Router(config-subif)# exit

! Sous-interface pour le VLAN 20 (UTILISATEURS)
Router(config)# interface GigabitEthernet0/0/0.20
Router(config-subif)# encapsulation dot1Q 20
Router(config-subif)# ip address 192.168.20.254 255.255.255.0
Router(config-subif)# exit
\`\`\`

> [!TIP]
> Commandes de vérification indispensables :
> - \`show vlan brief\` : Vérifie la liste des VLANs et les ports associés.
> - \`show interfaces trunk\` : Valide le mode Trunk et les VLANs autorisés.
> - \`show ip route\` : Confirme la présence des réseaux directement connectés sur le routeur.`
    },
    {
        id: "debian-ssh-hardening",
        title: "Durcissement Linux Debian 12 & Sécurisation SSH",
        category: "linux",
        categoryName: "🐧 GNU/Linux",
        date: "28 Septembre 2024",
        readTime: "8 min",
        tags: ["Linux", "Debian", "SSH", "Sécurité", "SecNumAcadémie"],
        excerpt: "Procédure opérationnelle pour durcir un serveur GNU/Linux Debian en environnement de production : clés ED25519, configuration sshd_config, pare-feu UFW et Fail2ban.",
        content: `# Durcissement Linux Debian 12 & Sécurisation SSH

> [!NOTE]
> Fiche pratique alignée sur les recommandations de l'ANSSI (Guide des règles de sécurisation des systèmes Linux et SecNumAcadémie).

---

## 1. Mise à jour et Principes Fondamentaux

Avant toute modification, le système doit être parfaitement à jour et un utilisateur d'administration dédié non-root doit être créé.

\`\`\`bash
# Mise à jour complète du système
sudo apt update && sudo apt full-upgrade -y

# Installation des outils d'audit et de surveillance
sudo apt install -y sudo curl ufw fail2ban unattended-upgrades libpam-tmpdir
\`\`\`

---

## 2. Génération et Déploiement de clés SSH ED25519

On privilégie l'algorithme à courbe elliptique **Ed25519**, plus rapide et résistant aux attaques par canal auxiliaire :

\`\`\`bash
# Sur le poste d'administration client :
ssh-keygen -t ed25519 -a 100 -C "mathis@sisr-workstation"

# Envoi de la clé publique sur le serveur Debian :
ssh-copy-id -i ~/.ssh/id_ed25519.pub mathis@192.168.10.50
\`\`\`

---

## 3. Configuration Renforcée de OpenSSH Server

Édition du fichier \`/etc/ssh/sshd_config.d/99-hardened.conf\` :

\`\`\`ini
# Désactivation du compte root direct
PermitRootLogin no

# Authentification exclusive par clé asymétrique
PubkeyAuthentication yes
PasswordAuthentication no
PermitEmptyPasswords no

# Restriction du nombre de tentatives
MaxAuthTries 3
LoginGraceTime 30
ClientAliveInterval 300
ClientAliveCountMax 2

# Restriction aux utilisateurs autorisés
AllowUsers mathis admin-backup

# Désactivation des fonctionnalités non requises
X11Forwarding no
AllowAgentForwarding no
AllowTcpForwarding no
\`\`\`

> [!WARNING]
> Avant de redémarrer le service SSH avec \`sudo systemctl restart ssh\`, testez impérativement la validité de la syntaxe avec \`sudo sshd -t\` dans une session séparée !

---

## 4. Configuration du Pare-feu UFW

\`\`\`bash
# Politique stricte par défaut : Refus de tout trafic entrant
sudo ufw default deny incoming
sudo ufw default allow outgoing

# Autorisation du SSH et de l'interface Loopback
sudo ufw allow 22/tcp comment 'SSH Administration'

# Activation du pare-feu
sudo ufw enable
sudo ufw status verbose
\`\`\`

> [!TIP]
> Pour aller plus loin : Activer la protection anti-brute-force avec Fail2ban sur le filtre \`sshd\` :
> \`sudo systemctl enable --now fail2ban\``
    },
    {
        id: "dfir-csi-linux-volatility",
        title: "Forensic Mémoire & Investigations sous CSI Linux",
        category: "cyber",
        categoryName: "🛡️ Cyber & DFIR",
        date: "05 Octobre 2024",
        readTime: "10 min",
        tags: ["DFIR", "CSI Linux", "Forensic", "Volatility3", "Veille"],
        excerpt: "Guide d'analyse post-incident sur capture de mémoire vive (RAM) avec Volatility 3 sous CSI Linux : détection de rootkits, processus injectés et sockets réseau ouverts.",
        content: `# Forensic Mémoire & Investigations sous CSI Linux

> [!NOTE]
> Cette fiche correspond aux travaux pratiques de veille technologique (Thème 1 : Purple Teaming & CSI Linux). Elle détaille l'investigation numérique sur capture RAM.

---

## 1. Méthodologie d'Acquisition & Volatilité des Preuves

Selon la norme **RFC 3227** (Order of Volatility), la mémoire vive (RAM) contient les artefacts les plus éphémères et doit être analysée en priorité :

- Processus actifs et masqués (DKOM)
- Connexions réseau et sockets TCP/UDP ouverts
- Clés de chiffrement résiduelles et mots de passe en clair
- Charges utiles injectées (*Process Hollowing*, *Fileless Malware*)

---

## 2. Commandes Essentielles avec Volatility 3

\`\`\`bash
# Analyse de la mémoire d'un système Linux suspect
vol -f memory_dump.lime linux.pslist.PsList

# Recherche des processus cachés (comparaison pslist vs psscan)
vol -f memory_dump.lime linux.psscan.PsScan

# Inspection des connexions réseau établies lors de l'incident
vol -f memory_dump.lime linux.sockstat.Sockstat

# Extraction des modules noyau suspects (Rootkits LKM)
vol -f memory_dump.lime linux.lsmod.Lsmod
\`\`\`

> [!DANGER]
> Si la commande \`pslist\` ne montre pas un processus alors que \`psscan\` le détecte, cela indique une manipulation directe de la table des processus noyau (**Direct Kernel Object Manipulation - DKOM**).

---

## 3. Analyse des Logs Système Associés sous CSI Linux

\`\`\`bash
# Recherche d'exécutions suspectes avec élévation de privilèges (sudoers)
grep -E "COMMAND|FAILED|session opened" /var/log/auth.log | tail -n 25

# Détection de commandes Bash masquées ou effacées
grep -E "HISTFILE|history -c|unset HISTFILE" /home/*/.bash_history
\`\`\`

> [!TIP]
> Retrouvez l'analyse complète de cas pratique sur ma page de veille : [[theme1.html]].`
    },
    {
        id: "active-directory-powershell",
        title: "Active Directory : Automatisation & Scripts PowerShell",
        category: "windows",
        categoryName: "🪟 Windows & AD",
        date: "18 Septembre 2024",
        readTime: "7 min",
        tags: ["ActiveDirectory", "PowerShell", "WindowsServer", "GPO", "Scripting"],
        excerpt: "Script d'approvisionnement massif d'utilisateurs et d'Unités d'Organisation (OU) à partir d'un fichier CSV avec assignation automatique de groupes et mots de passe temporaires.",
        content: `# Active Directory : Automatisation & Scripts PowerShell

> [!NOTE]
> Utilisé dans le projet d'infrastructure système pour automatiser l'intégration des 150 étudiants et formateurs lors de la rentrée.

---

## 1. Structure du Fichier Source CSV (\`utilisateurs.csv\`)

\`\`\`csv
Prenom,Nom,Login,Departement,Fonction,Email
Thomas,Bernard,tbernard,Informatique,Technicien,tbernard@entreprise.lan
Sophie,Dubois,sdubois,Direction,Comptable,sdubois@entreprise.lan
Lucas,Martin,lmartin,Pedagogie,Formateur,lmartin@entreprise.lan
\`\`\`

---

## 2. Script PowerShell de Création Automatisée

\`\`\`powershell
# Importation du module Active Directory
Import-Module ActiveDirectory

$csvPath = "C:\\Scripts\\AD\\utilisateurs.csv"
$domain = "@entreprise.lan"
$baseOU = "OU=Utilisateurs,OU=Societe,DC=entreprise,DC=lan"

# Lecture du fichier CSV
$users = Import-Csv -Path $csvPath -Delimiter "," -Encoding UTF8

foreach ($user in $users) {
    $samAccountName = $user.Login
    $fullName = "$($user.Prenom) $($user.Nom)"
    $userOU = "OU=$($user.Departement),$baseOU"
    
    # Vérification de l'existence préalable
    if (Get-ADUser -Filter {SamAccountName -eq $samAccountName}) {
        Write-Warning "L'utilisateur $samAccountName existe déjà. Ignoré."
    } else {
        # Mot de passe sécurisé temporaire imposant le changement à la 1ère connexion
        $securePassword = ConvertTo-SecureString "TempSISR2024!" -AsPlainText -Force
        
        New-ADUser \`
            -Name $fullName \`
            -GivenName $user.Prenom \`
            -Surname $user.Nom \`
            -SamAccountName $samAccountName \`
            -UserPrincipalName "$samAccountName$domain" \`
            -Path $userOU \`
            -AccountPassword $securePassword \`
            -Enabled $true \`
            -ChangePasswordAtLogon $true \`
            -Department $user.Departement \`
            -Title $user.Fonction
            
        Write-Host "[+] Utilisateur créé avec succès : $samAccountName dans $userOU" -ForegroundColor Green
    }
}
\`\`\`

> [!TIP]
> N'oubliez pas d'exécuter PowerShell avec des privilèges élevés (**Administrateur du Domaine**) pour que la création soit autorisée.`
    },
    {
        id: "docker-compose-reverse-proxy",
        title: "Docker Compose & Reverse Proxy Nginx Sécurisé",
        category: "docker",
        categoryName: "🐳 Docker & Conteneurs",
        date: "22 Août 2024",
        readTime: "5 min",
        tags: ["Docker", "DockerCompose", "Nginx", "ReverseProxy", "SSL"],
        excerpt: "Modèle de déploiement multi-conteneurs avec pont réseau interne isolé, gestion des certificats SSL et proxy inverse Nginx vers applications internes.",
        content: `# Docker Compose & Reverse Proxy Nginx Sécurisé

> [!NOTE]
> Architecture mise en œuvre dans mon homelab pour isoler les conteneurs applicatifs et exposer uniquement le port HTTPS 443 vers l'extérieur.

---

## 1. Fichier \`docker-compose.yml\`

\`\`\`yaml
version: '3.8'

services:
  # Service 1 : Reverse Proxy Nginx
  reverse-proxy:
    image: nginx:alpine
    container_name: nginx-gateway
    restart: unless-stopped
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx/conf.d:/etc/nginx/conf.d:ro
      - ./nginx/certs:/etc/nginx/certs:ro
    networks:
      - frontend-net
      - backend-net

  # Service 2 : Application Web interne (non exposée directement)
  webapp-internal:
    image: ghost:alpine
    container_name: web-ghost-app
    restart: unless-stopped
    environment:
      url: https://notes.mondomaine.lan
    volumes:
      - ghost-data:/var/lib/ghost/content
    networks:
      - backend-net

networks:
  frontend-net:
    driver: bridge
  backend-net:
    driver: bridge
    internal: true # Réseau isolé sans accès internet direct

volumes:
  ghost-data:
\`\`\`

---

## 2. Configuration du Virtual Host Nginx (\`conf.d/app.conf\`)

\`\`\`nginx
server {
    listen 80;
    server_name notes.mondomaine.lan;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl http2;
    server_name notes.mondomaine.lan;

    ssl_certificate /etc/nginx/certs/fullchain.pem;
    ssl_certificate_key /etc/nginx/certs/privkey.pem;

    location / {
        proxy_pass http://webapp-internal:2368;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto https;
    }
}
\`\`\`

> [!TIP]
> Commandes utiles :
> - \`docker compose up -d\` : Lance les conteneurs en tâche de fond.
> - \`docker compose logs -f reverse-proxy\` : Suit les requêtes en temps réel.`
    }
];

// État local de l'application
const loadedVaultNotes = (typeof window.vaultNotes !== "undefined" && Array.isArray(window.vaultNotes)) ? window.vaultNotes : [];
const mergedNotes = [...loadedVaultNotes];

// Conserver les fiches de synthèse initiales si non dupliquées
initialNotes.forEach(inote => {
    if (!mergedNotes.some(n => n.id === inote.id)) {
        mergedNotes.push(inote);
    }
});

let allNotes = mergedNotes.length > 0 ? mergedNotes : [...initialNotes];
let currentFilter = "all";
let currentSearch = "";
let activeNoteId = allNotes[0] ? allNotes[0].id : "cisco-vlan-routing";

/**
 * Initialisation au chargement du DOM
 */
document.addEventListener("DOMContentLoaded", function () {
    // Détection d'une note cible dans l'URL (?note=id ou #id)
    const urlParams = new URLSearchParams(window.location.search);
    const targetParam = urlParams.get('note') || window.location.hash.replace(/^#/, '');
    if (targetParam) {
        const found = allNotes.find(n => n.id.toLowerCase() === targetParam.toLowerCase() || (n.filePath && n.filePath.toLowerCase().includes(targetParam.toLowerCase())));
        if (found) {
            activeNoteId = found.id;
        }
    }

    renderNotesList();
    displayActiveNote(activeNoteId);
    setupEventListeners();
    updateStats();
});

/**
 * Mise à jour des compteurs statistiques du Hero
 */
function updateStats() {
    const totalNotesEl = document.getElementById("stat-total-notes");
    const totalTagsEl = document.getElementById("stat-total-tags");
    
    if (totalNotesEl) {
        totalNotesEl.textContent = allNotes.length;
    }
    
    if (totalTagsEl) {
        const uniqueTags = new Set();
        allNotes.forEach(n => (n.tags || []).forEach(t => uniqueTags.add(t)));
        totalTagsEl.textContent = uniqueTags.size;
    }
}

/**
 * Configuration des écouteurs d'événements
 */
function setupEventListeners() {
    // Barre de recherche
    const searchInput = document.getElementById("vault-search-input");
    const clearBtn = document.getElementById("vault-search-clear");

    if (searchInput) {
        searchInput.addEventListener("input", function (e) {
            currentSearch = e.target.value.toLowerCase().trim();
            if (clearBtn) {
                clearBtn.style.display = currentSearch ? "block" : "none";
            }
            renderNotesList();
        });
    }

    if (clearBtn) {
        clearBtn.addEventListener("click", function () {
            searchInput.value = "";
            currentSearch = "";
            clearBtn.style.display = "none";
            renderNotesList();
            searchInput.focus();
        });
    }

    // Filtres par catégorie
    const filterPills = document.querySelectorAll(".filter-pill");
    filterPills.forEach(pill => {
        pill.addEventListener("click", function () {
            filterPills.forEach(p => p.classList.remove("active"));
            this.classList.add("active");
            currentFilter = this.getAttribute("data-category") || "all";
            renderNotesList();
        });
    });

    // Actions barre d'outils
    const copyMdBtn = document.getElementById("btn-copy-markdown");
    if (copyMdBtn) {
        copyMdBtn.addEventListener("click", copyCurrentMarkdown);
    }

    const printBtn = document.getElementById("btn-print-note");
    if (printBtn) {
        printBtn.addEventListener("click", () => window.print());
    }

    const focusBtn = document.getElementById("btn-focus-mode");
    if (focusBtn) {
        focusBtn.addEventListener("click", toggleFocusMode);
    }

    // Modal Import / Ajout de Note
    setupModalEvents();
}

/**
 * Rendu de la liste des cartes de notes dans l'explorateur
 */
function renderNotesList() {
    const container = document.getElementById("notes-cards-list");
    if (!container) return;

    // Filtrage
    const filtered = allNotes.filter(note => {
        const matchCat = (currentFilter === "all") || (note.category === currentFilter);
        const matchSearch = !currentSearch || 
            note.title.toLowerCase().includes(currentSearch) ||
            note.excerpt.toLowerCase().includes(currentSearch) ||
            (note.tags && note.tags.some(t => t.toLowerCase().includes(currentSearch))) ||
            (note.content && note.content.toLowerCase().includes(currentSearch));
        return matchCat && matchSearch;
    });

    if (filtered.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 2rem 1rem; color: var(--text-dim);">
                <i class="fas fa-search" style="font-size: 2rem; margin-bottom: 0.75rem; color: var(--border-light);"></i>
                <p style="font-size: 0.9rem;">Aucune note trouvée pour cette recherche.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = filtered.map(note => `
        <div class="note-item-card ${note.id === activeNoteId ? 'active' : ''}" data-id="${note.id}" onclick="selectNote('${note.id}')">
            <div class="note-card-meta">
                <span class="note-card-cat">${note.categoryName}</span>
                <span class="note-card-date">${note.date}</span>
            </div>
            <h4 class="note-card-title">${escapeHtml(note.title)}</h4>
            <p class="note-card-excerpt">${escapeHtml(note.excerpt)}</p>
            <div class="note-card-tags">
                ${(note.tags || []).slice(0, 3).map(t => `<span class="note-card-tag">#${escapeHtml(t)}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

/**
 * Sélectionne et affiche une note
 */
window.selectNote = function(noteId) {
    activeNoteId = noteId;
    renderNotesList();
    displayActiveNote(noteId);
    
    // Défilement doux vers le lecteur sur mobile
    if (window.innerWidth <= 1024) {
        const readerEl = document.getElementById("vault-reader-view");
        if (readerEl) readerEl.scrollIntoView({ behavior: 'smooth' });
    }
};

/**
 * Recherche et ouvre une note via un lien wiki Obsidian [[Cible]]
 */
window.selectNoteByQuery = function(query) {
    if (!query) return;
    const cleanQ = query.toLowerCase().replace(/_/g, ' ').replace(/\.md$/, '').trim();
    
    // 1. Chercher par ID exact ou nom de fichier exact
    let found = allNotes.find(n => 
        n.id.toLowerCase() === cleanQ ||
        (n.filePath && n.filePath.toLowerCase().endsWith(cleanQ + ".md")) ||
        (n.filePath && n.filePath.toLowerCase().endsWith(query.toLowerCase()))
    );

    // 2. Chercher par titre approchant
    if (!found) {
        found = allNotes.find(n => n.title.toLowerCase().includes(cleanQ));
    }

    // 3. Chercher dans le chemin complet
    if (!found) {
        found = allNotes.find(n => n.filePath && n.filePath.toLowerCase().includes(cleanQ));
    }

    if (found) {
        selectNote(found.id);
        showToast(`Note ouverte : « ${found.title} »`);
    } else {
        // En cas d'échec : filtrer via le champ de recherche
        const searchInput = document.getElementById("vault-search-input");
        if (searchInput) {
            searchInput.value = query;
            currentSearch = query.toLowerCase();
            renderNotesList();
            searchInput.focus();
        }
        showToast(`Recherche de « ${query} » dans le Vault`);
    }
};

/**
 * Affiche la note sélectionnée dans la zone de lecture
 */
function displayActiveNote(noteId) {
    const note = allNotes.find(n => n.id === noteId);
    if (!note) return;

    // Breadcrumbs
    const breadcrumbFilename = document.getElementById("breadcrumb-filename");
    if (breadcrumbFilename) {
        const displayName = note.filePath ? note.filePath.split('/').pop() : `${note.id}.md`;
        breadcrumbFilename.textContent = displayName;
    }

    // Bouton de Téléchargement Direct du fichier source .md
    const downloadBtn = document.getElementById("btn-download-note");
    if (downloadBtn) {
        if (note.filePath) {
            downloadBtn.href = note.filePath;
            downloadBtn.setAttribute("download", note.filePath.split('/').pop() || `${note.id}.md`);
            downloadBtn.style.display = "inline-flex";
        } else {
            const blob = new Blob([note.content], { type: "text/markdown;charset=utf-8" });
            downloadBtn.href = URL.createObjectURL(blob);
            downloadBtn.setAttribute("download", `${note.id}.md`);
            downloadBtn.style.display = "inline-flex";
        }
    }

    // Titre et méta
    const titleEl = document.getElementById("note-view-title");
    if (titleEl) titleEl.textContent = note.title;

    const catEl = document.getElementById("note-view-category");
    if (catEl) catEl.textContent = note.categoryName;

    const dateEl = document.getElementById("note-view-date");
    if (dateEl) dateEl.textContent = note.date;

    const readTimeEl = document.getElementById("note-view-readtime");
    if (readTimeEl) readTimeEl.textContent = note.readTime || "5 min";

    const tagsContainer = document.getElementById("note-view-tags");
    if (tagsContainer) {
        tagsContainer.innerHTML = (note.tags || []).map(t => `<span class="note-card-tag">#${escapeHtml(t)}</span>`).join('');
    }

    // Rendu du Markdown & Callouts Obsidian
    const renderedBody = document.getElementById("markdown-rendered-body");
    if (renderedBody) {
        renderedBody.innerHTML = parseObsidianMarkdown(note.content);
        attachCodeCopyButtons();
        generateTableOfContents();
    }
}

/**
 * Parseur de Markdown enrichi avec support complet des Callouts Obsidian
 */
function parseObsidianMarkdown(content) {
    if (!content) return "";

    let md = content;

    // 1. Détection et transformation des Callouts Obsidian :
    // > [!NOTE] Title
    // > Content
    const calloutRegex = /^>\s*\[!([a-zA-Z]+)\]\s*(.*)?\n((?:^>.*(?:\n|$))*)/gm;
    md = md.replace(calloutRegex, function (match, type, title, body) {
        const cleanType = type.toLowerCase();
        const displayTitle = (title && title.trim()) ? title.trim() : capitalize(cleanType);
        
        // Nettoyer les chevrons '>' de chaque ligne du corps
        const cleanBody = body.split('\n').map(l => l.replace(/^>\s?/, '')).join('\n');
        
        let icon = "fa-circle-info";
        if (cleanType === "tip" || cleanType === "success") icon = "fa-lightbulb";
        else if (cleanType === "warning" || cleanType === "caution") icon = "fa-triangle-exclamation";
        else if (cleanType === "danger" || cleanType === "failure" || cleanType === "bug") icon = "fa-shield-halved";
        else if (cleanType === "example") icon = "fa-cubes";

        return `
<div class="obsidian-callout callout-${cleanType}">
    <div class="callout-header">
        <i class="fa-solid ${icon}"></i>
        <span>${displayTitle}</span>
    </div>
    <div class="callout-content">
        ${cleanBody}
    </div>
</div>\n`;
    });

    // 2. Transformation des Blocs de Code ```lang ... ```
    const codeBlockRegex = /```([a-zA-Z0-9_-]*)\n([\s\S]*?)```/g;
    md = md.replace(codeBlockRegex, function(match, lang, code) {
        const displayLang = lang || "code";
        const escapedCode = escapeHtml(code.trim());
        return `
<div class="code-block-container">
    <div class="code-block-header">
        <span class="code-lang-tag">${displayLang}</span>
        <button class="code-copy-btn" onclick="copyCodeSnippet(this)">
            <i class="fa-regular fa-copy"></i> Copier
        </button>
    </div>
    <pre><code class="language-${displayLang}">${escapedCode}</code></pre>
</div>`;
    });

    // 3. Transformation des Images Transcluses Obsidian ![[Image.png]] ou ![[Image.png|400]]
    const imageEmbedRegex = /!\[\[(.*?)\]\]/g;
    md = md.replace(imageEmbedRegex, function (match, inner) {
        const parts = inner.split('|');
        const imgName = parts[0].trim();
        const width = (parts[1] && !isNaN(parts[1].trim())) ? `style="max-width: ${parts[1].trim()}px;"` : '';
        const src = (window.vaultImages && window.vaultImages[imgName]) ? window.vaultImages[imgName] : `Assets/obsidian/${imgName}`;
        return `
<figure class="obsidian-img-figure">
    <img src="${src}" alt="${escapeHtml(imgName)}" ${width} class="obsidian-embedded-image" loading="lazy" onclick="window.open(this.src, '_blank')">
    <figcaption class="obsidian-image-caption"><i class="fa-solid fa-image me-1"></i>${escapeHtml(imgName)}</figcaption>
</figure>`;
    });

    // 4. Transformation des Liens Internes Obsidian [[NoteOuFiche]] ou [[NoteOuFiche|Texte]]
    const wikiLinkRegex = /\[\[(.*?)\]\]/g;
    md = md.replace(wikiLinkRegex, function (match, inner) {
        const parts = inner.split('|');
        const target = parts[0].trim();
        const label = parts[1] ? parts[1].trim() : target;
        return `<a href="javascript:void(0)" onclick="selectNoteByQuery('${escapeHtml(target)}')" class="obsidian-wikilink" title="Ouvrir la note liée : ${escapeHtml(target)}"><i class="fa-solid fa-link"></i> ${escapeHtml(label)}</a>`;
    });

    // 4. Si la librairie Marked.js est disponible, on l'utilise pour le reste du markdown
    if (typeof marked !== "undefined" && marked.parse) {
        try {
            return marked.parse(md);
        } catch (e) {
            console.error("Marked error, falling back to simple parser", e);
        }
    }

    // Fallback simple si marked.js ne charge pas
    return simpleMarkdownFallback(md);
}

/**
 * Fallback parser HTML simple
 */
function simpleMarkdownFallback(md) {
    let html = md
        // Titres
        .replace(/^### (.*$)/gim, '<h3 id="$1">$1</h3>')
        .replace(/^## (.*$)/gim, '<h2 id="$1">$1</h2>')
        .replace(/^# (.*$)/gim, '<h1 id="$1">$1</h1>')
        // Gras & Italique
        .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/gim, '<em>$1</em>')
        // Code inline
        .replace(/`([^`]+)`/g, '<code>$1</code>')
        // Séparateurs
        .replace(/^---$/gim, '<hr style="border: none; border-top: 1px solid var(--border-color); margin: 2rem 0;">')
        // Paragraphes
        .replace(/\n\n/gim, '</p><p>');

    return `<p>${html}</p>`;
}

/**
 * Génération automatique de la table des matières (Sommaire)
 */
function generateTableOfContents() {
    const tocBox = document.getElementById("note-toc-box");
    const tocList = document.getElementById("note-toc-list");
    const renderedBody = document.getElementById("markdown-rendered-body");

    if (!tocBox || !tocList || !renderedBody) return;

    const headings = renderedBody.querySelectorAll("h2, h3");
    if (headings.length < 2) {
        tocBox.style.display = "none";
        return;
    }

    tocBox.style.display = "block";
    tocList.innerHTML = "";

    headings.forEach((h, index) => {
        const id = h.id || `section-heading-${index}`;
        h.id = id;
        
        const isH3 = h.tagName.toLowerCase() === "h3";
        const li = document.createElement("li");
        if (isH3) li.style.paddingLeft = "1.2rem";

        li.innerHTML = `<a href="#${id}"><i class="fa-solid fa-angle-right" style="font-size: 0.7rem;"></i> ${h.textContent}</a>`;
        tocList.appendChild(li);
    });
}

/**
 * Attachement des boutons de copie sur les blocs de code
 */
function attachCodeCopyButtons() {
    window.copyCodeSnippet = function(button) {
        const pre = button.closest(".code-block-container").querySelector("pre code");
        if (!pre) return;

        navigator.clipboard.writeText(pre.textContent).then(() => {
            const originalHtml = button.innerHTML;
            button.innerHTML = `<i class="fa-solid fa-check"></i> Copié !`;
            button.classList.add("copied");
            setTimeout(() => {
                button.innerHTML = originalHtml;
                button.classList.remove("copied");
            }, 2000);
        });
    };
}

/**
 * Copier le Markdown brut de la note active
 */
function copyCurrentMarkdown() {
    const note = allNotes.find(n => n.id === activeNoteId);
    if (!note) return;

    navigator.clipboard.writeText(note.content).then(() => {
        showToast("Contenu Markdown copié dans le presse-papier !");
    });
}

/**
 * Mode Plein Écran / Focus
 */
function toggleFocusMode() {
    const sidebar = document.querySelector(".vault-sidebar");
    const workspace = document.querySelector(".vault-workspace");
    const focusBtn = document.getElementById("btn-focus-mode");

    if (sidebar.style.display === "none") {
        sidebar.style.display = "flex";
        workspace.querySelector(".vault-layout").style.gridTemplateColumns = "380px 1fr";
        if (focusBtn) focusBtn.innerHTML = `<i class="fa-solid fa-expand"></i> Focus`;
    } else {
        sidebar.style.display = "none";
        workspace.querySelector(".vault-layout").style.gridTemplateColumns = "1fr";
        if (focusBtn) focusBtn.innerHTML = `<i class="fa-solid fa-compress"></i> Quitter Focus`;
    }
}

/**
 * Modal d'ajout / importation de Note
 */
function setupModalEvents() {
    const openBtn = document.getElementById("btn-open-add-modal");
    const modal = document.getElementById("obsidian-import-modal");
    const closeBtn = document.getElementById("modal-close-btn");
    const cancelBtn = document.getElementById("modal-cancel-btn");
    const saveBtn = document.getElementById("modal-save-btn");

    const dropZone = document.getElementById("modal-drop-zone");
    const fileInput = document.getElementById("modal-file-input");

    if (openBtn && modal) {
        openBtn.addEventListener("click", () => modal.classList.add("active"));
    }

    const closeModal = () => modal && modal.classList.remove("active");
    if (closeBtn) closeBtn.addEventListener("click", closeModal);
    if (cancelBtn) cancelBtn.addEventListener("click", closeModal);

    // Fermeture par clic extérieur
    if (modal) {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) closeModal();
        });
    }

    // Drag & Drop fichier .md
    if (dropZone && fileInput) {
        dropZone.addEventListener("click", () => fileInput.click());

        dropZone.addEventListener("dragover", (e) => {
            e.preventDefault();
            dropZone.classList.add("dragover");
        });

        dropZone.addEventListener("dragleave", () => {
            dropZone.classList.remove("dragover");
        });

        dropZone.addEventListener("drop", (e) => {
            e.preventDefault();
            dropZone.classList.remove("dragover");
            if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                handleFileSelect(e.dataTransfer.files[0]);
            }
        });

        fileInput.addEventListener("change", (e) => {
            if (e.target.files && e.target.files[0]) {
                handleFileSelect(e.target.files[0]);
            }
        });
    }

    // Enregistrement de la nouvelle note
    if (saveBtn) {
        saveBtn.addEventListener("click", function () {
            const title = document.getElementById("note-input-title").value.trim();
            const category = document.getElementById("note-input-category").value;
            const categoryText = document.getElementById("note-input-category").selectedOptions[0].text;
            const tagsRaw = document.getElementById("note-input-tags").value.trim();
            const content = document.getElementById("note-input-content").value.trim();

            if (!title || !content) {
                alert("Veuillez renseigner au moins un titre et le contenu de la note.");
                return;
            }

            const tags = tagsRaw ? tagsRaw.split(",").map(t => t.trim().replace(/^#/, '')) : ["Obsidian"];
            const newId = "note-" + Date.now();
            
            // Extrait automatique
            const cleanContent = content.replace(/[#*`>\-_]/g, ' ').replace(/\s+/g, ' ').trim();
            const excerpt = cleanContent.substring(0, 140) + "...";

            const newNote = {
                id: newId,
                title: title,
                category: category,
                categoryName: categoryText,
                date: "Aujourd'hui",
                readTime: "3 min",
                tags: tags,
                excerpt: excerpt,
                content: content
            };

            // Ajout au début de la liste
            allNotes.unshift(newNote);
            activeNoteId = newId;

            renderNotesList();
            displayActiveNote(newId);
            updateStats();
            closeModal();

            // Réinitialiser le formulaire
            document.getElementById("note-input-title").value = "";
            document.getElementById("note-input-tags").value = "";
            document.getElementById("note-input-content").value = "";

            showToast("Nouvelle note Obsidian ajoutée avec succès au Vault !");
        });
    }
}

/**
 * Lecture d'un fichier .md importé
 */
function handleFileSelect(file) {
    if (!file.name.endsWith(".md") && !file.name.endsWith(".markdown") && !file.name.endsWith(".txt")) {
        alert("Veuillez sélectionner un fichier Markdown (.md).");
        return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
        const text = e.target.result;
        
        // Extraction du titre à partir du nom de fichier ou du 1er titre #
        let noteTitle = file.name.replace(/\.[^/.]+$/, "");
        const matchTitle = text.match(/^#\s+(.+)$/m);
        if (matchTitle && matchTitle[1]) {
            noteTitle = matchTitle[1].trim();
        }

        const titleInput = document.getElementById("note-input-title");
        const contentTextarea = document.getElementById("note-input-content");

        if (titleInput) titleInput.value = noteTitle;
        if (contentTextarea) contentTextarea.value = text;

        showToast(`Fichier « ${file.name} » chargé dans le formulaire !`);
    };
    reader.readAsText(file, "UTF-8");
}

/**
 * Notification Toast
 */
function showToast(message) {
    let toast = document.getElementById("obsidian-toast-notif");
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "obsidian-toast-notif";
        toast.className = "obsidian-toast";
        document.body.appendChild(toast);
    }

    toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #10b981;"></i> <span>${message}</span>`;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3500);
}

// Helpers
function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

function capitalize(s) {
    return s && s[0].toUpperCase() + s.slice(1);
}
