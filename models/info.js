var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: {type: String, required: true},
  title: {type: String, required: true},
  message: {type: String, required: true}
});

module.exports = mongoose.model('Info', userSchema);
