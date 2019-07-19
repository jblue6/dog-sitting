import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/dataActions";
import { getPrices } from "../actions/pricesActions";
import { bindActionCreators } from "redux"

class AppBody extends Component {
  componentDidMount() {
    this.props.getData();
    this.props.getPrices();
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
const mapActionsToProps = (dispatch, props) => {
  return bindActionCreators({
    getData: getData,
    getPrices: getPrices
  }, dispatch);
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(AppBody);
