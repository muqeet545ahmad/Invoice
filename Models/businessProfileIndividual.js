const mongoose = require("mongoose");

const businessProfileIndividualSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zipCode: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  websiteURL: {
    type: String,
    required: false,
  },
  taxIdentificationNumber: {
    type: Number,
    required: true,
  },
  Notes: {
    type: String,
    required: true,
  },
  faxNumber: {
    type: Number,
    required: true,
  },
  customFields: {
    type: String,
    required: false,
  },
});

const BusinessProfileIndividual = mongoose.model(
  "businessProfileIndividual",
  businessProfileIndividualSchema
);
module.exports = { BusinessProfileIndividual };
