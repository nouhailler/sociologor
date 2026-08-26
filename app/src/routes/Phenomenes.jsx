import { Link } from 'react-router-dom';
import Shell from '../components/Shell.jsx';
import { PHENOMENE_CATEGORIES, PHENOMENE_COUNT } from '../data/index.js';

/**
 * Liste des phénomènes sociaux, groupés par catégorie — le pendant, côté
 * faits concrets, de l'entrée par domaines côté auteurs. Un phénomène nomme
 * les concepts du corpus qui l'éclairent et les notions qui n'en ont pas :
 * voir `phenomenes.js` pour la distinction.
 */
export default function Phenomenes() {
  return (
    <Shell title="Phénomènes sociaux" subtitle={`${PHENOMENE_COUNT} phénomènes, en ${PHENOMENE_CATEGORIES.length} catégories`} canBack>
      <div className="soc-enter">
        <h2 className="soc-h2">Phénomènes sociaux</h2>
        <p className="soc-lede" style={{ maxWidth: '58ch' }}>
          Un concept est un outil théorique — l&apos;anomie, l&apos;habitus. Un phénomène est un fait
          social concret — le chômage, la gentrification. Chaque fiche relie l&apos;un aux autres.
        </p>

        {PHENOMENE_CATEGORIES.map((cat) => (
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
              {cat.phenomenes.map((p) => (
                <Link key={p.id} to={`/p/${p.id}`} className="soc-card-btn">
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
                    {p.concepts.length} concept{p.concepts.length > 1 ? 's' : ''} du corpus
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
