var express = require("express");
var app = express();
//设置引擎
app.set("view engine","ejs");
//设置静态文件也能被读取(像外部css文件)(/assets前面的/一定要写)
app.use("/assets",express.static(__dirname+"/assets"));
var todoController = require("./controller/todoController");
todoController(app);
app.listen(3000);