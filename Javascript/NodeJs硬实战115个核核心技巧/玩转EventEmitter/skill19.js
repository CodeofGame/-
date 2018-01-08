//Node时间模块中只包含一个类EventEmitter，这个类在Node内置模块和第三方模块中被大量的使用
//许多node框架都用到了这个模块

//如果想为自己的类注册事件，就必须先继承EventEmitter类

//创建自定义事件驱动类

//1、从EventEmitter继承
//var events=require("events");
//function MusicPlayer(){
//	//调用父类的构造函数
//	events.EventEmiter.call(this);
//}
//
//
//MusicPlayer.prototype=Object.create(events.EventEmitter.prototype);

//2、从EventEmitter继承
var events=require("events");

var AudioDevice={
	play:function(type){
		console.log(`${type}开始播放音乐！`);
	},
	stop:function(type){
		console.log(`${type}音乐停止！`);
	}
}

function MusicPlayer(){
	this.playing=false;
	events.EventEmitter.call(this);
}

//继承
MusicPlayer.prototype=Object.create(events.EventEmitter.prototype);

var musicPlayer=new MusicPlayer();

//注册事件
musicPlayer.on("play",function(trunk){
	this.playing=true;
	AudioDevice.play(trunk);
})

//只对事件反应一次
musicPlayer.once("play",function(){
	this.StartTime=new Date();
})

//注册事件
musicPlayer.on("stop",function(){
	this.playing=false;
	AudioDevice.stop(trunk);
})

//添加多个监听器，出发时，多个监听器的回调函数都将执行
musicPlayer.on("play",function(){
	console.log("添加多个监听器！");
})

musicPlayer.removeAllListeners();

//触发事件，如果事件有监听器则返回true，否则返回false
console.log(musicPlayer.emit("play","夜的第七章"));

//移除事件监听

var testFunction=function(){
	console.log("移除监听器");
}
musicPlayer.on("test",testFunction);

//一个监听器的引用是不可或缺的
//musicPlayer.removeListener("test",testFunction);

musicPlayer.emit("test");


console.log(musicPlayer.StartTime);