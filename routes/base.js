/**
 * Base route handler
 */

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
	res.render('pages/burger_detail');
});

module.exports = router;