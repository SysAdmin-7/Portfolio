
> [!warning]
> - avant pour tous il faut aller dans le dossier ou se trouve le fichier d'installations

- installation d'un appImage :

```bash
sudo chmod +x nom_fichier.AppImage #rend exécutable
./nom_fichier.AppImage
```

- installation d'un paquet référencé par Ubuntu :

```bash
sudo apt install nom_paquet #sudo donne les permission admin et apt install dit d'installer le paquet qui a le nom donner
```

- installation par script Shell :

```bash
sudo chmod +x nom_fichier.sh #rend exécutable
./nom_fichier.sh
```

- installation de .deb :

```bash
sudo dpkg -i nom_fichier.deb #dpkg veut dire depackage -i install
```

