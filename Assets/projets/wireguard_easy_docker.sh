#!/usr/bin/env bash
# ==============================================================================
# DEPLOIEMENT PASSERELLE VPN WIREGUARD-EASY AVEC WEB UI
#   - BTS SIO SISR
# ==============================================================================

set -euo pipefail

echo "[+] Initialisation du serveur VPN WireGuard Easy..."

# Vérification du support Wireguard dans le noyau
if ! modprobe wireguard 2>/dev/null; then
    echo "[!] Attention: Le module noyau WireGuard n'est pas chargé ou n'est pas supporté directement."
fi

# Activation de l'IP Forwarding au niveau du noyau
echo "[+] Activation du routage IPv4..."
sysctl -w net.ipv4.ip_forward=1
echo "net.ipv4.ip_forward=1" >> /etc/sysctl.d/99-wireguard.conf

# Répertoire de stockage des clés et configurations
CONFIG_DIR="$HOME/.wg-easy"
mkdir -p "$CONFIG_DIR"

# Déploiement du conteneur Docker
echo "[+] Lancement du conteneur Docker wg-easy..."
docker run -d \
  --name=wg-easy \
  -e WG_HOST="vpn.lab.local" \
  -e PASSWORD="AdminSecured2026!" \
  -e WG_PORT="51820" \
  -e WG_DEFAULT_ADDRESS="10.8.0.x" \
  -e WG_DEFAULT_DNS="1.1.1.1,1.0.0.1" \
  -v "$CONFIG_DIR":/etc/wireguard \
  -p 51820:51820/udp \
  -p 51821:51821/tcp \
  --cap-add=NET_ADMIN \
  --cap-add=SYS_MODULE \
  --sysctl="net.ipv4.conf.all.src_valid_mark=1" \
  --sysctl="net.ipv4.ip_forward=1" \
  --restart unless-stopped \
  ghcr.io/wg-easy/wg-easy

echo "[+] Serveur WireGuard opérationnel !"
echo "[+] Accès Web UI : http://localhost:51821 (Portail d'administration et génération des QR Codes)"
