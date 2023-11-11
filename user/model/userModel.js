var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// JSON schema for 
var UserSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  email: {
    type: String,
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