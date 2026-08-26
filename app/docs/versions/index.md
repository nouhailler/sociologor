# Journal des versions

La version installée s'affiche dans **Paramètres → À propos**.

---

# Version 1.8.0

Date : 2026-08-26

Un menu ☰, pour atteindre tout le reste sans que la navigation principale ne
grossisse.

## Nouveautés

- **Menu des fonctionnalités**, ouvert depuis un bouton ☰ dans l'en-tête,
  présent sur tous les écrans. Trois catégories : **Explorer le corpus**
  (Accueil, Graphe, Carte des courants, Phénomènes sociaux), **Retrouver**
  (Recherche, Mes fiches), **Aide et réglages** (Documentation, Paramètres).
  L'entrée de l'écran courant, s'il y en a une, est mise en évidence.
- C'est le premier accès direct à la **carte des courants** et aux
  **phénomènes sociaux** qui ne passe pas par un autre écran — jusqu'ici,
  chacun n'avait qu'un bouton enfoui (respectivement sur l'écran Graphe et
  sur l'écran Accueil).
- Le menu se ferme au choix d'une entrée, au clic sur le fond, sur la croix,
  ou à la touche **Échap** — avec un piège de focus et un retour du focus au
  bouton ☰ à la fermeture, sur le modèle déjà éprouvé de l'avertissement
  légal du premier lancement.

## Changements

- La navigation principale — rail et barre d'onglets — ne change pas : elle
  reste à cinq entrées. Le menu s'y ajoute plutôt que de la remplacer.

## Changements incompatibles

Aucun.

## Modifications de paramètres

Aucune.

## Modifications de données

Aucune.

## Modifications de confidentialité

Aucune. Le contenu reste entièrement embarqué, sans requête réseau.

## Documentation mise à jour

[Navigation générale](/documentation/guide/navigation), avec la table des
adresses complétée des deux adresses des phénomènes sociaux, omises par
inadvertance lors de leur introduction.

## Limites connues à cette version

Le menu n'est pas une seconde recherche : il ne classe que les écrans, pas
les fiches. Une adresse de fiche (auteur, concept, domaine, phénomène) ne
figure jamais dans le menu, qui reste volontairement limité aux points
d'entrée.

---

# Version 1.7.0

Date : 2026-08-26

Un nouvel écran : les phénomènes sociaux, distincts des concepts qui les
éclairent.

## Nouveautés

- **Phénomènes sociaux** : nouvel écran à l'adresse `/phenomenes`, avec une
  fiche par phénomène à `/p/<identifiant>`. 28 phénomènes — du chômage à la
  gentrification, en passant par le cyberharcèlement et l'éco-anxiété —
  rangés en 12 catégories.
- **Concepts et notions, jamais mélangés** : chaque phénomène cite les
  concepts du corpus qui l'éclairent (cliquables, 50 liens sur 25 des 38
  concepts) et les notions qui n'en ont pas (texte libre, 144 au total) —
  même convention que les domaines et la carte des courants, appliquée ici à
  la distinction entre outil théorique et fait social concret.
- **Dimensions** : chaque phénomène porte 2 à 6 étiquettes parmi 14 —
  économique, sociale, urbaine, politique publique, culturelle,
  démographique, genre, travail, famille, santé, numérique,
  environnementale, éducative, juridique.
- **Export Markdown** et **partage** d'une fiche phénomène, comme pour une
  fiche auteur ou concept.
- Bouton d'entrée sur l'écran **Accueil**, entre la notion du jour et les
  domaines.

## Changements

- L'**audit documentaire** gagne un douzième contrôle : catégorie connue,
  dimensions connues et non vides, concepts existants dans le corpus,
  notions bien formées, et surtout — un terme qui a une fiche concept ne peut
  pas apparaître comme notion, ce qui garantirait la confusion que cet écran
  cherche justement à éviter.

## Changements incompatibles

Aucun.

## Modifications de paramètres

Aucune.

## Modifications de données

Aucune clé de stockage ajoutée ni modifiée. Un fichier `phenomenes.js` porte
les 28 phénomènes, leurs 12 catégories et leurs 14 dimensions.

## Modifications de confidentialité

Aucune. Le contenu reste entièrement embarqué, sans requête réseau.

## Documentation mise à jour

Deux pages créées :
[Phénomènes sociaux](/documentation/features/phenomenes-sociaux) et
[Écran Phénomènes sociaux](/documentation/guide/phenomenes).
Mises à jour :
[Écran Accueil](/documentation/guide/accueil),
[Contenu embarqué](/documentation/reference/contenu),
[Limites connues](/documentation/reference/limites).

## Limites connues à cette version

28 phénomènes, pas un inventaire exhaustif de la discipline. Trois d'entre
eux n'ont aucun concept du corpus qui les éclaire directement. Théories,
auteurs hors corpus, méthodes et données n'y figurent pas — un chantier à
part entière, pas une extension de celui-ci. Les phénomènes ne sont pas
indexés par la recherche, et ne peuvent pas être épinglés dans « Mes
fiches ».

---

# Version 1.6.0

Date : 2026-08-26

Une seconde carte sur l'écran Graphe : celle des concepts, sous celle des
personnes.

## Nouveautés

- **Graphe des concepts**, sur l'écran `/graphe`, sous le graphe des
  filiations : les 38 concepts, groupés par auteur, reliés par 100 arêtes —
  64 associations, 36 oppositions — en trait plein ou pointillé. Touchez un
  concept pour ouvrir sa fiche.
- Les positions des 38 nœuds sont **calculées**, groupées par auteur, plutôt
  que fixées à la main comme pour les quinze auteurs du graphe des filiations
  — trente-huit positions éditoriales auraient été un travail disproportionné
  pour un graphe qui se déduit entièrement des voisinages déjà déclarés dans
  `concepts.js`.

## Changements

- Aucun changement sur le graphe des filiations lui-même : la nouveauté
  s'ajoute en dessous, sur le même écran.

## Changements incompatibles

Aucun.

## Modifications de paramètres

Aucune.

## Modifications de données

Aucune clé de stockage ajoutée ni modifiée, aucune nouvelle donnée éditoriale :
le graphe des concepts se déduit entièrement des 38 concepts et de leurs
voisinages, déjà livrés depuis la version 1.2.0.

## Modifications de confidentialité

Aucune. Le contenu reste entièrement embarqué, sans requête réseau.

## Documentation mise à jour

Une page créée : [Graphe des
concepts](/documentation/features/graphe-concepts). Mises à jour :
[Graphe des filiations](/documentation/features/graphe-filiations),
[Écran Graphe](/documentation/guide/graphe),
[Contenu embarqué](/documentation/reference/contenu),
[Limites connues](/documentation/reference/limites).

## Limites connues à cette version

Le graphe des concepts n'a pas de `?focus=` : aucune fiche n'y renvoie sur un
concept précis. Sa densité au centre du cadre — 100 arêtes pour 38 nœuds —
n'est pas atténuée.

---

# Version 1.5.0

Date : 2026-08-26

La carte des courants gagne un niveau de lecture : à quelle échelle se situe
chaque manière de faire de la sociologie.

## Nouveautés

- **Hiérarchie des courants**, quatre niveaux — paradigme, courant, école,
  variante — affichés sur chaque carte par une étiquette et, sauf pour les
  paradigmes, un renvoi **Fait partie de** vers le nœud dont il relève. Neuf
  paradigmes (positivisme, matérialisme historique, sociologie des formes,
  sociologie compréhensive, théorie critique, fonctionnalisme,
  interactionnisme symbolique, structuralisme génétique, sociologie
  pragmatique), quatre courants (sociologie politique comparée, holisme
  durkheimien, sociologie historique des processus, individualisme
  méthodologique), une école (École de Chicago) et une variante (théorie de
  l'étiquetage).
- Cette hiérarchie est un **axe de classement distinct de la filiation**
  (`↑ Vient de` / `↓ A donné`), qui reste inchangée. Un paradigme peut devoir
  beaucoup à un autre sans lui être subordonné : la théorie critique doit à
  Marx et à Weber, elle reste un paradigme à part entière.

## Changements

- L'**audit documentaire** vérifie désormais que chaque courant porte un
  niveau connu, qu'un paradigme n'a jamais de parent hiérarchique et que les
  trois autres niveaux en ont toujours un, que ce parent existe, et que la
  hiérarchie ne boucle pas.

## Changements incompatibles

Aucun. Les quinze courants existants et leurs adresses `?focus=` restent
inchangés.

## Modifications de paramètres

Aucune.

## Modifications de données

Aucune clé de stockage ajoutée ni modifiée. `courants.js` gagne deux champs,
`niveau` et `parent`, et l'export `NIVEAUX` qui les nomme.

## Modifications de confidentialité

Aucune. Le contenu reste entièrement embarqué, sans requête réseau.

## Documentation mise à jour

[Carte des courants](/documentation/features/carte-courants),
[Écran Carte des courants](/documentation/guide/courants).

## Limites connues à cette version

Le classement en quatre niveaux reste un choix éditorial parmi d'autres
découpages possibles de la discipline ; il ne prétend pas trancher les débats
de classification de la sociologie elle-même.

---

# Version 1.4.0

Date : 2026-08-26

Une seconde carte : celle des courants, à côté de celle des personnes.

## Nouveautés

- **Carte des courants**, à l'adresse `/courants` : 15 courants — positivisme,
  matérialisme historique, sociologie compréhensive, holisme durkheimien,
  sociologie des formes, sociologie politique comparée, École de Chicago,
  théorie critique, sociologie historique des processus, fonctionnalisme,
  interactionnisme symbolique, théorie de l'étiquetage, structuralisme
  génétique, individualisme méthodologique, sociologie pragmatique — rangés en
  quatre périodes et reliés par 18 filiations.
- **Filiation entre courants**, distincte de la filiation entre personnes. Le
  graphe dit qui a lu qui ; la carte dit de quoi procède une manière de faire
  de la sociologie. Weber n'a pas lu les interactionnistes, sa sociologie
  compréhensive leur a pourtant donné leur point de départ.
- Chaque courant nomme **les fiches du corpus qui l'incarnent** et **les
  auteurs marquants qui n'en ont pas** — Mead et Blumer pour l'interactionnisme,
  Park et Hughes pour Chicago, Lemert pour l'étiquetage.
- **Renvois croisés** : `↑ Vient de` et `↓ A donné` sautent d'un courant à
  l'autre, `?focus=` met un courant en évidence.

## Changements

- Sur une **fiche auteur**, l'étiquette du courant devient un lien vers la
  carte, et un bouton *Situer dans les courants* rejoint *Situer dans le
  graphe*.
- L'écran **Graphe** porte un bouton *Carte des courants →*.
- La carte des courants garde l'onglet **Graphe** surligné : c'est la seconde
  carte de l'application, pas une sixième section. La barre d'onglets mobile
  reste à cinq entrées.
- L'**audit documentaire** gagne un onzième contrôle : période connue,
  rubriques remplies, parents existants, et surtout — chaque fiche du corpus
  appartient à un courant et un seul, sans quoi le renvoi de son en-tête
  n'aurait pas de destination.

## Changements incompatibles

Aucun.

## Modifications de paramètres

Aucune.

## Modifications de données

Aucune clé de stockage ajoutée ni modifiée. Un fichier `courants.js` porte les
15 courants, leurs périodes et leurs filiations. Comme pour les filiations
d'auteurs, seule la remontée vers l'amont est déclarée : la descendance est
déduite.

## Modifications de confidentialité

Aucune. Le contenu reste entièrement embarqué, sans requête réseau.

## Documentation mise à jour

Deux pages créées :
[Carte des courants](/documentation/features/carte-courants) et
[Écran Carte des courants](/documentation/guide/courants).
Mises à jour :
[Navigation générale](/documentation/guide/navigation),
[Écran Graphe](/documentation/guide/graphe),
[Écran Fiche auteur](/documentation/guide/fiche-auteur),
[Graphe des filiations](/documentation/features/graphe-filiations),
[Contenu embarqué](/documentation/reference/contenu),
[Limites connues](/documentation/reference/limites),
[Hors connexion](/documentation/offline/index).

## Limites connues à cette version

Un courant n'a pas d'écran propre, et les courants ne sont pas indexés par la
recherche. La carte ne montre que les courants que les quinze fiches
permettent de porter : ni ethnométhodologie, ni sociologie des sciences, ni
études de genre.

---

# Version 1.3.0

Date : 2026-08-26

Les domaines passent de 14 à 32, et chacun nomme ses fondateurs.

## Nouveautés

- **Dix-huit domaines ajoutés** : sociologie générale, économique, des
  professions, de la consommation, du genre, de la jeunesse, du vieillissement,
  de l'immigration, du crime, des mouvements sociaux, des médias, du numérique,
  des loisirs, de la santé, des émotions, rurale, des mobilités et de
  l'environnement. Avec les quatorze d'origine, l'application en compte 32.
- **Inspirateurs hors corpus** : chaque domaine nomme trois auteurs qui l'ont
  fondé ou renouvelé sans avoir de fiche ici — 96 au total, de Le Play à
  Zuboff, avec en une ligne ce qu'on leur doit. Ils s'affichent en bas de
  l'écran du domaine, en texte non cliquable, comme les influences hors corpus
  d'une fiche auteur. Sans eux, une douzaine de domaines paraîtraient sans
  fondateurs : les quinze fiches ne portent pas la sociologie du genre, du
  numérique ou de l'environnement.
- **Huit familles** : Fondations, Institutions, Travail et économie, Inégalités
  et identités, Normes et conflits, Cultures et médias, Corps santé et
  émotions, Territoires et environnement. Elles donnent l'ordre de l'accueil et
  le sous-titre de chaque écran de domaine.

## Changements

- L'**accueil** ne présente plus une grille unique mais une section par
  famille, chacune avec sa phrase de présentation.
- Un domaine porte désormais deux noms : un libellé court sur sa carte
  (« Genre »), son nom complet en titre d'écran (« Sociologie du genre »).
  « Sociologie urbaine » et « Sociologie politique » deviennent « Urbaine » et
  « Politique » sur leur carte ; « Corps et mœurs » devient « Corps ».
- Le compteur d'auteurs s'accorde : la sociologie rurale et les mobilités
  n'ont qu'un auteur de référence dans le corpus.
- **Famille** gagne Parsons, et **Corps** gagne Boltanski — deux rattachements
  qui manquaient.
- L'**audit documentaire** gagne un dixième contrôle : famille connue, nom
  complet, phrase de présentation, auteurs existants, au moins un auteur ou un
  inspirateur, inspirateurs correctement formés, et aucune famille vide.

## Changements incompatibles

Aucun. Les quatorze adresses de domaine existantes restent valides.

## Modifications de paramètres

Aucune.

## Modifications de données

Aucune clé de stockage ajoutée ni modifiée. Un fichier `domains.js` porte les
dix-huit domaines ajoutés, les huit familles et les inspirateurs des 32.

## Modifications de confidentialité

Aucune. Le contenu reste entièrement embarqué, sans requête réseau.

## Documentation mise à jour

[Entrée par domaines](/documentation/features/domaines),
[Écran Domaine](/documentation/guide/domaine),
[Écran Accueil](/documentation/guide/accueil),
[Contenu embarqué](/documentation/reference/contenu),
[Premier lancement](/documentation/getting-started/premier-lancement),
[Présentation](/documentation/getting-started/presentation),
[Données affichées](/documentation/data/donnees),
[Limites connues](/documentation/reference/limites),
[FAQ](/documentation/faq/index).

## Limites connues à cette version

Les inspirateurs hors corpus sont des noms, pas des fiches : ni œuvre, ni
bibliographie, ni lien. Les domaines restent absents de la recherche.

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
  par 100 paires — 64 associations, 36 oppositions —, toutes réciproques. Un
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
- **Filiations réciproques** : le graphe se construisait sur les seules
  influences déclarées « en aval », les fiches affichaient l'amont et l'aval
  déclarés. Deux relations n'existaient donc que d'un côté — la fiche Boudon
  annonçait Weber en amont sans que le graphe trace le lien, et le graphe
  reliait Tocqueville à Durkheim sans que la fiche Durkheim le mentionne. La
  réciproque est désormais déduite : le graphe passe à **19 liens** et dit
  exactement ce que les sections Filiation annoncent.
- **Voisinages de concepts sans contradiction** : cinq paires étaient déclarées
  à la fois associées et opposées, et le même concept apparaissait dans les deux
  listes d'une fiche. Chaque paire a été tranchée — anomie et solidarité
  organique sont opposées, la mise en scène de soi et le rôle intériorisé aussi,
  la fonction latente reste associée au système social et s'oppose désormais à
  l'individualisme méthodologique. Le corpus compte 100 paires au lieu de 104.
- L'**audit documentaire** gagne un huitième contrôle : complétude des dix
  rubriques, validité des renvois entre concepts, et absence de recopie de
  l'exemple de la fiche auteur. Un neuvième refuse une paire déclarée à la fois
  associée et opposée.
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
