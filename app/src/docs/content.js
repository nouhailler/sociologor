import { marked } from 'marked';
import { FLAT_PAGES } from './manifest.js';
import { CONFIDENTIALITE, MENTIONS_LEGALES } from '../legal/content.js';

/** Texte brut des pages légales, pour que la recherche documentaire les trouve aussi. */
const flatten = (doc) =>
  [doc.title, doc.intro || '']
    .concat(
      doc.sections.flatMap((s) => [
        s.title,
        ...(s.fields || []).map((f) => `${f.k} ${f.v}`),
        ...(s.body || []),
      ]),
    )
    .join('\n');

const LEGAL_TEXT = {
  'legal-notice': flatten(MENTIONS_LEGALES),
  'legal-privacy': flatten(CONFIDENTIALITE),
};

/**
 * Les pages de documentation sont embarquées dans le bundle : la doc reste
 * donc consultable hors connexion, au même titre que les fiches.
 */
const RAW = import.meta.glob('../../docs/**/*.md', { query: '?raw', import: 'default', eager: true });

const byFile = Object.fromEntries(
  Object.entries(RAW).map(([path, source]) => [path.replace('../../docs/', ''), source]),
);

marked.setOptions({ gfm: true, breaks: false });

/** Rend le Markdown et rend les tableaux défilables sur petit écran. */
function render(md) {
  return marked
    .parse(md)
    .replace(/<table>/g, '<div class="soc-doc-table-wrap"><table>')
    .replace(/<\/table>/g, '</table></div>');
}

const cache = new Map();

export function getDocPage(chapterSlug, pageSlug) {
  const meta = FLAT_PAGES.find((p) => p.chapterSlug === chapterSlug && p.slug === pageSlug);
  if (!meta) return null;
  const source = byFile[meta.file];
  if (source === undefined) return null;
  if (!cache.has(meta.file)) cache.set(meta.file, render(source));
  return { ...meta, source, html: cache.get(meta.file) };
}

export function docPageExists(chapterSlug, pageSlug) {
  const meta = FLAT_PAGES.find((p) => p.chapterSlug === chapterSlug && p.slug === pageSlug);
  return Boolean(meta && byFile[meta.file] !== undefined);
}

/** Fichiers présents sur le disque mais absents du sommaire, et l'inverse. */
export const DOC_INTEGRITY = {
  missingFiles: FLAT_PAGES.filter((p) => !p.render && byFile[p.file] === undefined).map((p) => p.file),
  orphanFiles: Object.keys(byFile).filter((f) => !FLAT_PAGES.some((p) => p.file === f)),
};

/** Recherche plein texte sur le titre et le corps des pages (§32). */
export function searchDocs(query) {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];
  return FLAT_PAGES.map((p) => {
    const source = byFile[p.file] || (p.render ? LEGAL_TEXT[p.render] || '' : '');
    const haystack = `${p.title}\n${source}`.toLowerCase();
    const at = haystack.indexOf(q);
    if (at === -1) return null;
    const body = source.replace(/[#>*`|_-]/g, ' ').replace(/\s+/g, ' ');
    const hit = body.toLowerCase().indexOf(q);
    const start = Math.max(0, hit - 60);
    return {
      ...p,
      excerpt: hit === -1 ? body.slice(0, 140) : `${start > 0 ? '…' : ''}${body.slice(start, start + 160).trim()}…`,
    };
  })
    .filter(Boolean)
    .slice(0, 20);
}
