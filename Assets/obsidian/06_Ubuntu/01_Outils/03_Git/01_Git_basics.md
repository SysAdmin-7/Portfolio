### Cloner (télécharger) le dépôt sur ton Ubuntu

Dans ton terminal, tape `git clone` suivi du lien que tu viens de copier :

```bash
git clone https://github.com/TonPseudo/TonDepot.git
```

Une fois le téléchargement fini, entre dans le dossier qui vient d'être créé :

```bash
cd TonDepot
```

_(Remplace bien par le vrai nom de ton dossier !)_

### Ajouter un fichier pour le test

Pour tester, on va copier ton fichier de config d'hier ou créer un fichier de test rapide :

```bash
echo "phrase_au_hasard" > nom_fichier.extention
```

###  Le Push

Balance ces trois commandes à la suite :

```bash
git add nom_fichier.extension
git commit -m "phrase de commit"
git push origin main #demande un mot de passe mais on le remplace par un token
```

_(Note : Si ça râle sur `main`, essaie `git push origin master` selon l'âge de ton dépôt GitHub)._

- pour généré un token pour remplacer le mot de passe aller voir [[02_Génération_de_token]]
