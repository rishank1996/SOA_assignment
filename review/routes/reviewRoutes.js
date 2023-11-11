const controller = require('../controller/reviewController.js');
//const User = require('../model/userModel.js');
const express = require('express');
const router = express.Router();

// define the review routes
router.get('/review', controller.getAllReviews);
router.post('/review', controller.createReview);
router.get('/review/:reviewId', controller.getReviewById);
router.patch('/review/:reviewId', controller.editReviewById);
router.delete('/review/:reviewId', controller.deleteReviewById);

module.exports = router;