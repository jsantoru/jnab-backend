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
