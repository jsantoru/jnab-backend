// import the service to work with the budget
var budgetService = require('../service/budgetService');
var stockService = require('../service/stockService');

/**
 * Retrieve the budget via the service.
 *
 * @param req
 * @param res
 */
module.exports.retrieveBudget = function(req, res) {
    var budgetId = req.params.id;
    console.log('budgetController - retrieving budget for id:', budgetId);

    var budget = budgetService.retrieveBudget(budgetId);

    res.set('Content-Type', 'application/json');
    res.send(budget);
};

module.exports.retrieveStockData = function(req, res) {
    var ticker = req.params.ticker;
    stockService.retrieveStockPrice(ticker, res);
};