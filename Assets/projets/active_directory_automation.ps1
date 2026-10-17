# ==============================================================================
# SCRIPT POWERSHELL D'AUTOMATISATION ACTIVE DIRECTORY & AUDIT UTILISATEURS
#   - BTS SIO SISR
# ==============================================================================

Import-Module ActiveDirectory -ErrorAction SilentlyContinue

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "    AUTOMATISATION AD DS - GESTION DU PARC UTILISATEURS   " -ForegroundColor Yellow
Write-Host "==========================================================" -ForegroundColor Cyan

# 1. Vérification de la disponibilité du module ActiveDirectory
if (-not (Get-Module -Name ActiveDirectory)) {
    Write-Warning "Le module ActiveDirectory RSAT n'est pas installé sur ce poste."
}

# 2. Fonction de création automatisée d'utilisateurs depuis un fichier CSV
function New-BulkADUsers {
    param(
        [Parameter(Mandatory=$true)]
        [string]$CsvPath,
        [string]$TargetOU = "OU=Utilisateurs,OU=Societe,DC=lab,DC=local"
    )

    if (-not (Test-Path $CsvPath)) {
        Write-Error "Fichier CSV introuvable : $CsvPath"
        return
    }

    $Users = Import-Csv -Path $CsvPath -Delimiter ";"
    foreach ($User in $Users) {
        $Username = "$($User.Prenom.ToLower().Substring(0,1))$($User.Nom.ToLower())"
        $UserPrincipal = "$Username@lab.local"
        $Password = (ConvertTo-SecureString "P@ssword2026!" -AsPlainText -Force)

        try {
            New-ADUser -Name "$($User.Prenom) $($User.Nom)" `
                       -GivenName $User.Prenom `
                       -Surname $User.Nom `
                       -SamAccountName $Username `
                       -UserPrincipalName $UserPrincipal `
                       -Path $TargetOU `
                       -AccountPassword $Password `
                       -Enabled $true `
                       -ChangePasswordAtLogon $true
            Write-Host "[+] Utilisateur créé avec succès : $Username" -ForegroundColor Green
        } catch {
            Write-Error "[-] Échec de création pour $Username : $_"
        }
    }
}

# 3. Fonction d'audit des comptes inactifs (> 90 jours)
function Get-InactiveADAccounts {
    param([int]$DaysInactive = 90)
    $DateLimit = (Get-Date).AddDays(-$DaysInactive)
    
    Write-Host "[*] Recherche des comptes inactifs depuis plus de $DaysInactive jours..." -ForegroundColor Cyan
    $Inactive = Get-ADUser -Filter {LastLogonDate -lt $DateLimit -and Enabled -eq $true} -Properties LastLogonDate
    
    $Inactive | Select-Object Name, SamAccountName, LastLogonDate | Format-Table -AutoSize
    return $Inactive
}

Write-Host "[OK] Script d'administration prêt à l'emploi." -ForegroundColor Green
