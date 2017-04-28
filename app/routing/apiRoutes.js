// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendsData = require("../data/friends.js");


var path = require('path');

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
 
    app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

    // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
 
  // ---------------------------------------------------------------------------
	


  app.post('/api/friends', function(req, res){
  

    var bestMatch = 0;
    var bestDiff = 1000; 


    for (var i = friendsData.length - 1; i >= 0; i--) {

      console.log("comparing with " + friendsData[i].name);

      var totalDifference = 0;


      for (var k = 0; k < 10; k++ ){
        
        

        totalDifference = totalDifference + Math.abs(friendsData[i].scores[k] - req.body.scores[k]);

      }

      if (totalDifference < bestDiff){
        bestDiff = totalDifference;
        bestMatch = i;
      }

      console.log("total difference for " + friendsData[i].name + " is " + totalDifference);

    }

    console.log("=============================");
    console.log("Your new best friend is " + friendsData[bestMatch].name + " and best score is " + bestDiff);
    console.log("=============================");

    // push info into array
    friendsData.push(req.body);

    // respond best match
    res.json({name: friendsData[bestMatch].name, photo: friendsData[bestMatch].photo}); 
    
  });

}