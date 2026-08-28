import { Link } from 'react-router-dom';
import Shell from '../components/Shell.jsx';
import { CONCEPT_COUNT, CONCEPTS_BY_AUTHOR } from '../data/index.js';

/**
 * Liste des concepts sociaux, groupés par auteur — le pendant théorique des
 * phénomènes (`/phenomenes`, des faits concrets) et des processus
 * (`/processus`, les trajectoires qui y mènent). Un concept est l'outil que
 * ces deux-là mobilisent pour s'expliquer.
 */
export default function Concepts() {
  return (
    <Shell
      title="Concepts sociaux"
      subtitle={`${CONCEPT_COUNT} concepts, en ${CONCEPTS_BY_AUTHOR.length} auteurs`}
      canBack
    >
      <div className="soc-enter">
        <h2 className="soc-h2">Concepts sociaux</h2>
        <p className="soc-lede" style={{ maxWidth: '58ch' }}>
          Un concept est un outil théorique — l&apos;anomie, l&apos;habitus. Il éclaire les
          phénomènes, des faits concrets, et les processus, les trajectoires qui y mènent.
        </p>

        {CONCEPTS_BY_AUTHOR.map((a) => (
          <section key={a.id} style={{ marginBottom: 26 }}>
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
              {a.name}
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
              {a.dates} · {a.courant}
            </p>
            <div className="soc-grid">
              {a.concepts.map((c) => (
                <Link key={c.id} to={`/c/${c.id}`} className="soc-card-btn">
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
                    {c.t}
                  </span>
                  <span
                    style={{
                      fontSize: 11.5,
                      lineHeight: 1.4,
                      color: 'color-mix(in srgb, var(--color-text) 45%, transparent)',
                    }}
                  >
                    {c.year}
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
