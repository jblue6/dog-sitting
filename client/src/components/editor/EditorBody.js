import React, { Component, Fragment } from "react";
import { Container } from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import DataEditor from "./DataEditor";

import "bootstrap/dist/css/bootstrap.min.css";

class LoginBody extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const signedIn = (
      <Fragment>
        <h4>{user ? `Welcome ${user.name}` : ""}</h4>
        <DataEditor />
      </Fragment>
    );
    const notSignedIn = (
      <Fragment>
        <h4>Please log in Using the links in the nav bar</h4>
      </Fragment>
    );
    return <Container>{isAuthenticated ? signedIn : notSignedIn}</Container>;
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  null
)(LoginBody);
