
#  Raccourcis Clés Ubuntu & Terminal

---

##  1. Navigation Système & Fenêtres (GUI)

Raccourcis indispensables au quotidien pour gérer plusieurs fenêtres et terminaux sous l'environnement Gnome d'Ubuntu.

| Raccourci | Action | Utilité en TP / Lab |
| :--- | :--- | :--- |
| `Ctrl` + `Alt` + `T` | **Ouvrir un nouveau Terminal** | L'un des raccourcis les plus utilisés |
| `Super` (Touche Windows) | **Vue d'ensemble / Recherche d'apps** | Lancer rapidement Wireshark, GNS3, etc. |
| `Super` + `Flèche Gauche / Droite` | **Ancrer la fenêtre à gauche / droite** | Mettre un cours à gauche et le terminal à droite |
| `Super` + `Tab` ou `Alt` + `Tab` | **Passer d'une application à l'autre** | Navigation rapide inter-fenêtres |
| `Ctrl` + `Alt` + `Flèche Haut / Bas` | **Changer d'espace de travail (Workspace)** | Séparer la partie Web / Documentation des Labs réseau |
| `Super` + `L` | **Verrouiller la session** | Bon réflexe de sécurité en salle de TP |

---

##  2. Gestion du Terminal (La base du travail Réseau)

Le terminal est votre outil principal. Maîtriser sa manipulation gagne un temps précieux lors des configurations.

### Onglets et Fenêtres
- **`Ctrl` + `Shift` + `T`** : Ouvrir un nouvel onglet dans le terminal.
- **`Ctrl` + `Shift` + `W`** : Fermer l'onglet actuel.
- **`Ctrl` + `Shift` + `N`** : Ouvrir une nouvelle fenêtre de terminal.
- **`Alt` + `1`, `2`, `3`...** : Passer directement à l'onglet $N$.

### Affichage & Lecture
- **`Ctrl` + `Shift` + `+` / `Ctrl` + `-`** : Zoomer / Dézoomer dans le terminal (très pratique pour les présentations ou analyses de logs).
- **`Ctrl` + `L`** : Effacer l'écran (*équivalent de la commande `clear`*).
- **`Shift` + `Page Up` / `Page Down`** : Défiler dans le terminal sans toucher à la souris.

---

##  3. Édition & Navigation en Ligne de Commande (Bash)

Gagner en vitesse lors de la saisie de commandes longues (SSH, scripts, adresses IP).

### Déplacement du Curseur
- **`Ctrl` + `A`** : Aller au tout début de la ligne.
- **`Ctrl` + `E`** : Aller à la toute fin de la ligne.
- **`Alt` + `B`** : Reculer d'un mot (*Back*).
- **`Alt` + `F`** : Avancer d'un mot (*Forward*).

### Correction & Suppression
- **`Ctrl` + `U`** : Effacer tout du curseur jusqu'au début de la ligne.
- **`Ctrl` + `K`** : Effacer tout du curseur jusqu'à la fin de la ligne.
- **`Ctrl` + `W`** : Effacer le mot précédent le curseur.
- **`Ctrl` + `Y`** : Coller le texte supprimé récemment via `Ctrl+U/K/W` (*Yank*).

### Historique & Auto-complétion
- **`Tab`** : **Auto-complétion** (appuyer 2 fois pour afficher toutes les propositions). *À utiliser sans modération.*
- **`Ctrl` + `R`** : **Recherche inversée dans l'historique** (taper quelques lettres d'une ancienne commande pour la retrouver).
- **`Ctrl` + `G`** : Quitter la recherche d'historique (`Ctrl + R`).
- **`!!`** : Re-exécuter la toute dernière commande (*ex: `sudo !!` si vous avez oublié `sudo`*).
- **`!$`** : Récupérer le dernier argument de la commande précédente (*ex: `cat !$`*).

---

##  4. Contrôle des Processus & Signaux

Sécurité et gestion des processus bloqués (Pings infinis, scripts, captures réseau).

- **`Ctrl` + `C`** : Interrompre/Stopper le processus en cours (*Envoyer SIGINT* — ex: arrêter un `ping` ou une capture `tcpdump`).
- **`Ctrl` + `Z`** : Suspendre le processus en cours et le mettre en arrière-plan (*Envoyer SIGTSTP*).
  - Pour le relancer au premier plan : taper `fg`.
  - Pour le laisser tourner en arrière-plan : taper `bg`.
- **`Ctrl` + `D`** : Envoyer la fin de fichier (*EOF*) / Quitter le shell ou la session SSH courante (*équivalent de `exit`*).

---

##  Conseils Spéciaux :

> [!TIP] Outils recommandés pour aller plus loin
> - **Tmux / Screen** : Indispensable pour gérer plusieurs sessions shell/SSH dans une seule fenêtre terminal.
> - **Aliasing** : Créez des raccourcis personnalisés dans votre fichier `~/.bashrc` ou `~/.zshrc` :
>   ```bash
>   alias ipa='ip -c a'          # Affiche les IP avec de la couleur
>   alias myip='curl ifconfig.me' # Affiche votre IP publique
>   ```



