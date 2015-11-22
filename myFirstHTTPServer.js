// we must require a dispatcher in our program

var dispatcher = require('httpdispatcher');

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


function handleRequest (request, response) {
	try{
		// log the request onto the console
		console.log(request.url);
		//
		dispatcher.dispatch(request, response);
			} catch(err) {
				console.log(err);
			}
}

dispatcher.setStatic('resources');

 //sample get request
 dispatcher.onGet("/page1", function (request, response) {
 	res.writeHead(200, {'Content-Type' : 'text/plain'});
 	res.end('Page One');

 });

 // sample post request
 dispatcher.onPost("/post1", function (request, response) {
 	res.writeHead(200, { 'Content-Type': 'text/plain'});
 	res.end( 'Got Post Data');
 });


