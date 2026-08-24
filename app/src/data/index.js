import { DOMAINS, AUTHORS, EXTRA, EXTRA_EDGES } from './authors.js';

export { DOMAINS, AUTHORS, EXTRA, EXTRA_EDGES };

export const AUTHOR_IDS = Object.keys(AUTHORS);
export const AUTHOR_COUNT = AUTHOR_IDS.length;
export const DOMAIN_COUNT = DOMAINS.length;

/** Fiche complète : auteur + champs complémentaires + repères + domaines rattachés. */
export function getAuthor(id) {
  const a = AUTHORS[id];
  if (!a) return null;
  const extra = EXTRA[id] || {};
  return {
    ...a,
    ...extra,
    reperes: [
      { k: 'Nom', v: extra.nom || a.name },
      { k: 'Prénom', v: extra.prenom || '—' },
      { k: 'Dates', v: a.dates },
      { k: 'Nationalité', v: a.nat },
      { k: 'Période', v: a.periode },
      { k: 'Courant', v: a.courant },
    ],
    domainTags: DOMAINS.filter((d) => d.a.includes(id)).slice(0, 3).map((d) => d.t),
    upLinks: (a.up || []).filter((x) => AUTHORS[x]).map((x) => ({ id: x, label: AUTHORS[x].name })),
    downLinks: (a.down || []).filter((x) => AUTHORS[x]).map((x) => ({ id: x, label: AUTHORS[x].name })),
  };
}

export function getDomain(id) {
  const d = DOMAINS.find((x) => x.id === id);
  if (!d) return null;
  return { ...d, authors: d.a.filter((x) => AUTHORS[x]).map((x) => AUTHORS[x]) };
}

/** Index de recherche : une entrée par auteur, par concept et par œuvre. */
export const SEARCH_INDEX = (() => {
  const items = [];
  Object.values(AUTHORS).forEach((x) => {
    items.push({ kind: 'Auteur', title: x.name, sub: `${x.dates} · ${x.courant}`, id: x.id });
    x.concepts.forEach((c) => items.push({ kind: 'Concept', title: c.t, sub: c.simple, id: x.id }));
    x.oeuvres.forEach((o) => items.push({ kind: 'Œuvre', title: o.t, sub: `${x.name}, ${o.y}`, id: x.id }));
  });
  return items;
})();

export const SEARCH_FILTERS = ['Tout', 'Auteurs', 'Concepts', 'Œuvres'];
const KIND_BY_FILTER = { Auteurs: 'Auteur', Concepts: 'Concept', Œuvres: 'Œuvre' };
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

/** Une arête par relation « a influencé », dédoublonnée. `soft` = influence indirecte. */
export const GRAPH_EDGES = (() => {
  const seen = new Set();
  const edges = [];
  AUTHOR_IDS.forEach((id) => {
    (AUTHORS[id].down || []).forEach((to) => {
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
