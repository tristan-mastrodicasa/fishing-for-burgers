/**
 * Base route handler
 */

const express = require('express');
const router = express.Router();
const fetchData = require('../helpers/fetch-data.util.js');

/**
 * @api {get} / A page displaying the home page
 * @apiName Index
 * @apiGroup Index
 */
router.get('/', (req, res, next) => {
    res.render('pages/index');
});

/**
 * @api {get} /price_input A page displaying the price input
 * @apiName InputPrice
 * @apiGroup Index
 */
router.get('/price_input', (req, res, next) => {
	res.render('pages/price-input');
});

/**
 * @api {get} /burger_display A page displaying the burger
 * @apiName DisplayBurger
 * @apiGroup Index
 *
 * @apiParam {Number} max_price Maximum price constraint for the burger selection
 */
router.get('/burger_display', (req, res, next) => {
  // console.log(fetchData(req.query.max_price));
  res.render('pages/burger_detail', { price: req.query.max_price });
});

module.exports = router;
