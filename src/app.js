// import express and the app's custom routes
var express = require('express');
var routes = require('./routes');

// init the app and set the routes
var app = express();
app.use('/', routes.router);

// start the app server
app.listen(8080, function () {
	console.log('listening on port 8080...');
});
