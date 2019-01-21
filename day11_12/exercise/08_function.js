//函数提升
/*add(3,4);
function add(a,b){
	console.log(a+b);
}
add(5,9);*/
//函数是一等公民
//先提升函数的声明
//在提升变量的声明
//如果函数的名称和var声明的变量的名称一致，则变量中的值会覆盖函数。
function fun(){//typeof:function
	console.log(1);
}
var fun=10;//typeof:number
console.log(typeof(fun));
console.log(fun);
