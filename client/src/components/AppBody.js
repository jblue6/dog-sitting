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
        <div>
          {this.props.data
            ? "Title loaded from mongodb in the cloud"
            : "Cannot retrieve data from mongodb"}
        </div>
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
