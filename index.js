const WebSocket = require('ws');
var prt = process.env.port || 8080;
const wss = new WebSocket.Server({ port: prt });

wss.on('connection', function connection(ws) {
  console.log("connected...");
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  ws.send('something');
});
