var express = require('express');
var app = express();
var twilio = require('twilio');

app.post("/twilio", function (request, response) {

  var accountSid = process.env.twilioaccountSid;
  var authToken = process.env.twilioauthToken;
  var workspaceSid = process.env.twilioworkerspaceSid;

  var name = request.query.name;
  var client = new twilio.TaskRouterClient(accountSid, authToken, workspaceSid);
  client.workspace.workers.create({
    friendlyName: name,
    // add services here, e.g. mentorship, childcare, etc.
    attributes: JSON.stringify({'type': 'resource'})
  });


  res.send('Hello anthony!');

});

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


