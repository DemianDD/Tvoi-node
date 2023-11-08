'use strict';
const {
  Model
} = require('sequelize');
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
      autoIncrement: true,
    },
    count: DataTypes.INTEGER,
    collection: DataTypes.STRING,
    category: DataTypes.STRING,
    labelName: DataTypes.STRING,
    brand: DataTypes.STRING,
    price: DataTypes.FLOAT,
    salePrice: DataTypes.FLOAT,
    images: DataTypes.STRING,
    weight: DataTypes.FLOAT,
    colors: DataTypes.STRING,
    metal: DataTypes.STRING,
    sizes: DataTypes.STRING,
    description: DataTypes.TEXT,
    popularity: DataTypes.INTEGER,
    customPopularity: DataTypes.INTEGER,
    packaging: DataTypes.STRING,
    realPhotos: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};