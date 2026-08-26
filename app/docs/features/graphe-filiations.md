# Graphe des filiations

## Description

Une carte des 15 fiches reliées par leurs influences : 19 liens, distingués en
filiation directe et influence indirecte ou critique.

Ce graphe relie des **personnes**. Pour la filiation des **courants** — d'où
vient le fonctionnalisme, ce que la théorie critique doit à Marx et à Weber —
voir la [carte des courants](/documentation/features/carte-courants).

## Objectif

Rendre visible ce qu'une liste d'auteurs ne montre pas : les lignées, les
héritages et les ruptures.

## Prérequis

Aucun.

## Comment l'utiliser

1. Ouvrez l'onglet **Graphe**.
2. Faites défiler le cadre pour explorer.
3. Touchez un nœud pour ouvrir la fiche correspondante.
4. Depuis une fiche, « Situer dans le graphe » centre la vue sur cet auteur.

## Options

| Option | Effet |
|---|---|
| `?focus=<identifiant>` dans l'adresse | Centre le graphe sur cet auteur et met son nœud en évidence |
| *Écran de démarrage* = **Graphe** | L'application s'ouvre directement sur le graphe |

## Paramètres associés

Voir [Tous les paramètres](/documentation/settings/index).

## Données utilisées

Les relations « Hérite de » et « A influencé » de chaque fiche, plus la
qualification directe / indirecte de six liens. Positions des nœuds fixées dans
les données.

Ces relations sont **réciproques** : déclarer que Boudon hérite de Weber revient
à déclarer que Weber a influencé Boudon. Le graphe et les deux fiches
concernées montrent donc toujours le même lien, quel que soit le côté où il a
été saisi.

## Résultat

L'écran [Graphe](/documentation/guide/graphe).

## Fonctionnement hors connexion

Disponible sans connexion.

## Fonctionnement en ligne

Identique.

## Limites

- Dimensions fixes (880 × 790 px) : sur petit écran, le graphe se consulte en
  faisant défiler le cadre. Pas de zoom, pas de réorganisation automatique.
- Le graphe n'est pas navigable au clavier nœud par nœud autrement que par la
  tabulation, et n'a pas d'équivalent textuel dédié — les mêmes liens figurent
  toutefois dans la section **Filiation** de chaque fiche.

## Erreurs possibles

Aucune. Un `focus` inconnu est ignoré.

## Dépannage

Aucun cas connu.

## FAQ

- *Pourquoi certains traits sont-ils gris ?* Ils marquent une influence
  indirecte ou une critique, non une filiation revendiquée.
