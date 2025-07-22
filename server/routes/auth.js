const express = require("express");
const controller = require("../controllers/auth");

const router = express.Router();
const { login } = controller;

router.post("/login", login);

module.exports = router;
