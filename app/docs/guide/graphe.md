# Écran Graphe

## Objectif

Montrer d'un seul coup d'œil qui a influencé qui, de Comte à Becker.

## Accès

- Onglet **Graphe**, bouton « Voir le graphe → » de l'accueil, ou bouton
  « Situer dans le graphe » d'une fiche.
- Adresse `/graphe`, ou `/graphe?focus=<identifiant>` pour centrer sur un
  auteur.

## Éléments de l'interface

| Élément | Description |
|---|---|
| Cadre défilant | Zone de 880 × 790 px contenant le graphe |
| Nœuds | 15 rectangles : nom de l'auteur et courant |
| Traits accentués | Filiation directe |
| Traits gris fins | Influence indirecte ou critique |
| Légende | Rappel des deux types de traits |

## Actions et résultats

| Action | Résultat |
|---|---|
| Toucher un nœud | Ouvre la fiche de l'auteur |
| Faire défiler le cadre | Déplace la vue dans le graphe |
| Arriver depuis « Situer dans le graphe » | Le nœud visé est amené au centre et encadré en accent |

## Cas particuliers

Le graphe a une taille fixe : sur mobile, il se consulte en faisant défiler le
cadre horizontalement et verticalement. C'est une limite connue, voir
[Limites connues](/documentation/reference/limites).

## Erreurs possibles

Un `focus` inconnu est simplement ignoré : le graphe s'affiche sans nœud mis en
évidence.

## Navigation

Graphe → fiche auteur → retour au graphe par « Situer dans le graphe ».
