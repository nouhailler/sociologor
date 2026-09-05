import { Link } from 'react-router-dom';
import Shell from '../components/Shell.jsx';
import { GROUPE_SOCIAL_CATEGORIES, GROUPE_SOCIAL_COUNT } from '../data/index.js';

/**
 * Liste des groupes sociaux, groupés par catégorie — les grandes formes que
 * prend un collectif, du groupe primaire au réseau. Voir `groupes-sociaux.js`.
 */
export default function GroupesSociaux() {
  return (
    <Shell
      title="Groupes sociaux"
      subtitle={`${GROUPE_SOCIAL_COUNT} groupes, en ${GROUPE_SOCIAL_CATEGORIES.length} catégories`}
      canBack
    >
      <div className="soc-enter">
        <h2 className="soc-h2">Groupes sociaux</h2>
        <p className="soc-lede" style={{ maxWidth: '58ch' }}>
          Du groupe primaire à la diaspora, de la classe sociale au réseau : les grandes formes que
          prend un collectif, chacune reliée aux concepts fondamentaux et aux concepts du corpus
          qui l&apos;éclairent.
        </p>

        {GROUPE_SOCIAL_CATEGORIES.map((cat) => (
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
              {cat.groupes.map((g) => (
                <Link key={g.id} to={`/gs/${g.id}`} className="soc-card-btn">
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
                    {g.t}
                  </span>
                  <span
                    style={{
                      fontSize: 11.5,
                      lineHeight: 1.4,
                      color: 'color-mix(in srgb, var(--color-text) 45%, transparent)',
                    }}
                  >
                    {g.fondamentaux.length} mécanismes liés
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
