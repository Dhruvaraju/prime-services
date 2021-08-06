const messageDetail = require("../models/contact");

const addMessage = async (req, res) => {
  try {
      console.log(req.body)
    const contactMsg = new messageDetail({
        userName: req.body.userName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        messageText: req.body.message
    });
    const update = await contactMsg.save();
    res.send("Added successfully");
  } catch (err) {
    res.send("Error Occurred, Error message: " + err);
  }
};

const readMessages = async (req, res) => {
  try {
    const messages = await messageDetail.find({});
    res.send(messages);
  } catch (err) {
    res.send("Failed to fetch results, error: " + err);
  }
};

module.exports = { addMessage, readMessages };
