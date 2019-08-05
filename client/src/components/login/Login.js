import React, { Component } from "react";
import LoginNavBar from "./LoginNavBar";
import LoginBody from "./LoginBody";

import "bootstrap/dist/css/bootstrap.min.css";

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <LoginNavBar />
        <LoginBody />
      </div>
    );
  }
}

export default Login;