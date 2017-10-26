var express = require("express");
var app = express();
//用express一定要设置一个模板引擎
//告诉浏览器当前的模板引擎（里边的字符串固定的） 他会把ejs翻译成  html 让浏览器可以识别
//模板引擎（模板引擎（这里特指用于Web开发的模板引擎）是为了使用户界面与业务数据（内容）分离而产生的，
// 它可以生成特定格式的文档，用于网站的模板引擎就会生成一个标准的HTML文档。）

//设置引擎
app.set("view engine","ejs");
//让express识别静态文件css等
app.use('/assets',express.static(__dirname+'/assets'));
//添加路由
app.get("/",(req,res)=>{//指定路由
	//发送字符串
	// res.send(__dirname+"/index.html");
	//发送文件
	//不认识ejs文件认识json HTML
	// res.sendFile(__dirname+"/views/index.ejs");
	//render识别的是ejs
	//render会自动识别views文件夹(这里边的index是路径，只不过是省略了，因为前面)
	res.render("index");

})
app.get("/contact",(req,res)=>{
	// res.sendFile(__dirname+"/views/contact.ejs");
		res.render("contact");
})
//路由参数 ：。。。。
app.get("/blogs/:sbqid",(req,res)=>{
	// var sbqdata = {title:"博客1",author:"niuniu",body:"this is first blog!"}
	// res.render("blog",{id:req.params.sbqid,data:sbqdata});
	//数值形式
	var sbqdata = [
		{title:"博客1",author:"niuniu1",body:"this is first blog1!"},
		{title:"博客2",author:"niuniu2",body:"this is first blog2!"},
		{title:"博客3",author:"niuniu3",body:"this is first blog3!"}]
	res.render("blog",{id:req.params.sbqid,data:sbqdata});

})
app.listen(3000);

//express没办法把数据传递给HTML，所以需要一个模板引擎
//浏览器只认识HTMLcss js

//views文件夹会自动识别