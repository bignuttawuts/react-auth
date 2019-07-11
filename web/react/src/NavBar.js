import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <nav
        className="navbar is-dark is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div class="container">
          <div className="navbar-brand">
            <a className="navbar-item title is-4" href="#">
              React Auth
            </a>
          </div>
          <div className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item">Home</a>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <Link className="button is-primary" to="/register">
                    <strong>Sign up</strong>
                  </Link>
                  <Link className="button is-light" to="/login">
                    <strong>Log in</strong>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
