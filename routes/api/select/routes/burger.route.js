const express = require('express');
const BurgerModel = require('../../../../helpers/models/burger.model.js');
const burger = express.Router();

/**
 * @api {get} /select/burger/ Return 
 * @apiName GetBurgers
 * @apiGroup Select
 *
 * @apiParam {Number} max_price Maximum price constraint for the burger selection
 * @apiParam {Number} limit Limit the number burgers returned
 * @apiParam {Boolean}
 *
 * @apiSuccess {Object[]} data Array of burger objects
 *
 * @apiError (HTTP Error Codes) 400 Missing params
 */
burger.get('/', (req, res, next) => {
	
	res.send(new BurgerModel(
		'https://static.turbosquid.com/Preview/2014/07/12__00_09_05/Burger_Thumb.jpg8d3f7bde-25d5-4505-814d-5690b4a3b752Original.jpg'
	).getBurger());
	
});

module.exports = burger;