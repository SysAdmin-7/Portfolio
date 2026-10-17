# 1. Qu'est-ce que Fail2Ban ?

**Fail2Ban** est un logiciel qui protège un serveur contre les attaques par force brute.

Il surveille les journaux (`/var/log/...` ou le journal systemd) et lorsqu'une même adresse IP effectue plusieurs tentatives échouées, il :

- bloque l'adresse IP avec le pare-feu
    
- attend une durée définie
    
- débloque automatiquement l'IP à la fin de cette durée
    

Il protège notamment :

- SSH
    
- Apache
    
- Nginx
    
- FTP
    
- Mail
    
- Nextcloud
    
- WordPress
    
- Docker
    
- beaucoup d'autres services
    

---

# 2. Installation

```bash
sudo apt update
sudo apt install fail2ban
```

Vérifier qu'il fonctionne :

```bash
sudo systemctl status fail2ban
```

Démarrer :

```bash
sudo systemctl enable fail2ban
sudo systemctl start fail2ban
```

---

# 3. Structure des fichiers

Le dossier principal :

```
/etc/fail2ban/
```

Contient notamment :

```
action.d/
filter.d/
jail.conf
jail.d/
jail.local
fail2ban.conf
```

Le plus important :

```
jail.local
```

Il ne faut **jamais modifier** :

```
jail.conf
```

Car il sera remplacé lors d'une mise à jour.

Toujours créer :

```
/etc/fail2ban/jail.local
```

---

# 4. Créer jail.local

Exemple minimal :

```ini
[DEFAULT]

bantime = 1h
findtime = 10m
maxretry = 5

backend = systemd

[sshd]

enabled = true
```

---

# 5. Paramètres importants

## bantime

Durée du bannissement.

```ini
bantime = 10m
```

ou

```ini
bantime = 1h
```

ou

```ini
bantime = 1d
```

ou

```ini
bantime = -1
```

`-1` = bannissement permanent.

---

## findtime

Fenêtre de temps.

Exemple :

```
findtime = 10m
```

Cela signifie :

> si 5 erreurs arrivent en moins de 10 minutes

---

## maxretry

Nombre maximal d'erreurs.

```ini
maxretry = 5
```

---

## ignoreip

IP jamais bannies.

```ini
ignoreip =

127.0.0.1
192.168.1.0/24
10.0.0.5
```

Très utile pour :

- votre PC
    
- VPN
    
- LAN
    

---

## backend

Ubuntu récent :

```ini
backend = systemd
```

Ancien Ubuntu :

```ini
backend = auto
```

---

# 6. Les jails

Une jail = protection d'un service.

Exemple SSH :

```ini
[sshd]

enabled = true
```

Apache :

```ini
[apache-auth]

enabled = true
```

Nginx :

```ini
[nginx-http-auth]

enabled = true
```

---

# 7. Redémarrer Fail2Ban

```bash
sudo systemctl restart fail2ban
```

ou

```bash
sudo service fail2ban restart
```

---

# 8. Vérifier la configuration

```bash
sudo fail2ban-client status
```

Résultat :

```
Status
|- Number of jail: 1
`- Jail list: sshd
```

---

Voir une jail :

```bash
sudo fail2ban-client status sshd
```

Exemple :

```
Status for the jail: sshd

Currently failed: 2

Currently banned: 1

Banned IP list:

203.0.113.25
```

---

# 9. Bannir une IP

```bash
sudo fail2ban-client set sshd banip 1.2.3.4
```

---

# 10. Débannir une IP

```bash
sudo fail2ban-client set sshd unbanip 1.2.3.4
```

---

# 11. Voir les logs

```bash
sudo tail -f /var/log/fail2ban.log
```

ou

```bash
sudo journalctl -u fail2ban
```

---

# 12. Voir toutes les IP bannies

Pour SSH :

```bash
sudo fail2ban-client status sshd
```

---

# 13. Tester un filtre

Commande très utile :

```bash
sudo fail2ban-regex
```

Exemple :

```bash
sudo fail2ban-regex /var/log/auth.log /etc/fail2ban/filter.d/sshd.conf
```

Cela indique :

- les lignes reconnues
    
- les lignes ignorées
    
- les erreurs
    

---

# 14. Les filtres

Les filtres sont dans :

```
/etc/fail2ban/filter.d/
```

Exemple :

```
sshd.conf
```

Ils utilisent des expressions régulières.

Exemple :

```
failregex =
```

---

# 15. Les actions

Les actions sont dans :

```
action.d/
```

Elles définissent :

- comment bannir
    
- comment débannir
    

Exemple :

```
iptables
```

ou

```
nftables
```

ou

```
ufw
```

---

# 16. UFW

Si vous utilisez le pare-feu **UFW** :

```ini
banaction = ufw
```

---

# 17. nftables

Ubuntu récent utilise souvent :

```ini
banaction = nftables
```

---

# 18. iptables

Ancien système :

```ini
banaction = iptables-multiport
```

---

# 19. Bannissement progressif

Exemple :

```ini
bantime = 10m
bantime.increment = true
bantime.factor = 2
```

Chaque récidive double la durée :

```
10 min

20 min

40 min

80 min

...
```

---

# 20. Bannissement permanent des récidivistes

```ini
bantime = 1h
bantime.increment = true
bantime.maxtime = 30d
```

---

# 21. Notifications par mail

Exemple :

```ini
destemail = admin@domaine.fr

sender = serveur@domaine.fr

action = %(action_mwl)s
```

`action_mwl`

envoie :

- le mail
    
- les logs
    
- le WHOIS de l'IP (si disponible)
    

---

# 22. Recharger sans redémarrer

```bash
sudo fail2ban-client reload
```

---

# 23. Voir toute la configuration

```bash
sudo fail2ban-client -d
```

Très utile pour le débogage.

---

# 24. Activer plusieurs protections

Exemple :

```ini
[sshd]
enabled = true

[apache-auth]
enabled = true

[nginx-http-auth]
enabled = true

[postfix]
enabled = true

[dovecot]
enabled = true
```

---

# 25. Ajouter une jail personnalisée

Exemple :

```ini
[monservice]

enabled = true
port = http

filter = monservice

logpath = /var/log/monservice.log

maxretry = 5
```

Puis créer :

```
filter.d/monservice.conf
```

---

# 26. Commandes essentielles

Installation

```bash
sudo apt install fail2ban
```

État

```bash
sudo systemctl status fail2ban
```

Redémarrer

```bash
sudo systemctl restart fail2ban
```

Lister les jails

```bash
sudo fail2ban-client status
```

Voir une jail

```bash
sudo fail2ban-client status sshd
```

Bannir une IP

```bash
sudo fail2ban-client set sshd banip IP
```

Débannir

```bash
sudo fail2ban-client set sshd unbanip IP
```

Logs

```bash
sudo journalctl -u fail2ban
```

ou

```bash
sudo tail -f /var/log/fail2ban.log
```

Recharger

```bash
sudo fail2ban-client reload
```

Tester un filtre

```bash
sudo fail2ban-regex LOG FILTER
```

---

# 27. Bonnes pratiques

- Ne modifiez jamais `jail.conf`; utilisez `jail.local` ou des fichiers dans `/etc/fail2ban/jail.d/`.
    
- Ajoutez vos adresses IP de confiance dans `ignoreip` pour éviter de vous bloquer vous-même.
    
- Utilisez `backend = systemd` sur les versions récentes d'Ubuntu.
    
- Activez uniquement les jails correspondant aux services réellement utilisés.
    
- Combinez Fail2Ban avec un pare-feu (`ufw` ou `nftables`) et une authentification par clé SSH lorsque c'est possible.
    
- Vérifiez régulièrement les journaux et testez les nouveaux filtres avec `fail2ban-regex` avant leur mise en production.
    
- Pensez au bannissement progressif (`bantime.increment = true`) pour mieux gérer les récidivistes.
    

Une bonne configuration de base pour un serveur Ubuntu exposé sur Internet est par exemple :

```ini
[DEFAULT]
backend = systemd
banaction = nftables
ignoreip = 127.0.0.1/8 ::1
findtime = 10m
maxretry = 5
bantime = 1h
bantime.increment = true
bantime.factor = 2
bantime.maxtime = 30d

[sshd]
enabled = true
```

Cette configuration offre un bon équilibre entre sécurité et limitation des faux positifs, et constitue une base solide pour la plupart des serveurs Ubuntu.