# Sociologor — contexte projet

PWA de consultation de 34 fiches de sociologie (auteurs, binôme et école de
pensée), leurs concepts, leurs œuvres et leur graphe de filiations — plus les
phénomènes, processus, mécanismes et problématiques sociales qui s'y
rattachent, un glossaire de concepts fondamentaux indépendant des auteurs,
les méthodes d'enquête par lesquelles ce savoir est produit, les grandes
études qui l'ont fondé, et les institutions et groupes sociaux concrets où
ce savoir s'applique.
Français, hors connexion, sans compte ni collecte de données.

## Structure du dépôt

| Chemin | Rôle |
|---|---|
| `app/` | L'application React + Vite (le produit) |
| `app/docs/` | La documentation utilisateur, en Markdown, embarquée dans le bundle |
| `app/tests/` | Parcours navigateur Playwright |
| `app/scripts/doc-audit.mjs` | Audit documentaire, exécuté avant chaque build |
| `sociologor-pwa-prototype/` | Le bundle de maquettes Claude Design d'origine — **référence historique, ne pas modifier** |
| `DOCUMENTATION_SPEC.md` | Le standard documentaire appliqué au projet |

> **Documentation : NE PAS documenter pendant l'implémentation.** La doc se
> fait en fin de cycle, uniquement sur demande.

## Commandes

```bash
cd app
npm install
npm run dev          # serveur de développement (service worker désactivé)
npm run build        # audit documentaire puis build de production
npm run doc:audit    # audit seul
npm test             # parcours navigateur, desktop + mobile
npm run verify       # audit + build + tests
```

Le service worker n'est actif que sur le build de production : tester le mode
hors connexion avec `npm run build && npm run preview`.

## Règles de travail

### Données des fiches

`app/src/data/authors.js` a été **extrait mécaniquement** du prototype, sans
retranscription. Toute correction de contenu se fait dans ce fichier, puis se
répercute dans `app/docs/reference/contenu.md` si les chiffres changent.

### Modèle de données

Chaque type de fiche a son fichier dans `app/src/data/`, résolu et croisé
dans `app/src/data/index.js` — jamais en écrivant les deux sens d'un lien à la
main : le sens inverse se déduit toujours par lecture, sur le modèle déjà en
place (`getPhenomene` déduit `mecanismesLinks` en filtrant `mecanismes.js`
plutôt que l'inverse).

| Fichier | Rattaché à | Renvoie vers |
|---|---|---|
| `concepts.js` | un auteur (`authors.js`) | associés/opposés, problématiques |
| `phenomenes.js`, `processus.js` | rien (autonome) | concepts, notions libres |
| `mecanismes.js` | rien (autonome) | concepts, processus, phénomènes |
| `fondamentaux.js` | rien (autonome) | concepts, processus — définitions courtes uniquement |
| `methodes.js` | rien (autonome) | auteurs du corpus + inspirateurs hors corpus, à parts égales |
| `etudes-fondatrices.js` | rien (autonome) | concepts (jamais vide), méthodes, processus, auteurs/inspirateurs |
| `institutions.js` | rien (autonome) | fondamentaux + concepts (jamais vides), domaine optionnel |
| `groupes-sociaux.js` | rien (autonome) | fondamentaux + concepts (jamais vides), domaine optionnel, auteurs/inspirateurs |
| `problematiques.js` | rien (autonome) | tout le reste, plus théories/études/statistiques/politiques publiques |

`fondamentaux.js` porte le vocabulaire de base de la discipline (Action
sociale, Pouvoir, Institution…) : contrairement aux concepts du corpus, une
entrée n'est jamais signée par un auteur unique. Quand un terme recoupe une
fiche concept ou processus déjà écrite, l'entrée reste courte et renvoie vers
elle plutôt que de la dupliquer.

`methodes.js` porte le gabarit le plus contraint du modèle : huit rubriques
nommées (`objectif`, `quand`, `donnees`, `avantages`, `limites`,
`exempleCelebre`, puis `auteurs`/`inspirateurs`) plutôt qu'un simple
`d`/`detail`. `objectif` joue le rôle de `d` ailleurs — carte de liste,
recherche, bandeau « En une phrase ». `auteurs` (ids de `authors.js`,
cliquables) et `inspirateurs` (texte libre « Nom — apport ») suivent la
convention déjà en place dans `domains.js`/`courants.js` ; une entrée doit
toujours porter l'un des deux, jamais aucun.

`etudes-fondatrices.js` (Hawthorne, Milgram, Asylums…) ne pas confondre avec
`etudes.js` : ce dernier ne sert que de ressource aux fiches problématique
(schéma `{ t, auteur, annee, methode, d, detail, theories }`, jamais de lien
vers les concepts), tandis qu'`etudes-fondatrices.js` est une rubrique à
part entière, jamais rattachée à une problématique, dont `concepts` ne doit
jamais être vide — `getConcept()` en déduit `etudesLinks` par lecture
inverse, exactement comme `problematiquesLinks`, pour rendre possible la
relation concepts → études.

`institutions.js` (Famille, École, Prison…) relie chaque institution
concrète aux mécanismes déjà décrits dans `fondamentaux.js` — norme sociale,
rôle social, socialisation, pouvoir, contrôle social, reproduction sociale,
déviance : elle ne les redéfinit pas, elle montre laquelle chaque
institution mobilise et comment. Six des dix-neuf recoupent un domaine déjà
décrit dans `domains.js` (Famille, École/Éducation, Religion, État/
Politique…) : le champ optionnel `domaine` renvoie alors vers ce domaine
plutôt que de dupliquer son contenu — `domains.js` reste un point d'entrée
vers les auteurs, cette rubrique porte le mécanisme.

`groupes-sociaux.js` (Groupe primaire, Classe sociale, Réseau social…) suit
le même principe, avec en plus `auteurs`/`inspirateurs` comme `methodes.js`.
Deux entrées — `communaute` et `organisation` — recoupent des fiches déjà
décrites au même niveau d'abstraction dans `fondamentaux.js` : elles restent
en version courte, renvoyant vers la fiche complète plutôt que de la
dupliquer.

### Documentation

Toute fonctionnalité visible se documente dans `app/docs/`. Le sommaire vit
dans `app/src/docs/manifest.js` : ajouter une page, c'est ajouter une entrée au
manifeste **et** le fichier `.md` correspondant — `npm run doc:audit` échoue
sinon, et le build avec lui.

L'audit vérifie aussi : liens internes, hôtes externes joints par le code
nommés dans les textes légaux, clés de stockage documentées, sections légales
non vides, absence de secrets, intégrité des fiches concepts, et absence de
voisinage contradictoire — une paire de concepts ne peut pas être à la fois
associée et opposée. Le relevé des hôtes couvre `src/`, `index.html` et
`vite.config.js`, antislashs neutralisés : un hôte caché dans une expression
régulière de cache y est visible. Ces règles ont été validées en les cassant
volontairement une fois chacune.

### Système légal

- Contenu unique dans `app/src/legal/content.js`, rendu par `LegalSections`
  aux deux endroits où il apparaît : la modale du premier lancement et le
  chapitre « Informations légales » de la documentation. **Ne jamais recopier
  un paragraphe légal dans un écran.**
- Acceptation stockée sous `legal_notice_acknowledged` (+ `_version`).
  « Effacer mes données locales » n'y touche pas volontairement.
- Version de la notice : `LEGAL_NOTICE_VERSION` dans le même fichier. La
  re-demande sur montée de version est écrite mais appelée en mode non strict
  (voir `shouldShowNotice`) : monter la version ne remet pas la modale devant
  ceux qui ont déjà lu.
- Rejouer le premier lancement : bouton `[dev] Réinitialiser les mentions
  légales` dans l'écran Paramètres, visible en développement seulement.
- Champs `[À COMPLÉTER]` : ils s'affichent en évidence à l'écran. Ne pas les
  remplir au jugé — l'éditeur est connu (Swinux), l'hébergeur est Netlify, le
  reste doit être confirmé.

### Design system

Nocturne, copié dans `app/src/styles/nocturne.css`. Prendre couleurs, polices,
espacements, rayons et ombres dans ses variables. Boutons primaires en
contour, jamais en aplat ; accent en trait et en lueur, jamais en fond large.
