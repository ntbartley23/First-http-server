//  require an HTTP module

var http = require( 'http');

// define a port to listen to

const PORT=8080;

// I will define a function that will handle requests and send response
 function handleRequest(request, response) {
 	response.end('It Works!! Path Hit: ' + request.url);
 }

 // Now to create a server. We must first define one
 var server = http.createServer(handleRequest);

 // Now we begin our server
 server.listen(PORT, function() {
 	// will callback saying " server is listen, If successful
 	console.log( "Server is listening on: http://localhost:%s", PORT);
 });

