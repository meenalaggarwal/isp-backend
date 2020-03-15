var express = require('express');
var router = express.Router();

var db = require('../DB');

/* GET ispa listing. */
router.get('/', function(req, res, next) {
  var isps = db.getAllISPs(req.query.input, req.query.sort);
  res.send(isps);
});

/* GET a ISP details */
router.get('/:id', function(req, res, next) {
  var isp = db.getISP(req.params.id);
  res.send(isp);
});

module.exports = router;
