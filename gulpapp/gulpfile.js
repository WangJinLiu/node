const gulp = require("gulp");//const常量
const gulpCopy = require("gulp-copy");//有他才能拷贝文件
const minImage = require("gulp-imagemin");
const js = require("gulp-uglify") ;
const sass = require("gulp-sass");
const webserver = require("gulp-webserver");
//gulpfile.js 一定要写这个名字
/*
	常用方法
	guip.task---定义任务
	guip.src ---输入文件路径
	guip.dest ---输出文件路径
	guip.watch ---监听文件变化

	--node 方法
	pipe  ----管道

	*/
//定义默认任务
// gulp.task("default",() =>{
// 	// 将你的默认的任务代码放在这
// 	console.log("default是必须要这么写才是默认任务");

// })
//定义具体任务
gulp.task("message",() =>{
	console.log("执行具体任务需要在终端运行 gulp message（任务名）");
});
//定义拷贝任务
gulp.task("copyHtml", () =>{
	//找到需要拷贝文件的路径
	//dest目标（destination）
	gulp.src('src/*.html').pipe(gulp.dest("dist"));//拷贝src里的所有html文件
	//把src里的html文件拷贝到dist文件夹里（然后dist);

})
//定义压缩图片任务（先找到）
gulp.task("imageMin",() =>{
	//找到需要压缩图片路径,然后通过管道压缩，然后通过管道放另一个地方去
	gulp.src("src/images/*").pipe(minImage()).pipe(gulp.dest("dist/images"));

})
//定义压缩js代码任务
gulp.task("jsMin",() =>{
	//1.下载模块(gulp-uglify)
	//2.引入模块(在上面)
	//3.定义任务
	//4.在src下创建一个js文件夹，并且创建一个js文件，随便写一个函数，实现任务
	gulp.src("src/js/*.js").pipe(js()).pipe(gulp.dest("dist/js"));
})
/*
	压缩JS，CSS文件需要引用如下组件：
	gulp-minify-css: 压缩css
	gulp-jshint: 检查js
	gulp-uglify: 压缩js
	gulp-concat: 合并文件
	gulp-rename: 重命名文件
	gulp-clean: 清空文件夹

	gulp-notify:提示



*/
//下载sass模块
//定义sass转css任务
gulp.task("sass",() =>{
	gulp.src("src/sass/*.scss").pipe(sass()).pipe(gulp.dest("dist/css"));
})
//利用默认任务一块执行这些任务
gulp.task("default",["message","copyHtml","imageMin","sass","jsMin"]);
//监听任务(不需要下载)执行gult watch
//只要你的src里的文件变了list里相对应的文件内容就会自动变
gulp.task("watch1",() =>{
	gulp.watch("src/js/*.js",["jsMin"]);
	gulp.watch("src/images/*",["imageMin"]);
	gulp.watch("src/sass/*.scss",["sass"]);
	gulp.watch("src/*.html",["copyHtml"]);

});
//创建app文件夹目的（用gulp搭建服务器）
//webserver(cnpm install gulp-webserver --save-dev)
gulp.task("webserver",() =>{
	return gulp.src("app").pipe(webserver({
		port:4000,
		livereload:true,//热更新
		open:true//自动打开
	}));
});





