# Sociologor

**La sociologie, reliée.** Quinze fiches — quatorze auteurs et l'École de
Francfort — leurs concepts expliqués simplement, leurs œuvres, et le graphe de
leurs filiations. Application web progressive, consultable hors connexion.

## Ce que c'est

Une PWA React + Vite, sans compte, sans serveur applicatif et sans collecte de
données. Tout le contenu — 15 fiches, 14 domaines, 38 concepts, 43 œuvres, et
la documentation utilisateur — est embarqué dans le bundle et mis en cache par
un service worker.

| Écran | Contenu |
|---|---|
| Accueil | Notion du jour (rotation sur les 38 concepts) et les 14 domaines |
| Domaine | Les auteurs de référence d'un thème |
| Fiche auteur | Repères, concepts, filiation, œuvres, citations, critiques, bibliographie |
| Graphe | 15 nœuds, 18 liens, filiation directe / influence indirecte |
| Recherche | 96 entrées, insensible aux accents, filtrable |
| Mes fiches | Les fiches épinglées, conservées sur l'appareil |
| Paramètres | Affichage, données locales, à propos |
| Documentation | 44 pages, sommaire en accordéon, recherche plein texte |

Export Markdown d'une fiche, partage de son lien, bandeaux d'état réseau et de
mise à jour, avertissement légal au premier lancement.

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
