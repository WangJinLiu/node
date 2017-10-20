//重要且抽象的类
//events 系统提供好的（他是一个对象）（不用给路径）
//自己写的要给路径
var event = require("events");
// 所有能触发事件的对象都是 EventEmitter 类的实例
//事件驱动
//实例化事件对象
var myEmitter = new event.EventEmitter();
//注册事件
myEmitter.on("sbqEvent",function(msg){
	console.log("sbqEvent事件被触发");
})
//激活事件(调用事件)
myEmitter.emit("sbqEvent");



