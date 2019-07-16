import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/dataActions";

class AppBody extends Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    return (
      <div>
        <h1>{this.props.data ? this.props.data[0].value : "Loading"}</h1>
        <div>Title loaded from mongodb in the cloud</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.data.data
});

const mapDispatchToProps = (state, dispatch) => ({
  getData
});

export default connect(
  mapStateToProps,
  { getData }
)(AppBody);
