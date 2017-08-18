var config = require('../../conf/config');
var baseHttpDao = require('./baseHttpDao');

module.exports.executeGet = function(path, callback) {
    var baseUrlIntrino = "https://api.intrinio.com";
    baseHttpDao.executeGetHttps(config.intrinioUser, config.intrinioPass, baseUrlIntrino, path, callback);
};
