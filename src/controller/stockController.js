var stockService = require('../service/stockService');

/**
 * Retrieve the latest stock price for a given ticker
 * @param req
 * @param res
 */
module.exports.retrieveStockData = function(req, res) {
    var ticker = req.query.ticker;
    stockService.retrieveStockPrice(ticker, res);
};