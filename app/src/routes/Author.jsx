import { Link, useParams } from 'react-router-dom';
import Shell from '../components/Shell.jsx';
import NotFound from './NotFound.jsx';
import { IconShare, IconStar } from '../components/Icons.jsx';
import { courantOf, getAuthor } from '../data/index.js';
import { useStore } from '../state/store.jsx';
import { authorToMarkdown, downloadText, slugify } from '../lib/markdown-export.js';
import { shareUrl } from '../lib/share.js';

const SECTION = { margin: '0 0 10px' };

export default function Author() {
  const { id } = useParams();
  const a = getAuthor(id);
  const { favs, toggleFav, settings, flash } = useStore();

  if (!a) {
    return <NotFound what="Cette fiche n'existe pas." />;
  }

  const courant = courantOf(a.id);
  const isFav = favs.includes(a.id);
  const showCitations = settings.showCitations && a.citations?.length > 0;

  async function onShare() {
    const url = `${window.location.origin}/a/${a.id}`;
    const result = await shareUrl({
      title: `${a.name} — Sociologor`,
      text: a.resume,
      url,
    });
    if (result === 'copied') flash('Lien copié dans le presse-papiers');
    else if (result === 'failed') flash(`Lien de la fiche : ${url}`);
  }

  function onExport() {
    downloadText(
      `sociologor-${slugify(a.name)}.md`,
      authorToMarkdown(a, { includeCitations: settings.showCitations }),
    );
    flash('Fiche exportée en Markdown');
  }

  return (
    <Shell
      title={a.name}
      subtitle={`${a.dates} · ${a.courant}`}
      canBack
      actions={
        <>
          <button
            type="button"
            className="btn btn-secondary soc-icon-btn"
            aria-label={isFav ? 'Retirer de mes fiches' : 'Épingler dans mes fiches'}
            aria-pressed={isFav}
            style={{ color: isFav ? 'var(--color-accent)' : 'var(--color-text)' }}
            onClick={() => toggleFav(a.id)}
          >
            <IconStar size={15} filled={isFav} />
          </button>
          <button
            type="button"
            className="btn btn-secondary soc-icon-btn"
            aria-label="Partager la fiche"
            onClick={onShare}
          >
            <IconShare />
          </button>
        </>
      }
    >
      <article className="soc-enter" style={{ maxWidth: 780 }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, margin: '4px 0 18px' }}>
          <Portrait author={a} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 'var(--font-heading-weight)',
                fontSize: 'clamp(26px, 4vw, 38px)',
                lineHeight: 1.04,
                letterSpacing: '-0.03em',
                margin: 0,
              }}
            >
              {a.name}
            </h2>
            <p
              style={{
                fontSize: 12.5,
                color: 'color-mix(in srgb, var(--color-text) 50%, transparent)',
                margin: '4px 0 8px',
              }}
            >
              {a.dates} · {a.nat} · {a.periode}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {courant ? (
                <Link
                  to={`/courants?focus=${courant.id}`}
                  className="tag tag-accent"
                  style={{ fontSize: 10.5 }}
                  title={`Situer ${courant.t} dans la carte des courants`}
                >
                  {a.courant}
                </Link>
              ) : (
                <span className="tag tag-accent" style={{ fontSize: 10.5 }}>
                  {a.courant}
                </span>
              )}
              {a.domainTags.map((t) => (
                <span key={t} className="tag tag-neutral" style={{ fontSize: 10.5 }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <section
          style={{
            padding: '14px 16px',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--color-accent-800)',
            background:
              'linear-gradient(180deg, color-mix(in srgb, var(--color-accent) 9%, transparent), transparent)',
            marginBottom: 24,
          }}
        >
          <h3 className="soc-kicker" style={{ fontSize: 10.5, marginBottom: 8 }}>
            En une phrase
          </h3>
          <p style={{ fontSize: 15.5, lineHeight: 1.5, margin: 0, textWrap: 'pretty' }}>{a.resume}</p>
        </section>

        <h3 className="soc-kicker" style={SECTION}>
          Repères
        </h3>
        <dl
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
            gap: 1,
            margin: '0 0 28px',
          }}
        >
          {a.reperes.map((r) => (
            <div key={r.k} style={{ padding: '9px 12px', background: 'var(--color-surface)', borderRadius: 8 }}>
              <dt
                style={{
                  fontSize: 10,
                  letterSpacing: '0.09em',
                  textTransform: 'uppercase',
                  color: 'color-mix(in srgb, var(--color-text) 42%, transparent)',
                }}
              >
                {r.k}
              </dt>
              <dd
                style={{
                  margin: '2px 0 0',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 'var(--font-heading-weight)',
                  fontSize: 13.5,
                }}
              >
                {r.v}
              </dd>
            </div>
          ))}
        </dl>

        <h3 className="soc-kicker" style={{ margin: '0 0 12px' }}>
          Concepts majeurs
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
          {a.concepts.map((c) => (
            <section
              key={c.t}
              style={{
                padding: '14px 16px',
                borderRadius: 'var(--radius-md)',
                background: 'var(--color-surface)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 9, marginBottom: 7 }}>
                <h4
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 'var(--font-heading-weight)',
                    fontSize: 17,
                    lineHeight: 1.15,
                    letterSpacing: '-0.015em',
                    margin: 0,
                  }}
                >
                  {/* Le concept a sa propre fiche : le titre y mène. */}
                  <Link to={`/c/${c.id}`} style={{ color: 'inherit' }}>
                    {c.t}
                  </Link>
                </h4>
                <span
                  style={{
                    fontSize: 10.5,
                    color: 'color-mix(in srgb, var(--color-text) 40%, transparent)',
                    letterSpacing: '0.04em',
                  }}
                >
                  {c.year}
                </span>
              </div>
              <p style={{ fontSize: 13.5, lineHeight: 1.55, margin: '0 0 9px', textWrap: 'pretty' }}>{c.simple}</p>
              <p
                style={{
                  fontSize: 12.5,
                  lineHeight: 1.5,
                  margin: 0,
                  paddingLeft: 11,
                  borderLeft: '2px solid var(--color-accent-700)',
                  color: 'color-mix(in srgb, var(--color-text) 66%, transparent)',
                  textWrap: 'pretty',
                }}
              >
                <span style={{ color: 'var(--color-accent-300)' }}>Exemple — </span>
                {c.ex}
              </p>
              <Link
                to={`/c/${c.id}`}
                style={{ display: 'inline-block', marginTop: 9, fontSize: 12, color: 'var(--color-accent-300)' }}
              >
                Fiche complète du concept →
              </Link>
            </section>
          ))}
        </div>

        <h3 className="soc-kicker" style={SECTION}>
          Filiation
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 28 }}>
          <Filiation label="Hérite de" links={a.upLinks} />
          <Filiation label="A influencé" links={a.downLinks} />
          {a.horsCorpus?.length > 0 && (
            <div>
              <p style={FILIATION_LABEL}>Influences hors corpus</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 7 }}>
                {a.horsCorpus.map((h) => (
                  <li
                    key={h}
                    style={{
                      fontSize: 13,
                      lineHeight: 1.5,
                      paddingLeft: 11,
                      borderLeft: '2px solid var(--color-neutral-700)',
                      color: 'color-mix(in srgb, var(--color-text) 76%, transparent)',
                      textWrap: 'pretty',
                    }}
                  >
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <h3 className="soc-kicker" style={{ margin: '0 0 8px' }}>
          Œuvres principales
        </h3>
        <table className="table" style={{ marginBottom: 28 }}>
          <caption className="text-muted" style={{ captionSide: 'top', textAlign: 'left', fontSize: 11, paddingBottom: 4 }}>
            Œuvres principales de {a.name}
          </caption>
          <tbody>
            {a.oeuvres.map((o) => (
              <tr key={o.t}>
                <td
                  style={{
                    width: 56,
                    color: 'color-mix(in srgb, var(--color-text) 45%, transparent)',
                    fontSize: 12.5,
                    fontVariantNumeric: 'tabular-nums',
                  }}
                >
                  {o.y}
                </td>
                <td style={{ fontSize: 13.5 }}>{o.t}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {showCitations && (
          <>
            <h3 className="soc-kicker" style={SECTION}>
              Citations
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 28 }}>
              {a.citations.map((q) => (
                <figure key={q.t}>
                  <blockquote
                    style={{
                      margin: 0,
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 400,
                      fontSize: 16,
                      lineHeight: 1.45,
                      letterSpacing: '-0.01em',
                      paddingLeft: 14,
                      borderLeft: '2px solid var(--color-accent)',
                      textWrap: 'pretty',
                    }}
                  >
                    {q.t}
                  </blockquote>
                  <figcaption style={{ paddingLeft: 16, marginTop: 5 }}>{q.src}</figcaption>
                </figure>
              ))}
            </div>
          </>
        )}

        <h3 className="soc-kicker" style={{ margin: '0 0 8px' }}>
          Critiques
        </h3>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 7, margin: '0 0 28px' }}>
          {a.critiques.map((c) => (
            <li
              key={c}
              style={{
                display: 'flex',
                gap: 9,
                fontSize: 13,
                lineHeight: 1.5,
                color: 'color-mix(in srgb, var(--color-text) 74%, transparent)',
              }}
            >
              <span aria-hidden="true" style={{ flex: 'none', color: 'var(--color-accent-600)', marginTop: 1 }}>
                —
              </span>
              <span style={{ textWrap: 'pretty' }}>{c}</span>
            </li>
          ))}
        </ul>

        {a.disc?.length > 0 && (
          <>
            <h3 className="soc-kicker" style={SECTION}>
              Liens avec d&apos;autres disciplines
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 7, margin: '0 0 28px' }}>
              {a.disc.map((d) => (
                <li
                  key={d}
                  style={{
                    fontSize: 13,
                    lineHeight: 1.5,
                    paddingLeft: 11,
                    borderLeft: '2px solid var(--color-neutral-700)',
                    color: 'color-mix(in srgb, var(--color-text) 76%, transparent)',
                    textWrap: 'pretty',
                  }}
                >
                  {d}
                </li>
              ))}
            </ul>
          </>
        )}

        {a.biblio?.length > 0 && (
          <>
            <h3 className="soc-kicker" style={{ margin: '0 0 8px' }}>
              Bibliographie critique
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 6, margin: '0 0 28px' }}>
              {a.biblio.map((b) => (
                <li
                  key={b}
                  style={{
                    fontSize: 13,
                    lineHeight: 1.5,
                    color: 'color-mix(in srgb, var(--color-text) 70%, transparent)',
                    textWrap: 'pretty',
                  }}
                >
                  {b}
                </li>
              ))}
            </ul>
          </>
        )}

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, paddingTop: 4 }}>
          <button type="button" className="btn btn-secondary" style={{ fontSize: 12.5 }} onClick={onExport}>
            Exporter en Markdown
          </button>
          <Link className="btn btn-secondary" to={`/graphe?focus=${a.id}`} style={{ fontSize: 12.5 }}>
            Situer dans le graphe
          </Link>
          {courant && (
            <Link className="btn btn-secondary" to={`/courants?focus=${courant.id}`} style={{ fontSize: 12.5 }}>
              Situer dans les courants
            </Link>
          )}
        </div>
      </article>
    </Shell>
  );
}

const FILIATION_LABEL = {
  fontSize: 11,
  color: 'color-mix(in srgb, var(--color-text) 45%, transparent)',
  margin: '0 0 6px',
};

const PORTRAIT_BOX = { width: 92, height: 112, borderRadius: 'var(--radius-lg)' };

/**
 * Portrait de la fiche. Photo libre de droits quand il en existe une, sinon le
 * monogramme d'initiales — assumé comme tel, et non comme un placeholder en
 * attente : les quatorze auteurs du XXᵉ siècle n'ont pas d'image réutilisable.
 * Le crédit s'affiche sous la photo ; les sources complètes sont dans
 * Documentation → Informations légales → Licences et crédits.
 */
function Portrait({ author }) {
  if (!author.portraitSrc) {
    return (
      <span className="soc-initials" aria-hidden="true" style={{ ...PORTRAIT_BOX, fontSize: 30 }}>
        {author.initials}
      </span>
    );
  }
  return (
    <figure style={{ flex: 'none', margin: 0, width: 92 }}>
      <img
        src={author.portraitSrc}
        alt={author.portrait.alt}
        width={92}
        height={112}
        loading="eager"
        decoding="async"
        style={{
          ...PORTRAIT_BOX,
          display: 'block',
          objectFit: 'cover',
          border: '1px solid var(--color-neutral-700)',
        }}
      />
      <figcaption
        style={{
          fontSize: 9.5,
          lineHeight: 1.35,
          marginTop: 5,
          color: 'color-mix(in srgb, var(--color-text) 38%, transparent)',
          textWrap: 'pretty',
        }}
      >
        Domaine public
      </figcaption>
    </figure>
  );
}

function Filiation({ label, links }) {
  return (
    <div>
      <p style={FILIATION_LABEL}>
        {label}
      </p>
      {links.length === 0 ? (
        <p style={{ fontSize: 12.5, color: 'color-mix(in srgb, var(--color-text) 40%, transparent)', margin: 0 }}>
          Aucune fiche liée dans ce corpus.
        </p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {links.map((l) => (
            <Link key={l.id} to={`/a/${l.id}`} className="soc-link-chip">
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
