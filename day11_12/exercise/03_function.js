//计算任意两个数字相加的和
/*function add(num1,num2){
	//计算两个数字相加
	console.log(num1+num2);
}
//调用的时候，会把实参的值赋给形参
add(3,7);
add(8,15);
add(10,20);*/
//练习：创建函数getSum，传递1个参数，计算1~任意数字之间的和
/*function getSum(num){
	if(num<=0){
		for(var i=num,sum=0;i<=1;i++){
		sum+=i;
		}
	}else{
		for(var i=1,sum=0;i<=num;i++){
			sum+=i;
		}
	}
	console.log(sum);
}
getSum(-5);
getSum(99);
getSum(0);
getSum(-99);
getSum(-100);*/
//练习：创建函数getRun,传递2个参数，打印任意两个年份之间的所有闰年个数。
	/*function getRun(year1,year2){
		if(year1<=year2){
			for(var i=year1,count=0;i<=year2;i++){
				//判断是否为闰年
				if(i%4==0&&i%100!=0||i%400==0){
					count++;
					//console.log(i);
				}
				}
		}
		else{
			for(var i=year2,count=0;i<=year1;i++){
				//判断是否为闰年
				if(i%4==0&&i%100!=0||i%400==0){
					count++;
					//console.log(i);
				}
				}
		}
		console.log(count);
	}
	getRun(1996,2018);
	getRun(3000,2018);
	getRun(1,200);*/
/*function add(num1,num2){
	//出现一个形参，就相当于声明了一个变量
	//形参就是变量 
	console.log(num1,num2);
}
add(1,2);
add();
add(18,29,37);
*/
