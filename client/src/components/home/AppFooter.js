import React, { Component } from "react";

import { Navbar, Nav, Container } from "reactstrap";
import ContactsTable from "./ContactsTable";

class AppFooter extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div style={{ position: "absolute", bottom: 0, width: "100%" }}>
        <Navbar color="dark" dark expand="sm">
          <Container>
<<<<<<< HEAD:client/src/components/home/AppFooter.js
            <Nav>
              <ContactsTable />
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default AppFooter;
