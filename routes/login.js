var express = require('express');
var router = express.Router();

var fs = require('fs');

userData = fs.readFileSync('createaccount.json');

let userData = fs.readFileSync('./createaccount.json');
createaccountString = JSON.stringify("email");


 



router.get('/', function(req, res, next) {
  createaccount.email = req.body.email;
  createaccount.password = req.body.password;





  
  });
  




  
  module.exports = router;