import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import NavBar from "./components/Navbar";
import Education from "./pages/education";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
export default function App() {
  return (
    <HashRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact={true} component={Home}></Route>
        <Route path="/resume" exact={true} component={Resume}></Route>
        <Route path="/education" exact={true} component={Education}></Route>
      </Switch>
    </HashRouter>
  );
}
