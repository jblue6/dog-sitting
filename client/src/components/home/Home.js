import React, { Component } from "react";
import AppNavBar from "./AppNavBar";
import AppBody from "./AppBody";
import AppFooter from "./AppFooter";
import { Container } from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <AppNavBar />
        <Container>
          <AppBody />
        </Container>
        <AppFooter />
      </div>
    );
  }
}

export default Home;
