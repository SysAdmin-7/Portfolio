- installation de Git sur Ubuntu 22.04.5 LTS : 

```bash
# 1. Installation de Git
sudo apt update && sudo apt install git -y

# 2. Configuration de ton identité (pour que ton nom apparaisse sur GitHub)
git config --global user.name "TonPseudoGitHub"
git config --global user.email "ton.email@exemple.com"
```

- Si 1ère ligne compliqué a comprendre voir [[01_Commande_de_base_linux]].

### Récupérer l'URL HTTPS de ton dépôt GitHub

1. Va sur ton site GitHub, sur la page du dépôt (le dossier) où tu veux stocker tes labs.
    
2. Clique sur le bouton vert **Code**.
    
3. Vérifie que tu es bien sur l'onglet **HTTPS** et copie le lien (il ressemble à `https://github.com/TonPseudo/TonDepot.git`).

- voir la suite aller sur [[01_Git_basics]]

