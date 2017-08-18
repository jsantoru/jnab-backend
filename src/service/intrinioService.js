var config = require('../../conf/config');
var intrinio = require('intrinio-client')(config.intrinioUser, config.intrinioPass);

module.exports.getByTicker = function(ticker, callback) {
    console.log(config.intrinioUser);
    console.log(config.intrinioPass);

    intrinio
        .ticker(ticker)			//All endpoints follow this pattern
        .on('complete', function(data, response) {
            //data is the response from the Intrinio API
            //response is the http response
            if(response.statusCode != 200){
                callback(response.statusCode, data);
            }
            else if(response.statusCode == 200){
                callback(null, data);
            }
        });
};