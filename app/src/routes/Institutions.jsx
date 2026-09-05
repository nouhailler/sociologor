import { Link } from 'react-router-dom';
import Shell from '../components/Shell.jsx';
import { INSTITUTION_CATEGORIES, INSTITUTION_COUNT } from '../data/index.js';

/**
 * Liste des institutions sociales, groupées par catégorie — comment un
 * cadre concret (famille, école, État, prison…) produit des normes, des
 * rôles, des statuts et des comportements. Voir `institutions.js`.
 */
export default function Institutions() {
  return (
    <Shell
      title="Institutions sociales"
      subtitle={`${INSTITUTION_COUNT} institutions, en ${INSTITUTION_CATEGORIES.length} catégories`}
      canBack
    >
      <div className="soc-enter">
        <h2 className="soc-h2">Institutions sociales</h2>
        <p className="soc-lede" style={{ maxWidth: '58ch' }}>
          Comment une institution produit-elle des normes, des rôles, des statuts et des
          comportements ? Chaque fiche relie un cadre concret aux mécanismes déjà décrits dans les
          concepts fondamentaux.
        </p>

        {INSTITUTION_CATEGORIES.map((cat) => (
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
              {cat.institutions.map((i) => (
                <Link key={i.id} to={`/in/${i.id}`} className="soc-card-btn">
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
                    {i.t}
                  </span>
                  <span
                    style={{
                      fontSize: 11.5,
                      lineHeight: 1.4,
                      color: 'color-mix(in srgb, var(--color-text) 45%, transparent)',
                    }}
                  >
                    {i.fondamentaux.length} mécanismes liés
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
