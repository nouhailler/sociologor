import { Link, useParams } from 'react-router-dom';
import Shell from '../components/Shell.jsx';
import NotFound from './NotFound.jsx';
import { IconShare } from '../components/Icons.jsx';
import { getGroupeSocial } from '../data/index.js';
import { useStore } from '../state/store.jsx';
import { downloadText, groupeSocialToMarkdown, slugify } from '../lib/markdown-export.js';
import { shareUrl } from '../lib/share.js';

const LABEL = {
  fontSize: 11,
  color: 'color-mix(in srgb, var(--color-text) 45%, transparent)',
  margin: '0 0 6px',
};

/**
 * Fiche groupe social. Bandeau « En une phrase », présentation générale,
 * puis ce qui définit et distingue ce type de groupe — relié aux concepts
 * fondamentaux et aux concepts du corpus, avec un renvoi optionnel vers le
 * domaine correspondant — puis les auteurs associés, corpus et hors corpus.
 */
export default function GroupeSocialFiche() {
  const { id } = useParams();
  const g = getGroupeSocial(id);
  const { flash } = useStore();

  if (!g) {
    return <NotFound what="Ce groupe social n'existe pas." />;
  }

  async function onShare() {
    const result = await shareUrl({
      title: `${g.t} — Sociologor`,
      text: g.d,
      url: `${window.location.origin}/gs/${g.id}`,
    });
    if (result === 'copied') flash('Lien copié');
  }

  function onExport() {
    downloadText(`sociologor-groupe-social-${slugify(g.t)}.md`, groupeSocialToMarkdown(g));
    flash('Groupe social exporté en Markdown');
  }

  return (
    <Shell
      title={g.t}
      subtitle={g.categorieT}
      canBack
      actions={
        <button
          type="button"
          className="btn btn-secondary soc-icon-btn"
          aria-label="Partager le groupe social"
          onClick={onShare}
        >
          <IconShare />
        </button>
      }
    >
      <article className="soc-enter" style={{ maxWidth: 780 }}>
        <h2
          style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 'var(--font-heading-weight)',
            fontSize: 'clamp(26px, 4vw, 38px)',
            lineHeight: 1.04,
            letterSpacing: '-0.03em',
            margin: '4px 0 0',
          }}
        >
          {g.t}
        </h2>
        <p
          style={{
            fontSize: 12.5,
            color: 'color-mix(in srgb, var(--color-text) 50%, transparent)',
            margin: '4px 0 8px',
          }}
        >
          {g.categorieT}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 18 }}>
          <span className="tag tag-accent" style={{ fontSize: 10.5 }}>
            Groupe social
          </span>
        </div>

        <section
          style={{
            padding: '14px 16px',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--color-accent-800)',
            background: 'color-mix(in srgb, var(--color-accent-900) 45%, transparent)',
            margin: '0 0 24px',
          }}
        >
          <p className="soc-kicker" style={{ margin: '0 0 6px' }}>
            En une phrase
          </p>
          <p style={{ fontSize: 15.5, lineHeight: 1.5, margin: 0, textWrap: 'pretty' }}>{g.d}</p>
        </section>

        <h3 className="soc-kicker" style={{ margin: '0 0 10px' }}>
          Ce que la sociologie en dit
        </h3>
        <p
          style={{
            fontSize: 14,
            lineHeight: 1.6,
            margin: '0 0 28px',
            color: 'color-mix(in srgb, var(--color-text) 84%, transparent)',
            textWrap: 'pretty',
          }}
        >
          {g.detail}
        </p>

        <section
          style={{
            padding: '14px 16px',
            borderRadius: 'var(--radius-md)',
            background: 'var(--color-surface)',
            margin: '0 0 28px',
          }}
        >
          <h3 className="soc-kicker" style={{ margin: '0 0 8px' }}>
            Ce qui le définit et le distingue
          </h3>
          <p style={{ fontSize: 14, lineHeight: 1.6, margin: 0, textWrap: 'pretty' }}>{g.dynamiqueSociale}</p>
        </section>

        <h3 className="soc-kicker" style={{ margin: '0 0 6px' }}>
          Concepts fondamentaux mobilisés
        </h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, margin: '0 0 24px' }}>
          {g.fondamentauxLinks.map((f) => (
            <Link key={f.id} to={`/f/${f.id}`} className="soc-link-chip">
              {f.label}
            </Link>
          ))}
        </div>

        <h3 className="soc-kicker" style={{ margin: '0 0 6px' }}>
          Concepts du corpus
        </h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, margin: '0 0 24px' }}>
          {g.conceptsLinks.map((c) => (
            <Link key={c.id} to={`/c/${c.id}`} className="soc-link-chip">
              {c.label}
              <span style={{ opacity: 0.5 }}> · {c.authorName}</span>
            </Link>
          ))}
        </div>

        {g.domaineLink && (
          <div style={{ marginBottom: 24 }}>
            <Link className="btn btn-secondary" to={`/d/${g.domaineLink.id}`} style={{ fontSize: 12.5 }}>
              Approfondir via le domaine {g.domaineLink.t}
            </Link>
          </div>
        )}

        <h3 className="soc-kicker" style={{ margin: '0 0 8px' }}>
          Auteurs associés
        </h3>

        <div style={{ marginBottom: g.inspirateurs.length > 0 ? 10 : 24 }}>
          <p style={LABEL}>Auteurs du corpus</p>
          {g.auteursLinks.length === 0 ? (
            <p style={{ fontSize: 12.5, color: 'color-mix(in srgb, var(--color-text) 40%, transparent)', margin: 0 }}>
              Aucune fiche du corpus n&apos;est directement associée à ce groupe.
            </p>
          ) : (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {g.auteursLinks.map((a) => (
                <Link key={a.id} to={`/a/${a.id}`} className="soc-link-chip">
                  {a.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        {g.inspirateurs.length > 0 && (
          <div style={{ marginBottom: 28 }}>
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
              {g.inspirateurs.map((h) => (
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

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, paddingTop: 4 }}>
          <button type="button" className="btn btn-secondary" style={{ fontSize: 12.5 }} onClick={onExport}>
            Exporter en Markdown
          </button>
          <Link className="btn btn-secondary" to="/groupes-sociaux" style={{ fontSize: 12.5 }}>
            Tous les groupes sociaux
          </Link>
        </div>
      </article>
    </Shell>
  );
}
