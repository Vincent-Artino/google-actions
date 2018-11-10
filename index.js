express = require('express');
var path = require('path')
var app = express();
port = Number(process.env.PORT || 5000);
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static(path.join(__dirname)));
app.use(bodyParser.json());
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/views/index.html'));
});
app.get('/webhook', function(req, res) {
  if (req.query['hub.mode'] === 'subscribe' &&
      req.query['hub.verify_token'] === 'Vincent') {
    console.log("Validating webhook");
    res.status(200).send(req.query['hub.challenge']);
  } else {
    console.error("Failed validation. Make sure the validation tokens match.");
    res.sendStatus(403);          
  }  
});
app.post('/webhook', function (req, res) {
	console.log(req.body);
	var data = req.body;
	if(data.object === 'page'){
	data.entry.forEach(function(entry){
		var pageId = entry.id;
		var time = entry.time;
		entry.messaging.forEach(function(event){
		if(event.message){
			receivedMessage(event);		
		}
		else if(event.postback){
			if(event.postback.payload=='Get started'){
				console.log(getDetails(event.sender.id))
				//sendTextMessage(event.sender.id,"Hello "+getFirstName(event.sender.id))
				var loc = [
				      {
					"content_type":"location",
				      }
				]
				sendQuick(event.sender.id,"please set a default location",loc)
			}
		}
		else{
			console.log("Unknown event : ",event);
		}
	});
});

res.sendStatus(200);
}
});
app.listen(port);
