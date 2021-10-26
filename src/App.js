import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import Resume from "./pages/Resume"
export default function App() {
  return (
    <Router>
      <div>
       <NavBar/>
        <Switch>
          <Route path="/Home" component={Home}>
            
          </Route>
          <Route path="/resume" component={Resume}>
            
          </Route>
          <Route path="/">
            
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

