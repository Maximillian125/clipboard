var patientData = require("../data/unschedData.js");

module.exports = function(app) {
	app.get("/api/patients", function(req, res) {
		res.json(patientData)
	});

	// app.post("/api/friends", function(req, res) {
	// 	var match = {
	// 		name: "",
	// 		photo: "",
	// 		friendDifference: 1000

	// 	};

	// 	console.log(req.body);
	  


		

	// 	var userData = req.body;
	// 	var userScores = userData.scores;

	// 	console.log(userScores);

	// 	var totalDifference = 0;

	// 	for (var i = 0; i < friendData.length; i++) {
	// 		console.log(friendData[i]);}
			// totalDifference = 0;

		// 	for (var j = 0; j < friendData[i].scores[j]; j++) {
		// 		totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friendData[i].scores[j]));
		// 		if (totalDifference <= match.friendDifference) {
		// 			match.name = friendData[i].name;
		// 			match.photo = friendData[i].photo;
		// 			match.friendDifference = totalDifference;
		// 		}
		// 	}
		// }
		// friendData.push(userData);
		// res.json(match);
	// });
};

