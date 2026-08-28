import { Link } from 'react-router-dom';
import Shell from '../components/Shell.jsx';
import { THEORIE_COUNT, THEORIES } from '../data/index.js';

/**
 * Liste des théories citées par les fiches problématique : des cadres
 * explicatifs signés, à distinguer des concepts du corpus — voir
 * `theories.js` pour la distinction.
 */
export default function Theories() {
  return (
    <Shell title="Théories" subtitle={`${THEORIE_COUNT} théories citées`} canBack>
      <div className="soc-enter">
        <h2 className="soc-h2">Théories</h2>
        <p className="soc-lede" style={{ maxWidth: '58ch', marginBottom: 18 }}>
          Des cadres explicatifs signés et datés, cités par les fiches problématique — à distinguer
          des concepts du corpus, des outils qu'on retrouve d'une fiche à l'autre.
        </p>
        <div className="soc-grid">
          {THEORIES.map((t) => (
            <Link key={t.id} to={`/th/${t.id}`} className="soc-card-btn">
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
                {t.t}
              </span>
              <span
                style={{
                  fontSize: 11.5,
                  lineHeight: 1.4,
                  color: 'color-mix(in srgb, var(--color-text) 45%, transparent)',
                }}
              >
                {t.auteur}, {t.annee}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </Shell>
  );
}
