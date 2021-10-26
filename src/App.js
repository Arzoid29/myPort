import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Education from "./pages/education";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
export default function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="https://arzoid29.github.io/" exact={true} component={Home}></Route>
        <Route path="https://arzoid29.github.io/myPort/resume" exact={true} component={Resume}></Route>
        <Route path="https://arzoid29.github.io/myPort/education" exact={true} component={Education}></Route>
      </Switch>
    </Router>
  );
}
