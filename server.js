var http = require("http");//先引入模块（http对象）
var server = http.createServer(function(req,res){//createServer方法  req,res（对象）req,res（对象）已经实例化好了
	console.log("客户端和服务器已经建立通讯"+req.url);
	//如果服务器返回的不是纯文本（字符串），而是json  HTML等要写响应头（200是网络状态码）
	res.writeHead(200，{"Content-type":"text/plain"});
	//服务端结束了把东西返回给客户端
	res.end("HEy NodeJs");
	//回调函数需要server。
});
//监听(第一个参数端口号)
server.listen(4000,"127.0.0.1");//在浏览器里输入127.0.0.1：4000才会触发这个方法
console.log("server is running....");

