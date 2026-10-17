```bash
#!/bin/bash

# 1. Demander le message de commit à l'utilisateur
echo "📝 Quel est le message de ton commit ?"
read message

# 2. Exécuter la suite de commandes Git
echo "⏳ Préparation des fichiers..."
git add .

echo "💾 Création du checkpoint..."
git commit -m "$message"

echo "🚀 Envoi vers GitHub..."
git push origin main
#demande le nom utilisateur github et le token a la place du mot de passe
echo "✅ Terminé ! Ton code est en ligne."
```

- on sauvegarde et on lui donne un nom_fichier.sh
- on lui donne la permission de s'exécuter

```bash
chmod +x nom_fichier.sh
```

- pour avoir plus d'information sur le chmod voir [[04_Permission_des_fichiers]]
- on le lance :

```bash
./auto-git.sh
```

- voilà c'est automatisé

pour la version non automatisé et expliqué voir [[01_Git_basics]]

