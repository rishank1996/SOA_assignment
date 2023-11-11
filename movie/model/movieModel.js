var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// JSON schema for 
var MovieSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the movie'
  },
  released: {
    type: String,
    required: 'Kindly provide the year of rlease'
  },
  director: {
    type: String,
    required: 'Kindly provide the director name'
  },
  description: {
    type: String,
    required: 'Kindly provide the description of the movie'
  },
  createdDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Movie', MovieSchema);