import { Link } from 'react-router-dom';
import Shell from '../components/Shell.jsx';
import { PROCESSUS_CATEGORIES, PROCESSUS_COUNT } from '../data/index.js';

/**
 * Liste des processus sociaux, groupés par catégorie. Un phénomène
 * (`/phenomenes`) est un état ; un processus est la trajectoire qui y mène —
 * voir `processus.js` pour la distinction.
 */
export default function Processus() {
  return (
    <Shell
      title="Processus sociaux"
      subtitle={`${PROCESSUS_COUNT} processus, en ${PROCESSUS_CATEGORIES.length} catégories`}
      canBack
    >
      <div className="soc-enter">
        <h2 className="soc-h2">Processus sociaux</h2>
        <p className="soc-lede" style={{ maxWidth: '58ch' }}>
          Un phénomène est un état — le chômage, la pauvreté. Un processus est la trajectoire qui y
          mène — la précarisation, le déclassement. Chaque fiche déroule ses étapes types.
        </p>

        {PROCESSUS_CATEGORIES.map((cat) => (
          <section key={cat.id} style={{ marginBottom: 26 }}>
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
              {cat.t}
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
              {cat.d}
            </p>
            <div className="soc-grid">
              {cat.processus.map((p) => (
                <Link key={p.id} to={`/pr/${p.id}`} className="soc-card-btn">
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
                    {p.t}
                  </span>
                  <span
                    style={{
                      fontSize: 11.5,
                      lineHeight: 1.4,
                      color: 'color-mix(in srgb, var(--color-text) 45%, transparent)',
                    }}
                  >
                    {p.etapes.length} étapes
                  </span>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </Shell>
  );
}
