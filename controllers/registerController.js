const mongoose = require("mongoose");
const loUser = require("../models/user");
const bcrypt = require("bcrypt");

const addUser = async (req, res) => {
  try {
    const foundUser = await loUser.findOne(
      { userName: req.body.userName },
      "username"
    );
    const emailFound = await loUser.findOne({ email: req.body.email }, "email");
    if (foundUser != null || emailFound != null) {
      res.send({ message: "User already exists", status: 300 });
    } else {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const newUser = new loUser({
        userName: req.body.userName,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        organizationName: req.body.organizationName,
        registeredDate: Date.now(),
        panNumber: req.body.panNumber,
        password: hashedPassword,
        addressLine01: req.body.addressLine01,
        addressLine02: req.body.addressLine02,
        state: req.body.state,
        country: req.body.country,
        pincode: req.body.pincode,
        userType: req.body.userType,
      });

      const update = await newUser.save();
      res.send({
        message: `${update.firstName} Created Successfully`,
        status: 204,
      });
    }
  } catch (error) {
    res.send(error);
  }
};

const findUser = async (req, res) => {
  try {
    const foundUser = await loUser.findOne(
      { userName: req.body.userName },
      "email password userType userName"
    );
    if (await bcrypt.compare(req.body.password, foundUser.password)) {
      res.send({
        userName: req.body.userName,
        userType: foundUser.userType,
        message: true,
      });
    } else {
      res.status(403).send({ message: false });
    }
  } catch (err) {
    res.send(err);
  }
};

module.exports = { addUser, findUser };
