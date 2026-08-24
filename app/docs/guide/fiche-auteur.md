# Écran Fiche auteur

C'est l'écran principal de l'application : tout ce que le corpus contient sur
un auteur.

## Accès

- Depuis un domaine, la recherche, le graphe, « Mes fiches », la notion du jour
  ou une pastille de filiation d'une autre fiche.
- Adresse `/a/<identifiant>` (par exemple `/a/bourdieu`).

## Éléments de l'interface, dans l'ordre

| Section | Contenu |
|---|---|
| En-tête | Initiales, nom, dates, nationalité, période, courant, domaines rattachés |
| **En une phrase** | Le résumé de l'apport de l'auteur |
| **Repères** | Nom, prénom, dates, nationalité, période, courant |
| **Concepts majeurs** | Pour chaque concept : titre, année, explication simple, exemple concret |
| **Filiation** | « Hérite de » et « A influencé » — pastilles cliquables |
| **Œuvres principales** | Année et titre |
| **Citations** | Citation et source — masquable dans les paramètres |
| **Critiques** | Les objections adressées à l'auteur |
| **Liens avec d'autres disciplines** | Ce que l'auteur doit aux autres savoirs |
| **Bibliographie critique** | Ouvrages secondaires sur l'auteur |
| Boutons de fin | *Exporter en Markdown*, *Situer dans le graphe* |

## Actions de l'en-tête

| Bouton | Résultat |
|---|---|
| ★ | Épingle la fiche dans « Mes fiches » (l'étoile se remplit) ou l'en retire ; un message le confirme |
| Partage | Ouvre le partage du système, ou copie le lien — voir [Partage](/documentation/features/partage) |
| ← | Revient à l'écran précédent |

## Actions de fin de fiche

| Bouton | Résultat |
|---|---|
| **Exporter en Markdown** | Télécharge `sociologor-<nom>.md` — voir [Export Markdown](/documentation/features/export-markdown) |
| **Situer dans le graphe** | Ouvre le graphe centré sur cet auteur, son nœud mis en évidence |

## Cas particuliers

- **Portrait** : aucune photographie n'est fournie ; un bloc aux initiales de
  l'auteur tient ce rôle.
- **Filiation vide** : si un auteur n'a pas de prédécesseur dans le corpus
  (Comte, Marx, Weber, Simmel, Tocqueville) ou pas de successeur (Becker,
  Boudon, Boltanski), la mention « Aucune fiche liée dans ce corpus » s'affiche.
- **Citations masquées** : si le paramètre correspondant est désactivé, la
  section n'apparaît pas et l'export ne la contient pas.
- **École de Francfort** : la fiche porte sur un collectif ; le champ Prénom
  vaut « — » et le champ Nom « Institut für Sozialforschung ».

## Erreurs possibles

Un identifiant inconnu affiche « Introuvable — Cette fiche n'existe pas ».

## Navigation

Fiche → autre fiche par la filiation, ou graphe centré sur l'auteur.
