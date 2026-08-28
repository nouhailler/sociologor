import { Link, useParams } from 'react-router-dom';
import Shell from '../components/Shell.jsx';
import NotFound from './NotFound.jsx';
import { IconShare } from '../components/Icons.jsx';
import { getProblematique } from '../data/index.js';
import { useStore } from '../state/store.jsx';
import { downloadText, problematiqueToMarkdown, slugify } from '../lib/markdown-export.js';
import { shareUrl } from '../lib/share.js';

const MUTED = { color: 'color-mix(in srgb, var(--color-text) 48%, transparent)' };
const BODY = { color: 'color-mix(in srgb, var(--color-text) 82%, transparent)' };

/** Titre de rubrique numéroté, sur le modèle des douze sections du modèle. */
function SectionTitle({ n, children }) {
  return (
    <h3
      style={{
        fontFamily: 'var(--font-heading)',
        fontWeight: 'var(--font-heading-weight)',
        fontSize: 18,
        letterSpacing: '-0.01em',
        margin: '38px 0 4px',
        paddingTop: 18,
        borderTop: '1px solid var(--color-neutral-800)',
      }}
    >
      <span style={{ color: 'var(--color-accent-300)', marginRight: 8 }}>{n}.</span>
      {children}
    </h3>
  );
}

/** Sous-titre de champ, pour une rubrique découpée en plusieurs registres (facteurs, conséquences…). */
function FieldLabel({ children }) {
  return (
    <p style={{ fontSize: 11.5, letterSpacing: '0.03em', textTransform: 'uppercase', margin: '0 0 5px', ...MUTED }}>
      {children}
    </p>
  );
}

/** Une liste à puces courte, dans le style déjà utilisé pour les notions et critiques ailleurs. */
function Bullets({ items }) {
  if (!items || items.length === 0) return null;
  return (
    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 16px', display: 'flex', flexDirection: 'column', gap: 5 }}>
      {items.map((it) => (
        <li
          key={it}
          style={{
            fontSize: 12.5,
            lineHeight: 1.5,
            paddingLeft: 10,
            borderLeft: '2px solid var(--color-neutral-700)',
            textWrap: 'pretty',
            ...BODY,
          }}
        >
          {it}
        </li>
      ))}
    </ul>
  );
}

/** Un registre nommé (« Facteurs économiques », « Conséquences sanitaires »…) avec ses puces. */
function Field({ label, items }) {
  if (!items || items.length === 0) return null;
  return (
    <div style={{ minWidth: 0 }}>
      <FieldLabel>{label}</FieldLabel>
      <Bullets items={items} />
    </div>
  );
}

/** Grille responsive de registres, pour les rubriques 4, 5 et 7. */
function FieldGrid({ children }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '4px 22px' }}>
      {children}
    </div>
  );
}

/** Une paire label/valeur courte, pour les rubriques 3 et 8 (registres à une seule phrase). */
function StatLine({ label, value }) {
  if (!value) return null;
  return (
    <div style={{ margin: '0 0 12px' }}>
      <FieldLabel>{label}</FieldLabel>
      <p style={{ fontSize: 13, lineHeight: 1.5, margin: 0, textWrap: 'pretty', ...BODY }}>{value}</p>
    </div>
  );
}

/** Liens cliquables vers d'autres fiches du corpus, groupés sous un sous-titre. */
function LinkGroup({ label, items, to, empty }) {
  return (
    <div style={{ margin: '0 0 20px' }}>
      <FieldLabel>{label}</FieldLabel>
      {items.length === 0 ? (
        <p style={{ fontSize: 12, margin: 0, ...MUTED }}>{empty}</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {items.map((it) => (
            <Link key={it.id} to={to(it)} className="soc-link-chip">
              {it.label || it.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ProblematiqueFiche() {
  const { id } = useParams();
  const p = getProblematique(id);
  const { flash } = useStore();

  if (!p) {
    return <NotFound what="Cette problématique n'existe pas." />;
  }

  async function onShare() {
    const result = await shareUrl({ title: `${p.t} — Sociologor`, text: p.simple, url: `${window.location.origin}/pb/${p.id}` });
    if (result === 'copied') flash('Lien copié');
  }

  function onExport() {
    downloadText(`sociologor-problematique-${slugify(p.t)}.md`, problematiqueToMarkdown(p));
    flash('Problématique exportée en Markdown');
  }

  return (
    <Shell
      title={p.t}
      subtitle={p.categorieT}
      canBack
      actions={
        <button type="button" className="btn btn-secondary soc-icon-btn" aria-label="Partager la problématique" onClick={onShare}>
          <IconShare />
        </button>
      }
    >
      <article className="soc-enter" style={{ maxWidth: 820 }}>
        <h2
          style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 'var(--font-heading-weight)',
            fontSize: 'clamp(28px, 4vw, 40px)',
            lineHeight: 1.04,
            letterSpacing: '-0.03em',
            margin: '4px 0 0',
          }}
        >
          {p.t}
        </h2>
        <p style={{ fontSize: 12.5, margin: '4px 0 8px', ...MUTED }}>{p.categorieT}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 8 }}>
          <span className="tag tag-accent" style={{ fontSize: 10.5 }}>
            Problématique sociale
          </span>
          {p.motsCles.map((k) => (
            <span key={k} className="tag tag-neutral" style={{ fontSize: 10.5 }}>
              {k}
            </span>
          ))}
        </div>
        <p style={{ margin: '4px 0 18px' }}>
          <Link to={`/pb/${p.id}/graphe`} className="btn btn-ghost" style={{ fontSize: 12 }}>
            Voir le graphe de cette problématique →
          </Link>
        </p>

        <section
          style={{
            padding: '14px 16px',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--color-accent-800)',
            background: 'color-mix(in srgb, var(--color-accent-900) 45%, transparent)',
            margin: '0 0 8px',
          }}
        >
          <p className="soc-kicker" style={{ margin: '0 0 6px' }}>
            En une phrase
          </p>
          <p style={{ fontSize: 15.5, lineHeight: 1.5, margin: 0, textWrap: 'pretty' }}>{p.simple}</p>
        </section>

        {/* — 1. Identité — */}
        <SectionTitle n={1}>Identité</SectionTitle>
        {p.synonymes.length > 0 && (
          <p style={{ fontSize: 12, margin: '0 0 12px', ...MUTED }}>
            Aussi nommée : {p.synonymes.join(' · ')}
          </p>
        )}
        {p.detaille.map((para) => (
          <p key={para} style={{ fontSize: 14, lineHeight: 1.6, margin: '0 0 12px', textWrap: 'pretty', ...BODY }}>
            {para}
          </p>
        ))}
        <p style={{ fontSize: 13, lineHeight: 1.55, margin: '4px 0 18px', textWrap: 'pretty', ...BODY }}>{p.gravite}</p>

        <FieldLabel>Sous-catégories</FieldLabel>
        <div className="soc-grid" style={{ marginBottom: 8 }}>
          {p.sousCategories.map((sc) => (
            <div
              key={sc.t}
              style={{
                padding: '11px 12px',
                borderRadius: 11,
                background: 'var(--color-surface)',
                border: '1px solid transparent',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 'var(--font-heading-weight)',
                  fontSize: 13,
                  margin: '0 0 4px',
                }}
              >
                {sc.t}
              </p>
              <p style={{ fontSize: 11.5, lineHeight: 1.45, margin: 0, ...MUTED }}>{sc.d}</p>
            </div>
          ))}
        </div>

        {/* — 2. Comprendre la problématique — */}
        <SectionTitle n={2}>Comprendre la problématique</SectionTitle>
        {p.description.map((para) => (
          <p key={para} style={{ fontSize: 14, lineHeight: 1.6, margin: '0 0 12px', textWrap: 'pretty', ...BODY }}>
            {para}
          </p>
        ))}
        <StatLine label="Origine et émergence" value={p.origineEmergence} />
        <StatLine label="Contexte historique" value={p.contexteHistorique} />

        <FieldLabel>Évolution historique</FieldLabel>
        <ol style={{ listStyle: 'none', padding: 0, margin: '0 0 16px', display: 'flex', flexDirection: 'column', gap: 8 }}>
          {p.evolutionHistorique.map((step) => (
            <li key={`${step.p}-${step.f}`} style={{ display: 'flex', gap: 12, fontSize: 12.5, lineHeight: 1.5 }}>
              <span
                style={{
                  flex: 'none',
                  minWidth: 92,
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 'var(--font-heading-weight)',
                  color: 'var(--color-accent-300)',
                }}
              >
                {step.p}
              </span>
              <span style={{ textWrap: 'pretty', ...BODY }}>{step.f}</span>
            </li>
          ))}
        </ol>

        <StatLine label="Situation actuelle" value={p.situationActuelle} />
        <FieldGrid>
          <Field label="Dimension individuelle" items={[p.dimensionIndividuelle]} />
          <Field label="Dimension collective" items={[p.dimensionCollective]} />
          <Field label="Dimension structurelle" items={[p.dimensionStructurelle]} />
        </FieldGrid>

        {/* — 3. Population concernée — */}
        <SectionTitle n={3}>Population concernée</SectionTitle>
        <StatLine label="Population générale" value={p.population.generale} />
        <Field label="Groupes particulièrement exposés" items={p.population.groupesExposes} />
        <FieldGrid>
          <StatLine label="Âge" value={p.population.age} />
          <StatLine label="Genre" value={p.population.genre} />
          <StatLine label="Catégorie socioprofessionnelle" value={p.population.csp} />
          <StatLine label="Niveau de revenu" value={p.population.revenu} />
          <StatLine label="Niveau d'éducation" value={p.population.education} />
          <StatLine label="Territoire" value={p.population.territoire} />
          <StatLine label="Situation familiale" value={p.population.situationFamiliale} />
          <StatLine label="Statut professionnel" value={p.population.statutProfessionnel} />
        </FieldGrid>

        {/* — 4. Causes et facteurs — */}
        <SectionTitle n={4}>Causes et facteurs</SectionTitle>
        <p style={{ fontSize: 12.5, margin: '0 0 14px', ...MUTED }}>
          Une problématique sociale n&apos;a presque jamais une cause unique : ces huit registres se
          combinent plutôt qu&apos;ils ne s&apos;excluent.
        </p>
        <FieldGrid>
          <Field label="Facteurs économiques" items={p.facteurs.economiques} />
          <Field label="Facteurs sociaux" items={p.facteurs.sociaux} />
          <Field label="Facteurs culturels" items={p.facteurs.culturels} />
          <Field label="Facteurs politiques" items={p.facteurs.politiques} />
          <Field label="Facteurs institutionnels" items={p.facteurs.institutionnels} />
          <Field label="Facteurs territoriaux" items={p.facteurs.territoriaux} />
          <Field label="Facteurs démographiques" items={p.facteurs.demographiques} />
          <Field label="Facteurs historiques" items={p.facteurs.historiques} />
        </FieldGrid>

        {/* — 5. Manifestations — */}
        <SectionTitle n={5}>Manifestations</SectionTitle>
        <p style={{ fontSize: 12.5, margin: '0 0 14px', ...MUTED }}>Comment la problématique devient-elle observable ?</p>
        <FieldGrid>
          <Field label="Comportements" items={p.manifestations.comportements} />
          <Field label="Situations" items={p.manifestations.situations} />
          <Field label="Indicateurs" items={p.manifestations.indicateurs} />
          <Field label="Pratiques" items={p.manifestations.pratiques} />
          <Field label="Événements" items={p.manifestations.evenements} />
        </FieldGrid>
        <Field label="Statistiques" items={p.manifestations.statistiques} />

        {/* — 6. Mécanismes sociaux — */}
        <SectionTitle n={6}>Mécanismes sociaux</SectionTitle>
        <p style={{ fontSize: 12.5, margin: '0 0 14px', ...MUTED }}>
          Quels rouages produisent ou entretiennent le problème ? Un exemple de chaîne causale type :
        </p>
        <ol
          style={{
            listStyle: 'none',
            padding: 0,
            margin: '0 0 18px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 2,
          }}
        >
          {p.mecanismeSchema.map((step, i) => (
            <li key={step}>
              <span
                style={{
                  display: 'inline-block',
                  padding: '7px 12px',
                  borderRadius: 9,
                  fontSize: 13,
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 'var(--font-heading-weight)',
                  background: i === 0 || i === p.mecanismeSchema.length - 1 ? 'var(--color-accent-900)' : 'var(--color-surface)',
                  color: i === 0 || i === p.mecanismeSchema.length - 1 ? 'var(--color-accent-300)' : 'var(--color-text)',
                }}
              >
                {step}
              </span>
              {i < p.mecanismeSchema.length - 1 && (
                <div aria-hidden="true" style={{ padding: '2px 0 2px 16px', fontSize: 13, ...MUTED }}>
                  ↓
                </div>
              )}
            </li>
          ))}
        </ol>
        <LinkGroup
          label="Mécanismes du corpus"
          items={p.mecanismesLinks}
          to={(m) => `/m/${m.id}`}
          empty="Aucun mécanisme déjà décrit ne se rattache directement à cette problématique."
        />

        {/* — 7. Conséquences — */}
        <SectionTitle n={7}>Conséquences</SectionTitle>
        <FieldGrid>
          <Field label="Individuelles" items={p.consequences.individuelles} />
          <Field label="Familiales" items={p.consequences.familiales} />
          <Field label="Professionnelles" items={p.consequences.professionnelles} />
          <Field label="Économiques" items={p.consequences.economiques} />
          <Field label="Sanitaires" items={p.consequences.sanitaires} />
          <Field label="Scolaires" items={p.consequences.scolaires} />
          <Field label="Territoriales" items={p.consequences.territoriales} />
          <Field label="Politiques" items={p.consequences.politiques} />
          <Field label="Intergénérationnelles" items={p.consequences.intergenerationnelles} />
        </FieldGrid>

        {/* — 8. Dynamiques — */}
        <SectionTitle n={8}>Dynamiques</SectionTitle>
        <FieldGrid>
          <StatLine label="Aggravation" value={p.dynamiques.aggravation} />
          <StatLine label="Réduction" value={p.dynamiques.reduction} />
          <StatLine label="Stabilisation" value={p.dynamiques.stabilisation} />
          <StatLine label="Transformation" value={p.dynamiques.transformation} />
          <StatLine label="Cycles" value={p.dynamiques.cycles} />
          <StatLine label="Effets de seuil" value={p.dynamiques.effetsDeSeuil} />
          <StatLine label="Effets cumulatifs" value={p.dynamiques.effetsCumulatifs} />
          <StatLine label="Reproduction intergénérationnelle" value={p.dynamiques.reproductionIntergenerationnelle} />
        </FieldGrid>

        {/* — 9. Mesurer la problématique — */}
        <SectionTitle n={9}>Mesurer la problématique</SectionTitle>
        <p style={{ fontSize: 13.5, lineHeight: 1.6, margin: '0 0 14px', textWrap: 'pretty', ...BODY }}>{p.mesure.description}</p>
        <LinkGroup
          label="Indicateurs"
          items={p.mesure.statistiquesLinks}
          to={(s) => `/st/${s.id}`}
          empty="Aucun indicateur déjà décrit ne mesure cette problématique."
        />
        <Field label="Limites des indicateurs" items={p.mesure.limites} />

        {/* — 10. Débats sociologiques — */}
        <SectionTitle n={10}>Débats sociologiques</SectionTitle>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 8 }}>
          {p.debats.map((d) => (
            <div key={d.t}>
              <p
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 'var(--font-heading-weight)',
                  fontSize: 13.5,
                  margin: '0 0 3px',
                }}
              >
                {d.t}
              </p>
              <p style={{ fontSize: 13, lineHeight: 1.55, margin: 0, textWrap: 'pretty', ...BODY }}>{d.d}</p>
            </div>
          ))}
        </div>

        {/* — 11. Politiques publiques — */}
        <SectionTitle n={11}>Politiques publiques</SectionTitle>
        <LinkGroup
          label="Dispositifs cités"
          items={p.politiquesPubliquesLinks}
          to={(pp) => `/pp/${pp.id}`}
          empty="Aucune politique publique déjà décrite ne répond directement à cette problématique."
        />

        {/* — 12. Liens avec Sociologor — */}
        <SectionTitle n={12}>Liens avec Sociologor</SectionTitle>
        <FieldGrid>
          <LinkGroup label="Phénomènes associés" items={p.phenomenesLinks} to={(x) => `/p/${x.id}`} empty="Aucun." />
          <LinkGroup
            label="Concepts"
            items={p.conceptsLinks}
            to={(x) => `/c/${x.id}`}
            empty="Aucun."
          />
          <LinkGroup label="Processus" items={p.processusLinks} to={(x) => `/pr/${x.id}`} empty="Aucun." />
          <LinkGroup label="Théories" items={p.theoriesLinks} to={(x) => `/th/${x.id}`} empty="Aucune." />
          <LinkGroup label="Auteurs" items={p.auteursLinks} to={(x) => `/a/${x.id}`} empty="Aucun." />
          <LinkGroup label="Études" items={p.etudesLinks} to={(x) => `/et/${x.id}`} empty="Aucune." />
          <LinkGroup
            label="Problématiques connexes"
            items={p.problematiquesConnexesLinks}
            to={(x) => `/pb/${x.id}`}
            empty="Aucune autre problématique n'est encore décrite dans le corpus."
          />
        </FieldGrid>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, paddingTop: 8 }}>
          <button type="button" className="btn btn-secondary" style={{ fontSize: 12.5 }} onClick={onExport}>
            Exporter en Markdown
          </button>
          <Link className="btn btn-secondary" to="/problematiques" style={{ fontSize: 12.5 }}>
            Toutes les problématiques
          </Link>
        </div>
      </article>
    </Shell>
  );
}
