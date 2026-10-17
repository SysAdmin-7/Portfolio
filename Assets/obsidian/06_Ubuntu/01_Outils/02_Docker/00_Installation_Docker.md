- docker permet de faire des conteneur de service et les automatise et les rends portable si volume.

```bash
# 1. Mise à jour du système
sudo apt update && sudo apt upgrade -y

# 2. Installation de Docker et de son plugin Compose
sudo apt install -y docker.io docker-compose-plugin

# 3. Activation du service au démarrage
sudo systemctl enable --now docker
```

- page suivante [[01_Dockerfile]]
