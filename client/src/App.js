import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";
import { Provider } from "react-redux";
import store from "./store";

import Home from "./components/home/Home";
import Editor from "./components/editor/Editor";

import { loadUser } from "./actions/authActions";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  // when the components load, call the loadUser function
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route path={"/editor"} component={Editor} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
