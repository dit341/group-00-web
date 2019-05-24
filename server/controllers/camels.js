var express = require('express');
var router = express.Router();
var Camel = require('../models/camel');

router.get('/', function (req, res) {
    res.json({ "camels": [
        { "color": "orange", "position": 1 },
        { "color": "blue", "position": 2 },
        { "color": "green", "position": 3 }
    ] });
})

module.exports = router
