const db = require ('../index.js');

const Product = require('./product-model.js');
const Inventory = require('./inventory-model.js');

//Product.hasMany(Inventory, {foreignKey: product_id});

module.exports = db;
