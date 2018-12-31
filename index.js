const WebSocket = require('ws');
express = require('express');
http = require('http');
request = require('request');
var path = require('path');
var app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', function connection(ws) {
  console.log("connected...");
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  ws.send('something');
});
app.post('/webhook', function (req, res) {
  console.log(req);
res.sendStatus(200);
});
server.listen(process.env.PORT || 8080, () => {
    console.log(`Server started on port ${server.address().port} :)`);
});
