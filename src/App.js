import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {createBrowserHistory} from 'history';
import NavBar from "./components/Navbar";
import Education from "./pages/education";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
const history = createBrowserHistory();
export default function App() {
  return (
    <Router history={history}>
      <NavBar />
      <Switch>
        <Route path="/" exact={true} component={Home}></Route>
        <Route path="/resume" exact={true} component={Resume}></Route>
        <Route path="/education" exact={true} component={Education}></Route>
      </Switch>
    </Router>
  );
}
