# Je n'arrive pas à installer l'application

## Symptôme

Aucune proposition « Installer l'application » ou « Ajouter à l'écran
d'accueil » n'apparaît.

## Causes possibles

1. Le navigateur ne prend pas en charge l'installation des PWA (Firefox sur
   ordinateur, navigateurs tiers sur iOS).
2. Sur iOS, l'ajout à l'écran d'accueil n'est proposé que par **Safari**, via
   le bouton Partager.
3. L'application est déjà installée.
4. Le site n'est pas servi en HTTPS.
5. Le service worker ne s'est pas encore installé : certains navigateurs
   n'affichent la proposition qu'après une visite complète.

## Diagnostic

| Plateforme | Où chercher |
|---|---|
| Android / Chrome | Menu **⋮** → *Installer l'application* ou *Ajouter à l'écran d'accueil* |
| iOS / Safari | Bouton **Partager** → *Sur l'écran d'accueil* |
| Chrome / Edge (ordinateur) | Icône d'installation dans la barre d'adresse, ou menu **⋮** |
| Firefox (ordinateur) | Non pris en charge |

## Solution

1. Vérifiez que l'adresse commence par `https://`.
2. Sur iOS, ouvrez l'application dans Safari.
3. Rechargez la page une fois, puis rouvrez le menu du navigateur.
4. Vérifiez que l'application n'est pas déjà installée (cherchez son icône).

## Si le problème persiste

L'installation n'est pas nécessaire : dans l'onglet du navigateur,
l'application dispose de **toutes** ses fonctions, mode hors connexion compris.

## Informations à fournir au support

Appareil, système et version, navigateur et version, adresse utilisée.
