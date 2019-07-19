const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// create schema
const PricesSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  },
  dateEdited: {
    type: Date,
    default: Date.now
  }
});

module.exports = Prices = mongoose.model("prices", PricesSchema);