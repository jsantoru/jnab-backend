// import express and the app's custom routes
var express = require('express');
var cors = require('cors');
var routes = require('./routes');
var config = require('../conf/config');
var greenlock = require('greenlock-express');

// init the express app
var app = express();

// use cors to avoid cross-domain issues
app.use(cors());

// serve the frontend at /jnab
app.use('/jnab', express.static('web/jnab'));
app.use('/magicmirror', express.static('web/magicmirror'));

// apikey is required for all api calls
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
app.use('/api/', routes.router);

// start the app server
app.listen(6001, function () {
	console.log('listening on port 6001...');
});

// TODO: use https
/*greenlock.create({
    server: 'staging',
    email: 'john.doe@example.com',
    agreeTos: true,
    approveDomains: ['example.com'],
    app: app
}).listen(6001);
*/
