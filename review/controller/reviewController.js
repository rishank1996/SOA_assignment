var mongoose = require('mongoose');
const Review = require('../model/reviewModel.js');


// Retrieve all the users saved in the database
exports.getAllReviews = async function(req, res) {
    var query = {};
    if(req.query.q != null)
    {
        query = { 'movieID': req.query.q}
    }
    const allReviews = await Review.find(query);
    res.json(allReviews);
};

// Create a new user
exports.createReview = async function(req, res) {
    try{
        const newReview = new Review({ ...req.body });
        const insertedReview = await newReview.save();
        return res.status(201).json(insertedReview);
    }
    catch(err){
        return res.status(400).json(err);
    }
};

// Retrieve a user by taskId
exports.getReviewById = async function(req, res) {
    const review = await Review.findOne({ '_id' : req.params.reviewId });
    if(review === null)
        return res.status(404).json({ 'error' : 'Couldn\'t find the review', 'status' : 404 })
    res.json(review);
};

// Edit a user by email
exports.editReviewById = async function(req, res) {
    const review = await Review.findOneAndUpdate({ '_id' : req.params.reviewId }, req.body);
    if(review === null)
        return res.status(404).json({ 'error' : 'Couldn\'t find the review', 'status' : 404 })
    res.json({ 'msg' : 'review updated successfully' });
};

// Delete a user by email
exports.deleteReviewById = async function(req, res) {
    const review = await Review.findOneAndDelete({ '_id' : req.params.reviewId });
    if(review === null)
        return res.status(404).json({ 'error' : 'Couldn\'t find the review', 'status' : 404 })
    res.json({ 'msg' : 'review deleted successfully' });
};