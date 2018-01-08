const fs=require("fs");

//使用buffer来修改字符串编码
//创建一个buff数据Buffer.from(stirng[,encoding]) 第一个参数是字符串，第二个参数是编码，默认为utf8
var name="tom";
var password="test12345";
var authstring=name+":"+password;

//使用base64编码字符串
var buf=Buffer.from(authstring,"base64");

//console.log(buf);

//再转换为用base64编码的字符串
//console.log(buf.toString("base64"));

//dataURIs

//data:[mime-type][;charset=<encoding>[;base64]],<data>

var data=fs.readFileSync("./3.jpg").toString("base64");

var uris=`data:image/jpg;base64,${data}`;

//console.log(uris);

var imageData=uris.split(",")[1];

var buf=Buffer.from(imageData,"base64");

fs.writeFile("./food.jpg",buf,(err)=>{
	console.log(err);
})









