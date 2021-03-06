var buildMockedBudget = function() {
    var categoryGroupFood = {
        "Groceries": "500",
        "Family Eating Out": "100"
    };

    var categoryGroupCar = {
        "Car Loans":"300",
        "Gas":"100",
        "Insurance":"125",
        "Maintenance":"20"
    };

    var budget = [
        categoryGroupFood,
        categoryGroupCar
    ];

    return budget;
};

/**
 * Retrieve the budget.
 * @param id
 * @returns {[*,*]}
 */
module.exports.retrieveBudget = function(id) {
    console.log('budgetService - retrieving budget for id:', id);

    // return the mocked up data
    return buildMockedBudget();
};
