const mongoose = require("mongoose");
const ipoRegister = require("../models/ipo");

const registerIpo = async (req, res) => {
  const newIpo = new ipoRegister({
    userName: req.body.userName,
    companyName: req.body.companyName,
    marketCap: req.body.marketCap,
    availableForSale: req.body.availableForSale,
  });
  try {
    const regStatus = await newIpo.save();
    res.status(204).send(regStatus);
  } catch (error) {
    res.send({ status: "update failed", reason: error });
  }
};

module.exports = { registerIpo };
