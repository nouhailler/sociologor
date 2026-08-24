# Limites connues

Liste honnête de ce que l'application ne fait pas, ou fait imparfaitement, dans
la version 1.0.0.

## Contenu

- Corpus **figé** : 15 fiches, 14 domaines, 38 concepts, 43 œuvres. Ni ajout,
  ni annotation, ni édition par l'utilisateur.
- Aucun portrait : un bloc aux initiales tient lieu d'illustration.
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
  24 résultats ; les domaines, critiques et bibliographies ne sont pas indexés.
- La notion du jour ne peut être ni choisie, ni rejouée.

## Graphe

- Dimensions fixes (880 × 790 px), positions codées dans les données : pas de
  zoom, pas de réorganisation, pas d'adaptation au petit écran autrement que
  par le défilement du cadre.
- Pas de parcours clavier nœud par nœud dédié ; l'équivalent textuel des liens
  se trouve dans la section **Filiation** de chaque fiche.

## Technique

- Sans JavaScript, l'application n'affiche rien.
- Hors connexion impossible tant que la première visite en ligne n'a pas
  abouti.
- En navigation privée ou avec le stockage bloqué, épinglages et réglages sont
  perdus à la fermeture.
- La police Inter est chargée depuis Google Fonts à la première visite ; en
  cas d'échec, l'application s'affiche avec la police système.
- Aucun test automatisé n'accompagne cette version. **À vérifier** : campagne
  de tests sur appareils réels, et vérification d'accessibilité au lecteur
  d'écran.

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
