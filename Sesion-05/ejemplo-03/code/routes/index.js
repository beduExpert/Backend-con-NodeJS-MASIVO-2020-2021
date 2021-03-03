const express = require('express');
const router = express.Router();

// Adding routes handlers to 'notes' path
router.use('/notes', require('./notes'));

module.exports = router;
