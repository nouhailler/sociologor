# Carte des courants

## Description

15 courants sociologiques, du positivisme à la sociologie pragmatique, rangés
en quatre périodes et reliés par 18 filiations. Chaque courant nomme les fiches
du corpus qui l'incarnent et les auteurs qui l'ont marqué sans avoir de fiche.

## Objectif

Répondre à une question que le [graphe des
filiations](/documentation/features/graphe-filiations) ne traite pas : d'où
vient une manière de faire de la sociologie, et ce qu'elle a produit.

Le graphe relie des **personnes** — qui a lu qui. La carte relie des
**courants** — de quoi procède le fonctionnalisme, ce que la théorie critique
doit à Marx et à Weber à la fois. Les deux ne se recouvrent pas : Weber n'a
jamais lu les interactionnistes, et sa sociologie compréhensive leur a pourtant
donné leur point de départ.

## Prérequis

Aucun.

## Comment l'utiliser

1. Ouvrez l'onglet **Graphe**, puis **Carte des courants →**.
2. Parcourez les quatre périodes, de haut en bas.
3. Dans un courant, touchez **↑ Vient de** ou **↓ A donné** pour sauter au
   courant voisin, qui se met en évidence.
4. Touchez un nom d'auteur pour ouvrir sa fiche.
5. Depuis une fiche auteur, l'étiquette du courant — ou le bouton **Situer dans
   les courants** — ramène à la carte, centrée sur le courant de cet auteur.

## Options

| Option | Effet |
|---|---|
| `?focus=<identifiant>` dans l'adresse | Fait défiler jusqu'à ce courant et l'entoure d'un liseré d'accent |

## Paramètres associés

Aucun.

## Données utilisées

Les 15 courants, leurs périodes, leurs filiations, leurs auteurs et leurs
inspirateurs, livrés avec l'application. Les filiations ne sont déclarées que
vers l'amont : la descendance est déduite, donc toujours cohérente dans les
deux sens.

## Résultat

L'écran [Carte des courants](/documentation/guide/courants).

## Fonctionnement hors connexion

Disponible sans connexion.

## Fonctionnement en ligne

Identique.

## Limites

- Un courant n'a pas d'écran propre : la carte les présente tous, l'un sous
  l'autre. Il n'y a pas d'adresse `/courants/<identifiant>`.
- Les courants ne sont pas indexés par la recherche.
- La carte est une simplification assumée : les quinze fiches ne couvrent pas
  l'ethnométhodologie, la sociologie des sciences ou les études de genre, qui
  n'y figurent donc pas comme courants.
- **École de Chicago** est le seul courant qu'aucune fiche du corpus n'incarne.
  Il est présent parce que Goffman et Becker en descendent : le retirer
  laisserait ces deux-là sans ascendance.

## Erreurs possibles

Aucune. Un `focus` inconnu est ignoré, la carte s'affiche depuis le début.

## Dépannage

Aucun cas connu.

## FAQ

- *Pourquoi Parsons et Merton partagent-ils un courant ?* Parce que le
  fonctionnalisme est le même courant chez les deux : Parsons en bâtit le
  système, Merton le critique de l'intérieur et le ramène à des théories de
  moyenne portée.
- *Pourquoi la carte n'est-elle pas dessinée comme le graphe ?* Une carte à
  coordonnées fixes ne tient pas sur un téléphone. La disposition verticale par
  période dit la même filiation, et se lit au doigt.
