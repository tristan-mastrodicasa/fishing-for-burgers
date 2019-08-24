const express = require('express');
const router = express.Router();

const selectRouter = require('./api/select/select.router.js');
const baseRouter = require('./base.router.js');

router.use('/api/select', selectRouter);
router.use('/', baseRouter);

module.exports = router;
