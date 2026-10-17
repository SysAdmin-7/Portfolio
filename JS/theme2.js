/**
 * ==========================================================================
 * THÈME 2 : VEILLE TECHNOLOGIQUE - DEVOPS (DOCKER, KUBERNETES & ANSIBLE)
 * Mathis Dubos - BTS SIO SISR
 * ==========================================================================
 */

// Données exhaustives des articles pour lecture complète dans la modale
const articleData = {
    "k8s-psa-security": {
        title: "Kubernetes 1.28 à 1.31 : Transition vers Pod Security Admission (PSA) et Durcissement Natif",
        category: "Kubernetes • Sécurité",
        categoryClass: "k8s",
        date: "28 Janvier 2025",
        source: "Kubernetes.io Blog & CNCF",
        content: `
            <h4>1. Contexte & Problématique de l'Orchestration Sécurisée</h4>
            <p>
                Historiquement, la sécurité des charges applicatives dans un cluster Kubernetes reposait sur les <code>PodSecurityPolicy</code> (PSP). Dépréciées depuis Kubernetes v1.21 puis définitivement supprimées avec la version v1.25, les PSP souffraient d'un modèle d'autorisation complexe, confus et difficile à auditer pour les administrateurs systèmes.
            </p>
            <p>
                Depuis les versions 1.28 et jusqu'aux récentes moutures 1.30/1.31, le standard incontournable est désormais le <strong>Pod Security Admission (PSA)</strong>, implémentant les spécifications <em>Pod Security Standards</em> (PSS) directement au cœur du contrôleur d'admission natif.
            </p>

            <h4>2. Les 3 Niveaux de Profils PSS</h4>
            <p>
                Kubernetes segmente désormais la posture de sécurité en trois profils clairement hiérarchisés :
            </p>
            <ul>
                <li><strong>Privileged :</strong> Aucune restriction. Réservé aux composants d'infrastructure système du cluster (CNI Calico/Flannel, CSI drivers de stockage, agents de métriques Prometheus).</li>
                <li><strong>Baseline :</strong> Empêche les élévations de privilèges évidentes tout en garantissant une compatibilité maximale avec la quasi-totalité des conteneurs du marché.</li>
                <li><strong>Restricted :</strong> Le niveau le plus strict, indispensable en production critique. Il interdit l'accès root (<code>runAsNonRoot: true</code>), bloque l'accès aux volumes hôtes (hostPath), désactive les capacités Linux superflues et force l'utilisation de profils Seccomp stricts.</li>
            </ul>

            <h4>3. Mise en Œuvre Déclarative par Labels de Namespace</h4>
            <p>
                Contrairement aux PSP, le contrôle s'applique simplement via des annotations et des labels au niveau du Namespace :
            </p>
            <pre class="modal-code-snippet"><code>apiVersion: v1
kind: Namespace
metadata:
  name: production-apps
  labels:
    pod-security.kubernetes.io/enforce: restricted
    pod-security.kubernetes.io/enforce-version: latest
    pod-security.kubernetes.io/warn: baseline
    pod-security.kubernetes.io/audit: restricted</code></pre>

            <h4>4. Enjeux et Retombées pour le BTS SIO SISR</h4>
            <p>
                Pour l'administrateur système et réseau, cette évolution simplifie drastiquement la politique de sécurité (« zero-trust at pod level ») et évite l'utilisation d'outils tiers lourds comme OPA Gatekeeper pour les politiques de base. Cela garantit qu'aucun étudiant ou développeur ne peut déployer un conteneur mal configuré susceptible de compromettre le nœud hôte sous-jacent.
            </p>
        `
    },
    "docker-distroless-security": {
        title: "Docker & Sécurité de la Supply Chain : Builds Multi-Étapes, Images Distroless et Docker Scout",
        category: "Docker • Sécurité",
        categoryClass: "docker",
        date: "14 Février 2025",
        source: "Docker Official Blog & Snyk Research",
        content: `
            <h4>1. Réduction Drastique de la Surface d'Attaque</h4>
            <p>
                Les images de conteneurs classiques basées sur Ubuntu ou Debian pèsent souvent plusieurs centaines de mégaoctets et embarquent des centaines de binaires système (<code>curl</code>, <code>wget</code>, <code>apt</code>, <code>bash</code>, <code>tar</code>). En cas d'exécution de code arbitraire dans une application web conteneurisée, un attaquant peut immédiatement rebondir grâce à ces utilitaires système.
            </p>
            <p>
                L'utilisation conjointe des <strong>Multi-Stage Builds</strong> (compilation dans une étape jetable) et d'images de production <strong>Distroless</strong> (GoogleContainerTools) permet d'éradiquer ces outils offensifs de l'image finale.
            </p>

            <h4>2. Exemple Concret d'un Dockerfile Multi-Stage Sécurisé</h4>
            <pre class="modal-code-snippet"><code># Étape 1 : Environnement de compilation complet
FROM golang:1.22-alpine AS builder
WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -ldflags="-s -w" -o microservice-api .

# Étape 2 : Image d'exécution minimale ultra-durcie
FROM gcr.io/distroless/static-debian12:nonroot
WORKDIR /app
COPY --from=builder /app/microservice-api .
USER nonroot:nonroot
EXPOSE 8080
ENTRYPOINT ["/app/microservice-api"]</code></pre>

            <h4>3. Analyse Continue des Vulnérabilités (CVE)</h4>
            <p>
                Grâce à <strong>Docker Scout</strong> et <strong>Trivy</strong> intégrés aux pipelines CI/CD, les images sont automatiquement scannées avant leur publication sur le registre privé. Le rapport identifie les CVEs critiques et propose la mise à jour des couches sans recompilation manuelle.
            </p>
            <ul>
                <li>Taille de l'image réduite de <strong>850 Mo à 18 Mo</strong>.</li>
                <li>Suppression intégrale du shell <code>/bin/sh</code>, empêchant tout reverse shell interactif.</li>
                <li>Exécution par défaut sous un UID non privilégié (<code>nonroot: 65532</code>).</li>
            </ul>
        `
    },
    "ansible-iac-provisioning": {
        title: "Ansible & Infrastructure as Code (IaC) : Déploiement Reproductible de Nœuds Linux & Cisco",
        category: "Ansible • IaC",
        categoryClass: "ansible",
        date: "05 Mars 2025",
        source: "Red Hat Ansible Community",
        content: `
            <h4>1. Le Principe de l'Idempotence</h4>
            <p>
                L'un des plus grands défis de l'administration système est la dérive de configuration (*Configuration Drift*). Avec des scripts Bash impératifs, relancer un script peut causer des erreurs, des doublons ou des écrasements indésirables.
            </p>
            <p>
                <strong>Ansible</strong> fonctionne de manière purement déclarative et idempotente : le playbook décrit l'état cible souhaité. Si le système est déjà conforme, aucune modification n'est apportée (statut <code>ok</code>). Dans le cas contraire, seules les différences sont appliquées (statut <code>changed</code>).
            </p>

            <h4>2. Architecture Sans Agent (Agentless)</h4>
            <p>
                Contrairement à Puppet ou Chef qui imposent l'installation et la maintenance d'un agent local sur chaque machine, Ansible s'appuie exclusivement sur les canaux d'administration standards :
            </p>
            <ul>
                <li><strong>SSH & Python</strong> pour les serveurs GNU/Linux (Ubuntu, Debian, Red Hat).</li>
                <li><strong>WinRM & PowerShell</strong> pour les serveurs Windows Server.</li>
                <li><strong>SSH & NETCONF</strong> pour les commutateurs et routeurs Cisco IOS.</li>
            </ul>

            <h4>3. Playbook d'Installation et Durcissement d'un Nœud Docker</h4>
            <pre class="modal-code-snippet"><code>---
- name: Déploiement automatisé d'un hôte Docker durci
  hosts: docker_nodes
  become: true
  vars_files:
    - vars/vault_secrets.yml

  tasks:
    - name: Mise à jour des dépôts APT et upgrade sécurisé
      apt:
        update_cache: yes
        upgrade: dist
        cache_valid_time: 3600

    - name: Installation du runtime Docker et des plugins Compose
      apt:
        name:
          - docker-ce
          - docker-ce-cli
          - containerd.io
          - docker-compose-plugin
        state: present

    - name: Configuration du pare-feu UFW avec règles strictes
      ufw:
        state: enabled
        policy: deny
        direction: incoming

    - name: Autorisation du trafic SSH sécurisé
      ufw:
        rule: allow
        port: "{{ ssh_custom_port }}"
        proto: tcp</code></pre>

            <h4>4. Protection des Données Sensibles avec Ansible Vault</h4>
            <p>
                Tous les identifiants, clés privées SSH et tokens d'API sont chiffrés avec l'algorithme AES-256 via la commande <code>ansible-vault encrypt</code>, permettant de versionner l'intégralité de l'infrastructure sur GitHub ou GitLab en toute sérénité.
            </p>
        `
    },
    "k3s-lightweight-orchestration": {
        title: "K3s : L'Orchestration Kubernetes Allégée pour PME, Edge Computing et Labs BTS SIO",
        category: "Kubernetes • K3s",
        categoryClass: "k8s",
        date: "20 Janvier 2025",
        source: "SUSE Rancher & CNCF Edge Working Group",
        content: `
            <h4>1. Pourquoi un Kubernetes Allégé ?</h4>
            <p>
                Déployer un cluster Kubernetes standard (Kubeadm) nécessite au minimum 3 nœuds de Control Plane et 2 à 3 Worker Nodes, chacun réclamant au moins 4 à 8 Go de mémoire RAM pour supporter etcd, kube-apiserver et les addons. Cette gourmandise en ressources rend Kubernetes difficilement accessible pour des laboratoires pédagogiques, des petites entreprises ou des serveurs distants.
            </p>
            <p>
                Créé par Rancher Labs et certifié à 100% par la CNCF, <strong>K3s</strong> résout cette équation en regroupant tous les composants dans un unique binaire de moins de 100 Mo consommant seulement 512 Mo de RAM.
            </p>

            <h4>2. Optimisations Techniques Clés de K3s</h4>
            <ul>
                <li><strong>Remplacement d'etcd par SQLite :</strong> Pour les clusters mono-nœud ou labs, SQLite offre une vitesse d'exécution fulgurante sans la complexité de quorum d'etcd (avec support etcd externe pour la haute disponibilité multi-master).</li>
                <li><strong>Composants Embarqués :</strong> Flannel (réseau CNI), CoreDNS, Kube-Router, Traefik (Ingress Controller) et Local-Path-Provisioner (stockage persistant) sont intégrés et prêts à l'emploi dès la fin de l'installation.</li>
                <li><strong>Installation en une seule ligne :</strong> Déploiement automatisé d'un nœud master en moins de 60 secondes.</li>
            </ul>

            <h4>3. Intégration dans le Parcours BTS SIO SISR</h4>
            <p>
                Dans mes travaux personnels, K3s a permis de déployer un cluster fonctionnel sur un mini-PC Proxmox VE hébergeant plusieurs microservices isolés avec répartition de charge Ingress Traefik et gestion de certificats Let's Encrypt automatisée.
            </p>
        `
    },
    "gitops-argocd-workflow": {
        title: "L'Approche GitOps : Synchronisation Continue des Clusters avec ArgoCD et Kubernetes",
        category: "GitOps • CI/CD",
        categoryClass: "security",
        date: "12 Décembre 2024",
        source: "DevOps.com & Argo Project",
        content: `
            <h4>1. Du Déploiement Impératif au GitOps Déclaratif</h4>
            <p>
                Traditionnellement, les pipelines d'intégration continue (CI) exécutent des commandes <code>kubectl apply -f manifest.yaml</code> avec des clés d'accès administrateur injectées dans le serveur de build (Jenkins ou GitLab Runner). Cette méthode pose un risque majeur de sécurité : la compromission du serveur de build donne un accès total au cluster de production.
            </p>
            <p>
                Le modèle <strong>GitOps</strong> inverse cette dynamique :
            </p>
            <ul>
                <li>Le dépôt Git devient la <strong>source unique de vérité</strong> (*Single Source of Truth*).</li>
                <li>Un agent logiciel (comme <strong>ArgoCD</strong>) réside directement <em>à l'intérieur</em> du cluster Kubernetes.</li>
                <li>L'agent surveille en permanence le dépôt Git et applique les modifications par un mécanisme de réconciliation automatique (*Pull Model*).</li>
            </ul>

            <h4>2. Auto-Healing et Détection de Dérive</h4>
            <p>
                Si un administrateur effectue par erreur une modification manuelle directe avec <code>kubectl edit</code> sur le cluster, ArgoCD détecte l'écart entre la réalité et le dépôt Git (*Out-of-Sync*). Selon la politique définie, ArgoCD peut écraser la modification locale pour restaurer l'état officiel validé sur Git.
            </p>

            <h4>3. Auditabilité & Retour Arrière (Rollback) Instantané</h4>
            <p>
                Chaque déploiement est matérialisé par un commit Git horodaté et signé. Pour annuler une mise en production défectueuse, un simple <code>git revert</code> déclenche le retour arrière automatique de l'ensemble du parc applicatif en quelques secondes.
            </p>
        `
    },
    "docker-compose-production": {
        title: "Stack Multi-Conteneurs Industrielle : Orchestration Docker Compose & Reverse Proxy Nginx Sécurisé",
        category: "Docker • Production",
        categoryClass: "docker",
        date: "04 Novembre 2024",
        source: "Portfolio Mathis Dubos • Lab SISR",
        content: `
            <h4>1. Isolation Réseau et Ponts Sécurisés</h4>
            <p>
                Dans un environnement de services mutualisés (WordPress, MariaDB, Nextcloud), exposer directement les ports des bases de données sur le réseau local représente une vulnérabilité critique.
            </p>
            <p>
                L'architecture mise en œuvre dans mon lab SISR utilise une segmentation stricte à deux niveaux via Docker Networks :
            </p>
            <ul>
                <li><strong>frontend-net :</strong> Réseau public accessible uniquement par le Reverse Proxy Nginx / Nginx Proxy Manager (ports 80 et 443).</li>
                <li><strong>backend-net (internal: true) :</strong> Réseau entièrement isolé, sans aucune passerelle internet ni exposition de ports, reliant exclusivement le serveur web et la base de données MariaDB.</li>
            </ul>

            <h4>2. Extrait d'Architecture Docker Compose</h4>
            <pre class="modal-code-snippet"><code>version: '3.8'

services:
  nginx-proxy:
    image: nginx:alpine
    container_name: gateway-edge
    ports:
      - "80:80"
      - "443:443"
    networks:
      - frontend-net
    volumes:
      - ./nginx/conf.d:/etc/nginx/conf.d:ro
      - ./certs:/etc/nginx/certs:ro

  webapp:
    image: ghost:alpine
    networks:
      - frontend-net
      - backend-net

  database:
    image: mariadb:10.11
    environment:
      MYSQL_ROOT_PASSWORD_FILE: /run/secrets/db_root_pwd
    networks:
      backend-net: # Non accessible depuis l'extérieur
    secrets:
      - db_root_pwd

networks:
  frontend-net:
    driver: bridge
  backend-net:
    driver: bridge
    internal: true # Bloque tout accès externe

secrets:
  db_root_pwd:
    file: ./secrets/db_password.txt</code></pre>

            <h4>3. Synergie avec les Fiches de Notes Obsidian</h4>
            <p>
                Cette architecture a été réutilisée et documentée dans mon coffre de notes techniques sous la fiche <em>« Docker Compose & Reverse Proxy Nginx Sécurisé »</em>, accessible dans la section Notes Obsidian du portfolio.
            </p>
        `
    },
    "cilium-ebpf-network-security": {
        title: "Cilium & eBPF dans Kubernetes : Révolution du Networking CNI, Observabilité Hubble et Microsegmentation L7",
        category: "Kubernetes • Sécurité eBPF",
        categoryClass: "k8s",
        date: "25 Mars 2025",
        source: "Isovalent & CNCF Graduated Projects",
        content: `
            <h4>1. Le Défi de l'Échelle : Les Limites d'iptables et kube-proxy</h4>
            <p>
                Dans les architectures Kubernetes massives, le routage et le filtrage réseau traditionnels reposent sur <code>iptables</code> ou <code>IPVS</code> via le composant <code>kube-proxy</code>. Dès qu'un cluster dépasse plusieurs milliers de services et de pods, les tables iptables explosent en taille : chaque mise à jour de service force la réécriture séquentielle de dizaines de milliers de règles, entraînant une latence réseau élevée et des pics de charge CPU.
            </p>
            <p>
                <strong>Cilium</strong> résout ce goulot d'étranglement en exploitant la puissance du noyau Linux avec <strong>eBPF (Extended Berkeley Packet Filter)</strong> : le routage des paquets et le load balancing s'effectuent en temps constant O(1) via des tables de hachage eBPF en mémoire noyau, sans jamais toucher à iptables.
            </p>

            <h4>2. Microsegmentation de Niveau 7 (Application-Aware NetworkPolicies)</h4>
            <p>
                Les NetworkPolicies natives de Kubernetes ne savent filtrer qu'aux couches 3 et 4 (adresses IP et ports TCP/UDP). Cilium étend cette capacité jusqu'à la couche 7 (HTTP, gRPC, DNS, Kafka) :
            </p>
            <pre class="modal-code-snippet"><code>apiVersion: "cilium.io/v2"
kind: CiliumNetworkPolicy
metadata:
  name: "secure-api-access"
  namespace: production
spec:
  endpointSelector:
    matchLabels:
      app: backend-service
  ingress:
  - fromEndpoints:
    - matchLabels:
        app: frontend-proxy
    toPorts:
    - ports:
      - port: "8080"
        protocol: TCP
      rules:
        http:
        - method: "GET"
          path: "/api/v1/health"
        - method: "POST"
          path: "/api/v1/orders"</code></pre>

            <h4>3. Observabilité en Temps Réel avec Hubble</h4>
            <p>
                Couplé à eBPF, le composant <strong>Hubble</strong> fournit une cartographie interactive en temps réel de tous les flux réseau entre pods : latence des requêtes HTTP, taux d'erreurs 5xx, requêtes DNS résolues et paquets rejetés par les politiques de sécurité, sans nécessiter d'injection de sidecars applicatifs lourds.
            </p>
            <ul>
                <li>Performances de commutation réseau multipliées par 3 par rapport à Flannel/iptables.</li>
                <li>Microsegmentation granulaire basée sur les identités cryptographiques des pods.</li>
                <li>Visibilité totale sur les communications est-ouest du cluster.</li>
            </ul>
        `
    },
    "ansible-molecule-ci-testing": {
        title: "Test Automatisé de Rôles Ansible avec Molecule & Testinfra : Garantir l'Idempotence et la Non-Régression en CI/CD",
        category: "Ansible • Qualité & CI/CD",
        categoryClass: "ansible",
        date: "10 Avril 2025",
        source: "Red Hat Ansible & Molecule Project",
        content: `
            <h4>1. Le Problème du Test « En Production » dans l'IaC</h4>
            <p>
                En Infrastructure as Code (IaC), appliquer un playbook Ansible directement sur un serveur de recette ou de production sans phase de test unitaire automatisée expose l'infrastructure à des ruptures de service brutales : erreurs de syntaxe YAML, modules incompatibles selon les versions d'OS, ou playbooks non idempotents (qui modifient le système à chaque passage).
            </p>
            <p>
                Le framework <strong>Molecule</strong> a été conçu par la communauté Ansible pour combler cette lacune en orchestrant des scénarios de test complets dans des conteneurs éphémères (Docker ou Podman).
            </p>

            <h4>2. Le Cycle de Vie d'un Test Molecule</h4>
            <p>
                Une simple commande <code>molecule test</code> exécute automatiquement les 7 étapes séquentielles de validation :
            </p>
            <ol style="margin-left: 1.5rem; color: #cbd5e1; margin-bottom: 1rem;">
                <li><strong>Lint :</strong> Validation de la syntaxe et des bonnes pratiques avec <code>ansible-lint</code> et <code>yamllint</code>.</li>
                <li><strong>Create :</strong> Instanciation rapide de conteneurs de test (ex: Debian 12 et Ubuntu 24.04).</li>
                <li><strong>Converge :</strong> Première exécution du playbook/rôle Ansible sur les conteneurs cibles.</li>
                <li><strong>Idempotence :</strong> Seconde exécution identique du playbook : Molecule vérifie formellement que le statut retourne <code>changed=0</code>.</li>
                <li><strong>Verify :</strong> Exécution des tests unitaires fonctionnels avec <strong>Testinfra</strong> (Python/Pytest).</li>
                <li><strong>Destroy :</strong> Destruction propre des conteneurs éphémères.</li>
            </ol>

            <h4>3. Exemple de Tests d'Intégrité avec Testinfra (Python)</h4>
            <pre class="modal-code-snippet"><code>import pytest

def test_nginx_is_installed(host):
    nginx = host.package("nginx")
    assert nginx.is_installed

def test_nginx_service_running(host):
    service = host.service("nginx")
    assert service.is_running
    assert service.is_enabled

def test_nginx_port_listening(host):
    socket = host.socket("tcp://0.0.0.0:443")
    assert socket.is_listening

def test_ssl_certificate_permissions(host):
    cert = host.file("/etc/ssl/certs/server.crt")
    assert cert.exists
    assert cert.user == "root"
    assert cert.mode == 0o644</code></pre>

            <h4>4. Apport pour l'Épreuve E4 / E6 du BTS SIO SISR</h4>
            <p>
                L'intégration de Molecule dans un pipeline GitLab CI ou GitHub Actions démontre une maturité professionnelle avancée : l'infrastructure n'est plus configurée au hasard, elle est testée, mesurée et certifiée conforme avant tout déploiement sur les serveurs de l'entreprise.
            </p>
        `
    }
};

/**
 * Initialisation au chargement du DOM
 */
document.addEventListener("DOMContentLoaded", function () {
    setupCategoryFilters();
    setupArticleModal();
    setupSmoothScrolling();
});

/**
 * 1. Filtrage dynamique des articles de veille par catégorie
 */
function setupCategoryFilters() {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const articleCards = document.querySelectorAll(".article-card");

    filterButtons.forEach(btn => {
        btn.addEventListener("click", function () {
            // Mise à jour du bouton actif
            filterButtons.forEach(b => b.classList.remove("active"));
            this.classList.add("active");

            const filterValue = this.getAttribute("data-filter");

            // Filtrer les cartes
            articleCards.forEach(card => {
                const cardCategory = card.getAttribute("data-category");

                if (filterValue === "all" || cardCategory === filterValue) {
                    card.style.display = "flex";
                    card.style.animation = "fadeIn 0.35s ease forwards";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });
}

/**
 * 2. Gestion de la modale de lecture complète des articles
 */
function setupArticleModal() {
    const overlay = document.getElementById("modal-article-overlay");
    const closeBtn = document.getElementById("modal-article-close");
    const dismissBtn = document.getElementById("modal-article-dismiss");

    const modalTitle = document.getElementById("modal-title-text");
    const modalCategory = document.getElementById("modal-category-badge");
    const modalDate = document.getElementById("modal-article-date");
    const modalSource = document.getElementById("modal-article-source");
    const modalBody = document.getElementById("modal-article-body-content");

    // Boutons "Lire l'analyse complète"
    const readButtons = document.querySelectorAll(".read-article-btn");
    readButtons.forEach(button => {
        button.addEventListener("click", function () {
            const articleId = this.getAttribute("data-article-id");
            const data = articleData[articleId];

            if (data && overlay) {
                modalTitle.textContent = data.title;
                modalCategory.textContent = data.category;
                modalCategory.className = `article-cat-badge ${data.categoryClass}`;
                modalDate.textContent = data.date;
                modalSource.textContent = data.source;
                modalBody.innerHTML = data.content;

                overlay.classList.add("active");
                document.body.style.overflow = "hidden"; // Empêche le défilement arrière-plan
            }
        });
    });

    const closeModal = () => {
        if (overlay) {
            overlay.classList.remove("active");
            document.body.style.overflow = "";
        }
    };

    if (closeBtn) closeBtn.addEventListener("click", closeModal);
    if (dismissBtn) dismissBtn.addEventListener("click", closeModal);

    // Fermeture par clic sur l'arrière-plan
    if (overlay) {
        overlay.addEventListener("click", function (e) {
            if (e.target === overlay) closeModal();
        });
    }

    // Fermeture avec la touche Échap
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && overlay && overlay.classList.contains("active")) {
            closeModal();
        }
    });
}

/**
 * 3. Défilement fluide pour les liens internes
 */
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== "#") {
                const targetEl = document.querySelector(targetId);
                if (targetEl) {
                    e.preventDefault();
                    targetEl.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}