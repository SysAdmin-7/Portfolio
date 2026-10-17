
# Burp Suite : Les Bases de l'Analyse HTTP/HTTPS

**Burp Suite** est l'outil incontournable d'audit et d'analyse des applications Web. Il s'intercale comme un **Proxy HTTP/HTTPS** (Man-in-the-Middle) entre le navigateur client et le serveur web pour intercepter et modifier le trafic.

---

##  1. Configuration Initiale (Le Setup de Lab)

Pour que Burp puisse intercepter le trafic du navigateur, il faut router le flux HTTP/HTTPS à travers son proxy local (par défaut sur `127.0.0.1:8080`).

### Étapes de Configuration
1. **Configurer le Proxy dans le navigateur** :
   - Rediriger le trafic HTTP/HTTPS vers `127.0.0.1` sur le port `8080`.
   - *Astuce :* Utiliser l'extension **FoxyProxy** (Firefox/Chrome) pour basculer la redirection en 1 clic.
2. **Installer le Certificat CA de Burp (Indispensable pour HTTPS)** :
   - Aller sur `http://burp` dans le navigateur pendant que Burp tourne.
   - Télécharger le certificat (`CA Certificate`).
   - L'importer dans le navigateur (*Paramètres > Vie privée et sécurité > Certificats > Importer*) et cocher *"Faire confiance à cette CA pour identifier des sites web"*.

---

##  2. Les Modules Principaux

Burp Suite est divisé en plusieurs onglets (outils) spécialisés :

| Module | Fonction Principale | Usage en TP |
| :--- | :--- | :--- |
| **Proxy** | Intercepte, affiche et modifie les requêtes/réponses HTTP en temps réel. | Analyser la structure d'une requête POST, modifier un champ d'un en-tête. |
| **Repeater** | Rejoue manuellement une requête interceptée en modifiant ses paramètres à vol d'oiseau. | Tester rapidement les réactions d'une API ou d'un formulaire à différentes entrées. |
| **Target** | Cartographie le site web (Site Map) et définit le périmètre d'analyse (*Scope*). | Isoler uniquement le domaine cible pour éviter de polluer l'historique avec du trafic parasite. |
| **Intruder** | Automatise l'envoi de requêtes personnalisées (Fuzzing, bruteforce léger). | Tester des paramètres en masse avec des listes de dictionnaire (*Payloads*). |
| **Decoder** | Encode et décode les données sous différents formats (Base64, URL Encoding, Hex, HTML). | Déchiffrer des cookies de session ou des jetons encodés en Base64. |
| **Comparer** | Compare visuellement deux requêtes ou réponses pour identifier les différences. | Analyser ce qui change dans la réponse HTTP selon le rôle d'un utilisateur. |

---

## 3. Workflow Classique en Lab / TP

```text
[Navigateur Client] ---> ( Interception Proxy ) ---> [Serveur Web]
                              |
                     [ Envoyé au Repeater ]
                              |
                    ( Tests & Modifications )
````

1. **Interception** :
    
    - Activer `Intercept is ON` dans l'onglet **Proxy > Intercept**.
        
    - Soumettre un formulaire sur le site web.
        
    - Inspecter les en-têtes HTTP (`User-Agent`, `Cookie`, `Content-Type`, etc.) et le corps de la requête.
        
2. **Transfert vers le Repeater** :
    
    - Faire un clic droit sur la requête interceptée $\rightarrow$ **`Send to Repeater`** (Raccourci : `Ctrl` + `R`).
        
    - Reprendre l'interception sur le Proxy (`Intercept is OFF`) pour laisser naviguer normalement.
        
3. **Analyse & Modification** :
    
    - Dans l'onglet **Repeater**, modifier les paramètres et cliquer sur **Send** pour observer la réponse brute du serveur.
        

##  4. Raccourcis Clés dans Burp Suite

|**Raccourci**|**Action**|
|---|---|
|`Ctrl` + `R`|Envoyer la requête courante vers le **Repeater**|
|`Ctrl` + `I`|Envoyer la requête courante vers l'**Intruder**|
|`Ctrl` + `Shift` + `U`|Décoder / Encoder une chaîne sélectionnée en **URL format**|
|`Ctrl` + `Shift` + `B`|Décoder / Encoder une chaîne sélectionnée en **Base64**|
|`Ctrl` + `F`|Rechercher dans la requête ou la réponse HTTP|
|`Ctrl` + `Space`|Faire défiler/avancer la requête interceptée (`Forward`)|

##  5. Bonnes Pratiques & Astuces

> [!TIP] Définir le "Scope" dès le début
> 
> Pour éviter de capturer du trafic système inutile (mises à jour d'OS, télémétrie navigateur) :
> 
> 1. Aller dans **Target > Scope Settings**.
>     
> 2. Ajouter l'URL cible (ex: `http://10.10.10.15/`).
>     
> 3. Dans **Proxy > HTTP history**, cocher l'option _"Show only in-scope items"_.
>     

> [!NOTE] Navigateur Intégré
> 
> Burp Intègre désormais son propre navigateur basé sur Chromium (_Open Browser_ dans l'onglet Proxy). Il est déjà préconfiguré avec le proxy et le certificat CA de Burp, idéal si tu ne souhaites pas modifier la configuration de ton navigateur principal.