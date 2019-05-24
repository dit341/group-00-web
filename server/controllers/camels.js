var express = require('express');
var router = express.Router();
var Camel = require('../models/camel');

router.get('/', function (req, res) {
    res.json({ "data": ["camel1", "camel2", "camel3"] });
})

module.exports = router
