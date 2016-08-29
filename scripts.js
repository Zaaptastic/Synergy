function dbGenerator(apiKeyToAdd){
  this.apiKey = apiKeyToAdd;
}

dbGenerator.prototype.logCurrentApiKey = function() {
  console.log("Current API key: " + this.apiKey);
}

dbGenerator.prototype.populateDb = function(collection, championKeyList, callback) {
  console.log("Populating Synergy Db");

  collection.remove( { } );
  var toInsert = {};
  for (var championKey1 in championKeyList){
    var dataEntriesToInsert = {};
    for (var championKey2 in championKeyList){
      dataEntriesToInsert[championKeyList[championKey2]] = "50%";
    }
    toInsert[championKeyList[championKey1]] = dataEntriesToInsert;
  }
  collection.insert(toInsert);
  callback();
}

dbGenerator.prototype.getAllChampions = function(callback) {
  var request = require('request');
  request("https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?api_key=" + this.apiKey, function(error, response, body){
      championList = JSON.parse(body).data;
      callback(championList);
  });
}

dbGenerator.prototype.getChampionKeyFromId = function(dbGenerator, idToFind) {
  dbGenerator.getAllChampions(function(championList){
    for (var championEntry in championList){
      var championId = championList[championEntry]["id"];
      if (championId == idToFind){
        return championList[championEntry]["key"];
      }
    }
    return "null";
  });
}

dbGenerator.prototype.getChampionIdFromKey = function(dbGenerator, keyToFind) {
  dbGenerator.getAllChampions(function(championList){
    for (var championEntry in championList){
      var championKey = championList[championEntry]["key"];
      if (championKey == keyToFind){
        return championList[championEntry]["id"];
      }
    }
    return -1;
  });
}

dbGenerator.prototype.getChampionKeyList = function(dbGenerator, callback){
  dbGenerator.getAllChampions(function(championList){
    var numChampions = Object.keys(championList).length;
    var championKeyList = [];
    for (var championEntry in championList){
      championKeyList.push(championList[championEntry]["key"]);
    }
    callback(championKeyList.sort());
  });
}

module.exports = dbGenerator;
