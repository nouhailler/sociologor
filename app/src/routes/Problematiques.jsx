import { Link } from 'react-router-dom';
import Shell from '../components/Shell.jsx';
import { PROBLEMATIQUE_CATEGORIES, PROBLEMATIQUE_COUNT } from '../data/index.js';

/**
 * Liste des problématiques sociales — le niveau le plus englobant du corpus :
 * une question ou un enjeu qui fait débat, objet de recherches et de
 * politiques publiques. Voir `problematiques.js` pour ce qui la distingue
 * des phénomènes, processus et mécanismes.
 */
export default function Problematiques() {
  return (
    <Shell
      title="Problématiques sociales"
      subtitle={`${PROBLEMATIQUE_COUNT} problématique${PROBLEMATIQUE_COUNT > 1 ? 's' : ''}, en ${PROBLEMATIQUE_CATEGORIES.length} catégorie${PROBLEMATIQUE_CATEGORIES.length > 1 ? 's' : ''}`}
      canBack
    >
      <div className="soc-enter">
        <h2 className="soc-h2">Problématiques sociales</h2>
        <p className="soc-lede" style={{ maxWidth: '58ch' }}>
          Une problématique est une question ou un enjeu social qui fait débat, objet de recherches
          et de politiques publiques — la pauvreté, par exemple. Elle rassemble en une seule fiche
          les phénomènes, concepts, mécanismes et processus qui l&apos;éclairent, et la façon dont la
          société la mesure, en débat et y répond.
        </p>

        {PROBLEMATIQUE_CATEGORIES.map((cat) => (
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
              {cat.problematiques.map((p) => (
                <Link key={p.id} to={`/pb/${p.id}`} className="soc-card-btn">
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
                    {p.simple}
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
