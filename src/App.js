import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Appoinment from "./components/Appoinment/Appoinment/Appoinment";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route exact path="/appointment">
          <Appoinment />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
