const WebSocket = require('ws');
express = require('express');
https = require('https');
request = require('request');
var path = require('path')
var prt = process.env.PORT || 8080;
const wss = new WebSocket.Server({ port: prt });

wss.on('connection', function connection(ws) {
  console.log("connected...");
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  ws.send('something');
});
app.post('/webhook', function (req, res) {
  console.log(res.queryResult);
res.sendStatus(200);
});
app.listen(port);
