import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../../actions/dataActions";
import { bindActionCreators } from "redux";
import PricesTable from "./PricesTable";
import PropTypes from "prop-types";

class AppBody extends Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    const { data } = this.props;
    return (
      <div>
        <h1 style={{ textAlign: "left" }}>{data.Title}</h1>
        <div style={{ textAlign: "left" }}>
          Title loaded from mongodb in the cloud
        </div>
        <PricesTable />
      </div>
    );
  }
}

AppBody.propTypes = {
  getData: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

// map the state of the store to compoennts props so the component can access them
const mapStateToProps = state => ({
  data: state.data
});

// map redux actions to component props, so the component can call them
const mapActionsToProps = (dispatch, props) => {
  return bindActionCreators(
    {
      getData: getData
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(AppBody);
