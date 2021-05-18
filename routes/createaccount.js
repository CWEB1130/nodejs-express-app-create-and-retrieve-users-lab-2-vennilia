var express = require('express');
//const { format } = require('morgan');
var router = express.Router();


if (form.password.value < 8){
    alert("Password needs to be 8 or more characters long!");
}


router.get('/', function(req, res,next) {
  res.render('createaccount', { title: 'Create Account'})
  });

  
  module.exports = router;
  