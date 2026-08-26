# Limites connues

Liste honnête de ce que l'application ne fait pas, ou fait imparfaitement, dans
la version 1.8.0.

## Contenu

- Corpus **figé** : 15 fiches auteurs, 38 fiches concepts, 32 domaines,
  28 phénomènes sociaux, 43 œuvres. Ni ajout, ni annotation, ni édition par
  l'utilisateur.
- Les inspirateurs hors corpus d'un domaine sont des noms, pas des fiches :
  aucun lien, aucune œuvre, aucune bibliographie ne leur est attachée.
- Les concepts et les phénomènes ne peuvent pas être épinglés dans « Mes
  fiches » : l'épinglage ne porte que sur les auteurs.
- Les 28 phénomènes sont une sélection, pas un inventaire exhaustif de la
  discipline. Trois d'entre eux — étalement urbain, éco-anxiété, migration
  climatique — n'ont aucun concept du corpus qui les éclaire directement.
  Théories, auteurs hors corpus, méthodes et données ne figurent pas sur leur
  fiche : voir [Phénomènes
  sociaux](/documentation/features/phenomenes-sociaux).
- Le graphe des concepts n'a pas de fiche auteur ou concept qui y renvoie par
  un `focus` : contrairement au graphe des filiations et à la carte des
  courants, on n'y arrive que depuis l'écran Graphe lui-même.
- Un courant n'a pas d'écran propre ni d'adresse à lui : la carte les présente
  tous, l'un sous l'autre.
- La carte des courants ne prétend pas à l'exhaustivité : elle ne montre que
  les courants que les quinze fiches permettent de porter.
- Portraits : 6 fiches sur 15 seulement. Les 9 autres portent un monogramme
  d'initiales, faute d'image libre de droits.
- Les influences hors corpus sont indicatives, non exhaustives, et sans lien
  vers une fiche.
- Français uniquement.
- Les fiches sont des synthèses pédagogiques, sans appareil de notes ni
  références paginées.

## Fonctionnalités

- **Aucune synchronisation** entre appareils, et aucune sauvegarde des fiches
  épinglées.
- La liste des fiches épinglées ne peut être ni exportée, ni importée, ni
  triée, ni classée.
- Export Markdown **fiche par fiche** ; pas d'export global, pas de PDF.
- Recherche par sous-chaîne, sans tolérance aux fautes de frappe, plafonnée à
  24 résultats ; les domaines, phénomènes, critiques et bibliographies ne sont
  pas indexés.
- La notion du jour ne peut être ni choisie, ni rejouée.

## Graphe

- Deux cadres à dimensions fixes — graphe des filiations (880 × 790 px),
  positions éditoriales, et graphe des concepts (1088 × 1014 px), positions
  calculées et groupées par auteur — sans zoom ni réorganisation, chacun
  consulté par défilement sur petit écran.
- Le graphe des concepts affiche ses 100 arêtes sans réduire la densité au
  centre du cadre : c'est un choix assumé plutôt qu'un défaut à corriger.
- Pas de parcours clavier nœud par nœud dédié ; l'équivalent textuel des liens
  se trouve dans la section **Filiation** de chaque fiche auteur et
  **Voisinage** de chaque fiche concept.

## Technique

- Sans JavaScript, l'application n'affiche rien.
- Hors connexion impossible tant que la première visite en ligne n'a pas
  abouti.
- En navigation privée ou avec le stockage bloqué, épinglages et réglages sont
  perdus à la fermeture.
- La police Inter est chargée depuis Google Fonts à la première visite ; en
  cas d'échec, l'application s'affiche avec la police système.
- Les parcours principaux — navigation, fiches, recherche, graphe, export,
  documentation, hors connexion, avertissement légal — sont couverts par des
  tests navigateur automatisés, joués en desktop et en mobile avant chaque
  livraison. **À vérifier** : campagne de tests sur appareils réels, et
  vérification d'accessibilité au lecteur d'écran.

## Accessibilité

- Contrastes issus du design system Nocturne : l'accent est réservé aux titres,
  icônes et éléments d'interface, jamais au corps de texte.
- Cibles tactiles de 44 px et plus dans la barre d'onglets et le sommaire de la
  documentation.
- **À vérifier** : parcours complet au lecteur d'écran, et navigation clavier
  dans le graphe.

## Voir aussi

- [Compatibilité](/documentation/reference/compatibilite)
- [Journal des versions](/documentation/versions/index)
