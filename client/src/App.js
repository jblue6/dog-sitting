import React, { Component } from "react";
import AppNavBar from "./components/AppNavBar";
import AppBody from "./components/AppBody";
import AppFooter from "./components/AppFooter";
import { Container } from "reactstrap";

import { Provider } from "react-redux";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavBar />
          <Container>
            <AppBody />

          </Container>
          <AppFooter />
        </div>
      </Provider>
    );
  }
}

export default App;
