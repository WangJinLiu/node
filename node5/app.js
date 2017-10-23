//讲解路由的知识
var http = require("http");
var fs = require("fs");
var server = http.createServer(function (req,res) {
	console.log(req.url);
	//在服务器响应头什么的都发送完之后才会打印favicon.ico   req.url 才会返回/favicon.ico
	// res.end();
	if(req.url !== "/favicon.ico"){
		// console.log(req.url);
		if(req.url == "/" || req.url == "/home"){
			res.writeHead(200,{"Content-type":"text/plain"});
			res.end("这是home主页");
		}else if(req.url == "/about"){
			res.writeHead(200,{"Content-type":"text/plain"});
			res.end("这是About页面");

		}else if(req.url == "/contact"){
			res.writeHead(200,{"Content-type":"text/plain"});
			res.end("这是联系我们页面");

		}else{
			res.writeHead(200,{"Content-type":"text/plain"});
			res.end("找不到您要的页面！")
		}
		// console.log("Hello World!");

	}
	//第一种形式写接口
	// res.writeHead(200,{"Content-type":"application/json"});
	// var myReadStream = fs.createReadStream(__dirname+"/index.html","utf8");
	// myReadStream.pipe(res);


});
server.listen(3000,"127.0.0.1");
console.log("server is renning ......");