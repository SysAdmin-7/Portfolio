
```bash
#!/bin/bash

# Couleurs pour rendre le rapport propre
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo "========================================="
echo "   RAPPORT DE SANTÉ DU SERVEUR (UBUNTU)  "
echo "========================================="

# 1. Vérification de l'espace disque
# On récupère le % d'utilisation de la partition principale
DISK_USAGE=$(df -h / | awk 'NR==2 {print $5}' | sed 's/%//')

echo -n "Espace Disque : "
if [ "$DISK_USAGE" -gt 80 ]; then
    echo -e "${RED}ALERTE ! Disque rempli à $DISK_USAGE%${NC}"
else
    echo -e "${GREEN}OK ($DISK_USAGE% utilisé)${NC}"
fi

# 2. Vérification de la RAM disponible
RAM_FREE=$(free -m | awk '/Mem:/ {print $4}')
echo -e "RAM disponible : ${GREEN}${RAM_FREE} Mo${NC}"

# 3. Vérification du service Docker (Ce qu'on a fait aujourd'hui !)
systemctl is-active --quiet docker
if [ $? -eq 0 ]; then
    echo -e "Statut Docker  : ${GREEN}Actif et fonctionnel${NC}"
else
    echo -e "Statut Docker  : ${RED}ALERTE ! Le service Docker est ARRÊTÉ${NC}"
fi
echo "========================================="
```

- pour le rendre exécutable aller voir [[06_Exécution_d'un_script_automatisé]]
- pour l'ajouté au planificateur de tâche voir [[09_planificateur_de_tâche_au_démarrage_(crontab)]]
