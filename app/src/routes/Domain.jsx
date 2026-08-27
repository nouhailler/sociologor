import { Link, useParams } from 'react-router-dom';
import Shell from '../components/Shell.jsx';
import NotFound from './NotFound.jsx';
import { getDomain } from '../data/index.js';

export default function Domain() {
  const { id } = useParams();
  const domain = getDomain(id);

  if (!domain) {
    return <NotFound what="Ce domaine n'existe pas." />;
  }

  return (
    <Shell title={domain.t} subtitle={domain.familleT} canBack>
      <div className="soc-enter">
        <h2 className="soc-h2">{domain.nom}</h2>
        <p className="soc-lede" style={{ marginBottom: 14 }}>
          {domain.d}
        </p>
        {domain.detail && (
          <p
            style={{
              fontSize: 14,
              lineHeight: 1.6,
              margin: '0 0 26px',
              color: 'color-mix(in srgb, var(--color-text) 84%, transparent)',
              maxWidth: '62ch',
              textWrap: 'pretty',
            }}
          >
            {domain.detail}
          </p>
        )}
        <p className="soc-kicker" style={{ margin: '0 0 10px' }}>
          {domain.authors.length} auteur{domain.authors.length > 1 ? 's' : ''} de référence
        </p>
        <div className="soc-list-grid">
          {domain.authors.map((a) => (
            <Link key={a.id} to={`/a/${a.id}`} className="soc-row-btn">
              <span className="soc-initials" style={{ width: 42, height: 42, fontSize: 14 }}>
                {a.initials}
              </span>
              <span style={{ flex: 1, minWidth: 0 }}>
                <span
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 'var(--font-heading-weight)',
                    fontSize: 15,
                    lineHeight: 1.2,
                    color: 'var(--color-text)',
                  }}
                >
                  {a.name}
                </span>
                <span
                  style={{
                    display: 'block',
                    fontSize: 11.5,
                    color: 'color-mix(in srgb, var(--color-text) 48%, transparent)',
                    margin: '2px 0 5px',
                  }}
                >
                  {a.dates} · {a.courant}
                </span>
                <span
                  style={{
                    display: 'block',
                    fontSize: 12.5,
                    lineHeight: 1.45,
                    color: 'color-mix(in srgb, var(--color-text) 70%, transparent)',
                    textWrap: 'pretty',
                  }}
                >
                  {a.hook}
                </span>
              </span>
            </Link>
          ))}
        </div>

        {domain.inspirateurs.length > 0 && (
          <section style={{ marginTop: 26 }}>
            <p className="soc-kicker" style={{ margin: '0 0 4px' }}>
              Inspirateurs hors corpus
            </p>
            <p
              style={{
                fontSize: 12.5,
                lineHeight: 1.5,
                color: 'color-mix(in srgb, var(--color-text) 48%, transparent)',
                margin: '0 0 12px',
                maxWidth: '54ch',
              }}
            >
              Ces auteurs ont fondé ou renouvelé le domaine sans avoir de fiche dans
              l&apos;application : leur nom est ici, pas leur œuvre.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 7 }}>
              {domain.inspirateurs.map((h) => (
                <li
                  key={h}
                  style={{
                    fontSize: 13,
                    lineHeight: 1.5,
                    paddingLeft: 11,
                    borderLeft: '2px solid var(--color-neutral-700)',
                    color: 'color-mix(in srgb, var(--color-text) 76%, transparent)',
                    textWrap: 'pretty',
                  }}
                >
                  {h}
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </Shell>
  );
}
