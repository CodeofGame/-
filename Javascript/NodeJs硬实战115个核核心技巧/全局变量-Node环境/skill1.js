/* 摘要
 Node的全局对象与方法
 Node提供的内置方法，不用加载其他模块
 */
/*process对象
 	可以用来与操作系统通信,标准输入输出流
*/

/*Buffer类，用于操作二进制的数据*/


/*module对象，每个module对象仅存在于当前模块中，*/

/*技巧1 安装与加载模块
 	通过npm安装模块，通过require()引入模块。
 	1)通过npm search 关键字 通过关键字查找模块
 	2)npm install 安装模块   npm install 模块 -g 全局安装
 	可以使用 npm config ls 查看配置项，其中prefix就是全局安装的目录
 	3)通过require() 引入模块
*/

/*
 		是否将模块安装成全局模块对  【开发可维护项目】 至关重要，如果希望与别的开发人员一同开发就应该
 	将模块的依赖加入，package.json中，别的开发可以使用npm install命令安装package.json中的所有模块
 * */

//使用require引入模块
var Express=require("express");

var app=new Express();


app.use(function(req,res,next){
	res.send("hello world!");
});

app.listen(3000,()=>{
	console.log("server is running...");
})







