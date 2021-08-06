const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
  },
  messageText: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("contact", contactSchema);
