const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const db = require('./index.js');
const product = require(path.join(__dirname + '/models/product-model.js'));
const inventory = require(path.join(__dirname +'/models/inventory-model.js'));
let productData = fs.readFileSync(path.join(__dirname + '/data/products.csv')).toString();
let inventoryData = fs.readFileSync(path.join(__dirname + '/data/inventory.csv')).toString();

// ====== Parse Product Data ====== //

const productColumns = productData.split('\n')[0].split(",");
const products = productData.split('\n').slice(1);

// format products into 2d array that looks like
// [[product_id,product_name,product_image,product_description]]
let formattedProducts = [];

products.forEach((product) => {
  // handle empty rows
  if (product === '') return;

  unformattedLineItem = product.split(",");
  firstThreeColumns = unformattedLineItem.slice(0, 3);
  // handle commas in product description column
  lastColumn = unformattedLineItem.slice(3).join(",");

  formattedProducts.push(firstThreeColumns.concat(lastColumn));
});

//initialize seed
const productSeed = [];

formattedProducts.forEach((product) => {
  let row = {};
  for (let i = 0; i < productColumns.length; i++) {
    // regex out special chars
    row[productColumns[i]] = product[i].replace(/'/g,"").trim();
    // handle ids as strings
    if (productColumns[i] === "product_id") row[productColumns[i]] = parseInt(row[productColumns[i]]);
  }
  productSeed.push(row);
});

// ===== Parse Inventory Data ===== //

// split first row into array of column names & map to trim whitespace
const inventoryColumns = inventoryData.split('\n')[0].split(",").map(function(s) { return s.trim() });
const styles = inventoryData.split('\n').slice(1);

//initialize seed
const inventorySeed = [];

styles.forEach((style) => {
  // handle empty rows
  if (style === "") return;
  let row = {};
  style = style.split(", ");
  for (let i=0; i<inventoryColumns.length; i++) {
    // all values that are not style name should be integers
    if (i !== 3) row[inventoryColumns[i]] = parseInt(style[i]);
    else row[inventoryColumns[i]] = style[i];
  }
  inventorySeed.push(row);
});

// ===== Sync DB ===== //

const seedProducts = () => db.Promise.map(productSeed, product => db.model('product').create(product));
const seedInventory = () => db.Promise.map(inventorySeed, inventory => db.model('inventory').create(inventory));

db.sync({ force: true })
  .then(seedProducts)
  .then(products => console.log(chalk.red(`Seeded ${products.length} products successfully!`)))
  .then(seedInventory)
  .then(styles => console.log(chalk.blue(`Seeded ${styles.length} styles successfully!`)))
  .catch(error => console.error(error))
  .finally(() => db.close())
