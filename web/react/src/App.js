import React, { Component } from "react";
import NavBar from "./NavBar";
import "./App.css";
import Home from "./Home";
import About from "./About";
import User from "./User";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <section className="content">
          <Switch>
            <Route path="/user/:id" component={User} />
            <Route path="/about" component={About} />
            <Route path="/" component={Home} />
          </Switch>
        </section>
      </div>
    );
  }
}

export default App;
