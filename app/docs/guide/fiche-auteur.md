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
| En-tête | Portrait (photographie ou monogramme), nom, dates, nationalité, période, courant — cliquable, il mène à la [carte des courants](/documentation/guide/courants) —, domaines rattachés |
| **En une phrase** | Le résumé de l'apport de l'auteur |
| **Repères** | Nom, prénom, dates, nationalité, période, courant |
| **Concepts majeurs** | Pour chaque concept : titre cliquable, année, explication simple, exemple concret, et un lien « Fiche complète du concept » |
| **Filiation** | « Hérite de » et « A influencé » — pastilles cliquables — puis « Influences hors corpus », en texte non cliquable |
| **Œuvres principales** | Année et titre |
| **Citations** | Citation et source — masquable dans les paramètres |
| **Critiques** | Les objections adressées à l'auteur |
| **Liens avec d'autres disciplines** | Ce que l'auteur doit aux autres savoirs |
| **Bibliographie critique** | Ouvrages secondaires sur l'auteur |
| Boutons de fin | *Exporter en Markdown*, *Situer dans le graphe*, *Situer dans les courants* |

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

- **Portrait** : six fiches (Comte, Marx, Tocqueville, Simmel, Durkheim,
  Weber) portent une photographie du domaine public, légendée « Domaine
  public ». Les neuf autres portent un monogramme d'initiales, faute d'image
  librement réutilisable. Voir
  [Fiches auteurs](/documentation/features/fiches-auteurs).
- **Filiation vide** : si un auteur n'a pas de prédécesseur dans le corpus
  (Comte, Marx, Weber, Simmel, Tocqueville) ou pas de successeur (Becker,
  Boudon, Boltanski), la mention « Aucune fiche liée dans ce corpus » s'affiche.
  La liste « Influences hors corpus », juste en dessous, reste renseignée : elle
  nomme les penseurs extérieurs aux 15 fiches.
- **Citations masquées** : si le paramètre correspondant est désactivé, la
  section n'apparaît pas et l'export ne la contient pas.
- **École de Francfort** : la fiche porte sur un collectif ; le champ Prénom
  vaut « — » et le champ Nom « Institut für Sozialforschung ».

- **Concepts** : le titre de chaque concept et le lien « Fiche complète du
  concept » mènent à sa fiche dédiée, qui développe dix rubriques. Voir
  [Écran Fiche concept](/documentation/guide/fiche-concept).

## Erreurs possibles

Un identifiant inconnu affiche « Introuvable — Cette fiche n'existe pas ».

## Navigation

Fiche → autre fiche par la filiation, fiche → concept par les concepts
majeurs, ou graphe centré sur l'auteur.
