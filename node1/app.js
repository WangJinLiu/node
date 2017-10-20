//
var stuff1 = require("./module");//返回的是一个对象{ counter: [Function: counter], adder: [Function: adder] }
console.log(stuff1);
console.log(stuff1.counter(["HErry","2","3"]));//数组中拥有3个元素

console.log(stuff1.adder(3,5));
console.log(stuff1.pi);