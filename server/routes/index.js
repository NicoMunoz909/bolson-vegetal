const express = require("express");
const items = require("./items");
const auth = require("./auth");

const router = express.Router();

router.use("/items", items);
router.use("/auth", auth);

module.exports = router;
