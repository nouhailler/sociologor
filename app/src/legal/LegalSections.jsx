import { A_COMPLETER } from './content.js';

/**
 * Rendu unique du contenu légal : sert la modale du premier lancement comme
 * le chapitre « Informations légales » de la documentation.
 * Un champ non renseigné s'affiche en évidence, jamais en texte courant.
 */
export function LegalValue({ value }) {
  if (value === A_COMPLETER) {
    return (
      <em style={{ color: 'var(--color-accent-300)', fontStyle: 'italic' }} title="Information à compléter avant publication">
        {A_COMPLETER}
      </em>
    );
  }
  return <>{value}</>;
}

export default function LegalSections({ doc, headingLevel = 2 }) {
  const H = `h${headingLevel}`;

  return (
    <>
      {doc.intro && (
        <p className="text-muted" style={{ fontSize: 13, marginBottom: 20 }}>
          {doc.intro}
        </p>
      )}

      {doc.sections.map((s) => (
        <section key={s.id} style={{ marginBottom: 24 }}>
          <H
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 'var(--font-heading-weight)',
              fontSize: 17,
              margin: '0 0 8px',
            }}
          >
            {s.title}
          </H>

          {s.fields && (
            <dl style={{ margin: '0 0 10px' }}>
              {s.fields.map((f) => (
                <div key={f.k} style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 4 }}>
                  <dt
                    className="text-muted"
                    style={{ fontSize: 12.5, minWidth: 160, fontFamily: 'var(--font-heading)' }}
                  >
                    {f.k}
                  </dt>
                  <dd style={{ margin: 0, fontSize: 13.5, flex: 1, minWidth: 180 }}>
                    <LegalValue value={f.v} />
                  </dd>
                </div>
              ))}
            </dl>
          )}

          {s.body?.map((p, i) => (
            <p key={i} style={{ fontSize: 13.5, lineHeight: 1.6, margin: '0 0 8px', textWrap: 'pretty' }}>
              {p}
            </p>
          ))}
        </section>
      ))}
    </>
  );
}
