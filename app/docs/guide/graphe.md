# Écran Graphe

## Objectif

Montrer d'un seul coup d'œil qui a influencé qui, de Comte à Becker — et, plus
bas sur le même écran, quels concepts se répondent ou s'opposent.

## Accès

- Onglet **Graphe**, bouton « Voir le graphe → » de l'accueil, ou bouton
  « Situer dans le graphe » d'une fiche.
- Adresse `/graphe`, ou `/graphe?focus=<identifiant>` pour centrer sur un
  auteur.

## Éléments de l'interface

| Élément | Description |
|---|---|
| Cadre défilant — graphe des filiations | Zone de 880 × 790 px : 15 rectangles, un par auteur |
| Traits accentués | Filiation directe |
| Traits gris fins | Influence indirecte ou critique |
| Légende du graphe des filiations | Rappel des deux types de traits |
| Cadre défilant — graphe des concepts | Zone de 1088 × 1014 px, sous le précédent : 38 rectangles, un par concept, groupés en 15 blocs par auteur |
| Traits pleins | Concepts associés |
| Traits pointillés | Concepts opposés |
| Légende du graphe des concepts | Rappel des deux types de traits |

## Actions et résultats

| Action | Résultat |
|---|---|
| Toucher un nœud du graphe des filiations | Ouvre la fiche de l'auteur |
| Toucher un nœud du graphe des concepts | Ouvre la [fiche du concept](/documentation/guide/fiche-concept) |
| Bouton « Carte des courants → » | Ouvre la [carte des courants](/documentation/guide/courants), qui relie les courants et non les personnes |
| Faire défiler un cadre | Déplace la vue dans le graphe correspondant |
| Arriver depuis « Situer dans le graphe » | Le nœud visé est amené au centre du graphe des filiations et encadré en accent |

## Cas particuliers

Les deux graphes ont une taille fixe : sur mobile, ils se consultent en
faisant défiler leur cadre horizontalement et verticalement, chacun
indépendamment de l'autre. C'est une limite connue, voir [Limites
connues](/documentation/reference/limites).

## Erreurs possibles

Un `focus` inconnu est simplement ignoré : le graphe des filiations s'affiche
sans nœud mis en évidence. Le graphe des concepts ne lit pas ce paramètre.

## Navigation

Graphe → fiche auteur → retour au graphe par « Situer dans le graphe ». Ou
graphe → fiche concept, par un nœud du graphe des concepts.
