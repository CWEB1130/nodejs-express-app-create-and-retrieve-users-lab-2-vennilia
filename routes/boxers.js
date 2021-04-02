var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');


  //allows you to read the boxers.json file & convert string array to an array of js objects
  let boxerData = fs.readFileSync('./boxers.json');
  var siteBoxers = JSON.parse(boxerData);

  //Assigning the parsed array of objects read-in from boxers.json to a variable called createdBoxers
  var createdBoxers = siteBoxer;
  res.render('boxer', {createdBoxers});
});

module.exports = router;

//makes functionality for file sys available
var fs = require('fs');
