//创建函数，传递1个参数，使用递归计算斐波那契数列的第n项是多少？
// 1 1 2 3 5 8 13 21 34 55 89 143
function fib(n){
	//跳出条件:n为1或者n为2的时候，返回1
	if(n==1||n==2){
		return 1;
	}
	return fib(n-1)+fib(n-2);
}
var res=fib(20);
console.log(res);

/*
fib(4)+fib(3)
fib(3)+fib(2)+fib(2)+fib(1)
fib(2)+fib(1)+fib(2)+fib(2)+fib(1)
*/