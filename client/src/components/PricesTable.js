import React, { Component } from "react";
import { connect } from "react-redux";
import { getPrices } from "../actions/pricesActions";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";

class PricesTable extends Component {
  componentDidMount() {
    this.props.getPrices();
  }

  render() {
    // don't try and render until the data has loaded
    const { prices } = this.props;
    console.log(prices);
    Object.values(prices).forEach(price => console.log(price.description))
    return (
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Price</th>
            <th>Basis</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(prices).forEach(price => (
            <tr>
              <td>{price.description}</td>
              <td>{price.amount}</td>
              <td>{price.basis}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

PricesTable.propTypes = {
  getPrices: PropTypes.func.isRequired,
  prices: PropTypes.object.isRequired
};

// map the state of the store to compoennts props so the component can access them
const mapStateToProps = state => ({
  prices: state.prices
});

// map redux actions to component props, so the component can call them
const mapActionsToProps = (dispatch, props) => {
  return bindActionCreators({
    getPrices: getPrices
  }, dispatch);
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(PricesTable);

/*

          */