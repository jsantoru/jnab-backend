var rp = require('request-promise');

module.exports.executeGetHttps = function(username, password, baseUrl, path, callback) {
    var auth = "Basic " + new Buffer(username + ':' + password).toString('base64');

    var requestObject =
        {
            uri: baseUrl + path,
            headers: {"Authorization":auth},
            json: true
        };

    // execute the get
    rp(requestObject)
        .then(function(data) {
            callback(null, data);
        })
        .catch(function(err) {
            console.log("error:", err);
            callback("Error: " + err, err);
        });
};