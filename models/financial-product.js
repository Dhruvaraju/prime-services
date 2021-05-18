const mongoose = require("mongoose");

const financialProductSchema = mongoose.Schema({
  productId: {
    type: String,
    required: true,
  },
  productDescription: {
    type: String,
    required: true,
  },
  typeOfProduct: {
    type: String,
    enum: ["INCOME", "WEALTH-MANAGEMENT"],
  },
  paymentType: {
    type: String,
    enum: ["Monthly", "Quarterly", "Yearly"],
  },
  minimumPaymentAmount: {
    type: Number,
    default: 10000,
  },
});

module.exports = mongoose.model("FinancialProduct", financialProductSchema);
