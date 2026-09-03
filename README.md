# Sociologor

**La sociologie, reliée.** Trente-quatre fiches — auteurs, binôme et école de
pensée — leurs concepts expliqués simplement, leurs œuvres, et le graphe de
leurs filiations. Application web progressive, consultable hors connexion.

## Ce que c'est

Une PWA React + Vite, sans compte, sans serveur applicatif et sans collecte de
données. Tout le contenu — 34 fiches, 32 domaines, 382 concepts, 37 concepts
fondamentaux, 30 courants, 39 phénomènes sociaux, 10 processus sociaux,
27 méthodes sociologiques, 15 études fondatrices, 54 mécanismes sociaux,
12 problématiques sociales (avec leurs théories, études, statistiques et
politiques publiques), et la documentation utilisateur — est embarqué dans
le bundle et mis en cache par un service worker.

| Écran | Contenu |
|---|---|
| Accueil | Notion du jour (rotation sur les 382 concepts) et les 32 domaines, en 8 familles |
| Domaine | Les auteurs de référence d'un thème, avec un paragraphe de contexte |
| Fiche auteur | Repères, concepts, filiation, œuvres, citations, critiques, bibliographie |
| Graphe | Filiations entre les 34 fiches, et réseau des 382 concepts |
| Carte des courants | 30 courants — paradigme, courant, école, variante — reliés par leurs filiations |
| Concepts sociaux | Les 382 concepts du corpus, groupés par auteur |
| Concepts fondamentaux | 37 termes de base de la discipline (action, norme, pouvoir…), en 6 catégories, renvoyant vers les fiches concepts et processus qui les développent |
| Phénomènes sociaux | 39 faits sociaux concrets, chacun relié aux concepts du corpus qui l'éclairent |
| Processus sociaux | 10 trajectoires en étapes, reliées aux phénomènes qu'elles produisent |
| Méthodes sociologiques | 27 méthodes d'enquête, en 9 catégories — objectif, quand l'utiliser, données produites, avantages, limites, exemple célèbre, auteurs associés |
| Études fondatrices | 15 grandes enquêtes (Hawthorne, Milgram, Asylums, La Distinction…), en 6 catégories, reliées aux concepts qu'elles mobilisent — et réciproquement, depuis la fiche concept |
| Mécanismes sociaux | 54 rouages qui expliquent comment un phénomène se produit |
| Problématiques sociales | 12 enjeux qui font débat, avec leur graphe de liens vers théories, études, statistiques et politiques publiques |
| Recherche | Plus de 880 entrées, insensible aux accents, filtrable par type |
| Mes fiches | Les fiches épinglées, conservées sur l'appareil |
| Paramètres | Affichage, données locales, mise à jour forcée, à propos |
| Documentation | 53 pages, sommaire en accordéon, recherche plein texte |
| Menu ☰ | Toutes les fonctionnalités, classées par catégorie |

Export Markdown d'une fiche, partage de son lien, bouton retour sur chaque
écran secondaire, bandeaux d'état réseau et de mise à jour, avertissement
légal au premier lancement.

## Aperçu

<table>
<tr>
<td width="25%"><img src="screenshots/accueil.png" alt="Écran Accueil : notion du jour et domaines classés par famille" width="100%"></td>
<td width="25%"><img src="screenshots/graphe.png" alt="Graphe des filiations entre auteurs, et graphe des concepts" width="100%"></td>
<td width="25%"><img src="screenshots/carte-courants.png" alt="Carte des courants, du positivisme au pragmatisme" width="100%"></td>
<td width="25%"><img src="screenshots/phenomenes-sociaux.png" alt="Liste des phénomènes sociaux, classés par catégorie" width="100%"></td>
</tr>
<tr>
<td align="center">Accueil</td>
<td align="center">Graphe</td>
<td align="center">Carte des courants</td>
<td align="center">Phénomènes sociaux</td>
</tr>
</table>

## Démarrer

```bash
cd app
npm install
npm run dev
```

Le service worker n'est actif que sur le build de production :

```bash
npm run build && npm run preview
```

## Vérifier

```bash
npm run verify   # audit documentaire + build + parcours navigateur
```

L'audit documentaire (`npm run doc:audit`) fait échouer le build si une page du
sommaire n'a pas de contenu, si un lien interne est cassé, si le code joint un
hôte externe absent des textes légaux, ou si une clé de stockage n'est pas
documentée.

## Déploiement

Le build produit `app/dist/`, avec un `404.html` identique à `index.html` pour
que les adresses profondes (`/a/bourdieu`) fonctionnent sur un hébergeur
statique. Hébergement prévu : Netlify. HTTPS obligatoire — sans quoi le service
worker ne s'installe pas.

## Origine

L'interface a été maquettée dans Claude Design ; le bundle d'origine est
conservé tel quel dans `sociologor-pwa-prototype/` à titre de référence.
Le contenu des fiches a été extrait mécaniquement de ce prototype vers
`app/src/data/authors.js`.

> Note : `sociologor-pwa-prototype/project/github.md` est un fichier du bundle
> de maquettes et n'a pas été mis à jour ; ses chiffres (12 fiches) datent d'une
> version antérieure du prototype. Les chiffres qui font foi sont ceux du
> présent dépôt.

## Documentation

La documentation utilisateur vit dans `app/docs/` et se lit dans
l'application, à l'écran **Documentation**. Le standard qu'elle applique est
`DOCUMENTATION_SPEC.md`.

## Licence et mentions

Éditeur : Swinux — Canton de Vaud, Suisse — contact@swinux.ch.
Voir les mentions légales dans l'application.
