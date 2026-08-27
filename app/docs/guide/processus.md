# Écran Processus sociaux

## Objectif

Dérouler la trajectoire par laquelle une situation sociale évolue vers un
état — un [phénomène](/documentation/guide/phenomenes) déjà décrit dans
l'application, ou non.

## Accès

- Bouton **N processus sociaux — de la précarisation au déclassement →** sur
  l'écran Accueil, ou menu ☰ → **Processus sociaux**.
- Adresse `/processus` pour la liste, `/pr/<identifiant>` pour une fiche —
  par exemple `/pr/precarisation`.

## Éléments de l'interface

### Liste (`/processus`)

| Élément | Description |
|---|---|
| Texte d'entrée | Rappelle la distinction entre phénomène (état) et processus (trajectoire) |
| Catégories | 3 sections titrées — Reproduction et transmission, Mobilité et trajectoires, Individualisation et délitement du lien — chacune avec sa phrase de présentation |
| Carte d'un processus | Nom et nombre d'étapes de sa trajectoire |

### Fiche (`/pr/<identifiant>`)

| Élément | Description |
|---|---|
| Étiquette **Processus** | Distingue la fiche d'une fiche phénomène, concept ou auteur |
| **En une phrase** | Définition courte, centrée sur le mécanisme plutôt que sur l'état |
| **Ce que la sociologie en dit** | Paragraphe de contexte, avec les auteurs et concepts qui éclairent le processus |
| **Étapes types** | La trajectoire, numérotée, du déclencheur à l'état stabilisé |
| **Concepts du corpus** | Les concepts liés, cliquables, avec leur auteur |
| **Phénomènes liés** | Les états, déjà décrits dans l'application, vers lesquels le processus mène le plus souvent — cliquables |
| **Notions associées** | Des termes liés au processus, sans fiche dans l'application, en texte non cliquable |
| Bouton **Exporter en Markdown** | Télécharge la fiche |
| Bouton **Partager** | Partage le lien de la fiche |

## Actions et résultats

| Action | Résultat |
|---|---|
| Toucher un processus dans la liste | Ouvre sa fiche |
| Toucher un concept sur une fiche | Ouvre la [fiche du concept](/documentation/guide/fiche-concept) |
| Toucher un phénomène lié | Ouvre la [fiche du phénomène](/documentation/guide/phenomenes) |
| Toucher une notion | Rien : c'est un terme, pas un lien |
| Bouton « Tous les processus » | Retourne à la liste |
| Bouton « Exporter en Markdown » | Télécharge `sociologor-processus-<nom>.md` |
| Bouton « Partager » | Feuille de partage du système, ou lien copié |

## Cas particuliers

- Une fiche sans notion n'affiche pas la section **Notions associées**.
- « Déclassement » (processus, `/pr/declassement`) et « Déclassement
  social » (phénomène, `/p/declassement-social`) sont deux fiches
  distinctes, reliées l'une à l'autre par la section **Phénomènes liés** —
  ce ne sont ni un doublon ni une erreur.

## Erreurs possibles

Une adresse `/pr/<identifiant>` inconnue ouvre l'écran Introuvable, comme
pour une fiche phénomène, concept ou auteur inexistante.

## Navigation

Accueil → Processus sociaux → fiche d'un processus → fiche d'un phénomène,
d'un concept, ou de son auteur. Ou fiche d'un processus → « Tous les
processus » pour revenir à la liste.
