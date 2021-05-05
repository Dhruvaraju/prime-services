const mongoose = require("mongoose");
const loUser = require("../models/user");
const bcrypt = require("bcrypt");
const { post } = require("../routes/registerRoutes");
const user = require("../models/user");

const addUser = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = new loUser({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      organizationName: req.body.organizationName,
      email: req.body.email,
      registeredDate: Date.now(),
      panNumber: req.body.panNumber,
      userType: req.body.userType,
      password: hashedPassword,
    });

    const update = await newUser.save();
    res.send(update);
  } catch (error) {
    res.send(error);
  }
};

const findUser = async (req, res) => {
  try {
    const foundUser = await loUser.findOne(
      { email: req.body.userName },
      "email password"
    );
    if (await bcrypt.compare(req.body.password, foundUser.password)) {
      res.send({ message: "Authentication Successful" });
    } else {
      res.status(403).send({ message: "Authentication Failed" });
    }
  } catch (err) {
    res.send(err);
  }
};

module.exports = { addUser, findUser };