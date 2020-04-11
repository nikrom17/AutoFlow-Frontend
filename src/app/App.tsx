import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import About from "./pages/aboutPage/aboutPage";
import Home from "./pages/homePage/homePage";
import "./App.css";

const App: React.FC = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
