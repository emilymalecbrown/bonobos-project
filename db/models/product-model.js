var Sequelize = require('sequelize');
var db = require('../index.js');

var Product = db.define('product', {
  product_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  product_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  product_image: {
    type: Sequelize.STRING
  },
  product_description: {
    type: Sequelize.TEXT
  }
}, {});

module.exports = Product;
