var apikeyAlphavantage = require('./apikey-alphavantage');
var userpassIntrinio = require('./userpass-intrinio');

var config = {};
config.apikeyAlphavantage = apikeyAlphavantage;

config.intrinioUser = userpassIntrinio.user;
config.intrinioPass = userpassIntrinio.pass;

module.exports = config;
