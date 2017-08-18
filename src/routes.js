// import express
var express = require('express');

// bring in all controllers here
var budgetController = require('./controller/budgetController');
var stockController = require('./controller/stockController');
var intrinioController = require('./controller/intrinioController');

// init the router
var router = express.Router();

/*
 * budget calls
 */

// setup all the routes for the app
router.route('/budget/:id').get(function(req, res) {
    budgetController.retrieveBudget(req, res);
});

/*
 * alphavantage calls
 */

router.route('/stock/price').get(function(req, res) {
   stockController.retrieveStockData(req, res);
});

/*
 * intrinio calls
 */

router.route('/stock/info').get(function(req, res) {
    intrinioController.retrieveStockInfo(req, res);
});

router.route('/stock/prices').get(function(req, res) {
    intrinioController.retrievePrices(req, res);
});

router.route('/stock/dividend').get(function(req, res) {
    intrinioController.retrieveDividendYield(req, res);
});

router.route('/stock/query').get(function(req, res) {
    var queryString = req.query.query;
    intrinioController.queryForCompany(queryString, res);
});

// expose the router
module.exports.router = router;
