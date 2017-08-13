var rp = require('request-promise');
var config = require('../../conf/config');

var URL_GET_STOCK_DAILY_STATS = "https://www.alphavantage.co/query?apikey=" + config.apikeyAlphavantage + "&function=TIME_SERIES_DAILY&symbol=";

/**
 * Retrieve the stock price for the given ticker and set it on the original repsonse object.
 *
 * @param ticker
 * @param res
 */
module.exports.retrieveStockPrice = function(ticker, res) {
    var requestObject =
        {
            uri: URL_GET_STOCK_DAILY_STATS + ticker,
            json: true
        };

    // execute the get
    rp(requestObject)
        .then(function(data) {
            var mostRecent = parseStockData(data);
            res.set('Content-Type', 'application/json');
            res.send(mostRecent);
        })
        .catch(function(err) {
            console.log("error:", err);
        });
};

// helpers

/**
 * Parse the stock data down to the most recent info.
 *
 * @param data
 * @returns {{date: *, closePrice: *}}
 */
var parseStockData = function(data) {
    // get the value of the key we need for the most recent data
    var metadata = data["Meta Data"];
    var lastRefreshed = metadata["3. Last Refreshed"];

    var closePrice = data["Time Series (Daily)"][lastRefreshed]["4. close"];

    var mostRecent = {
        "date": lastRefreshed,
        "closePrice": closePrice
    };

    return mostRecent;
};
