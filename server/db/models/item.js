"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Item.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: { notEmpty: true },
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        defaultValue: "",
      },
      price: { type: DataTypes.FLOAT, allowNull: false },
      priceType: {
        type: DataTypes.STRING,
        validate: { isIn: [["100G", "¼KG", "½KG", "KG", "2KG", "U"]] },
        allowNull: false,
      },
      tags: { type: DataTypes.JSON, defaultValue: "[]" },
      imageUrl: {
        type: DataTypes.STRING,
        defaultValue: "http://dummyimage.com/146x100.png/5fa2dd/ffffff",
      },
      category: { type: DataTypes.STRING, allowNull: false },
      inStock: { type: DataTypes.BOOLEAN, defaultValue: true },
    },
    {
      sequelize,
      modelName: "Item",
    }
  );
  return Item;
};
