import { Link } from 'react-router-dom';
import Shell from '../components/Shell.jsx';

export default function NotFound({ what = "Cette page n'existe pas." }) {
  return (
    <Shell title="Introuvable" subtitle="Erreur 404" canBack>
      <div className="soc-enter" style={{ maxWidth: 560 }}>
        <h2 className="soc-h2">Introuvable</h2>
        <p className="soc-lede">{what}</p>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <Link className="btn btn-primary" to="/">
            Retour à l&apos;accueil
          </Link>
          <Link className="btn btn-secondary" to="/recherche">
            Rechercher une fiche
          </Link>
        </div>
      </div>
    </Shell>
  );
}
