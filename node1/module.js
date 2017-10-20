var counter = function (arr) {

	return `数组中拥有${arr.length}个元素`;
}

var adder = function(a,b){
	return `两个数的和为${a+b}`;
}
var pi = 3.142;


// console.log(counter(["HErry","2","3"]));
//(想让外部文件使用)应该把我当前的counter名字对外公开
//module,exports都是对象
//只有使用module.exports之后，其他文件才能使用
//下面这样写太麻烦了
// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.pi = pi;
//优化(模块模式) Module patterns
module.exports = {
	counter:counter,
	adder:adder,
	pi:pi
}
