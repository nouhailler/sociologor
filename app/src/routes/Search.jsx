import { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Shell from '../components/Shell.jsx';
import { SEARCH_FILTERS, searchItems } from '../data/index.js';

export default function Search() {
  const [params, setParams] = useSearchParams();
  const q = params.get('q') || '';
  const filter = SEARCH_FILTERS.includes(params.get('type')) ? params.get('type') : 'Tout';

  const results = useMemo(() => searchItems(q, filter), [q, filter]);

  function update(next) {
    const p = new URLSearchParams(params);
    Object.entries(next).forEach(([k, v]) => {
      if (v) p.set(k, v);
      else p.delete(k);
    });
    setParams(p, { replace: true });
  }

  return (
    <Shell title="Recherche" subtitle="Auteurs, concepts, œuvres, phénomènes, processus">
      <div style={{ maxWidth: 720 }}>
        <label className="text-muted" htmlFor="soc-q" style={{ display: 'block', fontSize: 12, marginBottom: 5 }}>
          Rechercher dans les fiches
        </label>
        <input
          id="soc-q"
          className="input"
          type="search"
          value={q}
          onChange={(e) => update({ q: e.target.value })}
          placeholder="habitus, Weber, chômage, anomie…"
          autoComplete="off"
          style={{ margin: '0 0 12px', fontSize: 15, minHeight: 42 }}
        />

        <div style={{ display: 'flex', gap: 6, marginBottom: 16, flexWrap: 'wrap' }}>
          {SEARCH_FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              className="soc-chip"
              aria-pressed={filter === f}
              onClick={() => update({ type: f === 'Tout' ? null : f })}
            >
              {f}
            </button>
          ))}
        </div>

        <p
          style={{
            fontSize: 11,
            color: 'color-mix(in srgb, var(--color-text) 42%, transparent)',
            margin: '0 0 6px',
            letterSpacing: '0.03em',
          }}
          role="status"
        >
          {results.length} {results.length === 1 ? 'résultat' : 'résultats'}
        </p>

        {results.length === 0 && (
          <p className="soc-lede" style={{ maxWidth: '48ch' }}>
            Aucun résultat pour « {q} ». Essayez un nom d&apos;auteur, un concept (habitus, anomie, stigmate), un
            titre d&apos;œuvre, un phénomène (chômage, gentrification) ou un processus (précarisation,
            déclassement).
          </p>
        )}

        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {results.map((r) => (
            <li key={`${r.kind}-${r.title}-${r.id}`}>
              <Link
                to={r.to}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 12,
                  padding: '11px 2px',
                  borderBottom: '1px solid color-mix(in srgb, var(--color-text) 8%, transparent)',
                  color: 'var(--color-text)',
                }}
              >
                <span
                  style={{
                    flex: 'none',
                    marginTop: 3,
                    fontSize: 9.5,
                    letterSpacing: '0.09em',
                    textTransform: 'uppercase',
                    color: 'var(--color-accent-400)',
                    width: 64,
                  }}
                >
                  {r.kind}
                </span>
                <span style={{ flex: 1, minWidth: 0 }}>
                  <span
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 'var(--font-heading-weight)',
                      fontSize: 14.5,
                    }}
                  >
                    {r.title}
                  </span>
                  <span
                    style={{
                      display: 'block',
                      fontSize: 12,
                      lineHeight: 1.4,
                      color: 'color-mix(in srgb, var(--color-text) 50%, transparent)',
                      textWrap: 'pretty',
                    }}
                  >
                    {r.sub}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Shell>
  );
}
