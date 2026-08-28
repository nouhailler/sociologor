import { Link } from 'react-router-dom';
import Shell from '../components/Shell.jsx';
import { AUTHOR_COUNT, AUTHOR_IDS, getAuthor } from '../data/index.js';

const THUMB = { width: 64, height: 64, borderRadius: 11 };

/** Miniature d'un sociologue : sa photo si le corpus en a une, son monogramme sinon. */
function Thumb({ a }) {
  if (!a.portraitSrc) {
    return (
      <span className="soc-initials" aria-hidden="true" style={{ ...THUMB, fontSize: 17, flex: 'none' }}>
        {a.initials}
      </span>
    );
  }
  return (
    <img
      src={a.portraitSrc}
      alt=""
      width={64}
      height={64}
      loading="lazy"
      decoding="async"
      style={{
        ...THUMB,
        flex: 'none',
        display: 'block',
        objectFit: 'cover',
        border: '1px solid var(--color-neutral-700)',
      }}
    />
  );
}

/**
 * Liste des quinze fiches — quatorze auteurs et l'École de Francfort — chacune
 * accessible par sa miniature. Le pendant, côté personnes, des listes
 * thématiques (`/phenomenes`, `/processus`, `/concepts`) : celles-ci entrent
 * par le fait ou l'outil, celle-ci entre par qui l'a pensé.
 */
export default function Sociologues() {
  return (
    <Shell title="Sociologues" subtitle={`${AUTHOR_COUNT} fiches du corpus`} canBack>
      <div className="soc-enter">
        <h2 className="soc-h2">Sociologues</h2>
        <p className="soc-lede" style={{ maxWidth: '58ch', marginBottom: 18 }}>
          Quatorze auteurs et l&apos;École de Francfort, chacun avec ses concepts, ses œuvres et sa
          place dans le graphe des filiations.
        </p>

        <div className="soc-list-grid">
          {AUTHOR_IDS.map((id) => {
            const a = getAuthor(id);
            return (
              <Link key={id} to={`/a/${id}`} className="soc-row-btn">
                <Thumb a={a} />
                <span style={{ flex: 1, minWidth: 0 }}>
                  <span
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 'var(--font-heading-weight)',
                      fontSize: 15,
                      lineHeight: 1.2,
                      color: 'var(--color-text)',
                    }}
                  >
                    {a.name}
                  </span>
                  <span
                    style={{
                      display: 'block',
                      fontSize: 11.5,
                      color: 'color-mix(in srgb, var(--color-text) 48%, transparent)',
                      margin: '2px 0 5px',
                    }}
                  >
                    {a.dates} · {a.courant}
                  </span>
                  <span
                    style={{
                      display: 'block',
                      fontSize: 12.5,
                      lineHeight: 1.45,
                      color: 'color-mix(in srgb, var(--color-text) 70%, transparent)',
                      textWrap: 'pretty',
                    }}
                  >
                    {a.hook}
                  </span>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </Shell>
  );
}
