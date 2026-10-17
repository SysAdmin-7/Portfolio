Voici les commandes les plus utiles :

|Action|Commande|
|---|---|
|Vérifier le statut|`sudo ufw status`|
|Voir le statut détaillé|`sudo ufw status verbose`|
|Activer le pare-feu|`sudo ufw enable`|
|Désactiver le pare-feu|`sudo ufw disable`|
|Recharger la configuration|`sudo ufw reload`|
|Réinitialiser les règles|`sudo ufw reset`|

> [!warning]
> - si modification du port ssh voir [[03_modification_du_port_ssh]]

### Autoriser des connexions

Autoriser un port :

```bash
sudo ufw allow 22
```

Autoriser un service :

```bash
sudo ufw allow ssh
```

Autoriser HTTP :

```bash
sudo ufw allow 80/tcp
```

Autoriser HTTPS :

```bash
sudo ufw allow 443/tcp
```

Autoriser une plage de ports :

```bash
sudo ufw allow 10000:20000/tcp
```

Autoriser une adresse IP :

```bash
sudo ufw allow from 192.168.1.100
```

Autoriser une IP sur un port précis :

```bash
sudo ufw allow from 192.168.1.100 to any port 22
```

---

### Bloquer des connexions

Refuser un port :

```bash
sudo ufw deny 80
```

Bloquer une IP :

```bash
sudo ufw deny from 192.168.1.100
```

Refuser un port pour une IP :

```bash
sudo ufw deny from 192.168.1.100 to any port 22
```

---

### Supprimer une règle

Lister les règles numérotées :

```bash
sudo ufw status numbered
```

Supprimer une règle par numéro :

```bash
sudo ufw delete 3
```

Ou supprimer directement :

```bash
sudo ufw delete allow 22
```

---

### Définir les politiques par défaut

Bloquer toutes les connexions entrantes :

```bash
sudo ufw default deny incoming
```

Autoriser toutes les connexions sortantes :

```bash
sudo ufw default allow outgoing
```

Bloquer toutes les connexions sortantes :

```bash
sudo ufw default deny outgoing
```

---

### Journalisation

Activer les logs :

```bash
sudo ufw logging on
```

Niveau de journalisation :

```bash
sudo ufw logging low
sudo ufw logging medium
sudo ufw logging high
```

---

### Exemple de configuration pour un serveur

```bash
sudo ufw default deny incoming
sudo ufw default allow outgoing

sudo ufw allow ssh
sudo ufw allow http
sudo ufw allow https

sudo ufw enable

sudo ufw status verbose
```

Cette configuration bloque toutes les connexions entrantes sauf **SSH (22)**, **HTTP (80)** et **HTTPS (443)**, tout en autorisant les connexions sortantes.