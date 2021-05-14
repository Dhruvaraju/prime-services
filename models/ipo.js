const mongoose = require("mongoose");

const ipoSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  marketCap: {
    type: Number,
    required: true,
  },
  availableForSale: {
    type: Number,
    required: true,
  },
  ipoQuoteDetails: {
    description: {
      type: String,
    },
    issueDate: {
      type: Date,
    },
    issueSize: {
      type: Number,
    },
    issuePrice: {
      type: Number,
    },
    lotSize: {
      type: Number,
    },
    closingDate: {
      type: Date,
    },
  },
});

module.exports = mongoose.model("IPOData", ipoSchema);
