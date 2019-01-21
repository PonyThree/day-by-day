//递归求和 创建函数使用递归计算1~任意数字之间的和
/*function getSum(n){
	//递归跳出的条件
	if(n==1){
		return 1;
	}
	return n+getSum(n-1);
}
var res=getSum(100);
console.log(res);*/
//练习：创建一个函数getJc,传递1个参数，返回1~任意数字之间的乘积
function getJc(n){
	if(n==1){
		return 1;
	}
	return n*getJc(n-1);
}
var res=getJc(5);
console.log(res);