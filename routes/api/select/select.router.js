const express = require('express');
const router = express.Router();

const burgerRoute = require('./routes/burger.route.js');

router.use('/burger', burgerRoute);
router.use(express.json());

router.use(
	express.urlencoded({
	  extended: true,
	})
);

module.exports = router;
