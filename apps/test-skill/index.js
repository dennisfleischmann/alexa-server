module.change_code = 1;
'use strict';


var alexa = require( 'alexa-app' );
var app = new alexa.app( 'test-skill' );


app.launch( function( request, response ) {
	response.say( 'Welcome to your test skill' ).reprompt( 'Way to go. You got it to run. Bad ass.' ).shouldEndSession( false );
} );




app.error = function( exception, request, response ) {
	console.log(exception)
	console.log(request);
	console.log(response);	
	response.say( 'Sorry an error occured ' + error.message);
};

app.intent('reactProphet',
  {
    "slots":{"number":"NUMBER"}
	,"utterances":[ 
		"wer ist der react prophet"
		]
  },
  function(request,response) {
    //var number = request.slot('number');
    response.say("Ganz klar. Natürlich bist du der React Prophet, Dennis");
  }
);

app.intent("piep", 
 	{ 
	"utterances":[ 
		"piep ein mal"
		]
  },
	function(request, response) {
  // `getAsync` returns a Promise in this example. When
  // returning a Promise, the response is sent after it
  // resolves. If rejected, it is treated as an error.
	return new Promise(function(resolve, reject) {
  // do a thing, possibly async, then…

	wait(5000);

  if (true) {
    resolve();
  }
  else {
    reject(Error("It broke"));
  }
  
  }).then(function(d){
    response.say('piep');

	});
});

function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}

module.exports = app;


