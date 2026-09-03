import { Link, useParams } from 'react-router-dom';
import Shell from '../components/Shell.jsx';
import NotFound from './NotFound.jsx';
import { IconShare } from '../components/Icons.jsx';
import { getFondamental } from '../data/index.js';
import { useStore } from '../state/store.jsx';
import { downloadText, fondamentalToMarkdown, slugify } from '../lib/markdown-export.js';
import { shareUrl } from '../lib/share.js';

/**
 * Fiche d'un concept fondamental. Plus courte qu'une fiche phénomène : pas de
 * dimensions, pas de mécanismes ni de problématiques — juste une définition,
 * et les fiches du corpus (concepts ou processus) qui la prolongent.
 */
export default function FondamentalFiche() {
  const { id } = useParams();
  const f = getFondamental(id);
  const { flash } = useStore();

  if (!f) {
    return <NotFound what="Ce concept fondamental n'existe pas." />;
  }

  async function onShare() {
    const result = await shareUrl({
      title: `${f.t} — Sociologor`,
      text: f.d,
      url: `${window.location.origin}/f/${f.id}`,
    });
    if (result === 'copied') flash('Lien copié');
  }

  function onExport() {
    downloadText(`sociologor-fondamental-${slugify(f.t)}.md`, fondamentalToMarkdown(f));
    flash('Concept fondamental exporté en Markdown');
  }

  const liens = [...f.conceptsLinks, ...f.processusLinks];

  return (
    <Shell
      title={f.t}
      subtitle={f.categorieT}
      canBack
      actions={
        <button
          type="button"
          className="btn btn-secondary soc-icon-btn"
          aria-label="Partager le concept fondamental"
          onClick={onShare}
        >
          <IconShare />
        </button>
      }
    >
      <article className="soc-enter" style={{ maxWidth: 780 }}>
        <h2
          style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 'var(--font-heading-weight)',
            fontSize: 'clamp(26px, 4vw, 38px)',
            lineHeight: 1.04,
            letterSpacing: '-0.03em',
            margin: '4px 0 0',
          }}
        >
          {f.t}
        </h2>
        <p
          style={{
            fontSize: 12.5,
            color: 'color-mix(in srgb, var(--color-text) 50%, transparent)',
            margin: '4px 0 8px',
          }}
        >
          {f.categorieT}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 18 }}>
          <span className="tag tag-accent" style={{ fontSize: 10.5 }}>
            Concept fondamental
          </span>
        </div>

        <section
          style={{
            padding: '14px 16px',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--color-accent-800)',
            background: 'color-mix(in srgb, var(--color-accent-900) 45%, transparent)',
            margin: '0 0 24px',
          }}
        >
          <p className="soc-kicker" style={{ margin: '0 0 6px' }}>
            En une phrase
          </p>
          <p style={{ fontSize: 15.5, lineHeight: 1.5, margin: 0, textWrap: 'pretty' }}>{f.d}</p>
        </section>

        <h3 className="soc-kicker" style={{ margin: '0 0 10px' }}>
          Ce que la sociologie en dit
        </h3>
        <p
          style={{
            fontSize: 14,
            lineHeight: 1.6,
            margin: '0 0 28px',
            color: 'color-mix(in srgb, var(--color-text) 84%, transparent)',
            textWrap: 'pretty',
          }}
        >
          {f.detail}
        </p>

        <h3 className="soc-kicker" style={{ margin: '0 0 6px' }}>
          Fiches du corpus liées
        </h3>
        {liens.length === 0 ? (
          <p
            style={{
              fontSize: 12.5,
              color: 'color-mix(in srgb, var(--color-text) 40%, transparent)',
              margin: '0 0 24px',
            }}
          >
            Aucune fiche du corpus ne prolonge directement ce terme.
          </p>
        ) : (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, margin: '0 0 24px' }}>
            {liens.map((l) => (
              <Link key={l.to} to={l.to} className="soc-link-chip">
                {l.label}
                <span style={{ opacity: 0.5 }}> · {l.authorName}</span>
              </Link>
            ))}
          </div>
        )}

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, paddingTop: 4 }}>
          <button type="button" className="btn btn-secondary" style={{ fontSize: 12.5 }} onClick={onExport}>
            Exporter en Markdown
          </button>
          <Link className="btn btn-secondary" to="/fondamentaux" style={{ fontSize: 12.5 }}>
            Tous les concepts fondamentaux
          </Link>
        </div>
      </article>
    </Shell>
  );
}
