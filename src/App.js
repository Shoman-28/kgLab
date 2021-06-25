import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
          <Footer/>
        </Route>
        <Route exact path="/">
          <Home></Home>
          <Footer/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
