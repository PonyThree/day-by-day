//function
/*console.log('hello');
console.log('css');


console.log('hello');
console.log('css');


console.log('hello');
console.log('css');*/
//使用自定义函数，把这些要在多个地方使用的代码封装到一个函数
/*function say(){
	//函数体,反复执行的代码
	console.log('hello');
	console.log('world');
}
//函数只是创建未调用，函数体中的代码是无法执行的。
say();
say();*/
//练习：使用函数来封装10+20的结果，并打印出来，调用3次。
/*function sum(a,b){
	console.log(a+b);
}
sum(10,20);
sum(10,20);
sum(10,20);*/
//练习：使用函数封装计算1~100所有数字的和，打印结果，调用3次。
function getsum(){
//计算1~100的和
for(var i=1,sum=0;i<=100;i++){
sum+=i;
}
console.log(sum);
}
getsum();
getsum();
getsum();