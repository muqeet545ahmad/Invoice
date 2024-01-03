const mongoose = require("mongoose");

const businessProfileOrganizationSchema = new mongoose.Schema({
  OrganizationName: {
    type: String,
    required: false,
  },
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
  websiteURL: {
    type: String,
    required: false,
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

const BusinessProfileOrganization = mongoose.model(
  "businessProfileOrganization",
  businessProfileOrganizationSchema
);
module.exports = { BusinessProfileOrganization };