var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// JSON schema for 
var UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: 'Kindly provide the email'
  },
  password: {
    type: String,
    required: 'Kindly provide the password'
  },
  createdDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Users', UserSchema);