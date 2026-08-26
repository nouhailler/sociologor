# Carte des courants

## Description

15 courants sociologiques, du positivisme à la sociologie pragmatique, rangés
en quatre périodes et reliés par 18 filiations. Chaque courant nomme les fiches
du corpus qui l'incarnent et les auteurs qui l'ont marqué sans avoir de fiche.

Chaque courant porte aussi un **niveau** — paradigme, courant, école ou
variante — qui le situe sur une échelle de généralité, indépendante des
périodes et des filiations.

## Objectif

Répondre à une question que le [graphe des
filiations](/documentation/features/graphe-filiations) ne traite pas : d'où
vient une manière de faire de la sociologie, et ce qu'elle a produit.

Le graphe relie des **personnes** — qui a lu qui. La carte relie des
**courants** — de quoi procède le fonctionnalisme, ce que la théorie critique
doit à Marx et à Weber à la fois. Les deux ne se recouvrent pas : Weber n'a
jamais lu les interactionnistes, et sa sociologie compréhensive leur a pourtant
donné leur point de départ.

Le niveau répond à une troisième question, que ni le graphe ni la filiation ne
traitent : à quelle échelle se situe une manière de faire de la sociologie —
une tradition autonome (paradigme), une branche à l'intérieur d'un paradigme
(courant), un foyer institutionnel (école), ou une théorie précise appliquée à
un objet circonscrit (variante). C'est un axe de classement, pas une
filiation : la théorie critique doit beaucoup à Marx et à Weber sans leur être
subordonnée dans la hiérarchie, elle reste un paradigme à part entière.

## Prérequis

Aucun.

## Comment l'utiliser

1. Ouvrez l'onglet **Graphe**, puis **Carte des courants →**.
2. Parcourez les quatre périodes, de haut en bas.
3. Repérez le niveau d'un courant à son étiquette (PARADIGME, COURANT, ÉCOLE,
   VARIANTE) ; touchez **Fait partie de**, quand elle est présente, pour
   remonter au nœud dont il relève dans la hiérarchie.
4. Dans un courant, touchez **↑ Vient de** ou **↓ A donné** pour sauter au
   courant voisin, qui se met en évidence.
5. Touchez un nom d'auteur pour ouvrir sa fiche.
6. Depuis une fiche auteur, l'étiquette du courant — ou le bouton **Situer dans
   les courants** — ramène à la carte, centrée sur le courant de cet auteur.

## Options

| Option | Effet |
|---|---|
| `?focus=<identifiant>` dans l'adresse | Fait défiler jusqu'à ce courant et l'entoure d'un liseré d'accent |

## Paramètres associés

Aucun.

## Données utilisées

Les 15 courants, leurs périodes, leurs filiations, leur niveau et leur parent
hiérarchique, leurs auteurs et leurs inspirateurs, livrés avec l'application.
Les filiations et les parents hiérarchiques ne sont déclarés que vers l'amont :
la descendance est déduite, donc toujours cohérente dans les deux sens.

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
- Le niveau hiérarchique est un choix éditorial, pas une classification
  académique consensuelle. Neuf courants sur quinze sont classés paradigmes :
  les quinze fiches ont été choisies pour représenter des traditions
  distinctes plutôt que des variantes d'un petit nombre d'écoles, la
  hiérarchie en porte la trace.

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
