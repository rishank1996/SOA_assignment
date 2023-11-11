const axios = require('axios');

exports.loginUser = function(req, res, next) {
    axios.post('http://localhost:3000/user/login', req.body).then(function callback(response) {
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

exports.signupUser = function(req, res, next) {
    axios.post('http://localhost:3000/user/signup', req.body).then(function callback(response) {
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