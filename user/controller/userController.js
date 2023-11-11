var mongoose = require('mongoose');
User = mongoose.model('Users');


// Retrieve all the users saved in the database
exports.getAllUsers = function(req, res) {
  User.find({}, function(err, user) {
    if (err) {
      res.status(400).send(err);
    } else {
      res.json(user);
    }
  });
};

// Create a new user
exports.createUser = function(req, res) {
  var new_user = new User(req.body);
  new_user.save(function(err, user) {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(201).json(user);
    }
  });
};

// Retrieve a user by taskId
exports.getUser = function(req, res) {
  User.findById(req.params.taskId, function(err, user) {
    if (err) {
      res.status(404).send({ error: { errors: [ { domain: 'global', reason: 'notFound', message: 'Not Found', 
                            description: 'Couldn\'t find the requested taskId \'' + req.params.taskId + '\'' } ], err, code: 404 } })
    } else {
      res.json(user);
    }
  });
};

// Edit a user by email
exports.editUserById = function(req, res) {
  User.findOneAndUpdate({_id: req.params.email}, req.body, {new: true}, function(err, user) {
    if (err) {
      res.status(400).send(err);
    } else {
      res.json(user);
    }
  });
};

// Delete a user by email
exports.deleteUserById = function(req, res) {
User.remove({
    _id: req.params.email
  }, function(err, user) {
    if (err) {
      res.status(404).send({ error: { errors: [ { domain: 'global', reason: 'notFound', message: 'Not Found', 
                            description: 'Couldn\'t find the requested user \'' + req.params.taskId + '\'' } ], code: 404, message: 'Not Found' } })
    } else {
      res.status(204).send();
      //res.json({ message: 'User successfully deleted' });
    }
  });
};