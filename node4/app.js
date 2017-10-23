var http = require("http");
var fs = require("fs");
/*总结：text/plain返回的是纯文本,
	text/html:html
	application/json:返回是json*/
var server = http.createServer(function (req,res) {
	//第一种形式写接口
	res.writeHead(200,{"Content-type":"application/json"});
	//HTML文件(text/html)
	// var myReadStream = fs.createReadStream(__dirname+"/index.html","utf8");
	// json文件(application/json)
	// var myReadStream = fs.createReadStream(__dirname+"/users.json","utf8");
	// myReadStream.pipe(res);

	//第二种形式写接口
	var users = {
		name:"Hefsnfd",
		age:30,
		gender:"male"
	}
	res.end(JSON.stringify(users));


});
server.listen(3000,"127.0.0.1");
console.log("server is renning ......");