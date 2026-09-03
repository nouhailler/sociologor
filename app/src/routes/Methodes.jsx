import { Link } from 'react-router-dom';
import Shell from '../components/Shell.jsx';
import { METHODE_CATEGORIES, METHODE_COUNT } from '../data/index.js';

/**
 * Liste des méthodes sociologiques, groupées par catégorie — comment les
 * sociologues savent ce qu'ils savent, distinct de ce qu'ils pensent
 * (concepts, phénomènes, mécanismes…). Voir `methodes.js` pour le schéma.
 */
export default function Methodes() {
  return (
    <Shell
      title="Méthodes sociologiques"
      subtitle={`${METHODE_COUNT} méthodes, en ${METHODE_CATEGORIES.length} catégories`}
      canBack
    >
      <div className="soc-enter">
        <h2 className="soc-h2">Méthodes sociologiques</h2>
        <p className="soc-lede" style={{ maxWidth: '58ch' }}>
          Un concept est ce qu'un sociologue en tire. Une méthode est comment il l&apos;a su —
          observation, entretien, questionnaire, archives. Chaque fiche donne l&apos;objectif, les
          données produites, les avantages et les limites.
        </p>

        {METHODE_CATEGORIES.map((cat) => (
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
              {cat.methodes.map((m) => (
                <Link key={m.id} to={`/me/${m.id}`} className="soc-card-btn">
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
                    {m.auteurs.length + m.inspirateurs.length} auteur
                    {m.auteurs.length + m.inspirateurs.length > 1 ? 's' : ''} associé
                    {m.auteurs.length + m.inspirateurs.length > 1 ? 's' : ''}
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
