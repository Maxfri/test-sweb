import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import {
  Switch,
  Route,
  useLocation
} from "react-router-dom"
import { Account, Domains, Logbook, VPS } from './pages/index'

function App() {
  const location = useLocation()

  return (
    <div className="App">
      <Header />
      <SideBar />

      <div className="content">
        <Switch location={location}>
          <Route path="/account">
            <Account />
          </Route>
          <Route path="/vps">
            <VPS />
          </Route>
          <Route path="/domains">
            <Domains />
          </Route>
          <Route exact path="/logbook">
            <Logbook />
          </Route>
          {/* <Route path="*">
          <NoMatch />
        </Route> */}
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
