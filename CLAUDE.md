# Sociologor — contexte projet

PWA de consultation de 15 fiches de sociologie (14 auteurs + l'École de
Francfort), leurs concepts, leurs œuvres et leur graphe de filiations.
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

> Documentation : suivre DOCUMENTATION_SPEC.md. Une tâche n'est « done » que si
> la doc est à jour.

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
