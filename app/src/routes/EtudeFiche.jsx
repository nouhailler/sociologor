import { Link, useParams } from 'react-router-dom';
import Shell from '../components/Shell.jsx';
import NotFound from './NotFound.jsx';
import { getEtude } from '../data/index.js';

/** Fiche étude : méthode, résumé, théorie fondée et problématiques liées. */
export default function EtudeFiche() {
  const { id } = useParams();
  const e = getEtude(id);

  if (!e) {
    return <NotFound what="Cette étude n'existe pas." />;
  }

  return (
    <Shell title={e.t} subtitle={`${e.auteur}, ${e.annee}`} canBack>
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
          {e.t}
        </h2>
        <p
          style={{
            fontSize: 12.5,
            color: 'color-mix(in srgb, var(--color-text) 50%, transparent)',
            margin: '4px 0 8px',
          }}
        >
          {e.auteur}, {e.annee}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 18 }}>
          <span className="tag tag-accent" style={{ fontSize: 10.5 }}>
            Étude
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
          <p style={{ fontSize: 15.5, lineHeight: 1.5, margin: 0, textWrap: 'pretty' }}>{e.d}</p>
        </section>

        <h3 className="soc-kicker" style={{ margin: '0 0 6px' }}>
          Méthode
        </h3>
        <p
          style={{
            fontSize: 13.5,
            lineHeight: 1.6,
            margin: '0 0 20px',
            color: 'color-mix(in srgb, var(--color-text) 78%, transparent)',
            textWrap: 'pretty',
          }}
        >
          {e.methode}
        </p>

        <p
          style={{
            fontSize: 14,
            lineHeight: 1.6,
            margin: '0 0 28px',
            color: 'color-mix(in srgb, var(--color-text) 84%, transparent)',
            textWrap: 'pretty',
          }}
        >
          {e.detail}
        </p>

        <h3 className="soc-kicker" style={{ margin: '0 0 6px' }}>
          Théorie fondée ou mise à l&apos;épreuve
        </h3>
        {e.theoriesLinks.length === 0 ? (
          <p style={{ fontSize: 12.5, color: 'color-mix(in srgb, var(--color-text) 40%, transparent)', margin: '0 0 24px' }}>
            Aucune théorie déjà décrite ne s&apos;appuie directement sur cette étude.
          </p>
        ) : (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, margin: '0 0 24px' }}>
            {e.theoriesLinks.map((t) => (
              <Link key={t.id} to={`/th/${t.id}`} className="soc-link-chip">
                {t.label}
              </Link>
            ))}
          </div>
        )}

        <h3 className="soc-kicker" style={{ margin: '0 0 6px' }}>
          Problématiques qui la citent
        </h3>
        {e.problematiquesLinks.length === 0 ? (
          <p style={{ fontSize: 12.5, color: 'color-mix(in srgb, var(--color-text) 40%, transparent)', margin: '0 0 24px' }}>
            Aucune problématique déjà décrite ne cite cette étude.
          </p>
        ) : (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, margin: '0 0 24px' }}>
            {e.problematiquesLinks.map((p) => (
              <Link key={p.id} to={`/pb/${p.id}`} className="soc-link-chip">
                {p.label}
              </Link>
            ))}
          </div>
        )}

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, paddingTop: 4 }}>
          <Link className="btn btn-secondary" to="/etudes" style={{ fontSize: 12.5 }}>
            Toutes les études
          </Link>
        </div>
      </article>
    </Shell>
  );
}
