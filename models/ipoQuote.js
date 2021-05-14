const mongoose = require("mongoose");

const quoteSchema = mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  issueDate: {
    type: Date,
    required: true,
  },
  issueSize: {
    type: Number,
    required: true,
  },
  issuePrice: {
    type: Number,
    required: true,
  },
  lotSize: {
    type: Number,
    required: true,
  },
  closingDate: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("IPOQuote", quoteSchema);
