import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../../actions/dataActions";
import { bindActionCreators } from "redux";
import PricesTable from "./PricesTable";
import PropTypes from "prop-types";

class AppBody extends Component {
  static propTypes = {
    getData: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.props.getData();
  }

  render() {
    const { data } = this.props;
    let dataObj = {};
    Object.values(data).map(item => (dataObj[item.title] = item.value));
    return (
      <div>
        <h1 style={{ textAlign: "left" }}>{dataObj.Title}</h1>
        <div style={{ textAlign: "left" }}>{dataObj.body}</div>
        <PricesTable />
      </div>
    );
  }
}

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
