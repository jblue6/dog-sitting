import React, { Component } from "react";
import LoginNavBar from "./LoginNavBar";

import "bootstrap/dist/css/bootstrap.min.css";

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <LoginNavBar />
      </div>
    );
  }
}

export default Login;