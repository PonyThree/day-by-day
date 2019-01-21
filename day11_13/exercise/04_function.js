/*function fn(num){
	//num1=1;
	//num1=function(){}
	//如果实参传递的是一个匿名函数，那么形参就成为了一个函数。
	var res=num();
	console.log(res);

}
//fn(1);
fn(function(){
	console.log('hello');
	console.log('world');
	return 1;
});*/


//练习：创建函数add，传递2个参数，2个参数都是以匿名函数的形式传递，在匿名函数中分别返回1个数字。  
//最后在add中计算两个数字相加。
function add(fn1,fn2){
	return fn1()+fn2();	
}
var res=add(   function (){return 1;},   function (){return 2;}  );
console.log(res);

