const express = require("express");
const controller = require("../controllers/auth");

const router = express.Router();
const { login, register } = controller;

router.post("/login", login);
router.post("/register", register);

module.exports = router;
