/**
 * Base route handler
 */

const express = require('express');
const router = express.Router();
const fetchData = require('../helpers/fetch-data.util.js');

router.get('/', (req, res, next) => {
    res.render('pages/index');
});

router.get('/price_input', (req, res, next) => {
    res.render('pages/price-input');
});

router.get('/price_input', (req, res, next) => {
	res.render('pages/price-input');
});

/**
 * @api {get} /burger_display A page displaying the burger
 * @apiName GetBurgers
 * @apiGroup Select
 *
 * @apiParam {Number} max_price Maximum price constraint for the burger selection
 */
router.get('/burger_display', (req, res, next) => {


  res.send(fetchData(req.query.max_price));
  res.render('pages/burger_detail');
});

module.exports = router;
