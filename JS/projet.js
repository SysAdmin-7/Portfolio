        // --- 1. TES DONNÉES (C'est ici que tu ajoutes tes projets) ---
        const projectsData = [
             
             {
                title: "VM Debian Hardened",
                category: "vm",
                status: "Ready to Clone",
                icon: "fa-shield-alt", // Icône FontAwesome
                desc: "Une image disque Debian 11 optimisée sécurité. Pare-feu UFW pré-configuré, Fail2Ban actif, SSH sécurisé (Clés uniquement) et logs centralisés.",
                tags: ["Linux", "Bash", "Security", "UFW"],
                linkDemo: "../en cours.html",
                linkGithub: "#" // Mets ton lien GitHub ici
            },
            {
                title: "Bot Discord Ticket",
                category: "bot",
                status: "En Prod",
                icon: "fa-robot",
                desc: "Bot Python pour gérer le support client. Création automatique de channels privés, transcripts HTML des conversations et base de données SQLite.",
                tags: ["Python", "Discord.py", "Docker", "SQLite"],
                linkDemo: "../en cours.html",
                linkGithub: "#"
            },
            {
                title: "Dashboard Monitoring",
                category: "app",
                status: "Lab Home",
                icon: "fa-chart-line",
                desc: "Stack complète de surveillance serveur. Utilisation de NodeExporter pour les données et Grafana pour la visualisation en temps réel.",
                tags: ["Docker", "Grafana", "Prometheus", "Linux"],
                linkDemo: "../en cours.html",
                linkGithub: "#"
            },
            {
                title: "VPN Wireguard Easy",
                category: "vm",
                status: "Testé",
                icon: "fa-network-wired",
                desc: "Conteneurisation d'un serveur VPN Wireguard avec une interface Web pour générer les QR Codes clients en un clic.",
                tags: ["Network", "Docker", "VPN", "Web UI"],
                linkDemo: "../en cours.html",
                linkGithub: "#"
            },
            // --- NOUVEAU PROJET 1 : MINECRAFT ---
            {
                title: "Minecraft Docker Ubuntu",
                category: "vm",
                status: "Conteneurisé",
                icon: "fa-cubes",
                desc: "Serveur Vanilla (non-moddé) tournant sur Ubuntu. Infrastructure Docker complète pour une isolation parfaite et une gestion facile des ressources.",
                tags: ["Ubuntu", "Vanilla", "SysAdmin"],
                linkDemo: "../en cours.html",
                linkGithub: "#"
            },

             // --- NOUVEAU PROJET 2 : MACOS TAHOE ---
            {
                title: "Ubuntu macOS Tahoe",
                category: "vm",
                status: "Custom Rice",
                icon: "fa-desktop",
                desc: "Transformation totale d'une VM Ubuntu pour répliquer l'interface conceptuelle macOS Tahoe. Customisation GNOME, Dock, Thème GTK et icônes.",
                tags: ["Ubuntu", "GNOME", "Rice", "UI/UX"],
                linkDemo: "https://drive.google.com/drive/folders/1FWM_vpFIWbepzvbFTYor6MNsmkcrACrq?usp=sharing",
                linkGithub: "#"
            },
            {
                title: "Site Portfolio (Ce site)",
                category: "app",
                status: "En Ligne",
                icon: "fa-code",
                desc: "Développement complet d'un portfolio et d'une boutique de services sans CMS. HTML/CSS pur et intégration PayPal/Formspree.",
                tags: ["HTML5", "CSS3", "JS", "API"],
                linkDemo: "../en cours.html",
                linkGithub: "#"
            },
            {
    title: "Serveur Minecraft Optimisé",
    category: "vm",  // vm, app, ou bot
    status: "Terminé",
    icon: "fa-cube", // Cherche les icones sur FontAwesome
    desc: "Configuration serveur prête à l'emploi avec PaperMC et flags Aikar.",
    tags: ["Java", "Linux", "Gaming","docker"],
    linkGithub: "https://github.com/ton-pseudo/minecraft-docker"
},
        ];

        // --- 2. FONCTION D'AFFICHAGE ---
        const gallery = document.getElementById('gallery');

        function displayProjects(filter) {
            gallery.innerHTML = ''; // On vide la grille
            
            projectsData.forEach(project => {
                // Si le filtre est 'all' OU correspond à la catégorie du projet
                if (filter === 'all' || project.category === filter) {
                    
                    // Création des tags HTML
                    let tagsHtml = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

                    // Création de la carte HTML
                    const card = document.createElement('div');
                    card.className = 'card';
                    card.innerHTML = `
                        <div class="card-header">
                            <span class="status-badge">${project.status}</span>
                            <i class="fas ${project.icon}"></i>
                        </div>
                        <div class="card-body">
                            <h3 class="card-title">${project.title}</h3>
                            <p class="card-desc">${project.desc}</p>
                            <div class="tech-tags">${tagsHtml}</div>
                        </div>
                        <div class="card-footer">
                            <a href="${project.linkGithub}" target="_blank" class="btn btn-outline"><i class="fab fa-github"></i> Code</a>
                            <a href="${project.linkDemo}" class="btn btn-primary">Détails</a>
                        </div>
                    `;
                    gallery.appendChild(card);
                }
            });
        }

        // --- 3. GESTION DES BOUTONS FILTRES ---
        function filterProjects(category) {
            // Mettre à jour l'apparence des boutons
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');
            
            // Relancer l'affichage
            displayProjects(category);
        }

        // Lancer l'affichage au chargement de la page
        displayProjects('all');
