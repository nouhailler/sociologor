# Glossaire

## Termes de l'application

**Fiche**
Page consacrée à un auteur (ou à l'École de Francfort). *Dans l'application* :
l'écran `/a/<identifiant>` et son contenu.

**Domaine**
Thème sociologique regroupant des auteurs de référence. *Dans l'application* :
les 14 entrées de la grille de l'accueil.

**Concept**
Notion majeure d'un auteur, avec son année, une explication simple et un
exemple. *Dans l'application* : la section **Concepts majeurs** d'une fiche, et
la source de la notion du jour.

**Filiation**
Relation d'influence entre deux auteurs. *Dans l'application* : les sections
« Hérite de » et « A influencé », et les traits du graphe.

**Filiation directe / influence indirecte**
Deux qualités de lien dans le graphe : trait accentué pour un héritage
revendiqué, trait gris fin pour une influence indirecte ou une critique.

**Épingler**
Ajouter une fiche à l'écran **Mes fiches** au moyen de l'étoile ★. Ne
conditionne pas la disponibilité hors ligne.

**Notion du jour**
Concept mis en avant sur l'accueil, choisi d'après la date de l'appareil.

**Repères**
Le tableau d'état civil d'une fiche : nom, prénom, dates, nationalité, période,
courant.

## Termes techniques

**PWA (Progressive Web App)**
Application web installable sur l'écran d'accueil, capable de fonctionner sans
réseau.

**Service worker**
Petit programme installé par le navigateur, qui sert l'application depuis un
cache local. *Dans l'application* : il rend le mode hors connexion possible et
signale les mises à jour.

**Cache Storage**
Espace où le service worker range les fichiers de l'application.

**`localStorage`**
Espace de stockage du navigateur, propre à un site et à un appareil. *Dans
l'application* : y sont conservés les fiches épinglées et les deux réglages.

**Web Share API**
Interface du navigateur ouvrant la feuille de partage du système.

**Markdown**
Format de texte balisé, lisible tel quel. *Dans l'application* : format
d'export des fiches, et format de rédaction de cette documentation.
