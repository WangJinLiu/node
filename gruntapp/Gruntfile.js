//只要一运行grunt就会执行这个方法，还会传过来一个对象
module.exports = function(grunt){
	grunt.initConfig({
		pkg:grunt.file.readJSON("package.json"),
		/*cnpm install grunt-contrib-cssmin --save*/
		/*files cssmain不能改 ， combine可以改*/
		cssmin:{
			combine:{
				files:{
					"app/css/style.css":["app/css/background.css","app/css/fontsize.css"]/*最前面得是合并完之后的css路径*/

				}
					
				
			}
		},
		uglify:{
			dist:{
				files:{
					"app/js/main.min.js":["app/js/main.js"]
				}
			}
		}


	});
	//cssmin方法：压缩合并css文件
	// 加载包含 "cssmin" 任务的插件
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	// 加载包含 "uglify" 任务的插件
	grunt.loadNpmTasks('grunt-contrib-uglify');
	// 默认被执行的任务列表。
	grunt.registerTask("default",["cssmin","uglify"]);

	//grunt-contrib-cssmin压缩合并多个css


	//默认被执行的任务列表。
	// grunt.registerTask("default",'',function(){
	// 	//不能用console
	// 	grunt.log.write("在终端运行grunt命令就会执行这句话");
	// });
	//压缩js


}