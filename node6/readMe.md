# NPM
<!-- npm 一定要在node环境下使用 -->
<!-- npm（node package manager）是nodejs的包管理器，用于node插件管理（包括安装、卸载、管理依赖等）  -->
npm cache clear 清除缓存
npm init     npm初始化c
entry point(入口文件)
然后有一个package.json文件
npm install jquery 下载jquery

uninstall
用   npm install jquery --save  
package.json中就有"dependencies": {
    "jquery": "^3.2.1"
  },

用npm install 就可以安装dependencies 中的所有模块

npm install mocha --save-dev  把mocha下载在devDependencies中

dependencies中是主要的模块

devDependencies 其他依赖的模块



Express 是一个基于 Node.js 平台的极简、灵活的 web 应用开发框架，它提供一系列强大的特性，帮助你创建各种 Web 和移动设备应用。
<!-- 安装插件到全局要用sudo -->
sudo npm install -g  nodemon 下载一个全局的nodemon Mac系统全局要加sudo（nodemon一个工具用来自动重启项目工程）
<!-- 因为npm安装插件是从国外服务器下载，受网络影响大，可能出现异常，如果npm的服务器在中国就好了，所以我们乐于分享的淘宝团队干了这事。来自官网：“这是一个完整 npmjs.org 镜像，你可以用此代替官方版本(只读)，同步频率目前为 10分钟 一次以保证尽量与官方服务同步。 -->
使用淘宝镜像的命令：
<!-- 关于镜像安装方法的网址（http://riny.net/2014/cnpm/）
	2.持久使用
	npm config set registry https://registry.npm.taobao.org
	// 配置后可通过下面方式来验证是否成功
	npm config get registry
	// 或
	npm info express
	3.通过cnpm使用
	sudo npm install -g cnpm --registry=https://registry.npm.taobao.org（安装时间挺长的）
	// 使用
	cnpm install express

 -->

<!-- docs.npmjs.com/ -->
<!-- http://www.expressjs.com.cn/ -->
<!-- https://mlab.com/ -->
cnpm --version
查淘宝镜像cnpm版本号什么的
<!-- ejs是一个js模板库，用来从json数据中生成HTML字符串 -->
cnpm install ejs --save
<!--  todoapp 中用到了这些 -->
cnmp install express body-parser ejs --save


<!-- ejs大致过程
		js页面把response 的东西先渲染到ejs文件里，然后ejs文件实现想要的功能后会由ejs引擎把ejs文件解析成HTML浏览器可以识别的html文件然后显示在页面中

 -->
_____________________________________________________________________
<!-- 不是这章的 -->
webpack 
webpack 是一个现代 JavaScript 应用程序的模块打包器(module bundler)。当 webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成少量的 bundle - 通常只有一个，由浏览器加载。

1.安装cli
 npm init --yes
cnpm install webpack --save-dev





