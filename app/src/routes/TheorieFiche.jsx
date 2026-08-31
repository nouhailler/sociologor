import { Link, useParams } from 'react-router-dom';
import Shell from '../components/Shell.jsx';
import NotFound from './NotFound.jsx';
import { getTheorie } from '../data/index.js';

/** Fiche théorie : une mini-fiche — attribution, résumé, concepts et problématiques liés. */
export default function TheorieFiche() {
  const { id } = useParams();
  const t = getTheorie(id);

  if (!t) {
    return <NotFound what="Cette théorie n'existe pas." />;
  }

  return (
    <Shell title={t.t} subtitle={`${t.auteur}, ${t.annee}`} canBack>
      <article className="soc-enter" style={{ maxWidth: 780 }}>
        <h2
          style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 'var(--font-heading-weight)',
            fontSize: 'clamp(24px, 4vw, 34px)',
            lineHeight: 1.08,
            letterSpacing: '-0.03em',
            margin: '4px 0 0',
          }}
        >
          {t.t}
        </h2>
        <p
          style={{
            fontSize: 12.5,
            color: 'color-mix(in srgb, var(--color-text) 50%, transparent)',
            margin: '4px 0 8px',
          }}
        >
          {t.auteur}, {t.annee} · <em style={{ fontStyle: 'italic' }}>{t.oeuvre}</em>
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 18 }}>
          <span className="tag tag-accent" style={{ fontSize: 10.5 }}>
            Théorie
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
          <p style={{ fontSize: 15.5, lineHeight: 1.5, margin: 0, textWrap: 'pretty' }}>{t.d}</p>
        </section>

        <p
          style={{
            fontSize: 14,
            lineHeight: 1.6,
            margin: '0 0 28px',
            color: 'color-mix(in srgb, var(--color-text) 84%, transparent)',
            textWrap: 'pretty',
          }}
        >
          {t.detail}
        </p>

        <h3 className="soc-kicker" style={{ margin: '0 0 6px' }}>
          Concepts du corpus
        </h3>
        {t.conceptsLinks.length === 0 ? (
          <p style={{ fontSize: 12.5, color: 'color-mix(in srgb, var(--color-text) 40%, transparent)', margin: '0 0 24px' }}>
            Aucun concept des dix-sept fiches ne porte directement sur cette théorie.
          </p>
        ) : (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, margin: '0 0 24px' }}>
            {t.conceptsLinks.map((c) => (
              <Link key={c.id} to={`/c/${c.id}`} className="soc-link-chip">
                {c.label}
                <span style={{ opacity: 0.5 }}> · {c.authorName}</span>
              </Link>
            ))}
          </div>
        )}

        <h3 className="soc-kicker" style={{ margin: '0 0 6px' }}>
          Problématiques qui la citent
        </h3>
        {t.problematiquesLinks.length === 0 ? (
          <p style={{ fontSize: 12.5, color: 'color-mix(in srgb, var(--color-text) 40%, transparent)', margin: '0 0 24px' }}>
            Aucune problématique déjà décrite ne cite cette théorie.
          </p>
        ) : (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, margin: '0 0 24px' }}>
            {t.problematiquesLinks.map((p) => (
              <Link key={p.id} to={`/pb/${p.id}`} className="soc-link-chip">
                {p.label}
              </Link>
            ))}
          </div>
        )}

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, paddingTop: 4 }}>
          <Link className="btn btn-secondary" to="/theories" style={{ fontSize: 12.5 }}>
            Toutes les théories
          </Link>
        </div>
      </article>
    </Shell>
  );
}
