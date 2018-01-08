//Api前导
//Buffer.isBuffer(obj) 判断一个数据是否为二进制数据
//使用fs加载文件，默认情况得到的data是buffer类型，buffer对象有toString()方法,把数据转换为指定编码的字符串

//buf.toString()
const fs=require("fs");

fs.readFile("./name.txt",function(err,data){
	console.log(Buffer.isBuffer(data));
	console.log(data.toString("ascii"));
	
})
