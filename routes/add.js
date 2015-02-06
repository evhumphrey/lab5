var data = require("../data.json");

exports.addFriend = function(req, res) {    
	// Your code goes here
	var name = req.query.name;
	var description = req.query.description;
	console.log(name);
	console.log(description);
	console.log('TEST');

	/* NOTE: I put these in because my add leaves the fields
	 * blank when nothing is entered in name or description;
	 * there is no default, just an empty string, so these
	 * create the 'default' text
	 */
	if (name == '') {
		name = 'New Friend';
	}

	if (description == '') {
		description = 'Friend description';
	}

	var newFriend = {
		'name': name,
		'description': description,
		'imageURL': 'http://lorempixel.com/400/400/people'
	}

	console.log(newFriend);
	data["friends"].push(newFriend)
	res.render('add', data);
	
 }