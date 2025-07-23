const express = require("express");
const controller = require("../controllers/items");
const validations = require("../validations/auth");
const upload = require("../middleware/upload");

const router = express.Router();
const { getAll, getById, createItem, updateItem, changeItemStock, deleteItem } =
  controller;
const { validateToken } = validations;

router.get("/", getAll);
router.get("/:id", getById);
router.post("/", validateToken, upload.single("image"), createItem);
router.put("/:id", validateToken, upload.single("image"), updateItem);
router.patch("/:id", validateToken, changeItemStock);
router.delete("/:id", validateToken, deleteItem);

module.exports = router;
