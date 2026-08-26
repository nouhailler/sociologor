# Journal des versions

La version installée s'affiche dans **Paramètres → À propos**.

---

# Version 1.2.0

Date : 2026-08-25

Les 38 concepts deviennent des fiches à part entière.

## Nouveautés

- **Fiche concept** : nouvel écran à l'adresse `/c/<identifiant>`, avec dix
  rubriques — définition courte, définition détaillée, auteur associé, origine
  (œuvre, année, contexte), exemples concrets, œuvres où le concept apparaît,
  évolution historique, critiques, concepts associés, concepts opposés.
- **Navigation entre concepts** : la section *Voisinage* relie les 38 concepts
  par 104 paires — 68 associations, 36 oppositions —, toutes réciproques. Un
  concept n'est plus un bloc dans une fiche auteur, c'est une destination.
- **Critiques au niveau du concept** : jusqu'ici les critiques ne visaient que
  l'auteur. Chaque concept porte désormais les objections qui lui sont propres.
- **Export Markdown d'un concept** : `sociologor-concept-<nom>.md`, avec les
  dix rubriques.
- **Partage** d'une fiche concept, comme pour une fiche auteur.

## Changements

- Sur une fiche auteur, le titre de chaque concept est devenu un lien, et un
  renvoi « Fiche complète du concept » a été ajouté sous l'exemple.
- La **notion du jour** ouvre désormais la fiche du concept ; la fiche de
  l'auteur reste accessible par un bouton secondaire.
- Dans la **recherche**, un résultat de type Concept mène à la fiche du
  concept, et non plus à celle de son auteur. Auteurs et œuvres sont inchangés.
- L'**audit documentaire** gagne un huitième contrôle : complétude des dix
  rubriques, validité des renvois entre concepts, et absence de recopie de
  l'exemple de la fiche auteur.
- L'audit relit désormais aussi la page hôte et la configuration du service
  worker, et non plus les seuls fichiers de `src/` : un hôte externe déclaré
  ailleurs que dans le code de l'application ne passe plus inaperçu.
- Les **mentions légales** sont complètes : directeur de la publication,
  adresse de l'hébergeur et domaine de publication étaient jusqu'ici affichés
  comme `[À COMPLÉTER]`.

## Changements incompatibles

Aucun. Les adresses existantes restent valides.

## Modifications de paramètres

Aucune.

## Modifications de données

Aucune clé de stockage ajoutée ni modifiée. Chaque concept reçoit un
identifiant stable, et un fichier `concepts.js` porte la couche éditoriale des
38 fiches.

## Modifications de confidentialité

Aucune. Le contenu reste entièrement embarqué, sans requête réseau.

## Documentation mise à jour

Deux pages créées :
[Fiches concepts](/documentation/features/fiches-concepts) et
[Écran Fiche concept](/documentation/guide/fiche-concept).
Mises à jour :
[Navigation générale](/documentation/guide/navigation),
[Écran Fiche auteur](/documentation/guide/fiche-auteur),
[Fiches auteurs](/documentation/features/fiches-auteurs),
[Notion du jour](/documentation/features/notion-du-jour),
[Recherche](/documentation/features/recherche),
[Export Markdown](/documentation/features/export-markdown),
[Contenu embarqué](/documentation/reference/contenu),
[Limites connues](/documentation/reference/limites),
[FAQ](/documentation/faq/index).

## Limites connues à cette version

Un concept ne peut pas être épinglé dans « Mes fiches », et n'apparaît pas dans
le graphe, qui reste celui des filiations entre auteurs.

---

# Version 1.1.0

Date : 2026-08-25

Ajout des portraits et des influences hors corpus aux fiches auteurs.

## Nouveautés

- **Portraits** : six fiches — Comte, Marx, Tocqueville, Simmel, Durkheim,
  Weber — portent désormais une photographie ou une peinture du domaine public,
  légendée « Domaine public ». Les images sont embarquées (WebP, ~60 Ko au
  total) et précachées : aucun téléchargement à l'usage.
- **Monogrammes assumés** : les neuf autres fiches conservent le bloc aux
  initiales. Ce n'est plus un portrait manquant mais un choix documenté — les
  photographies des sociologues du XXᵉ siècle sont encore sous droits.
- **Influences hors corpus** : la section Filiation liste, en texte non
  cliquable, les 52 penseurs extérieurs aux 15 fiches — Hegel pour Marx,
  Montesquieu pour Tocqueville, Freud pour Elias et Francfort, Lévi-Strauss
  pour Bourdieu. Les cinq fiches sans prédécesseur dans le corpus cessent ainsi
  de paraître sans ascendance.
- L'**export Markdown** reprend les influences hors corpus. Le portrait n'y est
  pas joint.

## Changements

- Le bloc portrait n'affiche plus systématiquement des initiales : il affiche
  une image quand il en existe une de librement réutilisable.
- Le précache du service worker couvre désormais les fichiers `webp`.

## Changements incompatibles

Aucun.

## Modifications de paramètres

Aucune.

## Modifications de données

Aucune clé de stockage ajoutée ni modifiée. Les données des fiches gagnent deux
champs internes, `portrait` et `horsCorpus`.

## Modifications de confidentialité

Aucune. Les portraits sont livrés avec l'application ; aucune requête n'est
faite à Wikimedia Commons ni à aucun autre serveur d'images à l'exécution. La
liste des ressources externes reste inchangée : la seule est la police Inter.

## Documentation mise à jour

[Fiches auteurs](/documentation/features/fiches-auteurs),
[Écran Fiche auteur](/documentation/guide/fiche-auteur),
[Export Markdown](/documentation/features/export-markdown),
[Contenu embarqué](/documentation/reference/contenu),
[Limites connues](/documentation/reference/limites),
[Licences et crédits](/documentation/legal/licences-credits),
[FAQ](/documentation/faq/index).

## Limites connues à cette version

Neuf fiches sur quinze restent sans portrait photographique. Les influences
hors corpus sont indicatives et non exhaustives.

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
de synchronisation, le graphe à dimensions fixes et l'absence de campagne de
tests sur appareils réels.
