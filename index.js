const WebSocket = require('ws');
var port = process.env.port || 8080;
const wss = new WebSocket.Server({ port: port });
 
wss.on('connection', function connection(wss) {
 console.log('new connection');
  wss.on('message', function incoming(message) {
    console.log('received: %s', message);
  });
 
  wss.send('something');
});
