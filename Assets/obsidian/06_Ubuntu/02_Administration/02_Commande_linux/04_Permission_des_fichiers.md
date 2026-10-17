
- on va voir les différente autorisation que l'on peu donné a un fichier et leur différente variante.

> [!important] permission par les chiffres
> - **`4`** = Lecture (**R**ead)
> - **`2`** = Écriture (**W**rite)
> - **`1`** = Exécution (e**X**ecute)
> - **`0`** = Aucun droit
> - il suffit de les additionner les permission que l'on souhaite donner.
> ```bash
> chmod 700 nom_fichier.extension #le 7 c'est pour le propriétaire, le 0 de la disaine pour les groupes et le dernier 0 c'est pour les autres
> ```

> [!important] permission avec les lettre
> - `+` : Ajouter un droit.
> - `-` : Supprimer un droit.
> 
> On cible la catégorie avec : **`u`** (user), **`g`** (group), **`o`** (others), ou **`a`** (all - tout le monde).
> 
> **Exemples :**
> 
> - `chmod +x mon-script.sh` : Ajoute le droit d'**exécuter** (`x`) à tout le monde (c'est le raccourci pour `a+x`).
>     
> - `chmod u+w fichier.txt` : Ajoute le droit d'**écriture** (`w`) uniquement au **propriétaire** (`u`).
>     
> - `chmod o-rwx fichier.txt` : Retire **tous les droits** (`rwx`) aux **autres** (`o`).

- vérification des droit d'un fichier : 
```bash
ls -l
```

- résultat : 
```bash
-rwxr-xr-x
```

> [!important]
> - on les sépare en paquet de 3 sauf le 1er tiré en partant de la gauche il est seul
> - 1er tiré indique si c'est un dossier ou un fichier la dans notre cas c'est un fichier
> - rwx = le propriétaire a le droit le lire, écrire, exécuté
> - r-x = les groupes on le droit de lire et exécuté
> - r-x = les autres on le droit de lire et exécuté

