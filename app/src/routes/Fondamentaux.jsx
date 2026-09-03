import { Link } from 'react-router-dom';
import Shell from '../components/Shell.jsx';
import { FONDAMENTAL_CATEGORIES, FONDAMENTAL_COUNT } from '../data/index.js';

/**
 * Liste des concepts fondamentaux, groupés par catégorie — le vocabulaire de
 * base de la discipline, distinct des concepts du corpus qui sont chacun
 * rattachés à un auteur précis. Voir `fondamentaux.js` pour la distinction.
 */
export default function Fondamentaux() {
  return (
    <Shell
      title="Concepts fondamentaux"
      subtitle={`${FONDAMENTAL_COUNT} termes, en ${FONDAMENTAL_CATEGORIES.length} catégories`}
      canBack
    >
      <div className="soc-enter">
        <h2 className="soc-h2">Concepts fondamentaux</h2>
        <p className="soc-lede" style={{ maxWidth: '58ch' }}>
          Le vocabulaire de base de la sociologie — action, norme, institution, pouvoir. Chaque
          entrée reste courte, et renvoie vers les fiches du corpus qui l&apos;éclairent davantage.
        </p>

        {FONDAMENTAL_CATEGORIES.map((cat) => (
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
              {cat.termes.map((f) => (
                <Link key={f.id} to={`/f/${f.id}`} className="soc-card-btn">
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
                    {f.t}
                  </span>
                  <span
                    style={{
                      fontSize: 11.5,
                      lineHeight: 1.4,
                      color: 'color-mix(in srgb, var(--color-text) 45%, transparent)',
                    }}
                  >
                    {(f.concepts || []).length + (f.processus || []).length} fiche
                    {(f.concepts || []).length + (f.processus || []).length > 1 ? 's' : ''} du corpus
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
