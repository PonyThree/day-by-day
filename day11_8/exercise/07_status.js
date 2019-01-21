/*练习：声明变量保存订单的状态码  
1-等待付款 2-等待发货 3-运输中 4-已签收 5-已取消  
根据状态码打印对应的内容；不存在的状态码打印'非法的状态' */
/*var status=parseInt(prompt("请输入状态码:"));
if(status==1){
	console.log('等待付款');
}else if(status==2){
	console.log('等待发货中');
}else if(status==3){
	console.log('运输中');
}else if(status==4){
	console.log('已签收');
}else if(status==5){
	console.log('已取消');
}else{
	console.log('非法状态');
}*/

/*练习：根据成绩划分为：
优秀 90~  
良好  80~90以下  
中等 70~80以下  
及格 60~70以下  
不及格 60以下 */
/*var score=parseInt(prompt("请输入你的成绩："));
if(score>=90){
	console.log('优秀');
}else if(score>=80){//score<90
	console.log('良好');
}else if(score>=70){//score<80  
	console.log('中等');
}else if(score>=60){//score<70
	console.log('及格');
}else {//score<60
	console.log('不及格');
}*/
/*练习：银行根据银行卡内的存款分类；
10以下 普通用户
10~100以下  白银客户  
100~1000以下 黄金客户  
1000以上 钻石客户*/
var money=parseInt(prompt('请输入你账户余额'));
if(money>=1000){
	console.log('钻石客户');
}else if(money>=100){
	console.log('黄金客户');
}else if(money>=10){
	console.log('白银客户');
}else{
	console.log('普通用户');
}





