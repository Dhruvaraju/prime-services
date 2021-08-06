const express = require("express");
const contactOps = require("../controllers/contactUsController");
const router = express.Router();

router.get("/", contactOps.readMessages);
router.post("/newMsg", contactOps.addMessage);

module.exports = router;