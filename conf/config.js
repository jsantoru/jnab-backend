var privateConfig = require('./private-config');

var config = {};
config.app = {
    apikey: privateConfig.app.apikey
};

config.alphavantage = {
    apikey: privateConfig.alphavantage.apikey
};

config.intrinio = {
    user: privateConfig.intrinio.user,
    pass: privateConfig.intrinio.pass
};

module.exports = config;
