
> [!info]
> installation voir [[01_Installation_FOG_Debian_serveur_de_déploiment]]

> [!info]
> - durant mon stage j'appris a déployer une image avec FOG voici comment faire : 

%%Si tu veux **déployer une image Windows créée avec FOG sur des PC physiques qui ont déjà Windows installé**, voici la procédure complète.

## Prérequis

Tu dois avoir :

- Un serveur FOG installé et fonctionnel.
    
- Une image Windows déjà capturée dans FOG.
    
- Les PC connectés au même réseau local que le serveur FOG.
    
- Le serveur DHCP configuré pour permettre le démarrage PXE (ou un serveur ProxyDHCP comme iPXE si tu n'as pas accès au DHCP).
    
- Les PC sauvegardés si des données sont importantes.
    

> **Attention :** Le déploiement d'une image efface entièrement le disque du PC cible.

---

# Étape 1 : Vérifier que le serveur FOG fonctionne

Depuis un navigateur :

```
http://IP_DU_SERVEUR_FOG/fog
```

Connecte-toi à l'interface d'administration.

Vérifie que :

- ton image est présente
    
- elle est bien de type approprié (Single Disk, Resizable est le plus courant)
    

---

# Étape 2 : Ajouter le nouveau PC dans FOG

Deux méthodes.

### Méthode 1 (la plus simple)

Démarrer le PC sur le réseau (PXE).

Dans le menu FOG :

```
Quick Registration and Inventory
```

Puis :

```
Full Registration
```

Renseigner :

- Nom du PC
    
- Groupe (optionnel)
    
- Description
    

Le PC apparaît ensuite dans FOG.

---

### Méthode 2

Depuis l'interface Web :

```
Hosts
```

Puis

```
Create New Host
```

Entrer :

- Nom
    
- Adresse MAC
    
- Image à utiliser
    

---

# Étape 3 : Associer l'image

Dans

```
Hosts
```

Choisir le PC.

Puis

```
Host Image
```

Sélectionner l'image Windows.

Sauvegarder.

---

# Étape 4 : Planifier le déploiement

Toujours dans le PC :

```
Basic Tasks
```

Cliquer sur

```
Deploy
```

Confirmer.

Le serveur attend maintenant que le PC démarre.

---

# Étape 5 : Configurer le démarrage PXE

Sur le PC :

Entrer dans le BIOS/UEFI.

Mettre :

```
Network Boot
```

ou

```
PXE Boot
```

avant le disque dur.

Ou utiliser le menu Boot (F12, F11, Esc selon le constructeur).

---

# Étape 6 : Démarrer sur le réseau

Au démarrage :

```
Start PXE over IPv4
```

Le PC contacte le serveur FOG.

Tu verras :

```
iPXE initializing...
```

Puis :

```
FOG Boot Menu
```

Comme une tâche de déploiement est programmée, FOG démarre automatiquement l'installation.

---

# Étape 7 : Déploiement de l'image

FOG affiche généralement :

```
Partclone
```

avec une progression :

```
Copying filesystem...
```

Une barre de progression indique :

- le pourcentage
    
- la vitesse
    
- le temps restant
    

Selon la taille de l'image :

- SSD : 3 à 10 minutes
    
- HDD : 10 à 30 minutes
    

---

# Étape 8 : Redémarrage

À la fin :

```
Task Complete
```

Le PC redémarre automatiquement.

Windows démarre.

---

# Étape 9 : Premier démarrage Windows

Selon l'image utilisée :

- installation des pilotes
    
- changement automatique du SID (si Sysprep a été utilisé)
    
- renommage éventuel du poste
    
- intégration au domaine si configurée
    

---

# Étape 10 : Installer le client FOG (facultatif mais recommandé)

Une fois Windows démarré :

Installer le **FOG Client**.

Il permet notamment :

- changement automatique du nom du PC
    
- jonction au domaine
    
- installation d'imprimantes
    
- exécution de scripts
    
- inventaire matériel
    

---

# Résumé du processus

```text
PC branché au réseau
        │
        ▼
Boot PXE
        │
        ▼
FOG détecte le PC
        │
        ▼
Image assignée
        │
        ▼
Task Deploy
        │
        ▼
Redémarrage PXE
        │
        ▼
Partclone copie l'image
        │
        ▼
Fin du clonage
        │
        ▼
Redémarrage Windows
        │
        ▼
PC prêt
```

### Points à vérifier en cas de problème

- Le **Secure Boot** est souvent à désactiver si la configuration PXE ne le prend pas en charge.
    
- Vérifier que le PC démarre bien en **UEFI** ou en **Legacy**, selon le mode dans lequel l'image a été capturée.
    
- S'assurer que le serveur DHCP fournit correctement les informations de démarrage PXE (ou que le ProxyDHCP de FOG est configuré).
    
- Si plusieurs modèles de PC sont utilisés, il est recommandé d'avoir préparé l'image avec **Sysprep** avant sa capture afin d'améliorer la compatibilité matérielle.

pour sysprep voir [[01_Sysprep]]
