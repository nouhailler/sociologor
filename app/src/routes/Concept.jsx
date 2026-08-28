import { Link, useParams } from 'react-router-dom';
import Shell from '../components/Shell.jsx';
import NotFound from './NotFound.jsx';
import { IconShare } from '../components/Icons.jsx';
import { getConcept } from '../data/index.js';
import { useStore } from '../state/store.jsx';
import { conceptToMarkdown, downloadText, slugify } from '../lib/markdown-export.js';
import { shareUrl } from '../lib/share.js';

const SECTION = { margin: '0 0 10px' };
const LABEL = {
  fontSize: 11,
  color: 'color-mix(in srgb, var(--color-text) 45%, transparent)',
  margin: '0 0 6px',
};

/**
 * Fiche concept. Elle reprend l'ordre de lecture de la fiche auteur — du plus
 * simple au plus technique — et se termine par les voisinages, qui sont le seul
 * endroit d'où l'on repart vers un autre concept.
 */
export default function Concept() {
  const { id } = useParams();
  const c = getConcept(id);
  const { flash } = useStore();

  if (!c) {
    return <NotFound what="Ce concept n'existe pas." />;
  }

  async function onShare() {
    const result = await shareUrl({
      title: `${c.t} — Sociologor`,
      text: c.simple,
      url: `${window.location.origin}/c/${c.id}`,
    });
    if (result === 'copied') flash('Lien copié');
  }

  function onExport() {
    downloadText(`sociologor-concept-${slugify(c.t)}.md`, conceptToMarkdown(c));
    flash('Concept exporté en Markdown');
  }

  return (
    <Shell
      title={c.t}
      subtitle={`${c.year} · ${c.auteur.name}`}
      back
      actions={
        <button
          type="button"
          className="btn btn-secondary soc-icon-btn"
          aria-label="Partager le concept"
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
          {c.t}
        </h2>
        <p
          style={{
            fontSize: 12.5,
            color: 'color-mix(in srgb, var(--color-text) 50%, transparent)',
            margin: '4px 0 8px',
          }}
        >
          {c.year} ·{' '}
          <Link to={`/a/${c.auteur.id}`} style={{ color: 'inherit' }}>
            {c.auteur.name}
          </Link>{' '}
          · {c.auteur.courant}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 18 }}>
          <span className="tag tag-accent" style={{ fontSize: 10.5 }}>
            Concept
          </span>
          {c.domainTags.map((t) => (
            <span key={t} className="tag tag-neutral" style={{ fontSize: 10.5 }}>
              {t}
            </span>
          ))}
        </div>

        {/* Définition courte — le même texte que sur la fiche auteur. */}
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
          <p style={{ fontSize: 15.5, lineHeight: 1.5, margin: 0, textWrap: 'pretty' }}>{c.simple}</p>
        </section>

        <h3 className="soc-kicker" style={SECTION}>
          Définition détaillée
        </h3>
        <div style={{ margin: '0 0 28px' }}>
          {c.detaille.map((p) => (
            <p
              key={p}
              style={{
                fontSize: 14,
                lineHeight: 1.6,
                margin: '0 0 10px',
                color: 'color-mix(in srgb, var(--color-text) 84%, transparent)',
                textWrap: 'pretty',
              }}
            >
              {p}
            </p>
          ))}
        </div>

        <h3 className="soc-kicker" style={SECTION}>
          Origine
        </h3>
        <section
          style={{
            padding: '12px 14px',
            borderRadius: 'var(--radius-md)',
            background: 'var(--color-surface)',
            margin: '0 0 28px',
          }}
        >
          <p
            style={{
              margin: 0,
              fontFamily: 'var(--font-heading)',
              fontWeight: 'var(--font-heading-weight)',
              fontSize: 14,
            }}
          >
            {c.origine.oeuvre}
            <span style={{ color: 'color-mix(in srgb, var(--color-text) 45%, transparent)' }}>
              {' '}
              · {c.origine.annee}
            </span>
          </p>
          <p
            style={{
              margin: '6px 0 0',
              fontSize: 13,
              lineHeight: 1.55,
              color: 'color-mix(in srgb, var(--color-text) 72%, transparent)',
              textWrap: 'pretty',
            }}
          >
            {c.origine.contexte}
          </p>
        </section>

        <h3 className="soc-kicker" style={SECTION}>
          Exemples concrets
        </h3>
        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
            margin: '0 0 28px',
          }}
        >
          {c.exemples.map((e) => (
            <li
              key={e}
              style={{
                fontSize: 13.5,
                lineHeight: 1.55,
                paddingLeft: 11,
                borderLeft: '2px solid var(--color-accent-700)',
                color: 'color-mix(in srgb, var(--color-text) 78%, transparent)',
                textWrap: 'pretty',
              }}
            >
              {e}
            </li>
          ))}
        </ul>

        <h3 className="soc-kicker" style={{ margin: '0 0 8px' }}>
          Œuvres où il apparaît
        </h3>
        <table className="table" style={{ marginBottom: 28 }}>
          <caption
            className="text-muted"
            style={{ captionSide: 'top', textAlign: 'left', fontSize: 11, paddingBottom: 4 }}
          >
            Œuvres où le concept travaille
          </caption>
          <tbody>
            {c.oeuvres.map((o) => (
              <tr key={o.t}>
                <td
                  style={{
                    width: 56,
                    color: 'color-mix(in srgb, var(--color-text) 45%, transparent)',
                    fontSize: 12.5,
                    fontVariantNumeric: 'tabular-nums',
                  }}
                >
                  {o.y}
                </td>
                <td style={{ fontSize: 13.5 }}>{o.t}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3 className="soc-kicker" style={SECTION}>
          Évolution historique
        </h3>
        <ol
          style={{
            listStyle: 'none',
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            margin: '0 0 28px',
          }}
        >
          {c.evolution.map((s) => (
            <li key={`${s.p}-${s.f}`} style={{ display: 'flex', gap: 12, alignItems: 'baseline' }}>
              <span
                style={{
                  flex: 'none',
                  minWidth: 92,
                  fontSize: 11.5,
                  fontVariantNumeric: 'tabular-nums',
                  color: 'var(--color-accent-300)',
                }}
              >
                {s.p}
              </span>
              <span
                style={{
                  fontSize: 13,
                  lineHeight: 1.5,
                  color: 'color-mix(in srgb, var(--color-text) 76%, transparent)',
                  textWrap: 'pretty',
                }}
              >
                {s.f}
              </span>
            </li>
          ))}
        </ol>

        <h3 className="soc-kicker" style={SECTION}>
          Critiques
        </h3>
        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: 7,
            margin: '0 0 28px',
          }}
        >
          {c.critiques.map((k) => (
            <li
              key={k}
              style={{
                display: 'flex',
                gap: 8,
                fontSize: 13,
                lineHeight: 1.5,
                color: 'color-mix(in srgb, var(--color-text) 74%, transparent)',
              }}
            >
              <span aria-hidden="true" style={{ flex: 'none', color: 'var(--color-accent-600)', marginTop: 1 }}>
                —
              </span>
              <span style={{ textWrap: 'pretty' }}>{k}</span>
            </li>
          ))}
        </ul>

        <h3 className="soc-kicker" style={SECTION}>
          Voisinage
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 28 }}>
          <Voisins label="Concepts associés" links={c.associesLinks} />
          <Voisins label="Concepts opposés" links={c.opposesLinks} />
          <div>
            <p style={LABEL}>Auteur associé</p>
            <Link to={`/a/${c.auteur.id}`} className="soc-link-chip">
              {c.auteur.name}
            </Link>
          </div>
        </div>

        <h3 className="soc-kicker" style={{ margin: '0 0 6px' }}>
          Problématiques qui le mobilisent
        </h3>
        {c.problematiquesLinks.length === 0 ? (
          <p style={{ fontSize: 12.5, color: 'color-mix(in srgb, var(--color-text) 40%, transparent)', margin: '0 0 24px' }}>
            Aucune problématique déjà décrite ne mobilise directement ce concept.
          </p>
        ) : (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, margin: '0 0 24px' }}>
            {c.problematiquesLinks.map((p) => (
              <Link key={p.id} to={`/pb/${p.id}`} className="soc-link-chip">
                {p.label}
              </Link>
            ))}
          </div>
        )}

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, paddingTop: 4 }}>
          <button type="button" className="btn btn-secondary" style={{ fontSize: 12.5 }} onClick={onExport}>
            Exporter en Markdown
          </button>
          <Link className="btn btn-secondary" to={`/a/${c.auteur.id}`} style={{ fontSize: 12.5 }}>
            Voir la fiche de {c.auteur.name}
          </Link>
        </div>
      </article>
    </Shell>
  );
}

/** Pastilles de navigation entre concepts. Le nom de l'auteur situe la pastille. */
function Voisins({ label, links }) {
  return (
    <div>
      <p style={LABEL}>{label}</p>
      {links.length === 0 ? (
        <p style={{ fontSize: 12.5, color: 'color-mix(in srgb, var(--color-text) 40%, transparent)', margin: 0 }}>
          Aucun concept lié dans ce corpus.
        </p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {links.map((l) => (
            <Link key={l.id} to={`/c/${l.id}`} className="soc-link-chip">
              {l.label}
              <span style={{ opacity: 0.5 }}> · {l.authorName}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
