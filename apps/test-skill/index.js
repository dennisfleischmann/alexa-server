module.change_code = 1;
'use strict';


var alexa = require('alexa-app');
var app = new alexa.app('test-skill');


app.launch(function(request, response) {
    response.say('Welcome to your test skill').reprompt('Way to go. You got it to run. Bad ass.').shouldEndSession(false);
});




app.error = function(exception, request, response) {
    console.log(exception)
    console.log(request);
    console.log(response);
    response.say('Sorry an error occured ' + error.message);
};

app.intent('besuchen', {
        "slots": { "number": "NUMBER" },
        "utterances": [
            "wie es katy geht"
        ]
    },
    function(request, response) {
        //var number = request.slot('number');
        response.say("gerne dennis, wie geht es deiner ehefrau ondre?");
    }
);

app.intent("ondre", {
        "utterances": [
            "wie es cecile laetita geht"
        ]
    },
    function(request, response) {
        // `getAsync` returns a Promise in this example. When
        // returning a Promise, the response is sent after it
        // resolves. If rejected, it is treated as an error.
        return new Promise(function(resolve, reject) {
            // do a thing, possibly async, then…

            //wait(5000);

            if (true) {
                resolve();
            } else {
                reject(Error("It broke"));
            }

        }).then(function(d) {
            response.say('Guten abend lieber ondre vielleicht hasst du schon von mir gehört ich bin alexa! dennis und ich gratulieren euch ganz herzlich zum nachwuchs und wünschen euch vieren vie gesundheit auf erden. Ich hoffe wir lernen uns mal ganz persönlich kennen. Bis bald');

        });
    });

function wait(ms) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
        end = new Date().getTime();
    }
}

module.exports = app;