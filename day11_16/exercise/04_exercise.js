//练习：计算当前距离2018年圣诞节还有多少天多少小时多少分多少秒？ 
//原理：计算两个Date对象的时间差----相差的毫秒？
//var target=new Date('2018/12/25');
//var now=new Date();
//var d=target.getTime()-now.getTime();
//两个Date对象相减，返回的是两个对象相差毫秒数
//var d=target-now;
//把相差的时间转成秒
 //d=Math.floor(d/1000);
 //距离圣诞节还有多少天
 //var day=Math.floor(d/(24*60*60));
 //获取天数后相差的小时
 //相差的秒数和一天的秒数取余，得到的结果是不满一天的秒数
 //var hours=d%(24*60*60);
 //hours=Math.floor(hours/(60*60));
 //相差的分钟
 //相差的秒数和一小时的秒数取余，得到的结果是不满一小时的秒数，把他转换成分钟
 //var minutes=d%(60*60);
 //minutes=Math.floor(minutes/60);
 //相差的秒数
 //相差的秒数和一分钟的秒数取余，得到的结果是不满一分钟的秒数，把他转换成秒数
 //var seconds=d%60;
 /*console.log(seconds);
 console.log(minutes);
 console.log(hours);
console.log(day);*/
//console.log('距离2018年圣诞节还有 '+day+'天 '+hours+'小时 '+minutes+'分 '+seconds+'秒 ');


//练习：创建一个对象，保存一个员工的入职时间'2018-11-16',三年后到期，计算到期时间,合同到期前1个月续签合同，假如续签时间是周末，提前到周五。提前一周通知人事准备续签(提醒时间)。
var workTime=new Date('2018/11/16');
//复制入职时间的对象作为到期时间
var target=new Date(workTime);
//到期时间,年份在当前的基础之上加3
target.setFullYear(target.getFullYear()+3);
//复制到期时间
var reworkTime=new Date(target);
//在当前的月份基础上减1
reworkTime.setMonth(reworkTime.getMonth()-1);
//判断是否为周末 6 0，周六提前一天，周日提前两天
var day=time.getDay();
	if(day===6){
		reworkTime.setDate(reworkTime.getDate()-1);
	}else if(day===0){
		reworkTime.setDate(reworkTime.getDate()-2);
	}
//提醒时间:复制续签时间
var remind=new Date(reworkTime);
//设置当前的日期在原来的基础上减7
remind.setDate(remind.getDate()-7);
console.log('入职时间：'+workTime.toLocaleDateString());
console.log('到期时间：'+target.toLocaleDateString());
console.log('续签时间：'+reworkTime.toLocaleDateString());
console.log('提醒时间：'+remind.toLocaleDateString());



