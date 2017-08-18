var intrinioService = require('../service/intrinioService');

module.exports.retrieveStockInfo = function(req, res) {
    var ticker = req.query.ticker;
    console.log(ticker);

    intrinioService.getByTicker(ticker);
};
