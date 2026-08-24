import { useCallback, useMemo, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Shell from '../components/Shell.jsx';
import NotFound from './NotFound.jsx';
import { IconChevron } from '../components/Icons.jsx';
import { CHAPTERS, FLAT_PAGES, PAGE_COUNT } from '../docs/manifest.js';
import { getDocPage, searchDocs } from '../docs/content.js';
import LegalSections from '../legal/LegalSections.jsx';
import { CONFIDENTIALITE, MENTIONS_LEGALES } from '../legal/content.js';

/** Pages rendues depuis le module légal plutôt que depuis un fichier Markdown. */
const LEGAL_DOCS = {
  'legal-notice': MENTIONS_LEGALES,
  'legal-privacy': CONFIDENTIALITE,
};

const APP_VERSION = __APP_VERSION__;
const BUILD_DATE = __BUILD_DATE__;

/** Sommaire : chapitres repliables, sous-chapitres indentés (DOCUMENTATION_SPEC §5). */
export function DocsIndex() {
  const [open, setOpen] = useState(() => new Set([CHAPTERS[0].slug]));
  const [q, setQ] = useState('');
  const hits = useMemo(() => searchDocs(q), [q]);

  function toggle(slug) {
    setOpen((cur) => {
      const next = new Set(cur);
      if (next.has(slug)) next.delete(slug);
      else next.add(slug);
      return next;
    });
  }

  return (
    <Shell title="Documentation" subtitle={`${CHAPTERS.length} chapitres · ${PAGE_COUNT} pages`}>
      <div className="soc-doc soc-enter">
        <h2 className="soc-h2">Documentation</h2>
        <p className="soc-lede">
          Le guide complet de Sociologor : installation, écrans, fonctionnalités, données, hors connexion,
          dépannage. Cette documentation est embarquée dans l&apos;application : elle reste lisible sans
          connexion.
        </p>
        <p className="text-muted" style={{ fontSize: 12, marginBottom: 20 }}>
          Application v{APP_VERSION} · documentation mise à jour le {BUILD_DATE}
        </p>

        <label className="text-muted" htmlFor="doc-q" style={{ display: 'block', fontSize: 12, marginBottom: 5 }}>
          Rechercher dans la documentation
        </label>
        <input
          id="doc-q"
          className="input"
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="installation, hors ligne, export…"
          style={{ marginBottom: 20, minHeight: 42 }}
        />

        {q.trim().length >= 2 ? (
          <>
            <p className="soc-kicker" style={{ marginBottom: 10 }}>
              {hits.length} {hits.length === 1 ? 'page trouvée' : 'pages trouvées'}
            </p>
            {hits.map((h) => (
              <Link key={h.path} to={h.path} className="soc-doc-hit">
                <span style={{ display: 'block', fontSize: 14.5, fontFamily: 'var(--font-heading)' }}>{h.title}</span>
                <span className="text-muted" style={{ display: 'block', fontSize: 11, margin: '2px 0 4px' }}>
                  {h.chapterTitle}
                </span>
                <span className="text-muted" style={{ display: 'block', fontSize: 12.5, lineHeight: 1.45 }}>
                  {h.excerpt}
                </span>
              </Link>
            ))}
          </>
        ) : (
          <nav aria-label="Sommaire de la documentation">
            {CHAPTERS.map((c) => {
              const expanded = open.has(c.slug);
              return (
                <div key={c.slug} className="soc-acc-chapter">
                  <button
                    type="button"
                    className="soc-acc-head"
                    aria-expanded={expanded}
                    aria-controls={`chap-${c.slug}`}
                    onClick={() => toggle(c.slug)}
                  >
                    <span className="soc-acc-chevron" style={{ display: 'flex', color: 'var(--color-accent)' }}>
                      <IconChevron />
                    </span>
                    <span aria-hidden="true">{c.icon}</span>
                    <span>{c.title}</span>
                    <span className="soc-acc-count">
                      {c.pages.length} {c.pages.length === 1 ? 'page' : 'pages'}
                    </span>
                  </button>
                  {expanded && (
                    <div className="soc-acc-panel" id={`chap-${c.slug}`}>
                      {c.pages.map((p) => (
                        <Link key={p.slug} className="soc-acc-link" to={`/documentation/${c.slug}/${p.slug}`}>
                          {p.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        )}
      </div>
    </Shell>
  );
}

/** Une page de documentation, avec fil d'Ariane et navigation précédent/suivant (§33). */
export function DocsPage() {
  const { chapter, page } = useParams();
  const navigate = useNavigate();

  /** Garde la navigation interne de la doc côté client, sans rechargement. */
  const onDocClick = useCallback(
    (e) => {
      const a = e.target.closest?.('a');
      if (!a) return;
      const href = a.getAttribute('href');
      if (!href || !href.startsWith('/') || a.target === '_blank') return;
      e.preventDefault();
      navigate(href);
    },
    [navigate],
  );

  const meta = FLAT_PAGES.find((p) => p.chapterSlug === chapter && p.slug === page);
  const legal = meta?.render ? LEGAL_DOCS[meta.render] : null;
  const doc = legal ? meta : getDocPage(chapter, page);

  if (!doc) {
    return <NotFound what="Cette page de documentation n'existe pas." />;
  }

  const index = FLAT_PAGES.findIndex((p) => p.path === doc.path);
  const prev = index > 0 ? FLAT_PAGES[index - 1] : null;
  const next = index < FLAT_PAGES.length - 1 ? FLAT_PAGES[index + 1] : null;

  return (
    <Shell title={doc.title} subtitle={doc.chapterTitle} canBack>
      <div className="soc-doc soc-enter">
        <nav aria-label="Fil d'Ariane" className="text-muted" style={{ fontSize: 11.5, marginBottom: 14 }}>
          <Link to="/documentation">Documentation</Link> <span aria-hidden="true">›</span> {doc.chapterTitle}{' '}
          <span aria-hidden="true">›</span> {doc.title}
        </nav>

        {legal ? (
          <>
            <h1>{legal.title}</h1>
            <LegalSections doc={legal} />
          </>
        ) : (
          /* Contenu Markdown rédigé dans le dépôt (app/docs/) — source de confiance.
             Les liens internes sont interceptés pour rester en navigation SPA. */
          // eslint-disable-next-line jsx-a11y/no-static-element-interactions
          <div onClick={onDocClick} dangerouslySetInnerHTML={{ __html: doc.html }} />
        )}

        <div
          style={{
            display: 'flex',
            gap: 8,
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            marginTop: 32,
            paddingTop: 16,
            borderTop: '1px solid color-mix(in srgb, var(--color-text) 8%, transparent)',
          }}
        >
          {prev ? (
            <Link className="btn btn-secondary" to={prev.path} style={{ fontSize: 12.5 }}>
              ← {prev.title}
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link className="btn btn-secondary" to={next.path} style={{ fontSize: 12.5 }}>
              {next.title} →
            </Link>
          )}
        </div>

        <p style={{ marginTop: 20 }}>
          <Link className="btn btn-ghost" to="/documentation" style={{ fontSize: 12.5 }}>
            ↑ Revenir au sommaire
          </Link>
        </p>
      </div>
    </Shell>
  );
}
