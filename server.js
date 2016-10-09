/**
 * Created by user on 10/9/16.
 */
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


    app.post("/", function (request, response) {

        res.send('Hello anthony!');

        });