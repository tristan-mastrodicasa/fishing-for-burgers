const express = require('express');
const router = express.Router();

const burgerRoute = require('./routes/burger.route.js');

router.use('/burger', burgerRoute);

module.exports = router;