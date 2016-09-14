const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fileSchema = new Schema({
	fileId: {
		type: String,
		require: true
	},
	userId: {
		type: String
	},
	pathUrl: {
		type: String
	},
   updatedAt: {
     type : Date,
     default : Date.now
   },
	 roomId: {
		 type: String,
		 required: true
	 }
});

module.exports = mongoose.model('File', fileSchema);

// const shortId = require('shortid');
// console.log(shortId.generate());
// mongoose.connect('mongodb://teamhighfive:codesmith05@ds029496.mlab.com:29496/teamhighfive')
