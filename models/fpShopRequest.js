const mongoose = require("mongoose");

const fpShopRequestSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["Buy", "Sell"],
    required: true,
  },
  paymentType: {
    type: String,
    enum: ["Monthly", "Quarterly", "Yearly"],
  },
  productId: {
    type: String,
    required: true,
  },
  marketPrice: {
    type: Number,
    required: true,
  },
});
module.exports = mongoose.model("FPShopRequest", fpShopRequestSchema);
