var express = require('express');
var budgetService = require('./budgetService');
var app = express();

app.get('/', function (req, res) {
	res.send('Hello World');
});

app.get('/budget/:id', function (req, res) {
    var budgetId = req.params.id;

    console.log('retrieving budget for id:', budgetId);

	var budget = budgetService.retrieveBudget();
	res.set('Content-Type', 'application/json');
	res.send(budget);
});

// start the app server
app.listen(8080, function () {
	console.log('listening on port 8080...');
});
