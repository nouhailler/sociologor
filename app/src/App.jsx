import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './routes/Home.jsx';
import Domain from './routes/Domain.jsx';
import Author from './routes/Author.jsx';
import Sociologues from './routes/Sociologues.jsx';
import Concept from './routes/Concept.jsx';
import Concepts from './routes/Concepts.jsx';
import Graph from './routes/Graph.jsx';
import Courants from './routes/Courants.jsx';
import Phenomenes from './routes/Phenomenes.jsx';
import Phenomene from './routes/Phenomene.jsx';
import Processus from './routes/Processus.jsx';
import ProcessusFiche from './routes/ProcessusFiche.jsx';
import Search from './routes/Search.jsx';
import Favs from './routes/Favs.jsx';
import Settings from './routes/Settings.jsx';
import NotFound from './routes/NotFound.jsx';
import { DocsIndex, DocsPage } from './routes/Docs.jsx';
import { useStore } from './state/store.jsx';

/** Redirige le lancement vers l'écran choisi dans les paramètres. */
function StartView() {
  const { settings } = useStore();
  return settings.startView === 'graph' ? <Navigate to="/graphe" replace /> : <Home />;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<StartView />} />
      <Route path="/accueil" element={<Home />} />
      <Route path="/d/:id" element={<Domain />} />
      <Route path="/a/:id" element={<Author />} />
      <Route path="/sociologues" element={<Sociologues />} />
      <Route path="/c/:id" element={<Concept />} />
      <Route path="/concepts" element={<Concepts />} />
      <Route path="/graphe" element={<Graph />} />
      <Route path="/courants" element={<Courants />} />
      <Route path="/phenomenes" element={<Phenomenes />} />
      <Route path="/p/:id" element={<Phenomene />} />
      <Route path="/processus" element={<Processus />} />
      <Route path="/pr/:id" element={<ProcessusFiche />} />
      <Route path="/recherche" element={<Search />} />
      <Route path="/mes-fiches" element={<Favs />} />
      <Route path="/parametres" element={<Settings />} />
      <Route path="/documentation" element={<DocsIndex />} />
      <Route path="/documentation/:chapter/:page" element={<DocsPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
