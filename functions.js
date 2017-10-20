/*在nodejs中经常使用函数表达式*/
//正常
function saHi1() {
	console.log("HELLO TIANTIAN∂");
}

//函数表达式
var saHi2 = function(){
	console.log("hello 函数表达式");
}
// saHi();//函数表达式比正常函数执行速度快（右左法则）
function callFunction(foo){
	foo();

}
//函数表达式常用原因（函数表达式比正常函数执行速度快）
// callFunction(saHi1);
callFunction(saHi2);
