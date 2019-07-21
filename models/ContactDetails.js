const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// create schema
const ContactDetailsSchema = new Schema({
  type: {
    type: String,
    required: true
  },
  value: {
    type: String
  },
  dateEdited: {
    type: Date,
    default: Date.now
  }
});

module.exports = ContactDetails = mongoose.model(
  "contactDetails",
  ContactDetailsSchema
);
