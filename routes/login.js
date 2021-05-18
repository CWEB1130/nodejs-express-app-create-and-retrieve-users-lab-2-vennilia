var express = require('express');
var router = express.Router();

var fs = require('fs');

router.post('/', function(req, res, next) {
  res.render('login', { title: 'Log In'})
  });
  




  
  module.exports = router;