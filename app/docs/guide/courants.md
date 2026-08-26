# Écran Carte des courants

## Objectif

Situer les quinze fiches dans les courants dont elles procèdent, et montrer ce
que chaque courant a produit.

## Accès

- Onglet **Graphe**, puis le bouton **Carte des courants →**.
- Depuis une [fiche auteur](/documentation/guide/fiche-auteur) : l'étiquette du
  courant, en haut, ou le bouton **Situer dans les courants**, en bas.
- Adresse `/courants` — ou `/courants?focus=fonctionnalisme` pour arriver sur un
  courant précis.

## Éléments de l'interface

| Élément | Description |
|---|---|
| Titre et texte d'entrée | Rappellent la différence avec le graphe : des courants, pas des personnes |
| Titre de période | XIXᵉ siècle, première moitié du XXᵉ, seconde moitié, tournant contemporain — avec une phrase de présentation |
| Carte d'un courant | Nom, définition en une phrase, paragraphe de contexte |
| Étiquette de niveau | PARADIGME, COURANT, ÉCOLE ou VARIANTE, à côté du nom |
| **Fait partie de** | Le nœud dont ce courant relève dans la hiérarchie — absent pour un paradigme, cliquable sinon |
| **↑ Vient de** | Les courants dont celui-ci procède, cliquables |
| **↓ A donné** | Les courants qui en descendent, cliquables |
| **Fiches du corpus** | Les auteurs qui incarnent le courant, avec leurs dates — cliquables |
| **Hors corpus** | Les auteurs marquants sans fiche, en texte non cliquable |

## Actions et résultats

| Action | Résultat |
|---|---|
| Toucher **↑ Vient de**, **↓ A donné** ou **Fait partie de** | Fait défiler jusqu'au courant visé et l'entoure d'un liseré d'accent |
| Toucher un auteur | Ouvre sa [fiche](/documentation/guide/fiche-auteur) |
| Toucher un nom hors corpus | Rien : ce sont des noms, pas des liens |
| **graphe des filiations** dans le texte d'entrée | Ouvre le [graphe](/documentation/guide/graphe) |

## Cas particuliers

- **École de Chicago** n'a aucune fiche du corpus : la carte l'indique
  explicitement — « Aucune fiche n'incarne ce courant dans le corpus » — et le
  courant reste présent parce que l'interactionnisme et l'étiquetage en
  descendent.
- **Fonctionnalisme** porte deux fiches, Parsons et Merton. C'est le seul cas.
- Un courant sans descendance n'affiche pas de section **A donné** ; un courant
  fondateur n'affiche pas de section **Vient de**.
- Un **paradigme** n'affiche jamais de **Fait partie de** : c'est le seul
  niveau sans parent hiérarchique. Les trois autres niveaux en affichent
  toujours un.
- **Fait partie de** et **Vient de** peuvent diverger : la théorie critique
  vient du matérialisme historique et de la sociologie compréhensive, mais
  reste un paradigme sans **Fait partie de** — la hiérarchie classe, la
  filiation raconte une histoire, et les deux ne coïncident pas toujours.
- L'onglet **Graphe** reste surligné sur cet écran : c'est la seconde carte de
  l'application, pas une section à part.

## Erreurs possibles

Aucune. Un `focus` inconnu est ignoré et la carte s'ouvre depuis le début.

## Navigation

Carte des courants → fiche auteur → retour à la carte par l'étiquette du
courant. Ou carte → graphe des filiations, pour passer des courants aux
personnes.
