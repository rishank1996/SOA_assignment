const controller = require('../controller/userController.js');
const express = require('express');
const router = express.Router();

// define the user routes
router.post('/login', controller.loginUser);
router.post('/signup', controller.signupUser);
router.delete('/:userId', controller.deleteUser);

module.exports = router;