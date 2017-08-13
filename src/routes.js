// import express
var express = require('express');

// bring in all controllers here
var budgetController = require('./controller/budgetController');

// init the router
var router = express.Router();

// setup all the routes for the app
router.route('/budget/:id').get(function(req, res) {
    budgetController.retrieveBudget(req, res)
});

// expose the router
module.exports.router = router;
