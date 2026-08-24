# Journal des versions

La version installée s'affiche dans **Paramètres → À propos**.

---

# Version 1.0.0

Date : 2026-08-24

Première version publiée. Implémentation en React + Vite, avec service worker,
du prototype conçu dans Claude Design.

## Nouveautés

- 15 fiches (14 auteurs et l'École de Francfort), 14 domaines, 38 concepts,
  43 œuvres.
- Écran **Accueil** avec notion du jour tournante sur les 38 concepts.
- Écran **Domaine** : les auteurs de référence d'un thème.
- Écran **Fiche auteur** : repères, concepts expliqués, filiation, œuvres,
  citations, critiques, disciplines, bibliographie.
- **Graphe des filiations** : 15 nœuds, 18 liens, filiation directe et
  influence indirecte distinguées, centrage sur un auteur depuis sa fiche.
- **Recherche** locale sur 96 entrées, insensible aux accents, avec filtres
  Auteurs / Concepts / Œuvres.
- **Mes fiches** : épinglage des fiches, conservé sur l'appareil.
- **Export Markdown** d'une fiche et **partage** de son lien.
- **Paramètres** : affichage des citations, écran de démarrage, effacement des
  données locales, à propos.
- **Documentation intégrée**, consultable hors connexion, avec sommaire en
  accordéon, recherche plein texte et navigation précédent/suivant.
- **Avertissement légal au premier lancement**, mentions légales et politique
  de confidentialité accessibles en permanence.

## Améliorations par rapport au prototype

- Adresses réelles pour chaque écran : une fiche, un domaine ou une recherche
  peuvent être partagés ou mis en favori.
- Fiches épinglées et réglages réellement conservés d'une session à l'autre.
- Partage et export Markdown réellement fonctionnels — ils étaient simulés dans
  le prototype.
- Fonctionnement hors connexion effectif (service worker), avec bandeaux d'état
  réseau et de mise à jour.
- La notion du jour tourne sur les 38 concepts au lieu d'être fixée sur un
  seul.
- Les deux options de la maquette (citations, écran de démarrage) sont devenues
  des paramètres utilisateur persistants.

## Changements

- Le bloc portrait de la maquette, prévu pour une photographie, affiche les
  initiales de l'auteur : aucune image n'est fournie avec l'application.

## Changements incompatibles

Sans objet — première version.

## Modifications de paramètres

Introduction de `showCitations` et `startView`. Voir
[Référence des paramètres](/documentation/reference/parametres).

## Modifications de données

Introduction des clés `sociologor.favs.v1`, `sociologor.settings.v1`,
`legal_notice_acknowledged` et `legal_notice_acknowledged_version`. Voir
[Stockage local](/documentation/data/stockage-local).

## Modifications de confidentialité

Première publication de la [politique de
confidentialité](/documentation/legal/confidentialite). Aucune collecte, aucun
traceur ; une seule ressource externe, la police Inter.

## Documentation mise à jour

Documentation intégrale créée : 44 pages réparties en 13 chapitres.

## Limites connues à cette version

Voir [Limites connues](/documentation/reference/limites) — notamment l'absence
de synchronisation, le graphe à dimensions fixes et l'absence de tests
automatisés.
