const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// create schema
const PricesSchema = new Schema({
  description: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  basis: {
    type: String,
  },
  dateEdited: {
    type: Date,
    default: Date.now
  }
});

module.exports = Prices = mongoose.model("prices", PricesSchema);