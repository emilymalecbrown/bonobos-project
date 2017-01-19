const path = require('path');
const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/bonobos', {
  logging: false
});

module.exports = db;
