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
import Mecanismes from './routes/Mecanismes.jsx';
import MecanismeFiche from './routes/MecanismeFiche.jsx';
import Processus from './routes/Processus.jsx';
import ProcessusFiche from './routes/ProcessusFiche.jsx';
import Fondamentaux from './routes/Fondamentaux.jsx';
import FondamentalFiche from './routes/FondamentalFiche.jsx';
import Methodes from './routes/Methodes.jsx';
import MethodeFiche from './routes/MethodeFiche.jsx';
import EtudesFondatrices from './routes/EtudesFondatrices.jsx';
import EtudeFondatriceFiche from './routes/EtudeFondatriceFiche.jsx';
import Institutions from './routes/Institutions.jsx';
import InstitutionFiche from './routes/InstitutionFiche.jsx';
import GroupesSociaux from './routes/GroupesSociaux.jsx';
import GroupeSocialFiche from './routes/GroupeSocialFiche.jsx';
import Problematiques from './routes/Problematiques.jsx';
import ProblematiqueFiche from './routes/ProblematiqueFiche.jsx';
import GrapheProblematique from './routes/GrapheProblematique.jsx';
import Theories from './routes/Theories.jsx';
import TheorieFiche from './routes/TheorieFiche.jsx';
import Etudes from './routes/Etudes.jsx';
import EtudeFiche from './routes/EtudeFiche.jsx';
import Statistiques from './routes/Statistiques.jsx';
import StatistiqueFiche from './routes/StatistiqueFiche.jsx';
import PolitiquesPubliques from './routes/PolitiquesPubliques.jsx';
import PolitiquePubliqueFiche from './routes/PolitiquePubliqueFiche.jsx';
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
      <Route path="/mecanismes" element={<Mecanismes />} />
      <Route path="/m/:id" element={<MecanismeFiche />} />
      <Route path="/processus" element={<Processus />} />
      <Route path="/pr/:id" element={<ProcessusFiche />} />
      <Route path="/fondamentaux" element={<Fondamentaux />} />
      <Route path="/f/:id" element={<FondamentalFiche />} />
      <Route path="/methodes" element={<Methodes />} />
      <Route path="/me/:id" element={<MethodeFiche />} />
      <Route path="/etudes-fondatrices" element={<EtudesFondatrices />} />
      <Route path="/ef/:id" element={<EtudeFondatriceFiche />} />
      <Route path="/institutions" element={<Institutions />} />
      <Route path="/in/:id" element={<InstitutionFiche />} />
      <Route path="/groupes-sociaux" element={<GroupesSociaux />} />
      <Route path="/gs/:id" element={<GroupeSocialFiche />} />
      <Route path="/problematiques" element={<Problematiques />} />
      <Route path="/pb/:id" element={<ProblematiqueFiche />} />
      <Route path="/pb/:id/graphe" element={<GrapheProblematique />} />
      <Route path="/theories" element={<Theories />} />
      <Route path="/th/:id" element={<TheorieFiche />} />
      <Route path="/etudes" element={<Etudes />} />
      <Route path="/et/:id" element={<EtudeFiche />} />
      <Route path="/statistiques" element={<Statistiques />} />
      <Route path="/st/:id" element={<StatistiqueFiche />} />
      <Route path="/politiques-publiques" element={<PolitiquesPubliques />} />
      <Route path="/pp/:id" element={<PolitiquePubliqueFiche />} />
      <Route path="/recherche" element={<Search />} />
      <Route path="/mes-fiches" element={<Favs />} />
      <Route path="/parametres" element={<Settings />} />
      <Route path="/documentation" element={<DocsIndex />} />
      <Route path="/documentation/:chapter/:page" element={<DocsPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
