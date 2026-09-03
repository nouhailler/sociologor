import { Link, useParams } from 'react-router-dom';
import Shell from '../components/Shell.jsx';
import NotFound from './NotFound.jsx';
import { IconShare } from '../components/Icons.jsx';
import { getEtudeFondatrice } from '../data/index.js';
import { useStore } from '../state/store.jsx';
import { downloadText, etudeFondatriceToMarkdown, slugify } from '../lib/markdown-export.js';
import { shareUrl } from '../lib/share.js';

const SECTION = { margin: '0 0 10px' };
const LABEL = {
  fontSize: 11,
  color: 'color-mix(in srgb, var(--color-text) 45%, transparent)',
  margin: '0 0 6px',
};

/**
 * Fiche étude fondatrice. Gabarit fixe : question (bandeau « En une
 * phrase »), repères (date/lieu/population), méthode, résultats, concepts
 * mobilisés, limites, critiques, postérité, puis les auteurs associés —
 * corpus (cliquables) et hors corpus (texte libre), comme `MethodeFiche.jsx`.
 */
export default function EtudeFondatriceFiche() {
  const { id } = useParams();
  const e = getEtudeFondatrice(id);
  const { flash } = useStore();

  if (!e) {
    return <NotFound what="Cette étude n'existe pas." />;
  }

  async function onShare() {
    const result = await shareUrl({
      title: `${e.t} — Sociologor`,
      text: e.question,
      url: `${window.location.origin}/ef/${e.id}`,
    });
    if (result === 'copied') flash('Lien copié');
  }

  function onExport() {
    downloadText(`sociologor-etude-fondatrice-${slugify(e.t)}.md`, etudeFondatriceToMarkdown(e));
    flash('Étude exportée en Markdown');
  }

  return (
    <Shell
      title={e.t}
      subtitle={e.categorieT}
      canBack
      actions={
        <button
          type="button"
          className="btn btn-secondary soc-icon-btn"
          aria-label="Partager l'étude"
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
            fontSize: 'clamp(24px, 4vw, 34px)',
            lineHeight: 1.06,
            letterSpacing: '-0.03em',
            margin: '4px 0 0',
          }}
        >
          {e.t}
        </h2>
        <p
          style={{
            fontSize: 12.5,
            color: 'color-mix(in srgb, var(--color-text) 50%, transparent)',
            margin: '4px 0 8px',
          }}
        >
          {e.categorieT}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 18 }}>
          <span className="tag tag-accent" style={{ fontSize: 10.5 }}>
            Étude fondatrice
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
            Question
          </p>
          <p style={{ fontSize: 15.5, lineHeight: 1.5, margin: 0, textWrap: 'pretty' }}>{e.question}</p>
        </section>

        <table className="table" style={{ marginBottom: 24 }}>
          <tbody>
            <tr>
              <td style={{ width: 100 }}>Date</td>
              <td style={{ textAlign: 'right' }}>{e.date}</td>
            </tr>
            <tr>
              <td>Lieu</td>
              <td style={{ textAlign: 'right' }}>{e.lieu}</td>
            </tr>
            <tr>
              <td>Population</td>
              <td style={{ textAlign: 'right' }}>{e.population}</td>
            </tr>
          </tbody>
        </table>

        <h3 className="soc-kicker" style={SECTION}>
          Méthode
        </h3>
        <p
          style={{
            fontSize: 14,
            lineHeight: 1.6,
            margin: '0 0 10px',
            color: 'color-mix(in srgb, var(--color-text) 84%, transparent)',
            textWrap: 'pretty',
          }}
        >
          {e.methode}
        </p>
        {e.methodesLinks.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, margin: '0 0 24px' }}>
            {e.methodesLinks.map((m) => (
              <Link key={m.id} to={`/me/${m.id}`} className="soc-link-chip">
                {m.label}
              </Link>
            ))}
          </div>
        )}
        {e.methodesLinks.length === 0 && <div style={{ marginBottom: 24 }} />}

        <h3 className="soc-kicker" style={SECTION}>
          Résultats
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
          {e.resultats}
        </p>

        <h3 className="soc-kicker" style={{ margin: '0 0 6px' }}>
          Concepts mobilisés
        </h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, margin: e.processusLinks.length ? '0 0 10px' : '0 0 24px' }}>
          {e.conceptsLinks.map((c) => (
            <Link key={c.id} to={`/c/${c.id}`} className="soc-link-chip">
              {c.label}
              <span style={{ opacity: 0.5 }}> · {c.authorName}</span>
            </Link>
          ))}
        </div>
        {e.processusLinks.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, margin: '0 0 24px' }}>
            {e.processusLinks.map((p) => (
              <Link key={p.id} to={`/pr/${p.id}`} className="soc-link-chip">
                ↳ {p.label}
              </Link>
            ))}
          </div>
        )}

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
          {e.limites.map((l) => (
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
          Critiques
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
          {e.critiques.map((c) => (
            <li
              key={c}
              style={{
                fontSize: 13.5,
                lineHeight: 1.55,
                paddingLeft: 11,
                borderLeft: '2px solid var(--color-accent-700)',
                color: 'color-mix(in srgb, var(--color-text) 78%, transparent)',
                textWrap: 'pretty',
              }}
            >
              {c}
            </li>
          ))}
        </ul>

        <h3 className="soc-kicker" style={SECTION}>
          Postérité
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
          {e.posterite}
        </p>

        <h3 className="soc-kicker" style={{ margin: '0 0 8px' }}>
          Auteurs associés
        </h3>

        <div style={{ marginBottom: e.inspirateurs.length > 0 ? 10 : 24 }}>
          <p style={LABEL}>Auteurs du corpus</p>
          {e.auteursLinks.length === 0 ? (
            <p style={{ fontSize: 12.5, color: 'color-mix(in srgb, var(--color-text) 40%, transparent)', margin: 0 }}>
              Aucune fiche du corpus n&apos;est directement associée à cette étude.
            </p>
          ) : (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {e.auteursLinks.map((a) => (
                <Link key={a.id} to={`/a/${a.id}`} className="soc-link-chip">
                  {a.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        {e.inspirateurs.length > 0 && (
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
              {e.inspirateurs.map((h) => (
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
          <Link className="btn btn-secondary" to="/etudes-fondatrices" style={{ fontSize: 12.5 }}>
            Toutes les études fondatrices
          </Link>
        </div>
      </article>
    </Shell>
  );
}
