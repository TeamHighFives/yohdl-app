let mongoose = require('mongoose'); 
let Schema = mongoose.Schema;
var SALT_WORK_FACTOR = 10;
var bcrypt = require('bcryptjs');

let userSchema = new Schema({
	username: {type: String, required: true, unique: true},
	password: {type: String, required: true, unique: true},
	gravatar: {type: String, data: Buffer, require: false, unique: true}
})

userSchema.pre('save', function(next) {
	var user = this;
  	user.password = bcrypt.hashSync(user.password, SALT_WORK_FACTOR);
 		next();
});

module.exports = mongoose.model('User', userSchema);
