import React, { Component } from "react";

class User extends Component {
  render() {
    return (
      <div>
        <h1>User ID: {this.props.match.params.id}</h1>
      </div>
    );
  }
}

export default User;
