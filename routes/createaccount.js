var express = require('express');
const { format } = require('morgan');
var router = express.Router();



if (form.password.value < 8){
    alert("Password needs to be 8 or more characters long!");
}


router.post('/', function(req, res,next) {
  var email = req.body.email;
  var password = req.body.password;
  
  
  res.render('createaccount', { title: 'Create Account'})
  });

  
  module.exports = router;
  //var fs = require('fs');