var express = require('express');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

var router = express.Router();

// Salt rounds for bcrypt
const saltRounds = 10;

// Get User mongoose model
const User = require('../models/user');
const Manifesto = require('../models/manifesto');

var currentUser = {};

// Middleware for protecting route
router.use(function(req, res, next) {
	if (req.url === '/register' || req.url == '/authenticate') next();
	else {
		var token = req.body.token || req.headers['x-access-token'] || req.query.token;

		if (!token) return res.json( { success: false, message: 'No token provided' } );

		jwt.verify(token, req.app.get('jwtSecret'), function(err, decoded) {
			currentUser = decoded._doc;
			req.decoded = decoded;
			next();
		});
	}
});

router.post('/authenticate', function(req, res, next) {
	User.findOne( { username: req.body.username }, function(err, user) {
		if (err) throw err;

		if(!user) {
			res.json( { success: false, message: 'Authentication failed. User not found' } );
		} else {
			bcrypt.compare(req.body.password, user.password, function(err, match) {
				if (!match) res.json( { success: false, message: 'Authentication failed. Incorrect Password' } );
				else {
					var token = jwt.sign(user, req.app.get('jwtSecret'), {
						expiresIn: 60*60*60 // 24 hours
					});

					res.json({
						success: true,
						message: 'Authentication Successful',
						token: token
					});
				}
			});
		}
	});
});

router.post('/register', function(req, res, next) {
	bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
		if (err) throw err;

		var user = req.body;
		user.password = hash;
		User.addUser(user, function(err, new_user) {
			if (err) res.json( { success: false, message: 'Unknown error when adding user' } );
			else {
				res.json(new_user);
			}
		});
	})
});

router.post('/manifesto', function(req, res, next) {
	req.body.userId = currentUser._id; // IMPORTANT: for security reasons
	Manifesto.addManifesto(req.body, function(err, manifesto) {
		if (err) res.json( { success: false, message: 'Unknown error when adding manifesto' } );

		else {
			res.json(manifesto);
		}
	});
});

module.exports = router;
