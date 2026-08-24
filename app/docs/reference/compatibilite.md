# Compatibilité

## Ce qui est requis

| Élément | Exigence |
|---|---|
| JavaScript | Activé — l'application ne fonctionne pas sans |
| HTTPS (ou `localhost`) | Obligatoire pour le service worker et le presse-papiers |
| Service workers | Nécessaires au mode hors connexion, pas au fonctionnement en ligne |
| `localStorage` | Recommandé — sinon fiches épinglées et réglages ne persistent pas |

L'application s'appuie sur des fonctions largement disponibles des navigateurs
récents : `color-mix()` en CSS, modules JavaScript, service workers.

## Plateformes visées

| Plateforme | Consultation | Installation | Hors connexion |
|---|---|---|---|
| Android — Chrome, Edge | Oui | Oui | Oui |
| iOS / iPadOS — Safari | Oui | Via *Sur l'écran d'accueil* | Oui |
| iOS / iPadOS — autres navigateurs | Oui | Non proposée par le système | Oui |
| Ordinateur — Chrome, Edge | Oui | Oui | Oui |
| Ordinateur — Firefox | Oui | Non | Oui |
| Ordinateur — Safari | Oui | Via *Ajouter au Dock* (macOS Sonoma et suivants) | Oui |

> **À vérifier** — ce tableau décrit les capacités connues de ces navigateurs,
> pas des tests réalisés sur appareil. Aucune campagne de tests n'a encore été
> menée pour cette version : les versions minimales exactes restent à établir.

## Comportements propres à iOS

- L'ajout à l'écran d'accueil n'est proposé que par Safari.
- Le système peut supprimer les données des sites non installés et non
  consultés pendant plusieurs semaines : les fiches épinglées peuvent alors
  disparaître.
- Le comportement des téléchargements (export Markdown) diffère : le fichier
  arrive généralement dans l'application **Fichiers**.

## Affichage

- Interface **sombre uniquement**, sans variante claire.
- Deux dispositions : rail latéral à partir de 900 px de large, barre d'onglets
  en dessous.
- Le graphe a une taille fixe et se consulte en faisant défiler son cadre sur
  petit écran.

## Voir aussi

- [Limites connues](/documentation/reference/limites)
- [Installer Sociologor](/documentation/getting-started/installation)
