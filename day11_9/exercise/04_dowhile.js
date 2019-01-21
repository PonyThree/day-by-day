//do-while
/*var i=1;
do{
	//循环体
	console.log(i);
	i++;
}while(i<=10);*///循环条件
//练习：打印50到1之间所有的偶数
/*var i=50
do{
	console.log(i);
	i--;
}while(i>=1);*/

//练习：打印100,95,90,85,80,75,70
/*var i=100;
do{
	console.log(i);
	i-=5;
}while(i>=70);*/
//练习：计算1~100之间所有整数的和
/*var i=1;
var sum=0;
 do{
	 sum+=i;
	 i++;
 }while(i<=100);
 console.log(sum);*/
//练习：计算1~100之间所有能够被7整除的数字之和
/*var i=1;
var sum=0;
do{
	if(i%7==0){
		sum+=i;
	}
	i++;
}while(i<=100);
console.log(sum);*/
//练习：计算1~10之间所有数字的乘积
/*var i=1;
var total=1;
do{
	total*=i;
	i++;
}while(i<=10)
console.log(total);*/

//练习：计算10~20之间所有能够被3整除的数字的乘积
/*var i=10;
var total=1;
do{
	if(i%3==0){
		total*=i;
	}
	i++;
}while(i<=20);
console.log(total);*/
//练习：打印1,2,5,7,10,11,13,14,17...98
//打印1~100之间，去掉所有能被3或者4整除的数
for(var i=1;i<=100;i++){
	if(i%3==0||i%4==0){
		continue;
	}
	console.log(i);
}

