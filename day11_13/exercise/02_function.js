
//此时只相当于var fn;fn是个变量，默认值为undefined
//fn(5);
//匿名函数：没有名称的函数
//把创建的函数的地址保存在变量fn中
/*var fn =function fn(n){
 console.log(n);
}
//fn成为了匿名函数名称
fn(6);*/
var fn=function(n){
	for(var i=1,sum=0;i<=n;i++){
		sum+=i;
	}
	return sum;
}
var res=fn(100);
console.log(res);