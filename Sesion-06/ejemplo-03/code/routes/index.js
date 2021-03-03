const express = require('express');
const router = express.Router();

// Add the required routes
router.use('/products', require('./products'));
router.use('/reviews', require('./reviews'));

module.exports = router;