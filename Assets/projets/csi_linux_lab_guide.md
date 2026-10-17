# Laboratoire d'Investigation Cyber Forensics & OSINT (CSI Linux 2024)
**Auteur :   • BTS SIO SISR • Veille Technologique Thème 1**

---

## 1. Présentation de la Station d'Analyse CSI Linux
CSI Linux est une distribution spécialisée dans la réponse aux incidents (DFIR), l'investigation numérique, l'OSINT (Open Source Intelligence) et la cyber-enquête.

### Objectifs du Lab :
- Déployer l'environnement CSI Linux sous hyperviseur sécurisé (VirtualBox / Proxmox).
- Mettre en place un réseau isolé (Host-Only / Sandbox) pour éviter les fuites de télémétrie.
- Réaliser une collecte de preuves et analyse de mémoire vive sans altération de la chaîne de conservation.

## 2. Outils Intégrés au Laboratoire
- **CSI Linux Investigator** : Plateforme centralisée de gestion des cas d'investigation.
- **Autopsy & Sleuth Kit** : Analyse de systèmes de fichiers et récupération de données effacées.
- **Volatility 3** : Extraction des processus et artefacts de la RAM.
- **Maltego & Spiderfoot** : Cartographie des surfaces d'attaque et renseignement sur les menaces.

## 3. Procédure de Déploiement
1. Importer l'appliance OVA CSI Linux dans l'hyperviseur.
2. Allouer au minimum 8 Go de RAM et 4 vCPUs.
3. Configurer une carte réseau dédiée Sandbox pour l'analyse dynamique des malwares.
4. Initialiser la base de cas : `csi-case-management --new-case "Incident-Lab-01"`.
