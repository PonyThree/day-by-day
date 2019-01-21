//全局函数
//console.log(global.parseInt(3.14));
//1.一次性定时器
//开启
/*var timer=setTimeout(function(){
	console.log('炸弹响了----砰砰砰');
},3000);*/
//清除
//clearTimeout(timer);

//2.周期性定时器
/*var timer=setInterval(function(){
	console.log('滴滴滴');
},3000);
//清除
clearInterval(timer);*/

//练习：使用周期性定时器每隔三秒打印hello，打印三次后，清除定时器。
//初始化一个变量用于记录执行的次数
	/*var count=0;
	var timer=setInterval(function(){
		count++;
		console.log('hello');
		//当count为3时,清除定时器
		if(count===3){
		clearInterval(timer);
		}
	},1000);*/
//放到一组事件的最后才执行，所以先打印1，在执行立即执行定时器---打印'滴答滴答'
var timer=setImmediate(function(){
	console.log('嘟嘟嘟');
});
clearImmediate(timer);
//nextTick没有清除
process.nextTick(function(){
	console.log('滴答滴答');
});
console.log(1);


