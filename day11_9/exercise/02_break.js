//产生一个不断加1的无限循环  1~...
/*var i=1;
while(true){
	//当i为11的时候，结束循环
	if(i==11){
		//结束循环
		//可以结束任何形式的循环
		break;
	}
	console.log(i);
	i++;
}*/
//使用无限循环形式来计算1~10所有的数字相乘的结果。 
var i=1;
var total=1;
while(true){
	if(i==11){
		break;
	}
	total*=i;
	i++;
}
console.log(total);

