import { Link } from 'react-router-dom';
import Shell from '../components/Shell.jsx';
import { MECANISME_CATEGORIES, MECANISME_COUNT } from '../data/index.js';

/**
 * Liste des mécanismes sociaux, groupés par catégorie — le rouage entre le
 * phénomène (un fait constaté) et le processus (la trajectoire qu'il
 * dessine) : voir `mecanismes.js` pour la distinction.
 */
export default function Mecanismes() {
  return (
    <Shell
      title="Mécanismes sociaux"
      subtitle={`${MECANISME_COUNT} mécanismes, en ${MECANISME_CATEGORIES.length} catégories`}
      canBack
    >
      <div className="soc-enter">
        <h2 className="soc-h2">Mécanismes sociaux</h2>
        <p className="soc-lede" style={{ maxWidth: '58ch' }}>
          Un phénomène est un état — les inégalités scolaires. Un processus est la trajectoire qui y
          mène — la reproduction sociale. Un mécanisme est l&apos;un des rouages qui font tourner
          cette trajectoire — la transmission du capital culturel, la sélection scolaire, l&apos;homogamie.
        </p>

        {MECANISME_CATEGORIES.map((cat) => (
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
              {cat.mecanismes.map((m) => (
                <Link key={m.id} to={`/m/${m.id}`} className="soc-card-btn">
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
                    {m.t}
                  </span>
                  <span
                    style={{
                      fontSize: 11.5,
                      lineHeight: 1.4,
                      color: 'color-mix(in srgb, var(--color-text) 45%, transparent)',
                    }}
                  >
                    {m.processus.length} processus alimenté{m.processus.length > 1 ? 's' : ''}
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
