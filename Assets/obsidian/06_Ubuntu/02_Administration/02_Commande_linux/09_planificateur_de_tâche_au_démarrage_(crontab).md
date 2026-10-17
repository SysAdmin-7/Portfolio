Sur Ubuntu, les commandes `crontab` les plus courantes sont :

|Commande|Description|
|---|---|
|`crontab -e`|Modifier les tâches cron de l'utilisateur courant.|
|`crontab -l`|Afficher les tâches cron de l'utilisateur courant.|
|`crontab -r`|Supprimer toutes les tâches cron de l'utilisateur courant.|
|`crontab -i -r`|Supprimer les tâches cron avec confirmation.|
|`crontab -u utilisateur -e`|Modifier les tâches cron d'un autre utilisateur (nécessite les droits root).|
|`crontab -u utilisateur -l`|Lister les tâches cron d'un autre utilisateur.|

### Structure d'une ligne cron

```text
* * * * * commande
│ │ │ │ │
│ │ │ │ └── Jour de la semaine (0-7) (0 et 7 = dimanche)
│ │ │ └──── Mois (1-12)
│ │ └────── Jour du mois (1-31)
│ └──────── Heure (0-23)
└────────── Minute (0-59)
```

### Exemples

Exécuter un script tous les jours à 2h30 :

```cron
30 2 * * * /home/user/script.sh
```

Toutes les 5 minutes :

```cron
*/5 * * * * /home/user/script.sh
```

Tous les lundis à 8h :

```cron
0 8 * * 1 /home/user/script.sh
```

Le premier jour de chaque mois à minuit :

```cron
0 0 1 * * /home/user/script.sh
```

### Vérifier que le service cron fonctionne

```bash
sudo systemctl status cron
```

Le démarrer si nécessaire :

```bash
sudo systemctl start cron
sudo systemctl enable cron
```

### Consulter les logs cron

Sur Ubuntu :

```bash
grep CRON /var/log/syslog
```

Ou suivre les exécutions en temps réel :

```bash
sudo tail -f /var/log/syslog | grep CRON
```

### Rediriger les sorties vers un fichier de log

```cron
*/10 * * * * /home/user/script.sh >> /var/log/script.log 2>&1
```

Cette syntaxe enregistre à la fois la sortie standard et les erreurs dans `script.log`.