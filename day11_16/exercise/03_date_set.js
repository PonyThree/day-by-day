
//本地时间字符串形式
/*var now=new Date();
console.log(now);
console.log(now.toLocaleString());
console.log(now.toLocaleDateString());
console.log(now.toLocaleTimeString());*/
//设置Date中的信息
var d1=new Date('2018-11-15 12:30:00');
d1.setFullYear(2021);
d1.setMonth(5);//0~11
d1.setDate(18);
//设置距离计算机元年的毫秒数，其他的日期时间都会发生变化
d1.setTime(1000);
//不能设置星期
console.log(d1.toLocaleString()); 