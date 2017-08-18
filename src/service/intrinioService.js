var config = require('../../conf/config');
var intrinioHttpDao = require('../httpDao/intrinioHttpDao');

/**
 * http://docs.intrinio.com/#companies
 *
 * @param ticker
 * @param callback
 */
module.exports.getByTicker = function(ticker, callback) {
    intrinioHttpDao.executeGet("/companies?ticker=" + ticker, function(err, data) {
        if(!err) {
            callback(null, data);
        }
        else {
            callback(err, data);
        }
    });
};

module.exports.getCurrentPrice = function(ticker, callback) {
    this.getPrices(ticker, function(err, data) {
        if(!err) {
            var price = data.data[0].close;
            var responseObject = {price:price};
            callback(null, responseObject);
        }
        else {
            callback(err, data);
        }
    });
};

module.exports.getPrices = function(ticker, callback) {
    intrinioHttpDao.executeGet("/prices?ticker=" + ticker, function(err, data) {
        if(!err) {
            callback(null, data);
        }
        else {
            callback(err, data);
        }
    });
};

module.exports.getDividendYield = function(ticker, callback) {
    intrinioHttpDao.executeGet("/data_point?ticker=" + ticker + "&item=trailing_dividend_yield", function(err, data) {
        if(!err) {
            var dividendPercent = data.value * 100;
            var responseObject = {ticker: data.identifier, dividendPercent:dividendPercent};

            callback(null, responseObject);
        }
        else {
            callback(err, data);
        }
    });
};

module.exports.queryForCompany = function(queryString, callback) {
    intrinioHttpDao.executeGet("/companies?query=" + queryString, function(err, data) {
        var companies = [];
        if(!err) {
            // build a simplified list of companies
            data.data.forEach(function(item) {
                // TODO: create domain objects
                var company = {
                    ticker: item.ticker,
                    name: item.name
                };
                companies.push(company);
            });

            callback(null, companies);
        }
        else {
            callback(err, data);
        }
    });
};
