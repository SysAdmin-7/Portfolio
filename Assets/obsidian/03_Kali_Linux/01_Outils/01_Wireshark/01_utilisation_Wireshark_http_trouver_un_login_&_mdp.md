- pour lancement voir [[01_installation_wireshark]]


> [!important]
> 945 Post = contient le mdp

## Analyse et Sniffing de paquets (Wireshark)

Le protocole **HTTP** transmettant les données en texte brut (non chiffré), un attaquant sur le réseau peut intercepter les identifiants via un outil de capture.

### Étape 1 : Lancement de Wireshark

Pour que Wireshark puisse écouter les cartes réseau, il doit impérativement être lancé avec les privilèges `root` :

```
sudo wireshark
```

### Étape 2 : Choix de l'interface réseau

Dans la liste des interfaces au démarrage :

- **`docker0`** : Le switch virtuel par lequel passent les conteneurs Docker.
    
- **`lo` (Loopback)** ou **`any`** : À privilégier si le trafic passe par `127.0.0.1` directement sur la machine hôte.
    

_Double-cliquer sur l'interface pour démarrer la capture._

### Étape 3 : Capture et Filtrage

1. Ouvrir le navigateur sur `http://127.0.0.1:8082`.
    
2. Remplir le formulaire d'installation (ex: Identifiant: `admin`, Mot de passe: `Machine2026!`).
    
3. Valider le formulaire pour générer du trafic.
    
4. Dans Wireshark, utiliser la barre de recherche des filtres (en haut) et taper :
    
    ```
    http
    ```
    
5. Repérer la ligne avec la méthode **`POST`** (envoi des données du formulaire).
    

### Étape 4 : Extraction des données sensibles

- **Méthode 1 (Analyse des couches)** : Sélectionner le paquet `POST`. Dans le volet central (Modèle OSI), dérouler la dernière couche : `Hypertext Transfer Protocol` -> `HTML Form URL Encoded`. Les variables `log` et `pwd` apparaissent en clair.

![[Pasted image 20260702132006.png]]

- **Méthode 2 (La plus rapide)** : Faire un **Clic droit sur le paquet POST -> Follow -> TCP Stream**. Une fenêtre s'ouvre affichant l'intégralité de la conversation en clair (Texte rouge = Données envoyées par l'utilisateur).
    

### 💡 Règle de Sécurité apprise (À retenir pour les exams)

Le protocole **HTTP (Port 80)** est vulnérable aux attaques de type _Man-in-the-Middle (MitM)_ car le corps (Body) des requêtes `POST` circule sans chiffrement. C'est pourquoi l'implémentation de **HTTPS (Port 443)** avec un certificat SSL/TLS est obligatoire pour chiffrer le flux TCP et rendre la capture illisible pour un pirate.