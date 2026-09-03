import { Link } from 'react-router-dom';
import Shell from '../components/Shell.jsx';
import { ETUDE_FONDATRICE_CATEGORIES, ETUDE_FONDATRICE_COUNT } from '../data/index.js';

/**
 * Liste des études fondatrices, groupées par catégorie — les grandes
 * enquêtes qui ont fait la sociologie, reliées aux concepts qu'elles
 * mobilisent. Distinct de `/etudes`, plus court, cité par les problématiques
 * (voir `etudes-fondatrices.js`).
 */
export default function EtudesFondatrices() {
  return (
    <Shell
      title="Études fondatrices"
      subtitle={`${ETUDE_FONDATRICE_COUNT} études, en ${ETUDE_FONDATRICE_CATEGORIES.length} catégories`}
      canBack
    >
      <div className="soc-enter">
        <h2 className="soc-h2">Études fondatrices</h2>
        <p className="soc-lede" style={{ maxWidth: '58ch' }}>
          Les grandes enquêtes qui ont fait la sociologie — Hawthorne, Milgram, Asylums, La
          Distinction. Chaque fiche donne la question posée, la méthode, les résultats, et les
          concepts qu&apos;elle mobilise.
        </p>

        {ETUDE_FONDATRICE_CATEGORIES.map((cat) => (
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
              {cat.etudes.map((e) => (
                <Link key={e.id} to={`/ef/${e.id}`} className="soc-card-btn">
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
                    {e.t}
                  </span>
                  <span
                    style={{
                      fontSize: 11.5,
                      lineHeight: 1.4,
                      color: 'color-mix(in srgb, var(--color-text) 45%, transparent)',
                    }}
                  >
                    {e.date}
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
