const mongoose = require("mongoose");

const transactionRequestSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["Buy", "Sell"],
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  orderType: {
    type: String,
    enum: ["Market", "Limit"],
    required: true,
  },
  priceLimit: {
    type: Number,
  },
  marketPrice: {
    type: Number,
    required: true,
  },
});
module.exports = mongoose.model("TransactionRequest", transactionRequestSchema);
