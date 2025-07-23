const { Item } = require("../db/models");
const { uploadImageBuffer } = require("../services/cloudinaryService");

const getAll = async (req, res) => {
  const data = await Item.findAll();
  res.send(data);
};

const getById = async (req, res) => {
  const item = await Item.findByPk(req.params.id);
  res.send(item);
};

const createItem = async (req, res) => {
  try {
    const { name, price, priceType, category, description, tags } = req.body;

    const itemData = { name, price, priceType, category, description, tags };

    if (req.file) {
      if (req.file) {
        const result = await uploadImageBuffer(req.file.buffer);
        itemData.imageUrl = result.secure_url;
      }
    }
    const item = await Item.create(itemData);
    res.send(item);
  } catch (error) {
    res.send(error);
    console.log(error);
  }
};

const updateItem = async (req, res) => {
  try {
    const { name, price, priceType, category, description, tags } = req.body;

    const updateData = { name, price, priceType, category, description, tags };

    if (req.file) {
      if (req.file) {
        const result = await uploadImageBuffer(req.file.buffer);
        updateData.imageUrl = result.secure_url;
      }
    }

    const item = await Item.update(updateData, {
      where: { id: req.params.id },
    });
    res.send(item);
  } catch (error) {
    res.send(error);
  }
};

const changeItemStock = async (req, res) => {
  try {
    const { stock } = req.body;
    const item = await Item.update({ stock }, { where: { id: req.params.id } });
    res.send(item);
  } catch (error) {
    res.send(error);
  }
};

const deleteItem = async (req, res) => {
  try {
    const item = await Item.destroy({ where: { id: req.params.id } });
    res.send("Ok");
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  getAll,
  getById,
  createItem,
  updateItem,
  changeItemStock,
  deleteItem,
};
