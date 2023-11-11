
const movieController = require('../controller/movieController.js');
const userController = require('../controller/userController.js');
const express = require('express');
const router = express.Router();


// define the movie route
router.get('/', movieController.getAllMovies);
router.post('/', movieController.createMovie);
router.get('/:movieId', movieController.getMovie);
router.patch('/:movieId', movieController.editMovieById);
router.delete('/:movieId', movieController.deleteMovieById);

// define the movie review route
router.get('/:movieId/review', movieController.getMovieReview);
router.post('/:movieId/review', movieController.creatMovieReview);
router.get('/:movieId/review/:reviewId', movieController.getMovieReviewByID);
router.patch('/:movieId/review/:reviewId', movieController.updateMovieReviewByID);
router.delete('/:movieId/review/:reviewId', movieController.deleteMovieReviewByID);

module.exports = router;