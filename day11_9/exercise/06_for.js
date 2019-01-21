//for循环
//练习：打印1~10之间所有的整数
/*for(var i=1;i<=10;i++){
	console.log(i);
}*/
//练习：计算1~100之间所有整数的和
/*for(var i=1,sum=0;i<=100;i++){
	//i表示所有的整数
	sum+=i;
}
console.log(sum);*/
//练习：打印20~50所有的奇数
/*for(var i=20;i<=50;i++){
	//判断奇数
	if(i%2!==0){
		console.log(i);
		}
}*/
//练习：打印80,77,74,...50
/*for(var i=80;i>=50;i-=3){
	console.log(i);
}*/
//练习：计算1~10之间所有整数的乘积
/*for(var i=1,total=1;i<=10;i++){
	total*=i;
}
console.log(total);*/
//练习：打印本世纪(2000~2100)所有的闰年
/*for(var i=2000,j=0;i<=2100;i++){
	if(i%4==0&&i%100!=0||i%400==0){
		j++;
		console.log(i);
	}
}
console.log(j);*/
//练习：使用for循环打印5个*成一行
//初始化一个变量为空字符
/*var str='';
for(var i=0;i<5;i++){
	//每次循环，把一个*加到str中
	str+='*';
}
console.log(str);*/
//练习：打印九九乘法表第5行
for(var i=1,str='';i<=5;i++){
	str+=i+'*5='+(i*5)+' ';
}
console.log(str);

