# Écran Phénomènes sociaux

## Objectif

Situer un fait social concret — le chômage, la gentrification — parmi les
concepts théoriques du corpus qui l'éclairent.

## Accès

- Bouton **N phénomènes sociaux — du chômage à la gentrification →** sur
  l'écran Accueil.
- Adresse `/phenomenes` pour la liste, `/p/<identifiant>` pour une fiche —
  par exemple `/p/chomage`.

## Éléments de l'interface

### Liste (`/phenomenes`)

| Élément | Description |
|---|---|
| Texte d'entrée | Rappelle la distinction entre concept (outil théorique) et phénomène (fait concret) |
| Catégories | 12 sections titrées — Travail et emploi, Ville et logement, Famille et parcours de vie, École et éducation, Inégalités et classes sociales, Genre et sexualité, Migration et altérité, Numérique et médias, Déviance et contrôle social, Santé et corps, Politique et mobilisations, Environnement — chacune avec sa phrase de présentation |
| Carte d'un phénomène | Nom et nombre de concepts du corpus liés |

### Fiche (`/p/<identifiant>`)

| Élément | Description |
|---|---|
| Étiquette **Phénomène** | Distingue la fiche d'une fiche concept ou auteur |
| Étiquettes de dimension | Les angles sous lesquels le phénomène se lit — économique, sociale, urbaine, etc. |
| **En une phrase** | Définition courte |
| **Ce que la sociologie en dit** | Paragraphe de contexte, avec les auteurs et concepts qui éclairent le phénomène |
| **Concepts du corpus** | Les concepts liés, cliquables, avec leur auteur |
| **Notions associées** | Des termes liés au phénomène, sans fiche dans l'application, en texte non cliquable |
| Bouton **Exporter en Markdown** | Télécharge la fiche |
| Bouton **Partager** | Partage le lien de la fiche |

## Actions et résultats

| Action | Résultat |
|---|---|
| Toucher un phénomène dans la liste | Ouvre sa fiche |
| Toucher un concept sur une fiche | Ouvre la [fiche du concept](/documentation/guide/fiche-concept) |
| Toucher une notion | Rien : c'est un terme, pas un lien |
| Bouton « Tous les phénomènes » | Retourne à la liste |
| Bouton « Exporter en Markdown » | Télécharge `sociologor-phenomene-<nom>.md` |
| Bouton « Partager » | Feuille de partage du système, ou lien copié |

## Cas particuliers

- Un phénomène sans concept du corpus l'indique explicitement — « Aucun
  concept des quinze fiches ne porte directement sur ce phénomène » — plutôt
  que d'afficher une section vide. C'est le cas de l'étalement urbain, des
  inégalités territoriales, de l'éco-anxiété et de la migration climatique.
- Une fiche sans notion n'affiche pas la section **Notions associées**.

## Erreurs possibles

Une adresse `/p/<identifiant>` inconnue ouvre l'écran Introuvable, comme pour
une fiche auteur ou concept inexistante.

## Navigation

Accueil → Phénomènes sociaux → fiche d'un phénomène → fiche d'un concept →
fiche de son auteur. Ou fiche d'un phénomène → « Tous les phénomènes » pour
revenir à la liste.
