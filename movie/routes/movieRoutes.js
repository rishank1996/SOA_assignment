const controller = require('../controller/movieController.js');
const express = require('express');
const router = express.Router();

router.get('/movie', controller.getAllMovies);
router.post('/movie', controller.createMovie);
router.get('/movie/:movieId', controller.getMovie);
router.patch('/movie/:movieId', controller.editMovieById);
router.delete('/movie/:movieId', controller.deleteMovieById);

module.exports = router;