				var http=require("http");

				http.createServer(function(req,res){
				 var body='This is the response of the body';
				 var content_length=body.length;
				 res.writeHead(200,{
				 	'Content-Type':'text/plain',
				 	'Content-Length':content_length
				 

				});
				res.end(body);
				}).listen(3000);
				console.log("server is running on http:127.0.0.0:130/");