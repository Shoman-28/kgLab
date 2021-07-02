import React, { createContext, useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Login from "./components/loging/Login/Login/Login";
// import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";

import PrivateRoute from "./components/New folder//PrivateRoute";
import AllPatients from "./components/AllPatients/AllPatients/AllPatients";
import Appoinment from "./components/Appoinment/Appoinment/Appoinment";
import Deshboard from "./components/Deshboard/Deshboard/Deshboard";
import AddDoctor from "./components/AddDoctor/AddDoctor";
import Loging from "./components/New folder/Loging/Loging";
import Prescriptions from './components/Deshboard/Prescriptions/Prescriptions';
import Settings from "./components/Settings/Settings";
import Blog from "./components/Home/Blogs/Blog/Blog";
import ContactMain from "./components/Home/Contact/ContactMain/ContactMain";

export const userContext = createContext();


function App() {
  const [ loggedInUser, setLoggedInUser ] = useState({});
  const [admin, setAdmin ]=useState(false)

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setLoggedInUser(userInfo)
  }, [])
  console.log(loggedInUser)

  
  return (
    <userContext.Provider value={{ loggedInUser, setLoggedInUser, admin, setAdmin  }}>
      <Router>
        
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/dashboard">
            <Deshboard></Deshboard>
          </PrivateRoute>
          <Route path="/appointment">
            <Appoinment />
          </Route>
          <Route path="/allPatients">
            <AllPatients></AllPatients>
          </Route>
          <Route path="/blogs">
            <Blog></Blog>
          </Route>
          <Route path="/contact">
            <ContactMain></ContactMain>
          </Route>
          <Route path="/logIn">
            <Loging></Loging>
          </Route>                 
          <Route path="/addDoctor">
            <AddDoctor></AddDoctor>
          </Route>
          <Route path="/prescriptions">
            <Prescriptions></Prescriptions>
          </Route>
          <Route path="/doctor/setting">
            <Settings></Settings>
           
          </Route>
          
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      
      </Router>
    </userContext.Provider>
    
  );
}

export default App;
