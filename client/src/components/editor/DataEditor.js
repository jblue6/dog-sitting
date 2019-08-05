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
    let { data } = this.props;
    return (
      <form>
        {Object.values(data).map((item, key) => (
          <p key={key}>
            <label>{item.title}</label>
            <input value={item.value} />
          </p>
        ))}
      </form>
    );
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
