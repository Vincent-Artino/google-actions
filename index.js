const WebSocket = require('ws');
var port = process.env.port || 8080;
const wss = new WebSocket.Server({ port: ENV });
 
wss.on('connection', function connection(wss) {
  wss.on('message', function incoming(message) {
    console.log('received: %s', message);
  });
 
  wss.send('something');
});
