import { Link, useParams } from 'react-router-dom';
import Shell from '../components/Shell.jsx';
import NotFound from './NotFound.jsx';
import { IconShare } from '../components/Icons.jsx';
import { getInstitution } from '../data/index.js';
import { useStore } from '../state/store.jsx';
import { downloadText, institutionToMarkdown, slugify } from '../lib/markdown-export.js';
import { shareUrl } from '../lib/share.js';

/**
 * Fiche institution. Bandeau « En une phrase », présentation générale, puis
 * le cœur de la rubrique : comment cette institution produit des normes,
 * des rôles, des statuts et des comportements — relié aux concepts
 * fondamentaux (norme sociale, rôle social, pouvoir…) et aux concepts du
 * corpus, avec un renvoi optionnel vers le domaine correspondant.
 */
export default function InstitutionFiche() {
  const { id } = useParams();
  const i = getInstitution(id);
  const { flash } = useStore();

  if (!i) {
    return <NotFound what="Cette institution n'existe pas." />;
  }

  async function onShare() {
    const result = await shareUrl({
      title: `${i.t} — Sociologor`,
      text: i.d,
      url: `${window.location.origin}/in/${i.id}`,
    });
    if (result === 'copied') flash('Lien copié');
  }

  function onExport() {
    downloadText(`sociologor-institution-${slugify(i.t)}.md`, institutionToMarkdown(i));
    flash('Institution exportée en Markdown');
  }

  return (
    <Shell
      title={i.t}
      subtitle={i.categorieT}
      canBack
      actions={
        <button
          type="button"
          className="btn btn-secondary soc-icon-btn"
          aria-label="Partager l'institution"
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
          {i.t}
        </h2>
        <p
          style={{
            fontSize: 12.5,
            color: 'color-mix(in srgb, var(--color-text) 50%, transparent)',
            margin: '4px 0 8px',
          }}
        >
          {i.categorieT}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 18 }}>
          <span className="tag tag-accent" style={{ fontSize: 10.5 }}>
            Institution
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
          <p style={{ fontSize: 15.5, lineHeight: 1.5, margin: 0, textWrap: 'pretty' }}>{i.d}</p>
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
          {i.detail}
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
            Comment elle produit normes, rôles et comportements
          </h3>
          <p style={{ fontSize: 14, lineHeight: 1.6, margin: 0, textWrap: 'pretty' }}>{i.mecanismeSocial}</p>
        </section>

        <h3 className="soc-kicker" style={{ margin: '0 0 6px' }}>
          Concepts fondamentaux mobilisés
        </h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, margin: '0 0 24px' }}>
          {i.fondamentauxLinks.map((f) => (
            <Link key={f.id} to={`/f/${f.id}`} className="soc-link-chip">
              {f.label}
            </Link>
          ))}
        </div>

        <h3 className="soc-kicker" style={{ margin: '0 0 6px' }}>
          Concepts du corpus
        </h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, margin: '0 0 24px' }}>
          {i.conceptsLinks.map((c) => (
            <Link key={c.id} to={`/c/${c.id}`} className="soc-link-chip">
              {c.label}
              <span style={{ opacity: 0.5 }}> · {c.authorName}</span>
            </Link>
          ))}
        </div>

        {i.domaineLink && (
          <div style={{ marginBottom: 8 }}>
            <Link className="btn btn-secondary" to={`/d/${i.domaineLink.id}`} style={{ fontSize: 12.5 }}>
              Approfondir via le domaine {i.domaineLink.t}
            </Link>
          </div>
        )}

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, paddingTop: 4 }}>
          <button type="button" className="btn btn-secondary" style={{ fontSize: 12.5 }} onClick={onExport}>
            Exporter en Markdown
          </button>
          <Link className="btn btn-secondary" to="/institutions" style={{ fontSize: 12.5 }}>
            Toutes les institutions
          </Link>
        </div>
      </article>
    </Shell>
  );
}
