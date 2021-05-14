const express = require("express");
const ipoQuoteDetails = require("../controllers/ipoController");
const router = express.Router();

router.post("/", ipoQuoteDetails.registerIpo);
//router.patch("/");

module.exports = router;