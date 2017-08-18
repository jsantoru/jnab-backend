var config = require('../../conf/config');
var intrinio = require('intrinio-client')(config.intrinioUser, config.intrinioPass);

var intrinioHttpDao = require('../httpDao/intrinioHttpDao');

/**
 * http://docs.intrinio.com/#companies
 *
 * @param ticker
 * @param callback
 */
module.exports.getByTicker = function(ticker, callback) {
    intrinio
        .ticker(ticker)
        .on('complete', function(data, response) {
            if(response.statusCode != 200){
                callback(response.statusCode, data);
            }
            else if(response.statusCode == 200){
                callback(null, data);
            }
        });
};

module.exports.getPrices = function(ticker, callback) {
    intrinio
        .prices(ticker)
        .on('complete', function(data, response) {
            if(response.statusCode != 200){
                callback(response.statusCode, data);
            }
            else if(response.statusCode == 200){
                callback(null, data);
            }
        });
};

module.exports.getDividendYield = function(ticker, callback) {
    intrinio
        .data_point(ticker, 'trailing_dividend_yield')
        .on('complete', function(data, response) {
            if(response.statusCode != 200){
                callback(response.statusCode, data);
            }
            else if(response.statusCode == 200){
                callback(null, data);
            }
        });
};

module.exports.queryForCompany = function(queryString, callback) {

    // TODO: define service callback to parse the raw response
    // TODO: then pass refined data back to the controller callback

    intrinioHttpDao.executeGet("/companies?query=" + queryString, callback);
};
