import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div className="container">
        <div className="columns">
          <div className="column is-4 is-offset-4">
            <h2 className="title">Sign in to React Auth</h2>
            <div className="card">
              <div className="card-content">
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input className="input" type="text" />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Password</label>
                  <div className="control">
                    <input className="input" type="password" />
                  </div>
                </div>
                <div class="field">
                  <div class="control">
                    <button class="button is-primary is-fullwidth">
                      Sign in
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
