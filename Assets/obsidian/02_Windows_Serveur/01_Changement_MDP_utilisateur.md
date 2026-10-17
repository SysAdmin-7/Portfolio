# Réinitialiser le mot de passe d’un utilisateur Active Directory (Windows Server)

## Contexte

Lorsqu’un utilisateur Active Directory oublie son mot de passe, un administrateur doit effectuer une **réinitialisation du mot de passe** depuis le serveur Windows qui héberge le domaine (contrôleur de domaine).

> Objectif : permettre à l’utilisateur de se reconnecter tout en respectant les bonnes pratiques de sécurité.

---

# Méthode 1 — Avec la console Utilisateurs et ordinateurs Active Directory (GUI)

## Prérequis

- Avoir un compte avec des droits administrateur du domaine.
    
- Être connecté sur un contrôleur de domaine ou une machine avec les outils RSAT installés.
    
- Connaître le nom de l’utilisateur concerné.
    

---

## Étapes

### 1. Ouvrir la console Active Directory

Sur le serveur :

```
Gestionnaire de serveur
→ Outils
→ Utilisateurs et ordinateurs Active Directory
```

Raccourci :

```
dsa.msc
```

---

### 2. Rechercher l’utilisateur

Naviguer dans :

```
Domaine
 └── OU contenant les utilisateurs
      └── Utilisateur concerné
```

Exemple :

```
entreprise.local
 └── Employés
      └── jean.dupont
```

---

### 3. Réinitialiser le mot de passe

Clic droit sur l’utilisateur :

```
Réinitialiser le mot de passe...
```

Entrer :

```
Nouveau mot de passe
Confirmation
```

Valider.

---

### 4. Options recommandées

Cocher selon le besoin :

 **L’utilisateur doit changer le mot de passe à la prochaine ouverture de session**

→ recommandé pour un utilisateur ayant oublié son mot de passe.

---

Décocher :

 **L’utilisateur ne peut pas changer son mot de passe**

→ sauf cas particuliers (comptes techniques, services).

---

# Méthode 2 — Avec PowerShell

## Réinitialiser le mot de passe

Ouvrir PowerShell en administrateur :

```powershell
Set-ADAccountPassword -Identity "jean.dupont" -Reset `
-NewPassword (ConvertTo-SecureString "NouveauMotDePasse123!" -AsPlainText -Force)
```

---

## Forcer le changement du mot de passe à la prochaine connexion

```powershell
Set-ADUser -Identity "jean.dupont" -ChangePasswordAtLogon $true
```

---

## Vérifier l’état du compte

```powershell
Get-ADUser jean.dupont -Properties PasswordExpired, LockedOut
```

---

# Méthode 3 — Déverrouiller un compte bloqué

Si l’utilisateur a fait trop de tentatives :

```powershell
Unlock-ADAccount -Identity "jean.dupont"
```

Vérification :

```powershell
Get-ADUser jean.dupont -Properties LockedOut
```

Résultat attendu :

```
LockedOut : False
```

---

# Points importants pour un administrateur réseau

## Différence entre réinitialisation et changement de mot de passe

|Action|Qui peut le faire ?|Situation|
|---|---|---|
|Changer son mot de passe|Utilisateur|Il connaît son ancien mot de passe|
|Réinitialiser le mot de passe|Administrateur|Mot de passe oublié|

---

# Bonnes pratiques sécurité

 Ne jamais communiquer un mot de passe permanent à l’utilisateur.

Préférer :

```
Mot de passe temporaire
        ↓
Connexion utilisateur
        ↓
Changement obligatoire
```

---

 Respecter la politique de mot de passe du domaine :

Voir :

```
GPMC.msc
→ Default Domain Policy
→ Computer Configuration
→ Windows Settings
→ Security Settings
→ Account Policies
```

Paramètres importants :

- Longueur minimale
    
- Complexité
    
- Historique des mots de passe
    
- Durée d’expiration
    

---

# Commandes utiles Active Directory (fiche révision)

|Action|Commande|
|---|---|
|Voir un utilisateur|`Get-ADUser`|
|Réinitialiser un mot de passe|`Set-ADAccountPassword`|
|Forcer changement au prochain login|`Set-ADUser -ChangePasswordAtLogon $true`|
|Déverrouiller un compte|`Unlock-ADAccount`|
|Modifier un utilisateur|`Set-ADUser`|

---

# À retenir pour un examen réseau

**Utilisateur oublie son mot de passe :**

```
Administrateur
      ↓
Active Directory Users and Computers
      ↓
Utilisateur
      ↓
Reset Password
      ↓
Forcer changement au prochain login
      ↓
Utilisateur récupère l’accès
```

**Outil principal :**

```
dsa.msc
```

**Commande PowerShell principale :**

```powershell
Set-ADAccountPassword
```