# Changelog

Toutes les évolutions notables du projet sont documentées ici. Format
inspiré de [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/) ;
versionnage inspiré de [SemVer](https://semver.org/lang/fr/).

## [1.15.0] - 2026-09-03

### Ajouté
- **Méthodes sociologiques** : nouvelle rubrique, 27 méthodes d'enquête en
  9 catégories (observation, entretien, enquête, analyse statistique,
  ethnographie, analyse de discours, sources d'archives, méthodes mixtes…).
  Gabarit fixe en huit blocs — objectif, quand l'utiliser, données produites,
  avantages, limites, exemple célèbre, auteurs associés — pour répondre à la
  question que Sociologor ne couvrait pas encore : comment les sociologues
  savent ce qu'ils savent, pas seulement ce qu'ils en pensent (`/methodes`,
  `/me/:id`).
- Chaque méthode cite au moins un auteur du corpus (ex. Becker et Thomas pour
  l'observation participante) ou une figure hors corpus au même format que
  les domaines et les courants (Malinowski, Whyte, Milgram, Bertaux, Gallup,
  Kozinets, Sacks, Lawrence Stone…).

## [1.14.0] - 2026-09-03

Le numéro de version n'avait plus été relevé depuis la 1.13.0, alors que le
corpus a presque doublé entre-temps. Cette entrée couvre donc tout le travail
accumulé depuis, jusqu'à la nouvelle catégorie Concepts fondamentaux.

### Ajouté
- **Concepts fondamentaux** : nouvelle catégorie de 37 termes (Action
  sociale, Pouvoir, Institution, Solidarité, Rationalisation…), en
  6 catégories, indépendante d'un auteur unique — à la différence des
  concepts du corpus. Chaque entrée reste une définition courte et renvoie
  vers les fiches concepts ou processus déjà décrites quand le terme y est
  déjà couvert (`/fondamentaux`, `/f/:id`).
- **Mécanismes sociaux** : nouvel écran, 54 rouages reliant concepts,
  processus et phénomènes (`/mecanismes`, `/m/:id`).
- **Problématiques sociales** : nouvel écran, 12 enjeux avec leurs douze
  rubriques et leur propre graphe de liens, plus quatre types de ressources
  associées — théories, études, statistiques, politiques publiques
  (`/problematiques`, `/pb/:id`, `/pb/:id/graphe`).
- Écrans Sociologues et Concepts sociaux, ajoutés au menu.
- Bouton retour restauré sur trois écrans où il manquait (fiche concept,
  carte des courants, paramètres) ; corrige au passage un mauvais nom de
  prop qui l'empêchait silencieusement de s'afficher sur la fiche concept.
- Vingt et un auteurs supplémentaires au corpus depuis la 1.13.0 : Robert
  Castel, Alfred Schutz, le binôme Berger & Luckmann, Michel Foucault,
  Michel Crozier, Erhard Friedberg, Manuel Castells, Zygmunt Bauman, Niklas
  Luhmann, Nancy Fraser, Judith Butler, Donna Haraway, George Herbert Mead,
  Herbert Blumer, William Isaac Thomas, Alain Touraine, et Anthony Giddens.
- Portraits libres de droits pour dix-neuf sociologues, sourcés et
  crédités individuellement (Wikimedia Commons / Wikidata).

### Modifié
- Concepts de Durkheim, Simmel, École de Francfort, Parsons, Merton,
  Bourdieu, Goffman, Becker, Boudon, Boltanski, Tocqueville, Castel, Marx,
  Weber et Elias enrichis et approfondis.
- Habermas séparé en fiche propre, distincte de l'École de Francfort.
- Chiffres et captures d'écran du README remis à jour.

## [1.11.0] - 2026-08-27
### Ajouté
- « Forcer la mise à jour » dans les paramètres.

## [1.10.0] - 2026-08-27
### Ajouté
- Recherche étendue aux phénomènes sociaux.

## [1.9.0] - 2026-08-27
### Modifié
- Description des domaines étoffée d'un paragraphe de contexte.

## [1.8.0] - 2026-08-26
### Ajouté
- Menu ☰ des fonctionnalités, classées par catégorie.

## [1.7.0] - 2026-08-26
### Ajouté
- Écran Phénomènes sociaux, distinct des concepts qui les éclairent.

## [1.6.0] - 2026-08-26
### Ajouté
- Graphe des concepts, sous le graphe des filiations.

## [1.5.0] - 2026-08-26
### Ajouté
- Hiérarchie paradigme → courant → école → variante dans la carte des
  courants.

## [1.4.0] - 2026-08-26
### Ajouté
- Carte des courants, à côté du graphe des personnes.

## [1.3.0] - 2026-08-26
### Ajouté
- Domaines portés à trente-deux, chacun avec ses inspirateurs hors corpus.

## [1.2.0] - 2026-08-26
### Ajouté
- Portraits, fiches concepts détaillées, mentions légales complétées.

### Corrigé
- Filiations rendues réciproques ; voisinages de concepts contradictoires
  levés.

## [1.0.0] - 2026-08-24
### Ajouté
- Première version de la PWA Sociologor, en React + Vite, avec service
  worker.
