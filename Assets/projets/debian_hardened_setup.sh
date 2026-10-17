#!/usr/bin/env bash
# ==============================================================================
# SCRIPT DE DURCISSEMENT SYSTEME DEBIAN (SECURITY BASELINE)
#   - BTS SIO SISR
# Référence : Guide d'hygiène informatique ANSSI & CIS Benchmark
# ==============================================================================

set -euo pipefail

echo "=========================================================="
echo "    DURCISSEMENT SYSTEME DEBIAN - DEPLOIEMENT BASELINE    "
echo "=========================================================="

if [[ $EUID -ne 0 ]]; then
   echo "[!] Ce script doit être exécuté en tant que root (sudo)." 
   exit 1
fi

# 1. Mise à jour des paquets
echo "[*] Mise à jour des dépôts et paquets..."
apt-get update && apt-get upgrade -y
apt-get install -y ufw fail2ban unattended-upgrades rsyslog curl htop sudo

# 2. Configuration du pare-feu UFW
echo "[*] Configuration du pare-feu UFW..."
ufw default deny incoming
ufw default allow outgoing
ufw allow 22/tcp comment 'SSH Secure'
# ufw allow 80/tcp comment 'HTTP'
# ufw allow 443/tcp comment 'HTTPS'
ufw --force enable

# 3. Sécurisation du service SSH (sshd_config)
echo "[*] Durcissement de la configuration SSH..."
SSH_CONFIG="/etc/ssh/sshd_config.d/00-hardened.conf"
mkdir -p /etc/ssh/sshd_config.d/
cat << 'EOF' > "$SSH_CONFIG"
# Configuration durcie 
PermitRootLogin no
PasswordAuthentication no
PubkeyAuthentication yes
X11Forwarding no
MaxAuthTries 3
ClientAliveInterval 300
ClientAliveCountMax 2
EOF

systemctl reload ssh || systemctl reload sshd

# 4. Activation et configuration de Fail2Ban
echo "[*] Configuration de Fail2Ban..."
cat << 'EOF' > /etc/fail2ban/jail.local
[DEFAULT]
bantime = 1h
findtime = 10m
maxretry = 3

[sshd]
enabled = true
port = ssh
filter = sshd
logpath = /var/log/auth.log
maxretry = 3
EOF

systemctl enable fail2ban
systemctl restart fail2ban

# 5. Sécurisation du noyau Linux (/etc/sysctl.d/99-security.conf)
echo "[*] Application des paramètres sysctl de sécurité..."
cat << 'EOF' > /etc/sysctl.d/99-security.conf
net.ipv4.conf.all.rp_filter = 1
net.ipv4.conf.default.rp_filter = 1
net.ipv4.icmp_echo_ignore_broadcasts = 1
net.ipv4.conf.all.accept_source_route = 0
net.ipv6.conf.all.accept_source_route = 0
net.ipv4.tcp_syncookies = 1
fs.protected_hardlinks = 1
fs.protected_symlinks = 1
EOF

sysctl -p /etc/sysctl.d/99-security.conf

echo "=========================================================="
echo "    [SUCCÈS] BASELINE DE SECURITE APPLIQUEE AVEC SUCCES   "
echo "=========================================================="
