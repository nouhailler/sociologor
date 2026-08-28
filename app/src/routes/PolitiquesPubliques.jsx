import { Link } from 'react-router-dom';
import Shell from '../components/Shell.jsx';
import { POLITIQUE_PUBLIQUE_COUNT, POLITIQUES_PUBLIQUES } from '../data/index.js';

/** Liste des politiques publiques citées par les fiches problématique — voir `politiques-publiques.js`. */
export default function PolitiquesPubliques() {
  return (
    <Shell title="Politiques publiques" subtitle={`${POLITIQUE_PUBLIQUE_COUNT} dispositifs cités`} canBack>
      <div className="soc-enter">
        <h2 className="soc-h2">Politiques publiques</h2>
        <p className="soc-lede" style={{ maxWidth: '58ch', marginBottom: 18 }}>
          Des dispositifs réels — pays, année, résultats et limites documentés — cités en réponse
          aux problématiques du corpus.
        </p>
        <div className="soc-grid">
          {POLITIQUES_PUBLIQUES.map((pp) => (
            <Link key={pp.id} to={`/pp/${pp.id}`} className="soc-card-btn">
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
                {pp.t}
              </span>
              <span
                style={{
                  fontSize: 11.5,
                  lineHeight: 1.4,
                  color: 'color-mix(in srgb, var(--color-text) 45%, transparent)',
                }}
              >
                {pp.pays}, {pp.annee}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </Shell>
  );
}
