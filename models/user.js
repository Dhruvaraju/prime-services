const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
    createIndexes: true,
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
    createIndexes: true,
  },
  organizationName: {
    type: String,
  },
  registeredDate: {
    type: Date,
    default: Date.now,
  },
  panNumber: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  addressLine01: {
    type: String,
    required: true,
  },
  addressLine02: {
    type: String,
  },
  state: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  pincode: {
    type: Number,
    required: true,
  },
  userType: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
