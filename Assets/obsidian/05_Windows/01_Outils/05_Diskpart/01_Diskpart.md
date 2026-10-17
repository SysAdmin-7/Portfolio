# DiskPart — Gestion avancée des disques Windows

## 1. Présentation

**DiskPart** est un outil en ligne de commande intégré à Windows permettant de gérer les **disques, partitions et volumes**.

Il permet de remplacer l’outil graphique **Gestion des disques** (`diskmgmt.msc`) avec davantage de possibilités.

### Utilisations principales

- Initialiser un disque
    
- Créer / supprimer des partitions
    
- Formater un volume
    
- Modifier une lettre de lecteur
    
- Étendre ou réduire une partition
    
- Nettoyer complètement un disque
    
- Convertir MBR ↔ GPT
    
- Dépanner un démarrage Windows
    

Commande d’ouverture :

```cmd
diskpart
```

 DiskPart nécessite généralement des droits **administrateur**.

---

# 2. Notions importantes

## Disque physique

Un disque réel connecté à la machine :

Exemples :

```
Disque 0 → SSD système
Disque 1 → HDD données
Disque 2 → Clé USB
```

---

## Partition

Une division logique d’un disque.

Exemple :

```
Disque 0
│
├── Partition EFI (démarrage)
├── C: Windows
└── D: Données
```

---

## Volume

Une partition formatée avec un système de fichiers.

Exemple :

```
Partition
      ↓
Formatage NTFS
      ↓
Volume C:
```

---

# 3. Lancer DiskPart

Ouvrir CMD ou PowerShell en administrateur :

```cmd
diskpart
```

Sortir :

```cmd
exit
```

---

# 4. Voir les disques disponibles

## Afficher les disques

```cmd
list disk
```

Exemple :

```
  Disque ###   Taille
  ----------   ------
  Disque 0     512 GB
  Disque 1     1 TB
```

---

## Sélectionner un disque

```cmd
select disk X
```

Exemple :

```cmd
select disk 1
```

Vérifier le disque sélectionné :

```cmd
detail disk
```

 Toujours vérifier avant une suppression.

---

# 5. Gestion des partitions

## Afficher les partitions

```cmd
list partition
```

---

## Sélectionner une partition

```cmd
select partition X
```

Exemple :

```cmd
select partition 2
```

---

## Supprimer une partition

```cmd
delete partition
```

Suppression forcée :

```cmd
delete partition override
```

 Supprime définitivement les données.

---

# 6. Création d'une partition

## Créer une partition primaire

```cmd
create partition primary
```

Avec une taille précise :

```cmd
create partition primary size=50000
```

La taille est en Mo.

Exemple :

```
50000 Mo ≈ 50 Go
```

---

## Créer une partition EFI

Pour un système UEFI :

```cmd
create partition efi size=100
```

---

## Créer une partition MSR

Partition réservée Microsoft :

```cmd
create partition msr size=16
```

---

# 7. Formatage d’un volume

## Formatage rapide NTFS

```cmd
format fs=ntfs quick
```

---

## Formatage FAT32

```cmd
format fs=fat32 quick
```

---

## Donner un nom au volume

```cmd
format fs=ntfs label="DATA" quick
```

Résultat :

```
Volume DATA
```

---

# 8. Attribution d’une lettre de lecteur

## Ajouter une lettre

```cmd
assign letter=E
```

Résultat :

```
Partition → E:
```

---

## Supprimer une lettre

```cmd
remove letter=E
```

---

# 9. Nettoyer un disque

## Nettoyage classique

```cmd
clean
```

Efface :

- Table des partitions
    
- Informations de formatage
    

Les données deviennent invisibles mais peuvent parfois être récupérées.

---

## Effacement complet

```cmd
clean all
```

Écrit des zéros sur tout le disque.

Avantages :

- Suppression définitive
    
- Préparation avant revente
    

Inconvénient :

- Très long
    

---

# 10. Conversion MBR / GPT

## Voir le type de partition

```cmd
list disk
```

Colonne :

```
GPT
 *
```

Si une étoile apparaît :

```
Disque GPT
```

---

## Convertir en GPT

```cmd
convert gpt
```

Utilisation :

- Machines UEFI
    
- Windows 10/11 modernes
    
- Disques > 2 To
    

---

## Convertir en MBR

```cmd
convert mbr
```

Utilisation :

- Anciennes machines BIOS
    

 Nécessite généralement un disque vide.

---

# 11. Gestion des volumes

## Voir les volumes

```cmd
list volume
```

Exemple :

```
Volume 0   C   NTFS
Volume 1   D   NTFS
```

---

## Sélectionner un volume

```cmd
select volume X
```

---

## Étendre un volume

```cmd
extend
```

Avec une taille :

```cmd
extend size=10000
```

---

## Réduire un volume

Voir l’espace disponible :

```cmd
shrink querymax
```

Réduire :

```cmd
shrink desired=5000
```

---

# 12. Cas dépannage Windows

## Réparer le démarrage avec DiskPart

Afficher les partitions :

```cmd
list volume
```

Trouver :

```
Partition EFI
FAT32
100-300 Mo
```

Sélection :

```cmd
select volume X
```

Attribuer une lettre temporaire :

```cmd
assign letter=S
```

Puis réparer le boot :

```cmd
bcdboot C:\Windows /s S:
```

---

# 13. Disques dynamiques

Afficher les détails :

```cmd
detail disk
```

Conversion :

```cmd
convert dynamic
```

Retour :

```cmd
convert basic
```

Utilisation des disques dynamiques :

- RAID logiciel
    
- Volumes étendus
    
- Volumes fractionnés
    

---

# 14. Commandes essentielles à connaître

|Action|Commande|
|---|---|
|Lancer DiskPart|`diskpart`|
|Voir les disques|`list disk`|
|Choisir un disque|`select disk X`|
|Voir les partitions|`list partition`|
|Créer une partition|`create partition primary`|
|Supprimer une partition|`delete partition`|
|Formater NTFS|`format fs=ntfs quick`|
|Donner une lettre|`assign letter=X`|
|Voir les volumes|`list volume`|
|Nettoyer un disque|`clean`|
|Effacer totalement|`clean all`|
|Convertir GPT|`convert gpt`|
|Convertir MBR|`convert mbr`|

---

# 15. MBR vs GPT (à connaître en réseau/système)

|MBR|GPT|
|---|---|
|Ancien standard|Nouveau standard|
|BIOS|UEFI|
|Maximum ~2 To|Plusieurs To|
|4 partitions principales|Jusqu’à 128 partitions|
|Moins sécurisé|Table de partition protégée|

---

# 16. Exemple complet : préparer un disque neuf

Objectif :

Créer un disque NTFS avec une partition complète.

```cmd
diskpart

list disk

select disk 1

clean

convert gpt

create partition primary

format fs=ntfs quick

assign letter=D

exit
```

Résultat :

```
Disque 1
└── Partition NTFS
        └── D:
```

---

# À retenir pour une école d’ingénieur réseau

## Les commandes indispensables :

```cmd
list disk
select disk
clean
convert gpt
create partition primary
format fs=ntfs quick
assign letter=
list volume
```

## Logique générale :

```
Disque physique
        ↓
Partition
        ↓
Formatage
        ↓
Volume
        ↓
Lettre de lecteur
```

