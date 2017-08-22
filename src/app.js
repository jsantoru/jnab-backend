// import express and the app's custom routes
var express = require('express');
var cors = require('cors');
var routes = require('./routes');
var config = require('../conf/config');

// init the app and set the routes
var app = express();
app.use(cors());

// apikey is required for all calls
app.use(function(req, res, next) {
    if(req.query.apikey == config.app.apikey) {
        next();
    }
    else {
        res.send("invalid apikey");
    }
});

// all responses are json
app.use(function(req, res, next) {
    res.set('Content-Type', 'application/json');
    next();
});

// use the routes defined in the router
app.use('/', routes.router);

// TODO: use https
// start the app server
app.listen(8080, function () {
	console.log('listening on port 8080...');
});
