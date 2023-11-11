const axios = require('axios');

// Retrieve all the users saved in the database
exports.getAllMovies = function(req, res, next) {
    axios.get('http://localhost:5000/movie').then(function callback(response) {
        res.status(response.status).json(response.data);
    }).catch(function (error) {
        if(error.response)
        {
            error = {
                status: error.response.status,
                message: error.response.data
            };
        }
        next(error);
    });
};

exports.createMovie = function(req, res, next) {
    axios.post('http://localhost:5000/movie',req.body).then(function callback(response) {
        res.status(response.status).json(response.data);
    }).catch(function (error) {
        if(error.response)
        {
            error = {
                status: error.response.status,
                message: error.response.data
            };
        }
        next(error);
    });
};

exports.getMovie = function(req, res, next) {
    axios.get('http://localhost:5000/movie/'+req.params.movieId).then(function callback(response) {
        res.status(response.status).json(response.data);
    }).catch(function (error) {
        if(error.response)
        {
            error = {
                status: error.response.status,
                message: error.response.data
            };
        }
        next(error);
    });
};

exports.editMovieById = function(req, res, next) {
    axios.patch('http://localhost:5000/movie/'+req.params.movieId, req.body).then(function callback(response) {
        res.status(response.status).json(response.data);
    }).catch(function (error) {
        if(error.response)
        {
            error = {
                status: error.response.status,
                message: error.response.data
            };
        }
        next(error);
    });
};

exports.deleteMovieById = function(req, res, next) {
    axios.delete('http://localhost:5000/movie/'+req.params.movieId).then(function callback(response) {
        res.status(response.status).json(response.data);
    }).catch(function (error) {
        if(error.response)
        {
            error = {
                status: error.response.status,
                message: error.response.data
            };
        }
        next(error);
    });
};

exports.getMovieReview = function(req, res, next) {
    axios.get('http://localhost:4000/review?q='+req.params.movieId).then(function callback(response) {
        res.status(response.status).json(response.data);
    }).catch(function (error) {
        if(error.response)
        {
            error = {
                status: error.response.status,
                message: error.response.data
            };
        }
        next(error);
    });
};

exports.creatMovieReview = function(req, res, next) {
    const formData = {'movieId' : req.params.movieId, ...req.body};
    axios.post('http://localhost:4000/review', formData).then(function callback(response) {
        res.status(response.status).json(response.data);
    }).catch(function (error) {
        if(error.response)
        {
            error = {
                status: error.response.status,
                message: error.response.data
            };
        }
        next(error);
    });
};

exports.getMovieReviewByID = function(req, res, next) {
    axios.get('http://localhost:4000/review/'+req.params.reviewId).then(function callback(response) {
        res.status(response.status).json(response.data);
    }).catch(function (error) {
        if(error.response)
        {
            error = {
                status: error.response.status,
                message: error.response.data
            };
        }
        next(error);
    });
};

exports.updateMovieReviewByID = function(req, res, next) {
    const formData = {'movieId' : req.params.movieId, ...req.body};
    axios.patch('http://localhost:4000/review/'+req.params.reviewId, formData).then(function callback(response) {
        res.status(response.status).json(response.data);
    }).catch(function (error) {
        if(error.response)
        {
            error = {
                status: error.response.status,
                message: error.response.data
            };
        }
        next(error);
    });
};

exports.deleteMovieReviewByID = function(req, res, next) {
    axios.delete('http://localhost:4000/review/'+req.params.reviewId).then(function callback(response) {
        res.status(response.status).json(response.data);
    }).catch(function (error) {
        if(error.response)
        {
            error = {
                status: error.response.status,
                message: error.response.data
            };
        }
        next(error);
    });
};