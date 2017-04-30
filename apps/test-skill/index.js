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
		"Wer ist der React Prophet"
		]
  },
  function(request,response) {
    //var number = request.slot('number');
    response.say("Ganz klar. Natürlich bist du der React Prophet, Dennis");
  }
);

module.exports = app;