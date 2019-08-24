/**
 * Base route handler
 */

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
	res.render('pages/index');
});

module.exports = router;