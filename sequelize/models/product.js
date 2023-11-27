'use strict';
const { Model } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const { objectType } = require('../types/object.type');
const uniqueIdGenerator = require('../../functions/UniqueIdGenerator')

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      defaultValue: () => uniqueIdGenerator(),
    },
    count: DataTypes.INTEGER,
    collection: DataTypes.STRING,
    category: DataTypes.STRING,
    labelName: DataTypes.STRING,
    brand: DataTypes.STRING,
    price: DataTypes.FLOAT,
    salePrice: DataTypes.FLOAT,
    images: objectType('images'),
    weight: DataTypes.FLOAT,
    colors: objectType('colors'),
    metal: DataTypes.STRING,
    sizes: objectType('sizes'),
    description: DataTypes.TEXT,
    popularity: DataTypes.INTEGER,
    customPopularity: DataTypes.INTEGER,
    packaging: DataTypes.STRING,
    realPhotos: objectType('realPhotos'),
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};