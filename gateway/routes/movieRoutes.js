
const movieController = require('../controller/movieController.js');
const express = require('express');
const router = express.Router();

// define the movie route
router.get('/movie', movieController.getAllMovies);
router.post('/movie', movieController.createMovie);
router.get('/movie/:movieId', movieController.getMovie);
router.patch('/movie/:movieId', movieController.editMovieById);
router.delete('/movie/:movieId', movieController.deleteMovieById);

// define the movie review route
router.get('/movie/:movieId/review', movieController.getMovieReview);
router.post('/movie/:movieId/review', movieController.creatMovieReview);
router.get('/movie/:movieId/review/:reviewId', movieController.getMovieReviewByID);
router.patch('/movie/:movieId/review/:reviewId', movieController.updateMovieReviewByID);
router.delete('/movie/:movieId/review/:reviewId', movieController.deleteMovieReviewByID);

module.exports = router;