const router = require('express').Router();
const Product = require('../../db/models/product-model.js');

// find all products
router.get('/', (req, res, next) => {
  Product.findAll()
  .then(products => {
    res.send(products);
  })
  .catch(next);
});

// get single product
router.get('/:productid', (req, res, next) => {
  Product.findById(req.params.productid)
  .then(product => {
    res.send(product);
  })
  .catch(next);
});

module.exports = router;
