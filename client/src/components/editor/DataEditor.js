import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getData } from "../../actions/dataActions";
import { bindActionCreators } from "redux";
import { FormGroup, Label, Input } from "reactstrap";

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
      <Fragment>
        {Object.values(data).map((item, key) => (
          <FormGroup key={key}>
            <Label for={item.title}>{capitalize(item.title)}</Label>
            <Input
              type={item.title === "Title" ? "text" : "textarea"}
              name={item.title}
              id={item.title}
              defaultValue={item.value}
            />
          </FormGroup>
        ))}
      </Fragment>
    );
  }
}

function capitalize(string) {
  return string.substring(0, 1).toUpperCase() + string.substring(1);
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
