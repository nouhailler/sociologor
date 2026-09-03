import { Link, useParams } from 'react-router-dom';
import Shell from '../components/Shell.jsx';
import NotFound from './NotFound.jsx';
import { IconShare } from '../components/Icons.jsx';
import { getMethode } from '../data/index.js';
import { useStore } from '../state/store.jsx';
import { downloadText, methodeToMarkdown, slugify } from '../lib/markdown-export.js';
import { shareUrl } from '../lib/share.js';

const SECTION = { margin: '0 0 10px' };
const LABEL = {
  fontSize: 11,
  color: 'color-mix(in srgb, var(--color-text) 45%, transparent)',
  margin: '0 0 6px',
};

/**
 * Fiche méthode. Gabarit fixe en huit blocs : objectif (bandeau « En une
 * phrase »), quand l'utiliser, données produites, avantages, limites,
 * exemple célèbre, puis les auteurs associés — corpus (cliquables) et hors
 * corpus (texte libre), même convention que `Courants.jsx`/`Domain.jsx`.
 */
export default function MethodeFiche() {
  const { id } = useParams();
  const m = getMethode(id);
  const { flash } = useStore();

  if (!m) {
    return <NotFound what="Cette méthode n'existe pas." />;
  }

  async function onShare() {
    const result = await shareUrl({
      title: `${m.t} — Sociologor`,
      text: m.objectif,
      url: `${window.location.origin}/me/${m.id}`,
    });
    if (result === 'copied') flash('Lien copié');
  }

  function onExport() {
    downloadText(`sociologor-methode-${slugify(m.t)}.md`, methodeToMarkdown(m));
    flash('Méthode exportée en Markdown');
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
          aria-label="Partager la méthode"
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
            Méthode
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
            Objectif
          </p>
          <p style={{ fontSize: 15.5, lineHeight: 1.5, margin: 0, textWrap: 'pretty' }}>{m.objectif}</p>
        </section>

        <h3 className="soc-kicker" style={SECTION}>
          Quand l&apos;utiliser ?
        </h3>
        <p
          style={{
            fontSize: 14,
            lineHeight: 1.6,
            margin: '0 0 24px',
            color: 'color-mix(in srgb, var(--color-text) 84%, transparent)',
            textWrap: 'pretty',
          }}
        >
          {m.quand}
        </p>

        <h3 className="soc-kicker" style={SECTION}>
          Données produites
        </h3>
        <p
          style={{
            fontSize: 14,
            lineHeight: 1.6,
            margin: '0 0 24px',
            color: 'color-mix(in srgb, var(--color-text) 84%, transparent)',
            textWrap: 'pretty',
          }}
        >
          {m.donnees}
        </p>

        <h3 className="soc-kicker" style={SECTION}>
          Avantages
        </h3>
        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
            margin: '0 0 24px',
          }}
        >
          {m.avantages.map((a) => (
            <li
              key={a}
              style={{
                fontSize: 13.5,
                lineHeight: 1.55,
                paddingLeft: 11,
                borderLeft: '2px solid var(--color-accent-700)',
                color: 'color-mix(in srgb, var(--color-text) 78%, transparent)',
                textWrap: 'pretty',
              }}
            >
              {a}
            </li>
          ))}
        </ul>

        <h3 className="soc-kicker" style={SECTION}>
          Limites
        </h3>
        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
            margin: '0 0 24px',
          }}
        >
          {m.limites.map((l) => (
            <li
              key={l}
              style={{
                fontSize: 13.5,
                lineHeight: 1.55,
                paddingLeft: 11,
                borderLeft: '2px solid var(--color-neutral-700)',
                color: 'color-mix(in srgb, var(--color-text) 78%, transparent)',
                textWrap: 'pretty',
              }}
            >
              {l}
            </li>
          ))}
        </ul>

        <h3 className="soc-kicker" style={SECTION}>
          Exemple célèbre
        </h3>
        <p
          style={{
            fontSize: 13.5,
            lineHeight: 1.55,
            margin: '0 0 28px',
            color: 'color-mix(in srgb, var(--color-text) 78%, transparent)',
            textWrap: 'pretty',
          }}
        >
          {m.exempleCelebre}
        </p>

        <h3 className="soc-kicker" style={{ margin: '0 0 8px' }}>
          Auteurs associés
        </h3>

        <div style={{ marginBottom: m.inspirateurs.length > 0 ? 10 : 24 }}>
          <p style={LABEL}>Auteurs du corpus</p>
          {m.auteursLinks.length === 0 ? (
            <p style={{ fontSize: 12.5, color: 'color-mix(in srgb, var(--color-text) 40%, transparent)', margin: 0 }}>
              Aucune fiche du corpus n&apos;est directement associée à cette méthode.
            </p>
          ) : (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {m.auteursLinks.map((a) => (
                <Link key={a.id} to={`/a/${a.id}`} className="soc-link-chip">
                  {a.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        {m.inspirateurs.length > 0 && (
          <div style={{ marginBottom: 28 }}>
            <p style={LABEL}>Hors corpus</p>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 6,
              }}
            >
              {m.inspirateurs.map((h) => (
                <li
                  key={h}
                  style={{
                    fontSize: 12.5,
                    lineHeight: 1.45,
                    paddingLeft: 10,
                    borderLeft: '2px solid var(--color-neutral-700)',
                    color: 'color-mix(in srgb, var(--color-text) 70%, transparent)',
                    textWrap: 'pretty',
                  }}
                >
                  {h}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, paddingTop: 4 }}>
          <button type="button" className="btn btn-secondary" style={{ fontSize: 12.5 }} onClick={onExport}>
            Exporter en Markdown
          </button>
          <Link className="btn btn-secondary" to="/methodes" style={{ fontSize: 12.5 }}>
            Toutes les méthodes
          </Link>
        </div>
      </article>
    </Shell>
  );
}
