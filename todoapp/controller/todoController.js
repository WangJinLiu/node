var bodyParser = require("body-parser");//进制流解析（从posturl中传过来的？后面的东西）
var urlencodedParser = bodyParser.urlencoded({ extended: false });//
var data = [{item:"Dog"},{item:"East"},{item:"West"}];
module.exports = function(app){
	// console.log(app);
	//增删查
	// res.render(file,option)是express中专门渲染视图用的
	//因为前面应该已经定义好了views文件夹的目录，所以render()渲染时会去这个文件夹找对应的模板去渲染。
	//使用指定的回调函数将HTTP GET请求路由到指定的路径

	/*路由是由一个 URI、HTTP 请求（GET、POST等）和若干个句柄组成，
	它的结构如下： app.METHOD(pamath, [callback...], callback)，
	 app 是 express 对象的一个实例， METHOD 是一个 HTTP 请求方法， path 是服务器上的路径， callback 是当路由匹配时要执行的函数。*/
	 //EJS是一个JavaScript模板库,用来从JSON数据中生成HTML字符串
	app.get("/todo",(req,res) =>{
		// res.send(req.url);// /todo
		res.render("todos",{todos:data});
	});
	//增加
	app.post("/todo",urlencodedParser,(req,res) =>{
		// console.log(req.body);//{ item: 'aaaa' }
		// req.body此方法通常用来解析POST请求中的数据,而且必须借助body-Parser 来实现
		data.push(req.body);//必须刷新一下才能页面出来
		//发送一个json的响应
		res.json(data);

	});
	//删除
	//通过路由参数
	app.delete("/todo/:name",(req,res) =>{
		// console.log(req.params.name);
		//es6 == es2015 array method(for..of filter map)
		//filter:过滤 条件不满足的干掉，满足的留下
		//遍历
		// data = data.filter(function(todo){
		// 	var value = todo.item !== req.params.name;
		// 	console.log(value);
		// 	return value;


		// })
		for(var i=0;i<data.length;i++){
			if(data[i].item == req.params.name){
				data.splice(i,1);
			}

		}
		res.json(data);

		
	});

}