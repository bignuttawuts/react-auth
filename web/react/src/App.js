import React, { Component } from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Register from "./Register";
import User from "./User";
import Login from "./Login";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <section class="section">
          <Switch>
            <Route path="/user/:id" component={User} />
            <Route path="/about" component={About} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/" component={Home} />
          </Switch>
        </section>
      </div>
    );
  }
}

export default App;
