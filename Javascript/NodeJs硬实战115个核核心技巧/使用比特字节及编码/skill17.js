//使用buffer转换原始数据
//将buffer数据转为json

const fs=require("fs");

var data=fs.readFileSync("./test.txt");
console.log(data.length);
