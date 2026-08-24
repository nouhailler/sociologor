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
    <Shell title={domain.t} subtitle={`${domain.authors.length} auteurs`} canBack>
      <div className="soc-enter">
        <h2 className="soc-h2">{domain.t}</h2>
        <p className="soc-lede">{domain.d}</p>
        <p className="soc-kicker" style={{ margin: '0 0 10px' }}>
          {domain.authors.length} auteurs de référence
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
      </div>
    </Shell>
  );
}
