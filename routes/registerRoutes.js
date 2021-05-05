const express = require("express");
const userOps = require("../controllers/registerController");
const router = express.Router();

router.post("/", userOps.addUser);
router.post("/authenticate", userOps.findUser);

module.exports = router;
