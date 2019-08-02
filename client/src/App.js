import React, { Component } from "react";
import { Router, Route } from "react-router";

import { Provider } from "react-redux";
import store from "./store";

import Home from "./components/home/Home";
import Login from "./components/login/Login";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

export default App;
