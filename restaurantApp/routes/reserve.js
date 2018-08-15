var express = require('express');
var router = express.Router();

/* GET reservation page. */
router.get('/', function (req, res, next) {
    res.render('reserve');
});

module.exports = router;