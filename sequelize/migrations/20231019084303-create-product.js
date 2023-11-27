'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      count: {
        type: Sequelize.INTEGER
      },
      collection: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.STRING
      },
      labelName: {
        type: Sequelize.STRING
      },
      brand: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.FLOAT
      },
      salePrice: {
        type: Sequelize.FLOAT
      },
      images: {
        type: Sequelize.STRING
      },
      weight: {
        type: Sequelize.FLOAT
      },
      colors: {
        type: Sequelize.STRING
      },
      metal: {
        type: Sequelize.STRING
      },
      sizes: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      popularity: {
        type: Sequelize.INTEGER
      },
      customPopularity: {
        type: Sequelize.INTEGER
      },
      packaging: {
        type: Sequelize.STRING
      },
      realPhotos: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};