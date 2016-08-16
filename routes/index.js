var express = require('express');
var router = express.Router();
var dbGeneratorFactory = require("../scripts.js");
var dbGenerator = new dbGeneratorFactory("5496afde-249a-4ca5-9ac8-38d7e7316a5c");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/dbgenerate', function(req, res, next) {
  res.render('dbgenerate', { title: 'Database Generator' });
});

router.post('/dbdisplay', function(req, res, next){
  dbGenerator.logCurrentApiKey();
  dbGenerator.populateDb(req, res);

  var db = req.db;
  var collection = db.get('synergycollection');
  collection.find({},{},function(e,docs){
      res.render('dbdisplay', {
          "synergyEntries" : docs
      });
  });
});

module.exports = router;
