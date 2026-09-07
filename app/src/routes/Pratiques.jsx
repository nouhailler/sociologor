import { Link } from 'react-router-dom';
import Shell from '../components/Shell.jsx';
import { PRATIQUE_CATEGORIES, PRATIQUE_COUNT } from '../data/index.js';

/**
 * Liste des pratiques sociales, groupées par catégorie — ce que les
 * individus font concrètement, du vote à la lecture. Voir `pratiques.js`.
 */
export default function Pratiques() {
  return (
    <Shell
      title="Pratiques sociales"
      subtitle={`${PRATIQUE_COUNT} pratiques, en ${PRATIQUE_CATEGORIES.length} catégories`}
      canBack
    >
      <div className="soc-enter">
        <h2 className="soc-h2">Pratiques sociales</h2>
        <p className="soc-lede" style={{ maxWidth: '58ch' }}>
          Consommer, voter, lire, se déplacer : ce que les individus font concrètement, chacun relié à
          la classe sociale, au genre, à l&apos;âge, au territoire, au capital culturel, à l&apos;habitus
          et à la socialisation qui l&apos;expliquent.
        </p>

        {PRATIQUE_CATEGORIES.map((cat) => (
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
              {cat.pratiques.map((p) => (
                <Link key={p.id} to={`/pra/${p.id}`} className="soc-card-btn">
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
                    {p.fondamentaux.length} mécanismes liés
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
