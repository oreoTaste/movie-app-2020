import React from "react";
import "./App.css";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./router/Home";
import About from "./router/About";
import Detail from "./router/Detail";
import Navigation from "./components/Navigation";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/detail/:id" component={Detail} />
      </Router>
    );
  }
}

export default App;
