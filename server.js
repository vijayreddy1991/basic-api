'use strict';
var express = require('express');
var app = express();

console.log('starting');

app.get('/', function(req, res) {
  console.log('received request for /');
  var response = '<html><h2>Hello, world!</h2></html>';
  res.send(response);
});

app.get('/system', function(req, res) {
  console.log('received request for /system');
  var response = {
    status: 'healthy'
  };
  res.send(response);
});

var port = process.env.PORT || 8888;
console.log('Listening on port: ' + port);
app.listen(port);
