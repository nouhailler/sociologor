import { Link } from 'react-router-dom';
import Shell from '../components/Shell.jsx';
import { ETUDE_COUNT, ETUDES } from '../data/index.js';

/** Liste des études empiriques citées par les fiches problématique — voir `etudes.js`. */
export default function Etudes() {
  return (
    <Shell title="Études" subtitle={`${ETUDE_COUNT} études citées`} canBack>
      <div className="soc-enter">
        <h2 className="soc-h2">Études</h2>
        <p className="soc-lede" style={{ maxWidth: '58ch', marginBottom: 18 }}>
          Des enquêtes ou des terrains précis, datés et sourcés, qui fondent ou mettent à l&apos;épreuve
          les théories citées par les fiches problématique.
        </p>
        <div className="soc-grid">
          {ETUDES.map((e) => (
            <Link key={e.id} to={`/et/${e.id}`} className="soc-card-btn">
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
                {e.auteur}, {e.annee}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </Shell>
  );
}
