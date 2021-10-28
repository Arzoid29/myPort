import React from "react";
import NavBar from "./components/Navbar";
import Education from "./pages/education";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Resume from "./pages/Resume";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

export default function App() {
  return (
    <Router>
    <NavBar/>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact>
            <Home></Home>
          </Route>
          <Route path="/education" exact>
            <Education></Education>
          </Route>
          <Route path="/resume" exact>
            <Resume></Resume>
          </Route>
          
        </Switch>
        <Footer></Footer>
    </Router>
  );
}
