
let User = require('./userModelM');
const bcrypt = require('bcrypt');

let userControllerM = {

	createUser: function(req, res, next) {
		//check if user exists? 
		//if no user create one, next
		//else next 
		let chunked = req.body.toString().split('&');
		let newStr = req.body.toString(); 
		let keys = chunked.map((element) => {
			return element.split('=');
		});
		User.findOne({username: keys[0][1]}, (err, user) => {
			if(err) {
				res.status(400).send({error: "error in server"});
			} else if(!user) {
				User.create({
					username: keys[0][1], 
					password: keys[1][1],
					gravatar: keys[2][1]
				}, (err, userResult) => {
					if(err) {
						res.status(500).send({error: "error in creating user"});
					} else { 
						res.send(200).send({success: user});
					}
				});
			} else {
				res.status(400).send({error: "Sorry User Exists Already"});
			}
		});
	},

	getUser: function(req, res, next) {
		//grab the user 
		//if user doesn't exist return user doesn't exist
		User.findOne({username: req.body.username}, (err, user) => {
			if(err) {
				console.log("error in getting user", err);
			} else {
				console.log("here is the user", user); 
			}
		});
	},

	verifyUser: function(req, res, next) {
		//if user exist
		//if password matches 
		//else redirect to signup login 
		let chunked = req.body.toString().split('&');
		let newStr = req.body.toString(); 
		let keys = chunked.map((element) => {
			return element.split('=');
		});
		console.log("REQBODY in verify", keys[0][1]);
		User.findOne({username: keys[0][1]}, (err, user) => {
			if(user === null) {
				res.status(500).send({error: "User doesn't exist, Please Signup"}); 
			}
			if(err) {
				console.log("Error in verifying user", err) ;
			} else if(user) {
				//returns truthy to check password verification
				const passwordCheck = bcrypt.compareSync(keys[1][1], user.password); 
				console.log(passwordCheck);
				if(passwordCheck){
					res.status(200).send({success: user}); 
				} else {
					res.status(400).send({error: "Incorrect Password, Try again"}); 
				}
			}
		});
	}

}

module.exports = userControllerM;