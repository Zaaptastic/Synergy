function dbGenerator(apiKeyToAdd){
  this.apiKey = apiKeyToAdd;
}

dbGenerator.prototype.logCurrentApiKey = function() {
  console.log("Current API key: " + this.apiKey);
}

dbGenerator.prototype.populateDb = function(req, res) {
  console.log("Populating Synergy Db");

  var db = req.db;
  var collection = db.get('synergycollection');

  // Submit to the DB
  var toInsert = [{ "champion" : "Lucian",
                    "winrate" : "50%",
                    "allyMatchups" : {
                      "Caitlyn" : "45%",
                      "Ezreal" : "53%",
                      "Jinx" : "50%"
                    }
                  }];
  collection.insert(toInsert);
}

dbGenerator.prototype.getAllChampions = function(callback) {
  var request = require('request');
  request("https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?api_key=" + this.apiKey, function(error, response, body){
      championList = JSON.parse(body).data;
      callback(championList);
  });
}

dbGenerator.prototype.getChampionKeyFromId = function(dbGenerator, id) {
  console.log("getChampionKeyFromId");
}

dbGenerator.prototype.getChampionIdFromKey = function(dbGenerator, key) {
  dbGenerator.getAllChampions(function(championList){
    console.log(Object.keys(championList).length);
});
}

module.exports = dbGenerator;
