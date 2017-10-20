var fs = require("fs");
//同步读文件
var readMe = fs.readFileSync('readMe.txt',"utf8");//加上utf8就能打印出来文件中的东西
// console.log(readMe);
//同步写入文件
fs.writeFileSync("writeMe.txt",readMe);//自己会建一个writeMe文件
// fs.writeFileSync("writeMe.txt","helloWorld");//每一次都是清掉之前的再写入内容

//异步读取 && 写入
// fs.readFile("readMe.txt","utf8",function(err,data){
// 	if(err) throw err;
// 	console.log(data);
// }); 
// console.log(123);//先打印123
// fs.writeFile("writeMe.txt","Hello Every",function(err,data){
// 	if(err) throw err;
// 	console.log(data);
// })

//练习异步读取文件，并将读取的文件内容写入到writeMe中
// fs.readFile("readMe.txt",'utf8',function(err,data){
// 	if(err) throw err;
// 	fs.writeFile("writeMe.txt",data);
// });
//删除一个文件
// fs.unlink("writeMe.txt",function(err){
// 	if(err) throw err; 


// });
// //创建一个文件夹
// fs.mkdir("stuff",function(err){
// 	if(err) throw err;

// });

//删除一个文件夹
fs.rmdir("stuff",function(err){

});