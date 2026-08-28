import { Link, useParams } from 'react-router-dom';
import Shell from '../components/Shell.jsx';
import NotFound from './NotFound.jsx';
import { IconShare } from '../components/Icons.jsx';
import { getMecanisme } from '../data/index.js';
import { useStore } from '../state/store.jsx';
import { downloadText, mecanismeToMarkdown, slugify } from '../lib/markdown-export.js';
import { shareUrl } from '../lib/share.js';

/**
 * Fiche mécanisme. Le rouage lui-même, puis trois blocs de liens : les
 * concepts du corpus qui l'éclairent, les processus qu'il alimente, et les
 * phénomènes déjà décrits auxquels il contribue.
 */
export default function MecanismeFiche() {
  const { id } = useParams();
  const m = getMecanisme(id);
  const { flash } = useStore();

  if (!m) {
    return <NotFound what="Ce mécanisme n'existe pas." />;
  }

  async function onShare() {
    const result = await shareUrl({
      title: `${m.t} — Sociologor`,
      text: m.d,
      url: `${window.location.origin}/m/${m.id}`,
    });
    if (result === 'copied') flash('Lien copié');
  }

  function onExport() {
    downloadText(`sociologor-mecanisme-${slugify(m.t)}.md`, mecanismeToMarkdown(m));
    flash('Mécanisme exporté en Markdown');
  }

  return (
    <Shell
      title={m.t}
      subtitle={m.categorieT}
      canBack
      actions={
        <button
          type="button"
          className="btn btn-secondary soc-icon-btn"
          aria-label="Partager le mécanisme"
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
          {m.t}
        </h2>
        <p
          style={{
            fontSize: 12.5,
            color: 'color-mix(in srgb, var(--color-text) 50%, transparent)',
            margin: '4px 0 8px',
          }}
        >
          {m.categorieT}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 18 }}>
          <span className="tag tag-accent" style={{ fontSize: 10.5 }}>
            Mécanisme
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
          <p style={{ fontSize: 15.5, lineHeight: 1.5, margin: 0, textWrap: 'pretty' }}>{m.d}</p>
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
          {m.detail}
        </p>

        <h3 className="soc-kicker" style={{ margin: '0 0 6px' }}>
          Concepts du corpus
        </h3>
        {m.conceptsLinks.length === 0 ? (
          <p
            style={{
              fontSize: 12.5,
              color: 'color-mix(in srgb, var(--color-text) 40%, transparent)',
              margin: '0 0 24px',
            }}
          >
            Aucun concept des quinze fiches ne porte directement sur ce mécanisme.
          </p>
        ) : (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, margin: '0 0 24px' }}>
            {m.conceptsLinks.map((c) => (
              <Link key={c.id} to={`/c/${c.id}`} className="soc-link-chip">
                {c.label}
                <span style={{ opacity: 0.5 }}> · {c.authorName}</span>
              </Link>
            ))}
          </div>
        )}

        <h3 className="soc-kicker" style={{ margin: '0 0 6px' }}>
          Processus alimentés
        </h3>
        {m.processusLinks.length === 0 ? (
          <p
            style={{
              fontSize: 12.5,
              color: 'color-mix(in srgb, var(--color-text) 40%, transparent)',
              margin: '0 0 24px',
            }}
          >
            Aucun des processus déjà décrits ne mobilise directement ce mécanisme.
          </p>
        ) : (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, margin: '0 0 24px' }}>
            {m.processusLinks.map((pr) => (
              <Link key={pr.id} to={`/pr/${pr.id}`} className="soc-link-chip">
                {pr.label}
              </Link>
            ))}
          </div>
        )}

        <h3 className="soc-kicker" style={{ margin: '0 0 6px' }}>
          Phénomènes liés
        </h3>
        {m.phenomenesLinks.length === 0 ? (
          <p
            style={{
              fontSize: 12.5,
              color: 'color-mix(in srgb, var(--color-text) 40%, transparent)',
              margin: '0 0 24px',
            }}
          >
            Aucun des phénomènes déjà décrits ne résulte directement de ce mécanisme.
          </p>
        ) : (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, margin: '0 0 24px' }}>
            {m.phenomenesLinks.map((ph) => (
              <Link key={ph.id} to={`/p/${ph.id}`} className="soc-link-chip">
                {ph.label}
              </Link>
            ))}
          </div>
        )}

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, paddingTop: 4 }}>
          <button type="button" className="btn btn-secondary" style={{ fontSize: 12.5 }} onClick={onExport}>
            Exporter en Markdown
          </button>
          <Link className="btn btn-secondary" to="/mecanismes" style={{ fontSize: 12.5 }}>
            Tous les mécanismes
          </Link>
        </div>
      </article>
    </Shell>
  );
}
