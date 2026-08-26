# Graphe des concepts

## Description

Une seconde carte, sous le [graphe des filiations](/documentation/features/graphe-filiations)
et sur le même écran : les 38 concepts, groupés par auteur, reliés par 100
voisinages — 64 associations, 36 oppositions.

Ce graphe relie des **concepts**, pas des personnes ni des courants. Pour qui
a influencé qui, voir le graphe des filiations ; pour d'où vient une manière
de faire de la sociologie, voir la [carte des
courants](/documentation/features/carte-courants).

## Objectif

Donner une vue d'ensemble du réseau de concepts que la section *Voisinage* de
chaque [fiche concept](/documentation/guide/fiche-concept) ne montre qu'un
concept à la fois.

## Prérequis

Aucun.

## Comment l'utiliser

1. Ouvrez l'onglet **Graphe**, puis faites défiler jusqu'à **Graphe des
   concepts**, sous le graphe des filiations.
2. Repérez le nom de l'auteur en tête de chacun des quinze groupes.
3. Touchez un concept pour ouvrir sa fiche.

## Options

Aucune.

## Paramètres associés

Aucun.

## Données utilisées

Les 38 concepts et leurs voisinages, livrés avec l'application. La position de
chaque nœud est calculée — groupée par auteur, cinq colonnes de trois
rangées — et non éditoriale comme pour les quinze auteurs du graphe des
filiations. Les arêtes sont les mêmes que celles listées dans la section
*Voisinage* d'une fiche concept, symétrisées de la même façon.

## Résultat

Une section de l'écran [Graphe](/documentation/guide/graphe).

## Fonctionnement hors connexion

Disponible sans connexion.

## Fonctionnement en ligne

Identique.

## Limites

- Dimensions fixes (1088 × 1014 px) : sur petit écran, ce graphe se consulte
  en faisant défiler le cadre, comme le graphe des filiations juste au-dessus.
  Pas de zoom, pas de réorganisation automatique.
- Pas de `?focus=` pour ce graphe : contrairement au graphe des filiations et
  à la carte des courants, aucune fiche ne renvoie à un concept précis dans
  cette carte.
- Avec 100 arêtes pour 38 nœuds, le centre du cadre est visuellement dense.
  C'est un choix assumé : montrer la densité réelle du réseau plutôt que la
  simplifier.

## Erreurs possibles

Aucune.

## Dépannage

Aucun cas connu.

## FAQ

- *Pourquoi ce graphe n'a-t-il pas sa propre adresse, comme la carte des
  courants ?* Il vit sur l'écran Graphe, comme une seconde carte du même
  écran plutôt que comme un écran distinct — la carte des courants, elle,
  répond à une question assez différente (la filiation entre manières de
  faire de la sociologie) pour mériter sa propre adresse.
- *Pourquoi un trait pointillé ?* Il marque une opposition entre deux
  concepts, à distinguer du trait plein qui marque une association — voir la
  légende sous le graphe.
