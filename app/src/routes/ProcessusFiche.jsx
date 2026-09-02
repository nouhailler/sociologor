import { Link, useParams } from 'react-router-dom';
import Shell from '../components/Shell.jsx';
import NotFound from './NotFound.jsx';
import { IconShare } from '../components/Icons.jsx';
import { getProcessus } from '../data/index.js';
import { useStore } from '../state/store.jsx';
import { downloadText, processusToMarkdown, slugify } from '../lib/markdown-export.js';
import { shareUrl } from '../lib/share.js';

const LABEL = {
  fontSize: 11,
  color: 'color-mix(in srgb, var(--color-text) 45%, transparent)',
  margin: '0 0 6px',
};

/**
 * Fiche processus. Une trajectoire en étapes, puis les mêmes deux blocs de
 * liens qu'une fiche phénomène — concepts du corpus (cliquables), notions
 * sans fiche (texte libre) — et un troisième, propre aux processus : les
 * phénomènes vers lesquels la trajectoire mène le plus souvent.
 */
export default function ProcessusFiche() {
  const { id } = useParams();
  const p = getProcessus(id);
  const { flash } = useStore();

  if (!p) {
    return <NotFound what="Ce processus n'existe pas." />;
  }

  async function onShare() {
    const result = await shareUrl({
      title: `${p.t} — Sociologor`,
      text: p.d,
      url: `${window.location.origin}/pr/${p.id}`,
    });
    if (result === 'copied') flash('Lien copié');
  }

  function onExport() {
    downloadText(`sociologor-processus-${slugify(p.t)}.md`, processusToMarkdown(p));
    flash('Processus exporté en Markdown');
  }

  return (
    <Shell
      title={p.t}
      subtitle={p.categorieT}
      canBack
      actions={
        <button
          type="button"
          className="btn btn-secondary soc-icon-btn"
          aria-label="Partager le processus"
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
          {p.t}
        </h2>
        <p
          style={{
            fontSize: 12.5,
            color: 'color-mix(in srgb, var(--color-text) 50%, transparent)',
            margin: '4px 0 8px',
          }}
        >
          {p.categorieT}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 18 }}>
          <span className="tag tag-accent" style={{ fontSize: 10.5 }}>
            Processus
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
          <p style={{ fontSize: 15.5, lineHeight: 1.5, margin: 0, textWrap: 'pretty' }}>{p.d}</p>
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
          {p.detail}
        </p>

        <h3 className="soc-kicker" style={{ margin: '0 0 12px' }}>
          Étapes types
        </h3>
        <ol
          style={{
            listStyle: 'none',
            padding: 0,
            margin: '0 0 28px',
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
          }}
        >
          {p.etapes.map((e, i) => (
            <li
              key={e}
              style={{
                display: 'flex',
                gap: 12,
                alignItems: 'baseline',
                fontSize: 13.5,
                lineHeight: 1.55,
                color: 'color-mix(in srgb, var(--color-text) 82%, transparent)',
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  flex: 'none',
                  minWidth: 20,
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 'var(--font-heading-weight)',
                  color: 'var(--color-accent-300)',
                }}
              >
                {i + 1}.
              </span>
              <span style={{ textWrap: 'pretty' }}>{e}</span>
            </li>
          ))}
        </ol>

        <h3 className="soc-kicker" style={{ margin: '0 0 6px' }}>
          Mécanismes qui l&apos;alimentent
        </h3>
        {p.mecanismesLinks.length === 0 ? (
          <p
            style={{
              fontSize: 12.5,
              color: 'color-mix(in srgb, var(--color-text) 40%, transparent)',
              margin: '0 0 24px',
            }}
          >
            Aucun mécanisme déjà décrit ne se rattache directement à ce processus.
          </p>
        ) : (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, margin: '0 0 24px' }}>
            {p.mecanismesLinks.map((m) => (
              <Link key={m.id} to={`/m/${m.id}`} className="soc-link-chip">
                {m.label}
              </Link>
            ))}
          </div>
        )}

        <h3 className="soc-kicker" style={{ margin: '0 0 6px' }}>
          Concepts du corpus
        </h3>
        {p.conceptsLinks.length === 0 ? (
          <p
            style={{
              fontSize: 12.5,
              color: 'color-mix(in srgb, var(--color-text) 40%, transparent)',
              margin: '0 0 24px',
            }}
          >
            Aucun concept des trente-trois fiches ne porte directement sur ce processus.
          </p>
        ) : (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, margin: '0 0 24px' }}>
            {p.conceptsLinks.map((c) => (
              <Link key={c.id} to={`/c/${c.id}`} className="soc-link-chip">
                {c.label}
                <span style={{ opacity: 0.5 }}> · {c.authorName}</span>
              </Link>
            ))}
          </div>
        )}

        <h3 className="soc-kicker" style={{ margin: '0 0 6px' }}>
          Phénomènes liés
        </h3>
        {p.phenomenesLinks.length === 0 ? (
          <p
            style={{
              fontSize: 12.5,
              color: 'color-mix(in srgb, var(--color-text) 40%, transparent)',
              margin: '0 0 24px',
            }}
          >
            Aucun des phénomènes déjà décrits ne correspond directement à l&apos;état vers lequel mène
            ce processus.
          </p>
        ) : (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, margin: '0 0 24px' }}>
            {p.phenomenesLinks.map((ph) => (
              <Link key={ph.id} to={`/p/${ph.id}`} className="soc-link-chip">
                {ph.label}
              </Link>
            ))}
          </div>
        )}

        <h3 className="soc-kicker" style={{ margin: '0 0 6px' }}>
          Problématiques liées
        </h3>
        {p.problematiquesLinks.length === 0 ? (
          <p
            style={{
              fontSize: 12.5,
              color: 'color-mix(in srgb, var(--color-text) 40%, transparent)',
              margin: '0 0 24px',
            }}
          >
            Aucune problématique déjà décrite ne cite ce processus.
          </p>
        ) : (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, margin: '0 0 24px' }}>
            {p.problematiquesLinks.map((pb) => (
              <Link key={pb.id} to={`/pb/${pb.id}`} className="soc-link-chip">
                {pb.label}
              </Link>
            ))}
          </div>
        )}

        {p.notions.length > 0 && (
          <>
            <p style={LABEL}>Notions associées</p>
            <p
              style={{
                fontSize: 12.5,
                lineHeight: 1.5,
                color: 'color-mix(in srgb, var(--color-text) 48%, transparent)',
                margin: '0 0 12px',
                maxWidth: '54ch',
              }}
            >
              Des termes que le processus convoque, sans fiche dans l&apos;application.
            </p>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: '0 0 28px',
                display: 'flex',
                flexDirection: 'column',
                gap: 7,
              }}
            >
              {p.notions.map((n) => (
                <li
                  key={n}
                  style={{
                    fontSize: 13,
                    lineHeight: 1.5,
                    paddingLeft: 11,
                    borderLeft: '2px solid var(--color-neutral-700)',
                    color: 'color-mix(in srgb, var(--color-text) 76%, transparent)',
                    textWrap: 'pretty',
                  }}
                >
                  {n}
                </li>
              ))}
            </ul>
          </>
        )}

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, paddingTop: 4 }}>
          <button type="button" className="btn btn-secondary" style={{ fontSize: 12.5 }} onClick={onExport}>
            Exporter en Markdown
          </button>
          <Link className="btn btn-secondary" to="/processus" style={{ fontSize: 12.5 }}>
            Tous les processus
          </Link>
        </div>
      </article>
    </Shell>
  );
}
