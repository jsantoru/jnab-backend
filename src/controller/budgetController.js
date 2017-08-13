// import the service to work with the budget
var budgetService = require('../service/budgetService');

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
