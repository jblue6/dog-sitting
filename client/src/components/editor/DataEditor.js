import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getData } from "../../actions/dataActions";
import { bindActionCreators } from "redux";

class DataEditor extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.props.getData();
  }

  render() {
    console.log(this.props.data);
    return <div>Rendered from new element</div>;
  }
}

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
)(DataEditor);
