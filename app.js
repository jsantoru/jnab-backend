var express = require('express')
var app = express()

app.get('/', function (req, res) {
	res.send('Hello World')
})

app.get('/another', function (req, res) {
	res.send('another...')
	console.log('another...')
})

app.listen(8080, function () {
	console.log('listening on port 8080...')
})
