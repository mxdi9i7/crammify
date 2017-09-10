var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');

/* GET home page. */
router.get('/fetchOne/term/:id', function(req, res, next) {
  res.json({})
});
router.get('/fetch/terms', function(req, res, next) {
  res.json({})
});
module.exports = router;