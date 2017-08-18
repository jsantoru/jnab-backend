var intrinioService = require('../service/intrinioService');

module.exports.retrieveStockInfo = function(req, res) {
    var ticker = req.query.ticker;
    console.log(ticker);

    var callback = function(err, data) {
        res.set('Content-Type', 'application/json');
        res.send(data);
    };

    intrinioService.getByTicker(ticker, callback);
};

module.exports.retrievePrices = function(req, res) {
    var ticker = req.query.ticker;
    console.log(ticker);

    var callback = function(err, data) {
        res.set('Content-Type', 'application/json');
        res.send(data);
    };

    intrinioService.getPrices(ticker, callback);
};

module.exports.retrieveDividendYield = function(req, res) {
    var ticker = req.query.ticker;
    console.log(ticker);

    var callback = function(err, data) {
        res.set('Content-Type', 'application/json');
        res.send(data);
    };

    intrinioService.getDividendYield(ticker, callback);
};

module.exports.queryForCompany = function(queryString, res) {
    console.log(queryString);

    var callback = function(err, data) {
        res.set('Content-Type', 'application/json');
        res.send(data);
    };

    intrinioService.queryForCompany(queryString, callback);
};