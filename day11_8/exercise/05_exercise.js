/*练习：使用弹出提示框分别输入商品的价格和数量，判断商品的总价是否满500，如果满500打八折；使用变量保存当前的余额为600，如果总价足够支付，则打印支付成功，否则打印余额不足。  05_exercise.html  
05_exercise.js */

//获取商品的单价和数量
var price=prompt("请输入商品价格："),
count=prompt("请输入商品数量");
//获取商品的总价
var total=price*count, restmoney=600;
//判断总价是否满500
if(total>=500){
	total*=0.8;
}
console.log(total);
/*if(restmoney>=total){
	console.log('支付成功');
}else{
	console.log('支付失败');
}*/
//三目写法
console.log(restmoney>=total?'支付成功':'支付失败');


