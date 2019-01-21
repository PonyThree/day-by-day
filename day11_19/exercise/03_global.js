//global ---全局对象
var a=1;
function fn(){
	console.log(123);
}
//a和fn不是全局对象下的属性和方法
//在一个文件中声名的变量和函数都属于局部变量或者局部函数。
//console.log(global.a);
//global.fn();