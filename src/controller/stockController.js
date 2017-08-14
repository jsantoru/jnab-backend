var stockService = require('../service/stockService');

/**
 * Retrieve the latest stock price for a given ticker
 * @param req
 * @param res
 */
module.exports.retrieveStockData = function(req, res) {
    var ticker = req.query.ticker;
    stockService.retrieveStockPrice(ticker, res, callback);
};

var callback = function(data, res) {
    // send the response data back to the client
    var stockPrice = data["closePrice"];

    res.set('Content-Type', 'application/json');
    res.send(stockPrice);
};
