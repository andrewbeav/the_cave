// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');
var jwt = require('jsonwebtoken');

var config = require('./config'); // The config file with secret stuff

// Setting up express
var port = 3000
var app = express();

// Setting up mongoose
mongoose.connect(config.dbLocation, {
	useMongoClient: true
});

app.set('jwtSecret', config.jwtSecret);

// Body parser middleware
app.use(bodyParser.urlencoded( { extended: true } ));
app.use(bodyParser.json());

// Static route
app.use('/', express.static(path.join(__dirname, '/public')))

// API route
app.use('/api', require('./routes/api'));

// start the server
app.listen(port);
console.log('Listening on port '+port);
