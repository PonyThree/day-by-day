//应付金额
/*var money1=27;
//卡内余额
var money2=25;
if(money2>=money1){
	console.log('支付成功');
}else{
	console.log('余额不足');
}*/
//练习：声明两个变量保存个人签名，如果签名中有内容打印签名的内容，否则打印"这家伙很懒"。
var str="";
/*if(str===""){
	console.log("这家伙很懒");
}else{
	console.log(str);
}*/
//当str为空的时候，要执行后边紧挨着的
//!''---->!false
/*if(!str){
	console.log("这家伙很懒");
}else{
	console.log(str);
}*/
//使用三目运算符完成以上案例  
console.log(str==''?'这家伙很懒':str);
