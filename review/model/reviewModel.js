var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// JSON schema for 
var ReviewSchema = new Schema({
  movieID: {
    type: String,
    required: 'Kindly provide the movie ID'
  },
  title: {
    type: String,
    required: 'Kindly provide the title'
  },
  review: {
    type: String,
    required: 'Kindly provide the review'
  },
  author: {
    type: String,
    default: 'Anonymous'
  },
  createdDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Review', ReviewSchema);