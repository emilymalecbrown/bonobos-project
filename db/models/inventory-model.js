var Sequelize = require('sequelize');
var db = require('../index.js');

var Inventory = db.define('inventory', {
  product_id: {
    type: Sequelize.INTEGER
  },
  waist: {
    type: Sequelize.INTEGER
  },
  length: {
    type: Sequelize.INTEGER
  },
  style: {
    type: Sequelize.STRING
  },
  count: {
    type: Sequelize.INTEGER
  }
}, {});

module.exports = Inventory;
