const WebSocket = require('ws');
express = require('express');
https = require('https');
http = require('http');
request = require('request');
var path = require('path');
var app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
    extended: true
}));
const server = http.createServer(app);
// create websocket server and listen
const wss = new WebSocket.Server({ server });
// on connection events
wss.on('connection', function connection(ws) {
  console.log("connected...");
// handle message events  
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });
//handle response
  ws.send('something');
});
// create a home page for the website
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/views/index.html'));
});
// handle post requests
app.post('/webhook', function (req, res) {
  console.log(req);
res.sendStatus(200);
});
// lister to port 
server.listen(process.env.PORT || 8080, () => {
    console.log(`Server started on port ${server.address().port} :)`);
});
