# Installer Sociologor (PWA)

Sociologor s'utilise directement dans un navigateur. L'installer sur l'écran
d'accueil ajoute le plein écran, une icône et un démarrage plus rapide — mais
n'est pas obligatoire.

> L'installation n'ajoute aucune fonctionnalité : tout est déjà disponible dans
> le navigateur, y compris le mode hors connexion.

## Android (Chrome, Edge, navigateurs Chromium)

1. Ouvrez l'application dans le navigateur.
2. Le navigateur peut proposer « Installer l'application » ou « Ajouter à
   l'écran d'accueil ». Sinon, ouvrez le menu **⋮** et choisissez la même
   entrée.
3. Confirmez. L'icône Sociologor apparaît sur l'écran d'accueil.
4. L'application s'ouvre alors en plein écran, sans barre d'adresse.

**Désinstaller** : appui long sur l'icône → *Désinstaller*, ou via les
paramètres d'applications du système.

## iOS et iPadOS (Safari)

1. Ouvrez l'application dans **Safari** (l'ajout à l'écran d'accueil n'est pas
   proposé par les autres navigateurs sur iOS).
2. Touchez le bouton **Partager** (carré avec une flèche).
3. Choisissez **Sur l'écran d'accueil**, puis **Ajouter**.

**Désinstaller** : appui long sur l'icône → *Supprimer l'app*.

## Ordinateur (Chrome, Edge)

1. Ouvrez l'application.
2. Cliquez sur l'icône d'installation dans la barre d'adresse, ou menu **⋮** →
   *Installer Sociologor*.
3. L'application s'ouvre dans sa propre fenêtre.

**Désinstaller** : dans la fenêtre de l'application, menu **⋮** →
*Désinstaller Sociologor*.

## Firefox

Firefox pour ordinateur ne propose pas d'installation PWA. L'application
fonctionne normalement dans l'onglet, mode hors connexion compris.

## Prérequis techniques

| Élément | Nécessaire |
|---|---|
| HTTPS (ou `localhost`) | Oui — sans quoi le service worker ne s'active pas |
| JavaScript activé | Oui |
| Stockage du site autorisé | Recommandé (fiches épinglées et réglages) |

## Si l'installation n'est pas proposée

Voir [Je n'arrive pas à installer l'application](/documentation/troubleshooting/installation-impossible).

## Voir aussi

- [Premier lancement](/documentation/getting-started/premier-lancement)
- [Compatibilité](/documentation/reference/compatibilite)
