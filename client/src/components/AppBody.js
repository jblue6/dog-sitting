import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/dataActions";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
  NavLink
} from "reactstrap";

class AppBody extends Component {
  componentDidMount() {
    this.props.onMount();
  }

  render() {
    return (
      <div>
        <h1>Title</h1>
        <div>{String(this.props.data)}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.data
});

const mapDispatchToProps = (state, dispatch) => ({
  onMount: getData
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppBody);
