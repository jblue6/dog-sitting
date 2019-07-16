import React, { Component } from "react";
import AppNavBar from "./components/AppNavBar";
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
            <h1>Blue Dog Sitting</h1>
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
