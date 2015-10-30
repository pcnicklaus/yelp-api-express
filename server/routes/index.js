var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/recipes', function(req, res, next) {
  var searchString = req.body.searchTerm;
  console.log(searchString);
  // http://food2fork.com/api/search?key=4ee21f110453547468b252d74f4b92c0&q=beef&sort=r
  request('http://food2fork.com/api/search?key=4ee21f110453547468b252d74f4b92c0&q=' + searchString + '&sort=r', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var recipes = body;
      res.send(recipes);
    }
  });

});

module.exports = router;
