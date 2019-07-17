import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/dataActions";

class AppBody extends Component {
  componentDidMount() {
    this.props.onComponentMount();
  }

  render() {
    // don't try and render until the data has loaded
    if (this.props.data) {
      return (
        <div>
          <h1>{this.props.data.Title}</h1>
          <div>
            {"Title loaded from mongodb in the cloud"}
          </div>
        </div>
      );
    }
  }
}

// map the state of the store to compoennts props so the component can access them
const mapStateToProps = state => ({
  data: state.data
});

// map redux actions to component props, so the component can call them
const mapActionsToProps = {
  onComponentMount: getData
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(AppBody);
