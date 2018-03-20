var fs = require("fs");  //fs = file-system
var http = require("http");

var content="<h1>default msg</h1>";

var d = new Date();
var n = d.getHours();


// Create http server:
var myServer = http.createServer(function(request, response){
	console.log(request.url)
	switch(request.url){
		
	case "/morning.jpeg":
	response.writeHead(200, {"Content-Type": "image/jpeg"});
	fs.readFile("./morning.jpeg",function(err,data){
		response.end(data);
	})
	
	break;
	case "/afternoon.jpg":
	response.writeHead(200, {"Content-Type": "image/jpg"});
	fs.readFile("./afternoon.jpg",function(err,data){
		response.end(data);
	})
	
	break;
	case "/evening.jpg":
	response.writeHead(200, {"Content-Type": "image/jpg"});
	fs.readFile("./evening.jpg",function(err,data){
		response.end(data);
	})
	
	break;
	case "/night.jpg":
	response.writeHead(200, {"Content-Type": "image/jpg"});
	fs.readFile("./night.jpg",function(err,data){
		response.end(data);
	})
	
	break;
	default:
	console.log("User requested page...");
	
	// Send back header:
	response.writeHead(200, {"Content-Type": "text/html"});
	if(n<=12&&n>6){
		console.log(n);
		fs.readFile("./morning.html", "utf-8", function(err, data){
			content=data;})
		
		}
	else if(n<=16&&n>12){
		fs.readFile("./afternoon.html", "utf-8", function(err, data){
			content=data;})}
	else if(n<=20&&n>16){
		fs.readFile("./evening.html", "utf-8", function(err, data){
			content=data;})}
	else if(n<=24&&n>20||n<6&&n>=0){
		fs.readFile("./night.html", "utf-8", function(err, data){
		content=data;
		})
			
		}
	// Send back content: 
	response.write(content);
	console.log(content);
	response.end();
	}
});

// Start listening on port 3200:
myServer.listen(3200);

