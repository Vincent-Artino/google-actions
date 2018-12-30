const WebSocket = require('ws');
express = require('express');
https = require('https');
request = require('request');
var path = require('path');
var app = express();
var prt = process.env.PORT || 8080;
app.post('/webhook', function (req, res) {
  console.log(res.queryResult);
res.sendStatus(200);
});
app.listen(prt);
