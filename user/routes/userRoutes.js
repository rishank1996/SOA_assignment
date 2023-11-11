const controller = require('../controller/userController.js');
//const User = require('../model/userModel.js');
const express = require('express');
const router = express.Router();

// define the home page route
router.get('/users', controller.getAllUsers);
router.post('/users', controller.createUser);
router.get('/users/:userId', controller.getUser);
router.patch('/users/:userId', controller.editUserById);
router.delete('/users/:userId', controller.deleteUserById);

module.exports = router;