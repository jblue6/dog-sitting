import React, { Component } from "react";
import AppNavBar from "../home/AppNavBar";

import "bootstrap/dist/css/bootstrap.min.css";

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <AppNavBar />
      </div>
    );
  }
}

export default Login;