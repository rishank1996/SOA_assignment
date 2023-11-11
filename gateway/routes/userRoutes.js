const express = require('express');
const router = express.Router();
const controller = require('../controller/userController.js');

// define the user route
router.post('/login', controller.loginUser);
router.post('/signup', controller.signupUser);

module.exports = router;