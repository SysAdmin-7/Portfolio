# Créer et gérer des Alias sous Linux (Ubuntu)

Un **alias** est un raccourci clavier personnalisé dans le [[Terminal]] permettant de remplacer une commande longue ou complexe par un mot simple.

> [!info] Fichier de configuration
> Sur Ubuntu (qui utilise **Bash** par défaut), les alias permanents sont stockés dans le fichier caché `~/.bashrc` (ou `~/.bash_aliases`). Si vous utilisez **Zsh**, le fichier est `~/.zshrc`.

---

## 1. Syntaxe de base d'un alias

La structure générale ne doit comporter **aucun espace** autour du signe `=` :

```bash
alias nom_du_raccourci="commande_a_executer"
```

### Exemples classiques
```bash
# Mettre à jour tout le système en un seul mot
alias maj="sudo apt update && sudo apt upgrade -y"

# Lister les fichiers avec détails et couleurs
alias ll="ls -la --color=auto"
```

> [!warning] Alias temporaire vs permanent
> Taper directement `alias ...` dans le terminal crée un alias **temporaire** : il disparaîtra dès que la fenêtre du terminal sera fermée.

---

## 2. Rendre un alias permanent

Pour conserver ses alias à chaque démarrage :

1. **Ouvrir le fichier de configuration** :
   ```bash
   nano ~/.bashrc
   ```
2. **Ajouter les alias** tout en bas du fichier.
3. **Sauvegarder et quitter Nano** :
   * `Ctrl + O` puis `Entrée` (Sauvegarder)
   * `Ctrl + X` (Quitter)
4. **Recharger la configuration immédiatement** :
   ```bash
   source ~/.bashrc
   ```

---

## 3. Créer un alias pour ouvrir un site web

Sous Linux, l'utilitaire natif `xdg-open` permet d'ouvrir un fichier ou une URL dans l'application par défaut (votre navigateur web).

### Ouvrir un site fixe
Ajoutez ces lignes dans votre `~/.bashrc` :

```bash
alias youtube="xdg-open [https://www.youtube.com](https://www.youtube.com)"
alias azure="xdg-open [https://portal.azure.com](https://portal.azure.com)"
alias doc-ubuntu="xdg-open [https://doc.ubuntu-fr.org](https://doc.ubuntu-fr.org)"
```

> [!tip] Masquer les messages dans le terminal
> Parfois, le navigateur affiche des messages d'erreurs ou des logs dans le terminal à l'ouverture. Pour garder un terminal propre, redirigez la sortie vers `/dev/null` :
> ```bash
> alias youtube="xdg-open [https://www.youtube.com](https://www.youtube.com) >/dev/null 2>&1"
> ```

---

## 4. Aller plus loin : Fonction de recherche rapide

Un `alias` classique ne prend pas d'arguments au milieu d'une chaîne. Pour taper `google ma recherche` dans le terminal, on utilise une **fonction Bash** dans `~/.bashrc` :

```bash
# Rechercher sur Google depuis le terminal
google() {
    xdg-open "[https://www.google.com/search?q=$](https://www.google.com/search?q=$)*" >/dev/null 2>&1
}
```
* **Utilisation :** `google comment faire un alias linux`

---

## 5. Commandes utiles pour gérer ses alias

| Commande | Action |
| :--- | :--- |
| `alias` | Affiche la liste de tous les alias actifs |
| `type nom_alias` | Indique quelle commande se cache derrière un alias |
| `unalias nom_alias` | Désactive un alias pour la session en cours |
| `\commande` | Exécute la commande originale en ignorant l'alias (ex: `\ls`) |

---
