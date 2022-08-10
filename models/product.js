const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Product = sequelize.define('product', {
  id: {
    type: sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  title: {
    type: sequelize.STRING,
    allowNull: false
  },
  price: {
    type: sequelize.DOUBLE,
    allowNull: false
  },
  imageUrl: {
    type: sequelize.STRING,
    allowNull: false
  },
  description: {
    type: sequelize.STRING,
    allowNull: false
  }
});

module.exports = Product;