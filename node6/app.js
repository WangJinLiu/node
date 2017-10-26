var express = require("express");//返回方法
var app = express();//返回对象
// ap.get('/',function(req,res){


// });
//es6写法
//监听访问
app.get('/',(req,res) =>{
	// console.log("HEllo World");
	// console.log(req);//当前访问的路径
	//相当于res.end();
	res.send("This is home Page!");

});
app.get("/contact",(req,res) =>{
	res.send("This is contact page!");
})
//  /:给路由参数node格式
app.get("/blogs/:sbqid",(req,res) =>{
	console.log(req);
	//params: { sbqid: '5' },
	//req.params.sbqid获取路由参数（http://127.0.0.1:3000/blogs/5）5就是路由参数
	res.send("具体的路由参数为:"+req.params.sbqid);
	

});
app.listen(3000);//第二个参数不写默认本机ip
