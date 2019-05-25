var express = require('express');
var router = express.Router();
// var Camel = require('../models/camel');

router.get('/', function (req, res) {
    var camels = { 'camels': [
        { '_id': 0, 'color': 'orange', 'position': 1 },
        { '_id': 1, 'color': 'blue', 'position': 2 },
        { '_id': 2, 'color': 'green', 'position': 3 },
        { '_id': 3, 'color': 'yellow', 'position': 4 },
    ] };
    res.json(camels);
});

router.delete('/:id', function (req, res) {
    var id = req.params.id;
    res.json({
        'message': `Deleted camel with id ${id}`
    });
});

module.exports = router;
