var rp = require('request-promise');

var URL_GET_STOCK_DAILY_STATS = "https://www.alphavantage.co/query?apikey=ZXS9AAAONUU78AQN&function=TIME_SERIES_DAILY&symbol=";

module.exports.retrieveStockPrice = function(ticker, res) {
    var requestObject =
        {
            uri: URL_GET_STOCK_DAILY_STATS + ticker,
            json: true
        };

    rp(requestObject)
        .then(function(data) {
            console.log(data);

            // get the value of the key we need for the most recent data
            var metadata = data["Meta Data"];
            var lastRefreshed = metadata["3. Last Refreshed"];

            var closePrice = data["Time Series (Daily)"][lastRefreshed]["4. close"];

            var response = {
                "date": lastRefreshed,
                "closePrice": closePrice
            };

            res.set('Content-Type', 'application/json');
            res.send(response);
        })
        .catch(function(err) {
            console.log("error:", err);
        });
};
