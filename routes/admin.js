var express = require('express');
var jwt = require('jsonwebtoken');

var router = express.Router();

var currentUser = {};

// Middleware for protecting route
router.use(function(req, res, next) {
  var token = req.body.token || req.headers['x-access-token'] || req.query.token;

  if (!token) return res.json( { success: false, message: 'No token provided' } );

  jwt.verify(token, req.app.get('jwtSecret'), function(err, decoded) {
    currentUser = decoded._doc;
    if (currentUser.admin) {
      req.decoded = decoded;
      next();
    } else {
      return res.json( { success: false, message: 'Not Admin' } );
    }
  });
});

/*
 Admin Tasks
    * See all users - GET /users
    * Promote a user to admin - POST /promote/:_id
    * Delete any user - /ban/:_id
    * Delete any manifesto - /remove_manifesto/:_id
*/

const User = require('../models/user');

router.get('/', function(req, res, next) {
  res.send('Admin API is working');
});

router.get('/users', function(req, res, next) {
  User.getUsers(function(err, users) {
    if (err) res.json( { success: false, message: 'Error, could not get users' } );
    else res.json(users);
  });
});

module.exports = router;
