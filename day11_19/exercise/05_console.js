//console对象
//global.console.log(123); //打印消息
//console.log(123);
//global.console.info(123);  //打印消息
//global.console.warn(123);//打印警告消息
//global.console.error(123);//打印错误消息 

//开始计时
/*global.console.time('for-loop');
//要检测的程序
for(var i=0;i<10000;i++){}
//计时结束
global.console.timeEnd('for-loop');  */
//练习：使用计时查看for、while、do-while循环10000的耗时。
//for
global.console.time('useTime');
for(var i=0;i<100000;i++){
}
global.console.timeEnd('useTime');
//while
global.console.time('useTime');
var i=0;
while(i<100000){
	i++;
}
global.console.timeEnd('useTime');
//do-while
global.console.time('useTime');
var i=0;
do{
	i++;
}
while(i<100000);
global.console.timeEnd('useTime');
