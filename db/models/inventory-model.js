var Sequelize = require('sequelize');
var db = require('../index.js');

var Inventory = db.define('inventory', {
  product_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  waist: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  length: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  style: {
    type: Sequelize.STRING,
    allowNull: false
  },
  count: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
}, {});

module.exports = Inventory;
