const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  organizationName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unicreateIndexes: true,
  },
  registeredDate: {
    type: Date,
    default: Date.now,
  },
  panNumber: {
    type: String,
    required: true,
  },
  userType: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
