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

- mettre au format json rajoute : 

```bash
#!/bin/bash

# Récupération des données brutes
DISK_USAGE=$(df -h / | awk 'NR==2 {print $5}' | sed 's/%//')
RAM_FREE=$(free -m | awk '/Mem:/ {print $4}')

systemctl is-active --quiet docker
if [ $? -eq 0 ]; then DOCKER_STATUS="OK"; else DOCKER_STATUS="ALERTE"; fi

# Génération d'un objet JSON propre
JSON_REPORT=$(cat <<EOF
{
  "statut_serveur": "analyse",
  "disque_utilise_pourcent": $DISK_USAGE,
  "ram_dispo_mo": $RAM_FREE,
  "docker_status": "$DOCKER_STATUS"
}
EOF
)

# On affiche le JSON à l'écran
echo "$JSON_REPORT"
```

ou discord version :

```bash
#!/bin/bash

# 1. Récupération des données brutes
DISK_USAGE=$(df -h / | awk 'NR==2 {print $5}' | sed 's/%//')
RAM_FREE=$(free -m | awk '/Mem:/ {print $4}')

systemctl is-active --quiet docker
if [ $? -eq 0 ]; then DOCKER_STATUS="OK"; else DOCKER_STATUS="ALERTE "; fi

# 2. Création du message formaté pour Discord (dans la variable "content")
DISCORD_MESSAGE=" **RAPPORT DE SANTÉ SERVEUR** \n• Espace Disque: $DISK_USAGE%\n• RAM Dispo: ${RAM_FREE}Mo\n• Statut Docker: $DOCKER_STATUS"

# 3. Structuration du JSON au format strict de Discord
JSON_REPORT=$(cat <<EOF
{
  "username": "Ubuntu Monitoring Bot",
  "content": "$DISCORD_MESSAGE"
}
EOF
)

# 4. Envoi à Discord (Remplace URL_DISCORD par ton vrai lien)
URL_DISCORD="METS_TON_LIEN_DISCORD_WEBHOOK_ICI"

curl -X POST -H "Content-Type: application/json" -d "$JSON_REPORT" "$URL_DISCORD"
```

l'envoyer sur un serveur discord avec un webhook :

```bash
# Envoi du JSON vers l'API externe via une requête HTTP POST
curl -X POST -H "Content-Type: application/json" -d "$JSON_REPORT" TON_URL_WEBHOOK
```

