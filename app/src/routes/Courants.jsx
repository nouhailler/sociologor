import { useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Shell from '../components/Shell.jsx';
import { COURANT_COUNT, COURANT_PERIODES } from '../data/index.js';

const LABEL = {
  fontSize: 11,
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  color: 'color-mix(in srgb, var(--color-text) 42%, transparent)',
  margin: '0 0 5px',
  fontFamily: 'var(--font-heading)',
};

/**
 * Carte des courants : la même filiation que le graphe, mais entre manières de
 * faire de la sociologie plutôt qu'entre personnes. Disposition verticale par
 * période — elle tient sur un téléphone, ce que le graphe à coordonnées fixes
 * ne sait pas faire.
 */
export default function Courants() {
  const [params] = useSearchParams();
  const focus = params.get('focus');
  const focusRef = useRef(null);

  // « Situer dans la carte » depuis une fiche auteur.
  useEffect(() => {
    if (focus && focusRef.current) {
      focusRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [focus]);

  return (
    <Shell title="Carte des courants" subtitle={`${COURANT_COUNT} courants, du positivisme au pragmatisme`}>
      <div className="soc-enter" style={{ maxWidth: 760 }}>
        <h2 className="soc-h2">Carte des courants</h2>
        <p className="soc-lede" style={{ marginBottom: 6 }}>
          Non pas qui a lu qui — c&apos;est le{' '}
          <Link to="/graphe" style={{ color: 'var(--color-accent-300)' }}>
            graphe des filiations
          </Link>{' '}
          — mais d&apos;où vient une manière de faire de la sociologie, et ce qu&apos;elle a produit.
        </p>
        <p
          style={{
            fontSize: 12.5,
            lineHeight: 1.5,
            color: 'color-mix(in srgb, var(--color-text) 48%, transparent)',
            margin: '0 0 22px',
            maxWidth: '58ch',
          }}
        >
          Une filiation entre courants n&apos;est pas une filiation entre personnes : Weber n&apos;a pas
          lu les interactionnistes, sa sociologie compréhensive leur a pourtant donné leur point de
          départ.
        </p>

        {COURANT_PERIODES.map((p) => (
          <section key={p.id} style={{ marginBottom: 30 }}>
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 'var(--font-heading-weight)',
                fontSize: 13.5,
                color: 'var(--color-accent-300)',
                margin: '0 0 2px',
              }}
            >
              {p.t}
            </h3>
            <p
              style={{
                fontSize: 12,
                lineHeight: 1.45,
                color: 'color-mix(in srgb, var(--color-text) 45%, transparent)',
                margin: '0 0 14px',
                maxWidth: '54ch',
              }}
            >
              {p.d}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {p.courants.map((c) => {
                const active = focus === c.id;
                return (
                  <article
                    key={c.id}
                    id={`courant-${c.id}`}
                    ref={active ? focusRef : null}
                    data-active={active}
                    style={{
                      padding: 16,
                      borderRadius: 'var(--radius-lg)',
                      background: 'var(--color-section)',
                      border: active ? '1px solid var(--color-accent)' : '1px solid var(--color-divider)',
                      boxShadow: active
                        ? '0 0 0 3px color-mix(in srgb, var(--color-accent) 18%, transparent)'
                        : 'var(--shadow-sm)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', margin: '0 0 4px' }}>
                      <h4
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontWeight: 'var(--font-heading-weight)',
                          fontSize: 16,
                          margin: 0,
                          color: 'var(--color-text)',
                        }}
                      >
                        {c.t}
                      </h4>
                      <span
                        style={{
                          fontSize: 10.5,
                          letterSpacing: '0.05em',
                          textTransform: 'uppercase',
                          padding: '2px 7px',
                          borderRadius: 'var(--radius-full, 999px)',
                          border: '1px solid var(--color-accent-300)',
                          color: 'var(--color-accent-300)',
                          fontFamily: 'var(--font-heading)',
                        }}
                      >
                        {c.niveauT}
                      </span>
                    </div>
                    {c.parentLink && (
                      <p style={{ fontSize: 12, margin: '0 0 8px', color: 'color-mix(in srgb, var(--color-text) 50%, transparent)' }}>
                        Fait partie de{' '}
                        <Link to={`/courants?focus=${c.parentLink.id}`} style={{ color: 'var(--color-accent-300)' }}>
                          {c.parentLink.t}
                        </Link>
                      </p>
                    )}
                    <p style={{ fontSize: 13.5, lineHeight: 1.5, margin: '0 0 8px', textWrap: 'pretty' }}>{c.d}</p>
                    <p
                      style={{
                        fontSize: 12.5,
                        lineHeight: 1.55,
                        color: 'color-mix(in srgb, var(--color-text) 72%, transparent)',
                        margin: '0 0 12px',
                        textWrap: 'pretty',
                      }}
                    >
                      {c.detail}
                    </p>

                    {c.parentsLinks.length > 0 && (
                      <div style={{ marginBottom: 10 }}>
                        <p style={LABEL}>Vient de</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                          {c.parentsLinks.map((l) => (
                            <Link key={l.id} to={`/courants?focus=${l.id}`} className="soc-link-chip">
                              ↑ {l.t}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    {c.enfantsLinks.length > 0 && (
                      <div style={{ marginBottom: 10 }}>
                        <p style={LABEL}>A donné</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                          {c.enfantsLinks.map((l) => (
                            <Link key={l.id} to={`/courants?focus=${l.id}`} className="soc-link-chip">
                              ↓ {l.t}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    <div style={{ marginBottom: c.inspirateurs.length > 0 ? 10 : 0 }}>
                      <p style={LABEL}>Fiches du corpus</p>
                      {c.auteursLinks.length === 0 ? (
                        <p
                          style={{
                            fontSize: 12.5,
                            color: 'color-mix(in srgb, var(--color-text) 40%, transparent)',
                            margin: 0,
                          }}
                        >
                          Aucune fiche n&apos;incarne ce courant dans le corpus.
                        </p>
                      ) : (
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                          {c.auteursLinks.map((a) => (
                            <Link key={a.id} to={`/a/${a.id}`} className="soc-link-chip">
                              {a.name}
                              <span style={{ opacity: 0.5 }}> · {a.dates}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>

                    {c.inspirateurs.length > 0 && (
                      <div>
                        <p style={LABEL}>Hors corpus</p>
                        <ul
                          style={{
                            listStyle: 'none',
                            padding: 0,
                            margin: 0,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 6,
                          }}
                        >
                          {c.inspirateurs.map((h) => (
                            <li
                              key={h}
                              style={{
                                fontSize: 12.5,
                                lineHeight: 1.45,
                                paddingLeft: 10,
                                borderLeft: '2px solid var(--color-neutral-700)',
                                color: 'color-mix(in srgb, var(--color-text) 70%, transparent)',
                                textWrap: 'pretty',
                              }}
                            >
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </Shell>
  );
}
