const express = require('express');
const router = express.Router();

// define the user route
router.post('/login', controller.getAllMovies);
router.post('/signup', controller.createMovie);

module.exports = router;