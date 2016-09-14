const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roomSchema = new Schema({
  roomId: {type: String, unique: true, required: true}
});

module.exports = mongoose.model('Room', roomSchema);