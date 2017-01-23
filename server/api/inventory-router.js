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

// get inventory by waist size
router.get('/size/:size', (req, res, next) => {
  Inventory.findAll({where: {waist: req.params.size }})
  .then(inventory => {
    res.send(inventory);
  })
  .catch(next);
});

// get inventory by waist size and length
router.get('/waist/:waist/length/:length', (req, res, next) => {
  Inventory.findAll({where: {
    waist: req.params.waist,
    length: req.params.length }
  })
  .then(inventory => {
    res.send(inventory);
  })
  .catch(next);
});

// get inventory by product id + waist size
router.get('/:productid/size/:size', (req, res, next) => {
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
router.get('/:productid/waist/:waist/length/:length', (req, res, next) => {
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

// get all inventory in same style
router.get('/style/:style', (req, res, next) => {
   Inventory.findAll({where: {
    style: req.params.style
  }
  })
  .then(inventory => {
    res.send(inventory);
  })
  .catch(next);
})

// get inventory by product + style
router.get('/:productid/style/:style', (req, res, next) => {
   Inventory.findAll({where: {
    product_id: req.params.productid,
    style: req.params.style
  }
  })
  .then(inventory => {
    res.send(inventory);
  })
  .catch(next);
})

module.exports = router;
