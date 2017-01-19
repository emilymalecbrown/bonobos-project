const router = require('express').Router();
const Inventory = require('../../db/models/inventory-model.js');

// get all inventory
router.get('/', (req, res, next) => {
  Inventory.findAll()
  .then(inventory => {
    res.send(inventory);
  })
  .catch(next);
});

// get inventory by product id
router.get('/:productid', (req, res, next) => {
  Inventory.findAll({where: {product_id: req.params.productid}})
  .then(inventory => {
    res.send(inventory);
  })
  .catch(next);
});

// get inventory by product id + waist size
router.get('/:productid/:size', (req, res, next) => {
  Inventory.findAll({where: {
    product_id: req.params.productid,
    waist: req.params.size }
  })
  .then(inventory => {
    res.send(inventory);
  })
  .catch(next);
});

// get inventory by product id + waist size + length
router.get('/:productid/:waist/:length', (req, res, next) => {
  Inventory.findAll({where: {
    product_id: req.params.productid,
    waist: req.params.waist,
    length: req.params.length }
  })
  .then(inventory => {
    res.send(inventory);
  })
  .catch(next);
});

module.exports = router;
