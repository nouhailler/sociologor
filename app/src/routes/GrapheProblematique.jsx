import { Link, useParams } from 'react-router-dom';
import Shell from '../components/Shell.jsx';
import NotFound from './NotFound.jsx';
import { getProblematiqueGraph } from '../data/index.js';

/**
 * Le graphe d'une problématique : un nœud central et ses familles de liens
 * disposées en rayons — phénomènes, concepts, mécanismes, processus,
 * théories, auteurs, études, statistiques, politiques publiques,
 * problématiques connexes. Position calculée dans `getProblematiqueGraph`
 * (src/data/index.js), sur le modèle du graphe des concepts.
 */
export default function GrapheProblematique() {
  const { id } = useParams();
  const graph = getProblematiqueGraph(id);

  if (!graph) {
    return <NotFound what="Cette problématique n'existe pas." />;
  }

  const { problematique, nodes, edges, size, center } = graph;
  const at = (v) => v + center;

  return (
    <Shell title={`Graphe — ${problematique.t}`} subtitle="Problématique sociale" canBack>
      <div className="soc-enter">
        <h2 className="soc-h2">Graphe de la problématique « {problematique.t} »</h2>
        <p className="soc-lede" style={{ marginBottom: 10 }}>
          Chaque rayon est une famille de liens ; chaque point sur le rayon, une fiche du corpus.
          Touchez un nœud pour l&apos;ouvrir.
        </p>
        <p style={{ margin: '0 0 18px' }}>
          <Link to={`/pb/${problematique.id}`} className="btn btn-ghost" style={{ fontSize: 12 }}>
            ← Retour à la fiche
          </Link>
        </p>

        <div
          className="soc-graph-frame soc-scroll"
          tabIndex={0}
          aria-label={`Graphe de la problématique ${problematique.t}, défilement horizontal et vertical`}
        >
          <div style={{ position: 'relative', width: size, height: size }}>
            <svg width={size} height={size} style={{ position: 'absolute', inset: 0, overflow: 'visible' }} aria-hidden="true">
              {edges.map((e) => (
                <line
                  key={e.id}
                  x1={at(e.x1)}
                  y1={at(e.y1)}
                  x2={at(e.x2)}
                  y2={at(e.y2)}
                  stroke="var(--color-neutral-700)"
                  strokeWidth={1}
                />
              ))}
            </svg>

            {nodes.map((n) => {
              if (n.kind === 'famille') {
                return (
                  <span
                    key={n.id}
                    style={{
                      position: 'absolute',
                      left: at(n.x),
                      top: at(n.y),
                      transform: 'translate(-50%, -50%)',
                      fontSize: 10.5,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      color: 'color-mix(in srgb, var(--color-text) 50%, transparent)',
                      fontFamily: 'var(--font-heading)',
                      whiteSpace: 'nowrap',
                      background: 'var(--color-bg)',
                      padding: '2px 6px',
                      borderRadius: 6,
                    }}
                  >
                    {n.label}
                  </span>
                );
              }
              if (n.kind === 'center') {
                return (
                  <Link
                    key={n.id}
                    to={n.to}
                    className="soc-node"
                    style={{
                      left: at(n.x),
                      top: at(n.y),
                      transform: 'translate(-50%, -50%)',
                      width: 150,
                      background: 'var(--color-accent-900)',
                      borderColor: 'var(--color-accent-700)',
                    }}
                  >
                    <span
                      style={{
                        display: 'block',
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 'var(--font-heading-weight)',
                        fontSize: 14,
                        lineHeight: 1.15,
                        color: 'var(--color-accent-300)',
                        textAlign: 'center',
                      }}
                    >
                      {n.label}
                    </span>
                  </Link>
                );
              }
              return (
                <Link
                  key={n.id}
                  to={n.to}
                  className="soc-node"
                  style={{ left: at(n.x), top: at(n.y), transform: 'translate(-50%, -50%)', width: 148, padding: '6px 9px' }}
                >
                  <span
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 'var(--font-heading-weight)',
                      fontSize: 11.5,
                      lineHeight: 1.2,
                      letterSpacing: '-0.01em',
                      color: 'var(--color-text)',
                    }}
                  >
                    {n.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </Shell>
  );
}
