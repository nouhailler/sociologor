import { Link, useParams } from 'react-router-dom';
import Shell from '../components/Shell.jsx';
import NotFound from './NotFound.jsx';
import { getStatistique } from '../data/index.js';

/** Fiche statistique : définition, ordre de grandeur, limites méthodologiques. */
export default function StatistiqueFiche() {
  const { id } = useParams();
  const s = getStatistique(id);

  if (!s) {
    return <NotFound what="Cette statistique n'existe pas." />;
  }

  return (
    <Shell title={s.t} subtitle={s.source} canBack>
      <article className="soc-enter" style={{ maxWidth: 780 }}>
        <h2
          style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 'var(--font-heading-weight)',
            fontSize: 'clamp(22px, 4vw, 32px)',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            margin: '4px 0 0',
          }}
        >
          {s.t}
        </h2>
        <p
          style={{
            fontSize: 12.5,
            color: 'color-mix(in srgb, var(--color-text) 50%, transparent)',
            margin: '4px 0 8px',
          }}
        >
          {s.source}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 18 }}>
          <span className="tag tag-accent" style={{ fontSize: 10.5 }}>
            Statistique
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
            Ordre de grandeur
          </p>
          <p style={{ fontSize: 15.5, lineHeight: 1.5, margin: 0, textWrap: 'pretty' }}>{s.valeur}</p>
        </section>

        <p
          style={{
            fontSize: 14,
            lineHeight: 1.6,
            margin: '0 0 20px',
            color: 'color-mix(in srgb, var(--color-text) 84%, transparent)',
            textWrap: 'pretty',
          }}
        >
          {s.d}
        </p>
        <p
          style={{
            fontSize: 13.5,
            lineHeight: 1.6,
            margin: '0 0 20px',
            color: 'color-mix(in srgb, var(--color-text) 78%, transparent)',
            textWrap: 'pretty',
          }}
        >
          {s.detail}
        </p>

        <h3 className="soc-kicker" style={{ margin: '0 0 6px' }}>
          Limites
        </h3>
        <p
          style={{
            fontSize: 13,
            lineHeight: 1.55,
            margin: '0 0 24px',
            color: 'color-mix(in srgb, var(--color-text) 70%, transparent)',
            textWrap: 'pretty',
            paddingLeft: 11,
            borderLeft: '2px solid var(--color-neutral-700)',
          }}
        >
          {s.limites}
        </p>

        <h3 className="soc-kicker" style={{ margin: '0 0 6px' }}>
          Problématiques qui la citent
        </h3>
        {s.problematiquesLinks.length === 0 ? (
          <p style={{ fontSize: 12.5, color: 'color-mix(in srgb, var(--color-text) 40%, transparent)', margin: '0 0 24px' }}>
            Aucune problématique déjà décrite ne cite cette statistique.
          </p>
        ) : (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, margin: '0 0 24px' }}>
            {s.problematiquesLinks.map((p) => (
              <Link key={p.id} to={`/pb/${p.id}`} className="soc-link-chip">
                {p.label}
              </Link>
            ))}
          </div>
        )}

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, paddingTop: 4 }}>
          <Link className="btn btn-secondary" to="/statistiques" style={{ fontSize: 12.5 }}>
            Toutes les statistiques
          </Link>
        </div>
      </article>
    </Shell>
  );
}
