var friends = require("../data/friends.js");



module.exports = function(app){
    app.get("/api/friends", function(req, res){
        return res.json(friends);
    });

    // Create New Characters - takes in JSON input
    app.post("/api/friends", function(req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body-parser middleware
        var newFriend = req.body;
    
        console.log(req.body);

        var score1 = newFriend.scores[0];
        var score2 = newFriend.scores[1];
        var score3 = newFriend.scores[2];
        var score4 = newFriend.scores[3];

        var bestfriend = friends[0];

        


        for (var i = 0; i < friends.length; i++){

            var bestScoreDiff = [
                Math.abs(score1 - bestfriend.scores[0]),
                Math.abs(score2 - bestfriend.scores[1]),
                Math.abs(score3 - bestfriend.scores[2]),
                Math.abs(score4 - bestfriend.scores[3])  
            ];

            var scoreDiff = [
                Math.abs(score1 - friends[i].scores[0]),
                Math.abs(score2 - friends[i].scores[1]),
                Math.abs(score3 - friends[i].scores[2]),
                Math.abs(score4 - friends[i].scores[3])
            ];


            var bestfriendScore = bestScoreDiff.reduce((a, b) => a + b, 0);

            var currentScore = scoreDiff.reduce((a, b) => a + b, 0);

            if(bestfriendScore > currentScore){
                bestfriend = friends[i];
            }

        }

        console.log('your bff is: ' + bestfriend.name);

    
        friends.push(newFriend,bestfriend);
    
        res.json(friends);
    });    
}

