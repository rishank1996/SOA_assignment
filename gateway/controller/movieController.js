const axios = require('axios');

// Retrieve all the users saved in the database
exports.getAllMovies = function(req, res) {
    axios.get('http://localhost:5000/movie').then(function callback(response) {
        res.status(response.status).json(response.data);
    }).catch(function (error) {
        res.status(404).json(error.response.data);
    });
};

exports.createMovie = function(req, res) {
    axios.post('http://localhost:5000/movie',req.body).then(function callback(response) {
        res.status(response.status).json(response.data);
    }).catch(function (error) {
        res.status(404).json(error.response.data);
    });
};

exports.getMovie = function(req, res) {
    axios.get('http://localhost:5000/movie/'+req.params.movieId).then(function callback(response) {
        res.status(response.status).json(response.data);
    }).catch(function (error) {
        res.status(404).json(error.response.data);
    });
};

exports.editMovieById = function(req, res) {
    axios.patch('http://localhost:5000/movie/'+req.params.movieId, req.body).then(function callback(response) {
        res.status(response.status).json(response.data);
    }).catch(function (error) {
        res.status(404).json(error.response.data);
    });
};

exports.deleteMovieById = function(req, res) {
    axios.delete('http://localhost:5000/movie/'+req.params.movieId).then(function callback(response) {
        res.status(response.status).json(response.data);
    }).catch(function (error) {
        res.status(404).json(error.response.data);
    });
};

exports.getMovieReview = function(req, res) {
    axios.get('http://localhost:4000/review?q='+req.params.movieId).then(function callback(response) {
        res.status(response.status).json(response.data);
    }).catch(function (error) {
        res.status(404).json(error.response.data);
    });
};

exports.creatMovieReview = function(req, res) {
    const formData = {'movieId' : req.params.movieId, ...req.body};
    axios.post('http://localhost:4000/review', formData).then(function callback(response) {
        res.status(response.status).json(response.data);
    }).catch(function (error) {
        res.status(404).json(error.response.data);
    });
};

exports.getMovieReviewByID = function(req, res) {
    axios.get('http://localhost:4000/review/'+req.params.reviewId).then(function callback(response) {
        res.status(response.status).json(response.data);
    }).catch(function (error) {
        res.status(404).json(error.response.data);
    });
};

exports.updateMovieReviewByID = function(req, res) {
    const formData = {'movieId' : req.params.movieId, ...req.body};
    axios.patch('http://localhost:4000/review/'+req.params.reviewId, formData).then(function callback(response) {
        res.status(response.status).json(response.data);
    }).catch(function (error) {
        res.status(404).json(error.response.data);
    });
};

exports.deleteMovieReviewByID = function(req, res) {
    axios.delete('http://localhost:4000/review/'+req.params.reviewId).then(function callback(response) {
        res.status(response.status).json(response.data);
    }).catch(function (error) {
        res.status(404).json(error.response.data);
    });
};