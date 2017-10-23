//html
var http = require("http");
var fs = require("fs");
var server = http.createServer(function (req,res) {
	console.log(req.url);
	//在服务器响应头什么的都发送完之后才会打印favicon.ico   req.url 才会返回/favicon.ico
	// res.end();
	if(req.url !== "/favicon.ico"){
		// console.log(req.url);
		if(req.url == "/" || req.url == "/home"){
			res.writeHead(200,{"Content-type":"text/html"});
			var myReadStream = fs.createReadStream(__dirname+"/mm.html","utf8");
			myReadStream.pipe(res);
		}else if(req.url == "/about"){
			res.writeHead(200,{"Content-type":"text/html"});
			var myReadStream = fs.createReadStream(__dirname+"/mm.html","utf8");
			myReadStream.pipe(res);

		}else if(req.url == "/contact"){
			res.writeHead(200,{"Content-type":"text/html"});
			var myReadStream = fs.createReadStream(__dirname+"/mm.html","utf8");
			myReadStream.pipe(res);

		}else{
			res.writeHead(200,{"Content-type":"text/plain"});
			res.end("找不到您要的页面！");
		}
		// console.log("Hello World!");

	}


});
server.listen(3000,"127.0.0.1");
console.log("server is renning ......");