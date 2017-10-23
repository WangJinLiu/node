var express = require("express");
// console.log(express);
var app = express();
console.log(app);
app.get("/",function(req,res){
	res.send("Hello world");//传送HTTP响应


})
var server = app.listen(8080,function(){

})