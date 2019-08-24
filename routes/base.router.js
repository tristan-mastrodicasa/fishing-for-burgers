/**
 * Base route handler
 */

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
	res.render('pages/index');
});

router.get('/price_input', (req, res, next) => {
	res.render('pages/price-input');
});

module.exports = router;
