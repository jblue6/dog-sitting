import React, { Component } from "react";
import { connect } from "react-redux";
import { getContactDetails } from "../../actions/contactDetailsActions";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { Table } from "reactstrap";

class ContactsTable extends Component {
  componentDidMount() {
    this.props.getContactDetails();
  }

  render() {
    // destructure the data
    const { contactDetails } = this.props;
    return (
      <Table
        className="contacts_table"
        borderless
        size="sm"
        style={{ width: "300px", marginTop: "50px" }}
      >
        <tbody>
          {Object.values(contactDetails).map((contactDetail, key) => (
            <tr key={key}>
              <td style={{ textAlign: "left", color: "white" }}>{contactDetail.type}</td>
              <td style={{ textAlign: "left", color: "white" }}>{contactDetail.value}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

ContactsTable.propTypes = {
  getContactDetails: PropTypes.func.isRequired,
  contactDetails: PropTypes.object.isRequired
};

// map the state of the store to compoennts props so the component can access them
const mapStateToProps = state => ({
  contactDetails: state.contactDetails
});

// map redux actions to component props, so the component can call them
const mapActionsToProps = (dispatch, props) => {
  return bindActionCreators(
    {
      getContactDetails: getContactDetails
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(ContactsTable);
