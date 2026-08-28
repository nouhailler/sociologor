import { Link } from 'react-router-dom';
import Shell from '../components/Shell.jsx';
import { STATISTIQUE_COUNT, STATISTIQUES } from '../data/index.js';

/** Liste des indicateurs statistiques cités par les fiches problématique — voir `statistiques.js`. */
export default function Statistiques() {
  return (
    <Shell title="Statistiques" subtitle={`${STATISTIQUE_COUNT} indicateurs cités`} canBack>
      <div className="soc-enter">
        <h2 className="soc-h2">Statistiques</h2>
        <p className="soc-lede" style={{ maxWidth: '58ch', marginBottom: 18 }}>
          Des définitions d&apos;indicateurs et leur ordre de grandeur, sourcés et datés — pas des
          chiffres figés : chaque fiche renvoie vers sa source pour une valeur à jour.
        </p>
        <div className="soc-grid">
          {STATISTIQUES.map((s) => (
            <Link key={s.id} to={`/st/${s.id}`} className="soc-card-btn">
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
                {s.t}
              </span>
              <span
                style={{
                  fontSize: 11.5,
                  lineHeight: 1.4,
                  color: 'color-mix(in srgb, var(--color-text) 45%, transparent)',
                }}
              >
                {s.source}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </Shell>
  );
}
