import { Link, useNavigate } from 'react-router-dom';
import Shell from '../components/Shell.jsx';
import { IconGear, IconSearch } from '../components/Icons.jsx';
import {
  AUTHOR_COUNT,
  AUTHORS,
  DOMAIN_COUNT,
  DOMAIN_FAMILIES,
  PHENOMENE_COUNT,
  PROCESSUS_COUNT,
  conceptOfTheDay,
} from '../data/index.js';

export default function Home() {
  const navigate = useNavigate();
  const daily = conceptOfTheDay();
  const dailyAuthor = AUTHORS[daily.authorId];

  return (
    <Shell
      title="Sociologor"
      subtitle={`${AUTHOR_COUNT} fiches · ${DOMAIN_COUNT} domaines · hors ligne`}
      actions={
        <>
          <button
            type="button"
            className="btn btn-secondary soc-icon-btn"
            aria-label="Rechercher"
            onClick={() => navigate('/recherche')}
          >
            <IconSearch size={15} />
          </button>
          <button
            type="button"
            className="btn btn-secondary soc-icon-btn"
            aria-label="Paramètres"
            onClick={() => navigate('/parametres')}
          >
            <IconGear size={16} />
          </button>
        </>
      }
    >
      <div className="soc-enter">
        <p className="soc-h1">
          La sociologie,
          <br />
          <span style={{ color: 'var(--color-accent)' }}>reliée.</span>
        </p>
        <p className="soc-lede" style={{ maxWidth: '52ch' }}>
          Quinze fiches — quatorze auteurs et une école — leurs concepts et leur filiation. Entrez par un
          domaine, ou suivez les fils du graphe : chaque fiche pointe vers les suivantes.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
          <Link to="/phenomenes" className="btn btn-ghost" style={{ fontSize: 12.5 }}>
            {PHENOMENE_COUNT} phénomènes sociaux — du chômage à la gentrification →
          </Link>
          <Link to="/processus" className="btn btn-ghost" style={{ fontSize: 12.5 }}>
            {PROCESSUS_COUNT} processus sociaux — de la précarisation au déclassement →
          </Link>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            margin: '0 0 10px',
          }}
        >
          <h2 className="soc-kicker">Notion du jour</h2>
          <span className="tag tag-neutral" style={{ fontSize: 10 }}>
            expliquée simplement
          </span>
        </div>

        <article
          style={{
            padding: '16px 18px',
            borderRadius: 'var(--radius-lg)',
            background:
              'linear-gradient(150deg, var(--color-section) 0%, var(--color-accent-900) 55%, var(--color-surface) 100%)',
            boxShadow: 'var(--shadow-sm)',
            marginBottom: 26,
            maxWidth: 760,
          }}
        >
          <h3
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 'var(--font-heading-weight)',
              fontSize: 26,
              lineHeight: 1.08,
              letterSpacing: '-0.025em',
              margin: 0,
            }}
          >
            {daily.t}
          </h3>
          <p
            style={{
              fontSize: 11,
              color: 'color-mix(in srgb, var(--color-text) 55%, transparent)',
              margin: '3px 0 11px',
              letterSpacing: '0.03em',
            }}
          >
            {daily.authorName} · {daily.year} · {daily.courant}
          </p>
          <p style={{ fontSize: 14, lineHeight: 1.55, margin: '0 0 8px', maxWidth: '56ch', textWrap: 'pretty' }}>
            {daily.simple}
          </p>
          <p
            style={{
              fontSize: 12.5,
              lineHeight: 1.5,
              margin: '0 0 14px',
              maxWidth: '56ch',
              color: 'color-mix(in srgb, var(--color-text) 62%, transparent)',
              textWrap: 'pretty',
            }}
          >
            <span style={{ color: 'var(--color-accent-300)' }}>Concrètement — </span>
            {daily.ex}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Link className="btn btn-primary" to={`/c/${daily.id}`} style={{ fontSize: 12.5 }}>
              Ouvrir la fiche du concept
            </Link>
            <Link className="btn btn-secondary" to={`/a/${daily.authorId}`} style={{ fontSize: 12.5 }}>
              Fiche de {dailyAuthor.name.split(' ').slice(-1)[0]}
            </Link>
          </div>
        </article>

        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            margin: '0 0 10px',
          }}
        >
          <h2 className="soc-kicker">Les domaines</h2>
          <Link className="btn btn-ghost" to="/graphe" style={{ fontSize: 12 }}>
            Voir le graphe →
          </Link>
        </div>

        {DOMAIN_FAMILIES.map((f) => (
          <section key={f.id} style={{ marginBottom: 22 }}>
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 'var(--font-heading-weight)',
                fontSize: 13,
                letterSpacing: '0.02em',
                color: 'var(--color-accent-300)',
                margin: '0 0 2px',
              }}
            >
              {f.t}
            </h3>
            <p
              style={{
                fontSize: 12,
                lineHeight: 1.45,
                color: 'color-mix(in srgb, var(--color-text) 45%, transparent)',
                margin: '0 0 10px',
                maxWidth: '52ch',
              }}
            >
              {f.d}
            </p>
            <div className="soc-grid">
              {f.domains.map((d) => {
                const n = d.a.filter((id) => AUTHORS[id]).length;
                return (
                  <Link key={d.id} to={`/d/${d.id}`} className="soc-card-btn">
                    <span
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 'var(--font-heading-weight)',
                        fontSize: 14,
                        lineHeight: 1.2,
                        letterSpacing: '-0.01em',
                        color: 'var(--color-text)',
                      }}
                    >
                      {d.t}
                    </span>
                    <span
                      style={{
                        fontSize: 11.5,
                        lineHeight: 1.4,
                        color: 'color-mix(in srgb, var(--color-text) 45%, transparent)',
                      }}
                    >
                      {n} auteur{n > 1 ? 's' : ''}
                    </span>
                  </Link>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </Shell>
  );
}
