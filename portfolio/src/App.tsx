
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Sections/Home';
import Projeto from './Sections/Projeto';
import Skills from './Sections/Skills';
import SobreMim from './Sections/SobreMim';
import ProjetoDetalhes from './Sections/ProjetoDetalhes'
import Contato from "./Sections/Contato";

function App() {
  return (
    <Router>
      <header>
        <Navbar />
      </header>

      <Switch>
        <Route exact path="/">
          <Home />
          <SobreMim />
          <Skills />
          <Projeto />
          <Contato/>
        </Route>

        <Route path="/projeto/:id" component={ProjetoDetalhes} />
      </Switch>
    </Router>
  );
}

export default App;
