import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div class="card">
          <div class="card-content">
            <p class="title">Home Page</p>
            <p class="subtitle">Just show a list of user</p>
            <table className="table is-fullwidth">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Firstname</th>
                  <th>Lastname</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
