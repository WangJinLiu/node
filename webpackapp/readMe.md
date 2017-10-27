<!-- webpack.config.js文件名是固定的 -->
webpack 是一个现代 JavaScript 应用程序的模块打包器(module bundler)。当 webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成少量的 bundle - 通常只有一个，由浏览器加载。
（应用场景：当一个html文件需要引入很多css文件和很多js文件时要用到这个，也就是说只要引入出口文件的路径就可以了，不用引入那么多文件了）

1.安装cli
 npm init --yes
 sudo cnpm install -g webpack
 webpack -v(查看有没有安装成功)
cnpm install webpack --save-dev


<!-- 在终端执行webpack app.js bundle.js 会自动建出bandle.js文件 -->

<!-- css文件一并打包方式 -->
<!-- 引入css-loader  通过注入<style>标签将CSS添加到DOM中-->
<!-- css-style-loader  通过 webpack 配置，CLI或内联使用 loader。-->
cnpm install style-loader css-loader --save-dev


修改了package.json 中的
"scripts": {
    "build":"webpack"
 }
 之后用下面的命令运行

npm run build 运行
npm run build


 cnpm install webpack-dev-server --save-dev
style-loader:webpack的样式加载器
<!-- 建文件过程
	终端输入
	 npm init --yes（init完package.json 文件就自动建出来了）
	 sudo cnpm install -g webpack
	 webpack -v(查看有没有安装成功)
	 cnpm install webpack --save-dev（出来node_modules文件夹）
	 cnpm install style-loader css-loader --save-dev（为了打包css文件）
	 style-loader:作用是在HTML中添加style标签，让html可以识别样式
	 css-loader: 让打包文件可以获取到css样式，并且在入口文件（app.js）中可以引入
	 自己建index.html文件
	 <script src="./dist/bundle.js"></script>路径写出口文件的路径
	 自己建一个webpack.config.js文件（这个文件会被自动识别） 在其中配置入口文件，出口文件等信息
	 建src文件，里面建css和js 文件夹，css文件夹建一个style.css文件，js文件夹建app.js和people.js 文件
	 app.js作为入口文件（入口文件只能有一个，以后要引入css文件什么的都要通过这个入口文件进行引入）细节见这两个文件
	 因为在webpack.config.js文件中设置好了出口文件的路径，名字等，所以当在终端执行webpack app.js bundle.js命令时会自动建所设置的文件夹文件
	 修改了package.json 中的
	"scripts": {
    	"build":"webpack"
	 }
 	之后用下面的命令运行（打包）
	npm run build 运行（执行就开始打包了）


	//建一个服务器实现监听(并实现热更新)
	cnpm install webpack-dev-server --save-dev
	//下面的start设置完就可以实现实时监听了（--entry入口文件 --output-filename出口文件）
	"scripts": {
	    "start": "webpack-dev-server --entry ./src/js/app.js --output-filename ./dist/bundle.js",
	    "build": "webpack"
 	 },
 	 npm run starts运行服务器




	 
 -->
<!-- 安装babel -->
<!-- javascript在不断的发展，各种新的标准和提案层出不穷，但是由于浏览器的多样性，导致可能几年之内都无法广泛普及，babel可以让你提前使用这些语言特性，他是一种用途很多的javascript编译器，他把最新版的javascript编译成当下可以执行的版本，用于转化js代码，简言之，利用babel就可以让我们在当前的项目中随意的使用这些新最新的es6，甚至es7的语法。说白了就是把各种javascript千奇百怪的语言统统专为浏览器可以认识的语言。 -->
webpackapp lanou3g$ cnpm install babel-core babel-loader babel-preset-es2015 --save-dev



<!-- 
	webpackapp执行流程：终端写命令npm run build 
	然后会进入package.json 然后会查找
	"scripts": {
	    "start": "webpack-dev-server --entry ./src/js/app.js --output-filename ./dist/bundle.js",
	    "build": "webpack"
  	},
  找到build中webpack 然后会在终端执行这个命令
  然后会自动找到webpack.config.js这个文件，一点点执行这个文件中的东西然后根据这些配置打包文件到你所指定的文件中

 -->
