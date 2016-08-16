function dbGenerator(apiKeyToAdd){
  this.apiKey = apiKeyToAdd;
}

dbGenerator.prototype.logCurrentApiKey = function() {
  console.log("Current API key: " + this.apiKey);
}

dbGenerator.prototype.populateDb = function(req, res) {
  console.log("Populating Synergy Db");

  var db = req.db;
  var collection = db.get('champcollection');

  // Submit to the DB
  var toInsert = [{ "champion" : "Lucian", "champ" : "50%" }];
  collection.insert(toInsert);
}

module.exports = dbGenerator;
