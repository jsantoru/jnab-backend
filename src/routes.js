// import express
var express = require('express');

// bring in all controllers here
var budgetController = require('./controller/budgetController');
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
 * intrinio calls
 */

// http://localhost:8080/stock/info?ticker=AAPL
router.route('/stock/info').get(function(req, res) {
    var ticker = req.query.ticker;
    intrinioController.retrieveStockInfo(ticker, res);
});

// http://localhost:8080/stock/price?ticker=AAPL
router.route('/stock/price').get(function(req, res) {
    var ticker = req.query.ticker;
    intrinioController.retrieveCurrentPrice(ticker, res);
});

// http://localhost:8080/stock/prices?ticker=AAPL
router.route('/stock/prices').get(function(req, res) {
    var ticker = req.query.ticker;
    intrinioController.retrievePrices(ticker, res);
});

// http://localhost:8080/stock/dividend?ticker=AAPL
router.route('/stock/dividend').get(function(req, res) {
    var ticker = req.query.ticker;
    intrinioController.retrieveDividendYield(ticker, res);
});

// http://localhost:8080/stock/query?query=Thom
router.route('/stock/query').get(function(req, res) {
    var queryString = req.query.query;
    intrinioController.queryForCompany(queryString, res);
});

// expose the router
module.exports.router = router;
