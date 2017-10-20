var fs = require("fs");
var myReadStream =  fs.createReadStream(__dirname+"/readMe.txt","utf8");
console.log(myReadStream);
myReadStream.on("data",function(chunk){
	//返回的数据流是一段一段的
	console.log("______________________________________________________________________");
	console.log(chunk);

});//data固定的激活的时候激活的这个方法