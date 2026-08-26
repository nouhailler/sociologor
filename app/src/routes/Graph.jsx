import { useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Shell from '../components/Shell.jsx';
import { GRAPH_EDGES, GRAPH_H, GRAPH_NODES, GRAPH_W } from '../data/index.js';

export default function Graph() {
  const [params] = useSearchParams();
  const focus = params.get('focus');
  const frameRef = useRef(null);
  const nodeRef = useRef(null);

  // « Situer dans le graphe » : on amène le nœud demandé au centre du cadre.
  useEffect(() => {
    const frame = frameRef.current;
    const node = nodeRef.current;
    if (!focus || !frame || !node) return;
    frame.scrollTo({
      left: Math.max(0, node.offsetLeft - frame.clientWidth / 2 + node.offsetWidth / 2),
      top: Math.max(0, node.offsetTop - frame.clientHeight / 2 + node.offsetHeight / 2),
      behavior: 'smooth',
    });
  }, [focus]);

  return (
    <Shell title="Graphe des filiations" subtitle="De Comte à Becker">
      <div className="soc-enter">
        <h2 className="soc-h2">Graphe des filiations</h2>
        <p className="soc-lede" style={{ marginBottom: 10 }}>
          De Comte à Becker : qui lit qui, et qui s&apos;en écarte. Touchez un nom pour ouvrir sa fiche.
        </p>
        <p style={{ margin: '0 0 18px' }}>
          <Link to="/courants" className="btn btn-ghost" style={{ fontSize: 12 }}>
            Carte des courants →
          </Link>
        </p>

        <div className="soc-graph-frame soc-scroll" ref={frameRef} tabIndex={0} aria-label="Graphe des filiations, défilement horizontal et vertical">
          <div style={{ position: 'relative', width: GRAPH_W, height: GRAPH_H }}>
            <svg
              width={GRAPH_W}
              height={GRAPH_H}
              style={{ position: 'absolute', inset: 0, overflow: 'visible' }}
              aria-hidden="true"
            >
              {GRAPH_EDGES.map((e) => (
                <path
                  key={e.id}
                  d={e.d}
                  fill="none"
                  stroke={e.soft ? 'var(--color-neutral-700)' : 'var(--color-accent)'}
                  strokeWidth={e.soft ? 1 : 1.6}
                />
              ))}
            </svg>

            {GRAPH_NODES.map((n) => (
              <Link
                key={n.id}
                to={`/a/${n.id}`}
                className="soc-node"
                data-active={focus === n.id}
                ref={focus === n.id ? nodeRef : undefined}
                style={{ left: n.x, top: n.y }}
              >
                <span
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 'var(--font-heading-weight)',
                    fontSize: 13.5,
                    lineHeight: 1.15,
                    letterSpacing: '-0.01em',
                    color: 'var(--color-text)',
                  }}
                >
                  {n.name}
                </span>
                <span
                  style={{
                    display: 'block',
                    fontSize: 10,
                    color: 'color-mix(in srgb, var(--color-text) 45%, transparent)',
                    marginTop: 3,
                  }}
                >
                  {n.sub}
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 14,
            marginTop: 12,
            fontSize: 11,
            color: 'color-mix(in srgb, var(--color-text) 45%, transparent)',
          }}
        >
          <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span aria-hidden="true" style={{ width: 16, height: 2, background: 'var(--color-accent)' }} />
            filiation directe
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span aria-hidden="true" style={{ width: 16, height: 2, background: 'var(--color-neutral-700)' }} />
            influence indirecte ou critique
          </span>
        </div>
      </div>
    </Shell>
  );
}
