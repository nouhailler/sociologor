import { DOMAINS as DOMAINS_BASE, AUTHORS, EXTRA, EXTRA_EDGES } from './authors.js';
import { DOMAINS_ADDED, DOMAIN_EXTRA, FAMILIES } from './domains.js';
import { COURANTS as COURANTS_BASE, PERIODES, NIVEAUX } from './courants.js';
import { portraitUrl } from './portraits.js';
import { CONCEPTS } from './concepts.js';
import { CATEGORIES_PHENOMENES, DIMENSIONS_PHENOMENES, PHENOMENES } from './phenomenes.js';
import { CATEGORIES_PROCESSUS, PROCESSUS } from './processus.js';

export { AUTHORS, EXTRA, EXTRA_EDGES, FAMILIES };

export const AUTHOR_IDS = Object.keys(AUTHORS);
export const AUTHOR_COUNT = AUTHOR_IDS.length;

/**
 * Les trente-deux domaines, rangés par famille : les quatorze du prototype et
 * les dix-huit ajoutés, chacun complété de sa famille et de ses inspirateurs
 * hors corpus. L'ordre est celui de l'accueil — un domaine sans famille
 * déclarée n'apparaîtrait nulle part, ce que l'audit refuse.
 */
const DOMAIN_ORDER = Object.keys(DOMAIN_EXTRA);

export const DOMAINS = FAMILIES.flatMap((f) =>
  [...DOMAINS_BASE, ...DOMAINS_ADDED]
    .filter((d) => DOMAIN_EXTRA[d.id]?.famille === f.id)
    // Dans une famille, l'ordre est celui de `DOMAIN_EXTRA`, pas celui des deux
    // fichiers sources : sans quoi les quatorze domaines d'origine passeraient
    // systématiquement devant les dix-huit ajoutés, et « Générale » se
    // retrouverait en fin de famille Fondations.
    .sort((a, b) => DOMAIN_ORDER.indexOf(a.id) - DOMAIN_ORDER.indexOf(b.id))
    .map((d) => ({ ...d, ...DOMAIN_EXTRA[d.id], familleT: f.t })),
);

export const DOMAIN_COUNT = DOMAINS.length;

/** Les mêmes domaines groupés, pour l'accueil. */
export const DOMAIN_FAMILIES = FAMILIES.map((f) => ({
  ...f,
  domains: DOMAINS.filter((d) => d.famille === f.id),
}));

/**
 * Filiations réciproques. « A a influencé B » et « B descend de A » sont la
 * même arête vue par ses deux bouts : elle est déduite ici plutôt que recopiée
 * dans les deux fiches. Recopiée, il manquait un côté — Boudon déclarait Weber
 * en amont sans que Weber le porte en aval, et le graphe ne traçait pas le
 * lien que la fiche annonçait.
 */
const FILIATION = (() => {
  const out = {};
  AUTHOR_IDS.forEach((id) => {
    out[id] = { up: new Set(), down: new Set() };
  });
  AUTHOR_IDS.forEach((id) => {
    (AUTHORS[id].up || []).forEach((from) => {
      if (!out[from]) return;
      out[id].up.add(from);
      out[from].down.add(id);
    });
    (AUTHORS[id].down || []).forEach((to) => {
      if (!out[to]) return;
      out[id].down.add(to);
      out[to].up.add(id);
    });
  });
  return out;
})();

/** Ordre du corpus, pour que deux fiches listent leurs filiations pareil. */
const inCorpusOrder = (ids) => [...ids].sort((a, b) => AUTHOR_IDS.indexOf(a) - AUTHOR_IDS.indexOf(b));

/** Fiche complète : auteur + champs complémentaires + repères + domaines rattachés. */
export function getAuthor(id) {
  const a = AUTHORS[id];
  if (!a) return null;
  const extra = EXTRA[id] || {};
  return {
    ...a,
    ...extra,
    // Portrait résolu ici plutôt que dans les données : l'URL n'existe qu'après
    // le passage de Vite. `portraitSrc` à null = la fiche assume son monogramme.
    portraitSrc: portraitUrl(extra.portrait),
    reperes: [
      { k: 'Nom', v: extra.nom || a.name },
      { k: 'Prénom', v: extra.prenom || '—' },
      { k: 'Dates', v: a.dates },
      { k: 'Nationalité', v: a.nat },
      { k: 'Période', v: a.periode },
      { k: 'Courant', v: a.courant },
    ],
    domainTags: DOMAINS.filter((d) => d.a.includes(id)).slice(0, 3).map((d) => d.t),
    upLinks: inCorpusOrder(FILIATION[id].up).map((x) => ({ id: x, label: AUTHORS[x].name })),
    downLinks: inCorpusOrder(FILIATION[id].down).map((x) => ({ id: x, label: AUTHORS[x].name })),
  };
}

export function getDomain(id) {
  const d = DOMAINS.find((x) => x.id === id);
  if (!d) return null;
  return {
    ...d,
    authors: d.a.filter((x) => AUTHORS[x]).map((x) => AUTHORS[x]),
    inspirateurs: d.inspirateurs || [],
  };
}

/* — Courants — */

export { PERIODES, NIVEAUX };

/**
 * Carte des courants. `vientDe` est déclaré vers l'amont seulement ; la
 * descendance est déduite ici, comme les filiations entre auteurs — un courant
 * déclaré héritier apparaît toujours dans les héritiers de son parent.
 *
 * `parent` porte le même traitement pour la hiérarchie paradigme → courant →
 * école → variante : c'est un axe de classement distinct de `vientDe`, résolu
 * ici en `parentLink` pour le fil d'ariane.
 */
export const COURANTS = (() => {
  const byId = new Map(COURANTS_BASE.map((c) => [c.id, c]));
  const enfants = new Map(COURANTS_BASE.map((c) => [c.id, []]));
  COURANTS_BASE.forEach((c) => {
    (c.vientDe || []).forEach((parent) => {
      if (enfants.has(parent)) enfants.get(parent).push(c.id);
    });
  });

  const label = (id) => ({ id, t: byId.get(id).t });
  const niveauById = new Map(NIVEAUX.map((n) => [n.id, n]));

  return COURANTS_BASE.map((c) => ({
    ...c,
    periodeT: PERIODES.find((p) => p.id === c.periode)?.t || '',
    niveauT: niveauById.get(c.niveau)?.t || '',
    auteursLinks: (c.auteurs || [])
      .filter((a) => AUTHORS[a])
      .map((a) => ({ id: a, name: AUTHORS[a].name, initials: AUTHORS[a].initials, dates: AUTHORS[a].dates })),
    parentsLinks: (c.vientDe || []).filter((p) => byId.has(p)).map(label),
    enfantsLinks: enfants.get(c.id).map(label),
    parentLink: c.parent && byId.has(c.parent) ? label(c.parent) : null,
  }));
})();

export const COURANT_COUNT = COURANTS.length;

/** Les courants groupés par période, dans l'ordre de la carte. */
export const COURANT_PERIODES = PERIODES.map((p) => ({
  ...p,
  courants: COURANTS.filter((c) => c.periode === p.id),
}));

/** Le courant d'une fiche auteur, pour renvoyer de la fiche vers la carte. */
export const courantOf = (authorId) => COURANTS.find((c) => (c.auteurs || []).includes(authorId)) || null;

/* — Concepts — */

/**
 * Table plate des concepts : `authors.js` porte le concept de base, l'auteur
 * qui le signe se déduit de la fiche qui le contient.
 */
export const CONCEPT_BASE = (() => {
  const out = {};
  Object.values(AUTHORS).forEach((a) => {
    a.concepts.forEach((c) => {
      out[c.id] = { ...c, authorId: a.id, authorName: a.name, courant: a.courant };
    });
  });
  return out;
})();

export const CONCEPT_IDS = Object.keys(CONCEPT_BASE);
export const CONCEPT_COUNT = CONCEPT_IDS.length;

/**
 * Voisinages symétrisés. « A est opposé à B » implique « B est opposé à A » :
 * la réciproque est calculée ici plutôt que recopiée dans `concepts.js`, pour
 * qu'un lien déclaré d'un seul côté apparaisse toujours des deux.
 */
const NEIGHBOURS = (() => {
  const out = {};
  CONCEPT_IDS.forEach((id) => {
    out[id] = { associes: new Set(), opposes: new Set() };
  });
  Object.entries(CONCEPTS).forEach(([id, c]) => {
    ['associes', 'opposes'].forEach((k) => {
      (c[k] || []).forEach((other) => {
        if (!out[id] || !out[other]) return;
        out[id][k].add(other);
        out[other][k].add(id);
      });
    });
  });
  return out;
})();

/** Pastille de navigation vers un concept. */
const conceptLink = (id) => ({
  id,
  label: CONCEPT_BASE[id].t,
  authorName: CONCEPT_BASE[id].authorName,
});

/**
 * Fiche concept complète : base extraite du prototype + couche éditoriale +
 * auteur associé + voisinages résolus. `exemples` place l'exemple de la fiche
 * auteur en tête, puis les exemples supplémentaires de `concepts.js`.
 */
export function getConcept(id) {
  const base = CONCEPT_BASE[id];
  if (!base) return null;
  const extra = CONCEPTS[id] || {};
  const author = AUTHORS[base.authorId];
  return {
    ...base,
    ...extra,
    auteur: { id: author.id, name: author.name, dates: author.dates, courant: author.courant },
    exemples: [base.ex, ...(extra.exemples || [])],
    associesLinks: [...NEIGHBOURS[id].associes].map(conceptLink),
    opposesLinks: [...NEIGHBOURS[id].opposes].map(conceptLink),
    domainTags: DOMAINS.filter((d) => d.a.includes(base.authorId)).slice(0, 3).map((d) => d.t),
  };
}

/** Concepts d'un auteur, dans l'ordre de sa fiche. */
export const conceptsOf = (authorId) =>
  (AUTHORS[authorId]?.concepts || []).map((c) => ({ ...c, authorId }));

/* — Phénomènes sociaux — */

export { CATEGORIES_PHENOMENES, DIMENSIONS_PHENOMENES };
export const PHENOMENE_COUNT = PHENOMENES.length;

/** Les phénomènes groupés par catégorie, dans l'ordre de la liste. */
export const PHENOMENE_CATEGORIES = CATEGORIES_PHENOMENES.map((cat) => ({
  ...cat,
  phenomenes: PHENOMENES.filter((p) => p.categorie === cat.id),
}));

/** Fiche phénomène complète : dimensions résolues, concepts cliquables, notions telles quelles. */
export function getPhenomene(id) {
  const p = PHENOMENES.find((x) => x.id === id);
  if (!p) return null;
  const categorie = CATEGORIES_PHENOMENES.find((c) => c.id === p.categorie);
  return {
    ...p,
    categorieT: categorie?.t || '',
    dimensionsT: (p.dimensions || [])
      .map((d) => DIMENSIONS_PHENOMENES.find((x) => x.id === d)?.t)
      .filter(Boolean),
    conceptsLinks: (p.concepts || [])
      .filter((c) => CONCEPT_BASE[c])
      .map((c) => ({ id: c, label: CONCEPT_BASE[c].t, authorName: CONCEPT_BASE[c].authorName })),
    notions: p.notions || [],
  };
}

/* — Processus sociaux — */

export { CATEGORIES_PROCESSUS };
export const PROCESSUS_COUNT = PROCESSUS.length;

/** Les processus groupés par catégorie, dans l'ordre de la liste. */
export const PROCESSUS_CATEGORIES = CATEGORIES_PROCESSUS.map((cat) => ({
  ...cat,
  processus: PROCESSUS.filter((p) => p.categorie === cat.id),
}));

/** Fiche processus complète : étapes telles quelles, concepts et phénomènes cliquables. */
export function getProcessus(id) {
  const p = PROCESSUS.find((x) => x.id === id);
  if (!p) return null;
  const categorie = CATEGORIES_PROCESSUS.find((c) => c.id === p.categorie);
  return {
    ...p,
    categorieT: categorie?.t || '',
    etapes: p.etapes || [],
    conceptsLinks: (p.concepts || [])
      .filter((c) => CONCEPT_BASE[c])
      .map((c) => ({ id: c, label: CONCEPT_BASE[c].t, authorName: CONCEPT_BASE[c].authorName })),
    phenomenesLinks: (p.phenomenes || [])
      .map((ph) => PHENOMENES.find((x) => x.id === ph))
      .filter(Boolean)
      .map((ph) => ({ id: ph.id, label: ph.t })),
    notions: p.notions || [],
  };
}

/** Index de recherche : une entrée par auteur, par concept, par œuvre, par phénomène et par processus. */
export const SEARCH_INDEX = (() => {
  const items = [];
  Object.values(AUTHORS).forEach((x) => {
    items.push({ kind: 'Auteur', title: x.name, sub: `${x.dates} · ${x.courant}`, id: x.id, to: `/a/${x.id}` });
    // `to` porte la destination : un concept a désormais sa propre fiche.
    x.concepts.forEach((c) =>
      items.push({ kind: 'Concept', title: c.t, sub: c.simple, id: c.id, to: `/c/${c.id}` }),
    );
    x.oeuvres.forEach((o) =>
      items.push({ kind: 'Œuvre', title: o.t, sub: `${x.name}, ${o.y}`, id: x.id, to: `/a/${x.id}` }),
    );
  });
  PHENOMENES.forEach((p) =>
    items.push({ kind: 'Phénomène', title: p.t, sub: p.d, id: p.id, to: `/p/${p.id}` }),
  );
  PROCESSUS.forEach((p) =>
    items.push({ kind: 'Processus', title: p.t, sub: p.d, id: p.id, to: `/pr/${p.id}` }),
  );
  return items;
})();

export const SEARCH_FILTERS = ['Tout', 'Auteurs', 'Concepts', 'Œuvres', 'Phénomènes', 'Processus'];
const KIND_BY_FILTER = {
  Auteurs: 'Auteur',
  Concepts: 'Concept',
  Œuvres: 'Œuvre',
  Phénomènes: 'Phénomène',
  Processus: 'Processus',
};
export const SEARCH_LIMIT = 24;

/** Comparaison insensible à la casse et aux accents (« precede » trouve « précède »). */
export const normalize = (t) =>
  t.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

export function searchItems(query, filter = 'Tout') {
  const q = normalize(query.trim());
  return SEARCH_INDEX
    .filter((i) => filter === 'Tout' || i.kind === KIND_BY_FILTER[filter])
    .filter((i) => !q || normalize(i.title).includes(q) || normalize(i.sub).includes(q))
    .slice(0, SEARCH_LIMIT);
}

/** Notion du jour : tourne sur l'ensemble des concepts, une par jour calendaire. */
export const ALL_CONCEPTS = Object.values(AUTHORS).flatMap((a) =>
  a.concepts.map((c) => ({ ...c, authorId: a.id, authorName: a.name, courant: a.courant })),
);

export function conceptOfTheDay(date = new Date()) {
  const days = Math.floor(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) / 86400000,
  );
  return ALL_CONCEPTS[((days % ALL_CONCEPTS.length) + ALL_CONCEPTS.length) % ALL_CONCEPTS.length];
}

/* — Graphe des filiations — */
export const NODE_W = 158;
export const NODE_H = 78;
export const GRAPH_W = 880;
export const GRAPH_H = 790;

/**
 * Une arête par relation « a influencé », dédoublonnée. `soft` = influence
 * indirecte. La source est `FILIATION`, donc l'union des deux déclarations :
 * le graphe montre exactement ce que les sections Filiation annoncent.
 */
export const GRAPH_EDGES = (() => {
  const seen = new Set();
  const edges = [];
  AUTHOR_IDS.forEach((id) => {
    inCorpusOrder(FILIATION[id].down).forEach((to) => {
      if (!AUTHORS[to] || seen.has(`${id}>${to}`)) return;
      seen.add(`${id}>${to}`);
      const f = AUTHORS[id];
      const t = AUTHORS[to];
      const x1 = f.x + NODE_W;
      const y1 = f.y + NODE_H / 2;
      const x2 = t.x;
      const y2 = t.y + NODE_H / 2;
      const mx = (x1 + x2) / 2;
      const soft = EXTRA_EDGES.some((e) => e[0] === id && e[1] === to && e[2] === 0);
      edges.push({ id: `${id}>${to}`, from: id, to, soft, d: `M${x1} ${y1} C${mx} ${y1}, ${mx} ${y2}, ${x2} ${y2}` });
    });
  });
  return edges;
})();

export const GRAPH_NODES = AUTHOR_IDS.map((id) => ({
  id,
  name: AUTHORS[id].name,
  sub: AUTHORS[id].courant,
  x: AUTHORS[id].x,
  y: AUTHORS[id].y,
}));

/* — Graphe des concepts — */
// Pas de coordonnées éditoriales pour 38 concepts : la position se calcule,
// groupée par auteur (cinq colonnes, trois rangées — les quinze fiches du
// corpus, dans l'ordre déjà utilisé partout ailleurs) plutôt que placée à la
// main comme pour les quinze auteurs.
export const CNODE_W = 168;
export const CNODE_H = 56;
const CCOLS = 5;
const CCOL_W = 210;
const CROW_H = 320;
const CMARGIN_X = 40;
const CMARGIN_Y = 40;
const CHEADER_GAP = 30;
const CSLOT_GAP = 66;

export const CONCEPT_GRAPH_W = CMARGIN_X * 2 + (CCOLS - 1) * CCOL_W + CNODE_W;
export const CONCEPT_GRAPH_H = CMARGIN_Y * 2 + 2 * CROW_H + CHEADER_GAP + 4 * CSLOT_GAP;

/** Un groupe par auteur : position du libellé d'en-tête, au-dessus de ses concepts. */
export const CONCEPT_CLUSTERS = AUTHOR_IDS.map((id, i) => ({
  authorId: id,
  name: AUTHORS[id].name,
  x: CMARGIN_X + (i % CCOLS) * CCOL_W,
  y: CMARGIN_Y + Math.floor(i / CCOLS) * CROW_H,
}));

export const CONCEPT_GRAPH_NODES = CONCEPT_CLUSTERS.flatMap((cl) =>
  (AUTHORS[cl.authorId].concepts || []).map((c, i) => ({
    id: c.id,
    label: c.t,
    authorId: cl.authorId,
    authorName: cl.name,
    x: cl.x,
    y: cl.y + CHEADER_GAP + i * CSLOT_GAP,
  })),
);

/**
 * Une arête par paire associée ou opposée, dédoublonnée — `NEIGHBOURS` est déjà
 * symétrisé, donc chaque paire n'apparaît ici qu'une fois quel que soit le
 * sens dans lequel `concepts.js` l'a déclarée.
 */
export const CONCEPT_GRAPH_EDGES = (() => {
  const byId = new Map(CONCEPT_GRAPH_NODES.map((n) => [n.id, n]));
  const seen = new Set();
  const edges = [];
  CONCEPT_IDS.forEach((id) => {
    ['associes', 'opposes'].forEach((kind) => {
      NEIGHBOURS[id][kind].forEach((other) => {
        const pair = [id, other].sort();
        const key = `${pair[0]}~${pair[1]}~${kind}`;
        if (seen.has(key)) return;
        seen.add(key);
        const a = byId.get(id);
        const b = byId.get(other);
        if (!a || !b) return;
        const x1 = a.x + CNODE_W / 2;
        const y1 = a.y + CNODE_H / 2;
        const x2 = b.x + CNODE_W / 2;
        const y2 = b.y + CNODE_H / 2;
        edges.push({ id: key, from: id, to: other, kind, d: `M${x1} ${y1} L${x2} ${y2}` });
      });
    });
  });
  return edges;
})();
