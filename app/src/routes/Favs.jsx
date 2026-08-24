import { Link } from 'react-router-dom';
import Shell from '../components/Shell.jsx';
import { AUTHORS } from '../data/index.js';
import { useStore } from '../state/store.jsx';

export default function Favs() {
  const { favs } = useStore();
  const list = favs.filter((id) => AUTHORS[id]).map((id) => AUTHORS[id]);

  return (
    <Shell title="Mes fiches" subtitle={`${favs.length} épinglée${favs.length > 1 ? 's' : ''}`}>
      <div style={{ maxWidth: 720 }}>
        <h2 className="soc-h2" style={{ marginBottom: 16 }}>
          Mes fiches
        </h2>

        {list.length === 0 ? (
          <p className="soc-lede" style={{ maxWidth: '48ch' }}>
            Rien encore. L&apos;étoile en haut d&apos;une fiche l&apos;épingle ici. Toutes les fiches restent de
            toute façon disponibles hors connexion : l&apos;épinglage sert à retrouver les vôtres.
          </p>
        ) : (
          <div className="soc-list-grid">
            {list.map((a) => (
              <Link key={a.id} to={`/a/${a.id}`} className="soc-row-btn" style={{ alignItems: 'center' }}>
                <span className="soc-initials" style={{ width: 38, height: 38, borderRadius: 10, fontSize: 13 }}>
                  {a.initials}
                </span>
                <span style={{ flex: 1, minWidth: 0 }}>
                  <span
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 'var(--font-heading-weight)',
                      fontSize: 14.5,
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
                    }}
                  >
                    {a.dates} · {a.courant}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </Shell>
  );
}
