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

        var score1 = newFriend.scores

        for (var i = 0; i < friends.length; i++){
            var fScore1 = friends[i].scores;
            console.log(fScore1);
        }


    
        friends.push(newFriend);
    
        res.json(friends);
    });    
}

