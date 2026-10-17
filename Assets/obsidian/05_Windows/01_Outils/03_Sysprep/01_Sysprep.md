
**Sysprep (System Preparation Tool)** est un outil Microsoft qui sert à **préparer une installation de Windows pour qu'elle puisse être dupliquée ou déployée sur d'autres ordinateurs**.

Concrètement, il supprime les informations propres à un PC (identifiants, pilotes spécifiques, journaux, etc.) afin que Windows puisse être redémarré comme s'il venait d'être installé.

### Les principales utilisations

- **Créer une image Windows** : vous installez Windows, les mises à jour, les logiciels et les paramètres sur un PC de référence, puis vous exécutez Sysprep avant de créer une image disque à déployer sur d'autres machines.
- **Éviter les conflits d'identité** : Sysprep réinitialise les informations uniques de l'installation afin que chaque PC obtienne sa propre identité au premier démarrage.
- **Lancer l'expérience de premier démarrage (OOBE)** : le nouvel utilisateur voit l'assistant de configuration de Windows (choix de la langue, création du compte, etc.).

> [!NOTE] emplacement
> On trouve sysprep dans :
> - C:\Windows\System32\Sysprep\Sysprep.exe
> ou 
> - Windows + r ecrire sysprep

on peut s'en servir pour préparé l'image comme quand on utilise FOG Project pour masterisé des machines [[06_deploiment_d'image_système_avec_FOG]]




