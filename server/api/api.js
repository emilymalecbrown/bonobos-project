var router = require('express').Router();

router.use('/inventory', require('./inventory-router.js'));

router.use('/products', require('./product-router.js'));

module.exports = router;
