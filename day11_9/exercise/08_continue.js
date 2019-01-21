//continue
//打印0 1 2 4 5 6
//0~6
/*for(var i=0;i<7;i++){
	//当i为3的时候跳过
	if(i===3){
		//跳过循环体剩余的内容，直接执行i的变化
		continue;
	}
	console.log(i);
}*/
/*for(var i=1,sum=0;i<=100;i++){
	//如果遇到奇数跳过
	if(i%2!=0){
		continue;
	}
	sum+=i;
}
console.log(sum);*/
//练习：打印1,2,5,7,10,11,13,14,17...98
//打印1~100之间，去掉所有能被3或者4整除的数
/*for(var i=1;i<=100;i++){
	if(i%3==0||i%4==0){
		continue;
	}
	console.log(i);
}*/
//练习：计算新中国成立后一共有多少个闰年。
/*for(var i=1949,count=0;i<=2018;i++){
	//如果是闰年，sum加1
	if(i%4==0&&i%100!=0||i%400==0){
		count++;
	}	
}
console.log(count);*/
//打印本世纪的前10个闰年
/*for(var i=2000,count=0;i<=2100;i++){
	if(i%4==0&&i%100!=0||i%400==0){
		//满足闰年,count加1
		count++;
		console.log(i);
	}
	//如果加1后，已经是10个闰年，就结束
		if(count==10){
			break;
		}
}*/
//练习：计算1~100之间的和，当和大于4000的时候，结束循环，打印总和以及当前的i的值
/*for(var i=1,sum=0;i<=100;i++){
	sum+=i;
	//判断sum的值是否大于4000
	if(sum>4000){
		break;
	}
}
console.log(sum,i);*/


	