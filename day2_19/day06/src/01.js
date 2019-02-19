//01.js 执行一段时间 3
//通过套路 让程序执行3s
// 1:创建变量保存当前开始时间
var start=new Date().getTime();
// 2:创建do while 循环  结束-开始时间 <3000
do{
	// 3:在循环再创建当前结束时间
	var end=new Date().getTime();
}while(end-start<3000)
//console.log('发送结束');
// document.body.innerHTML='hello word!';
//2：Worker将消息发送给ui
postMessage('worker执行结束!'); 
//Worker接收UI发送的数据
onmessage=function(e){
	console.log('Worker接收'+e.data);
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        