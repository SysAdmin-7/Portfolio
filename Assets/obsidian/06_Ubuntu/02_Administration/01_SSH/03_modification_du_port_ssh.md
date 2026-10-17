Pour modifier le port SSH sur Ubuntu, procédez comme suit.

### 1. Modifier le fichier de configuration SSH

Ouvrez le fichier :

```bash
sudo nano /etc/ssh/sshd_config
```

Recherchez la ligne :

```text
#Port 22
```

ou

```text
Port 22
```

Remplacez-la par le port souhaité, par exemple **2222** :

```text
Port 2222
```

Enregistrez le fichier puis quittez (`Ctrl+O`, `Entrée`, `Ctrl+X` dans Nano).

---

### 2. Autoriser le nouveau port dans le pare-feu

Si vous utilisez UFW :

```bash
sudo ufw allow 2222/tcp
```

Vous pourrez supprimer l'ancien port plus tard :

```bash
sudo ufw delete allow 22/tcp
```


---

### 3. Vérifier la configuration

Avant de redémarrer le service, vérifiez que la configuration est valide :

```bash
sudo sshd -t
```

Si cette commande ne renvoie rien, la configuration est correcte.

---

### 4. Redémarrer le service SSH

```bash
sudo systemctl restart ssh
```

Vérifiez qu'il est bien actif :

```bash
sudo systemctl status ssh
```

---

### 5. Se connecter avec le nouveau port

Depuis la machine cliente :

```bash
ssh -p 2222 utilisateur@IP
```

---

### 6. Vérifier que le serveur écoute sur le nouveau port

```bash
sudo ss -tlnp | grep ssh
```

Vous devriez voir une ligne similaire à :

```text
LISTEN 0 128 0.0.0.0:2222
LISTEN 0 128 [::]:2222
```

---

> [!warning]
> ## Conseil important
> 
> Ne fermez **pas** votre session SSH actuelle si vous effectuez cette modification à distance. Ouvrez une **nouvelle** fenêtre de terminal et testez la connexion sur le nouveau port :
> 
> ```bash
> ssh -p 2222 utilisateur@adresse_ip
> ```
> 
> Une fois que cette connexion fonctionne, vous pouvez fermer l'ancienne session et, si vous le souhaitez, désactiver le port 22 dans le pare-feu. Cela évite de vous retrouver bloqué en cas d'erreur de configuration.

