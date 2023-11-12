var mongoose = require('mongoose');
const Movie = require('../model/movieModel.js');


// Retrieve all the movies saved in the database
exports.getAllMovies = async function(req, res) {
    const allMovies = await Movie.find();
    res.json(allMovies);
};

// Create a new user
exports.createMovie = async function(req, res) {
    try{
        const newMovie = new Movie({ ...req.body });
        const insertedMovie = await newMovie.save();
        return res.status(201).json(insertedMovie);
    }
    catch{
        return res.status(400).json({ 'message' : 'failed to insert movie' });
    }
};

// Retrieve a movie by taskId
exports.getMovie = async function(req, res) {
    const movie = await Movie.findOne({ '_id' : req.params.movieId });
    if(movie === null)
        return res.status(404).json({ 'message' : 'Couldn\'t find the movie', 'status' : 404 })
    res.json(movie);
};

// Edit a movie by email
exports.editMovieById = async function(req, res) {
    const movie = await Movie.findOneAndUpdate({ '_id' : req.params.movieId }, req.body);
    if(movie === null)
        return res.status(404).json({ 'message' : 'Couldn\'t find the movie', 'status' : 404 })
    res.json({ 'message' : 'movie updated successfully' });
};

// Delete a movie by email
exports.deleteMovieById = async function(req, res) {
    const movie = await Movie.findOneAndDelete({ '_id' : req.params.movieId });
    if(movie === null)
        return res.status(404).json({ 'message' : 'Couldn\'t find the movie', 'status' : 404 })
    res.status(204).json({ 'message' : 'movie deleted successfully' });
};