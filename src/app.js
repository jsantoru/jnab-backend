// import express and the app's custom routes
var express = require('express');
var cors = require('cors');
var routes = require('./routes');

// init the app and set the routes
var app = express();
app.use(cors());

// all responses are json
app.use(function(req, res, next) {
    res.set('Content-Type', 'application/json');
    next();
});

// use the routes defined in the router
app.use('/', routes.router);

// start the app server
app.listen(8080, function () {
	console.log('listening on port 8080...');
});
