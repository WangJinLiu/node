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
sudo npm install -g  nodemon 下载一个全局的nodemon Mac系统要加sudo（nodemon一个工具用来自动重启项目工程）
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