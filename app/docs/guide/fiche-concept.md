# Écran Fiche concept

Tout ce que le corpus contient sur une notion, et les notions vers lesquelles
elle mène.

## Accès

- Depuis la notion du jour (bouton **Ouvrir la fiche du concept**), la
  recherche filtrée sur *Concepts*, le titre d'un concept dans une fiche
  auteur, ou une pastille de voisinage d'une autre fiche concept.
- Adresse `/c/<identifiant>` (par exemple `/c/habitus`).

## Éléments de l'interface, dans l'ordre

| Section | Contenu |
|---|---|
| En-tête | Nom du concept, année, auteur (cliquable), courant, domaines rattachés |
| **En une phrase** | La définition courte, sans jargon |
| **Définition détaillée** | 2 à 3 paragraphes |
| **Origine** | Œuvre et année d'apparition, puis contexte |
| **Exemples concrets** | 2 à 3 exemples de la vie ordinaire |
| **Œuvres où il apparaît** | Année et titre |
| **Évolution historique** | Périodes et faits, du plus ancien au plus récent |
| **Critiques** | Les objections adressées au concept |
| **Voisinage** | Concepts associés, concepts opposés, auteur associé — pastilles cliquables |
| Boutons de fin | *Exporter en Markdown*, *Voir la fiche de l'auteur* |

## Actions de l'en-tête

| Bouton | Résultat |
|---|---|
| Partage | Ouvre le partage du système, ou copie le lien — voir [Partage](/documentation/features/partage) |
| ← | Revient à l'écran précédent |

Il n'y a pas de bouton ★ : l'épinglage ne porte que sur les fiches auteurs.

## Actions de fin de fiche

| Bouton | Résultat |
|---|---|
| **Exporter en Markdown** | Télécharge `sociologor-concept-<nom>.md` — voir [Export Markdown](/documentation/features/export-markdown) |
| **Voir la fiche de …** | Ouvre la fiche de l'auteur qui signe le concept |

## Cas particuliers

- **Oppositions réciproques** : une opposition déclarée d'un côté s'affiche des
  deux. Depuis [Habitus](/c/habitus) on atteint
  [Individualisme méthodologique](/c/individualisme-methodologique), et
  réciproquement.
- **Premier exemple** : c'est celui qui figure déjà sur la fiche auteur. Il
  n'est écrit qu'une fois dans les données et repris ici en tête de liste.
- **Concept sans voisin** : le cas ne se présente pas dans ce corpus — chaque
  concept a au moins un associé et un opposé —, mais l'écran afficherait
  « Aucun concept lié dans ce corpus ».

## Erreurs possibles

Un identifiant inconnu affiche « Introuvable — Ce concept n'existe pas ».

## Navigation

Concept → concept voisin, ou concept → fiche de l'auteur.
