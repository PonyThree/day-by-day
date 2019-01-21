//路由传参--传递数据  
const express=require('express');
//创建web服务器
var server=express();
//创建监听端口
server.listen(3002);
//创建路由
//请求方式:get  url：/detail
//---路由传递参数
//  /detail/5
server.get('/detail/:lid/:pname',(req,res)=>{
	//获取浏览器传递的数据
	//此时获取到的数据是一个对象
	console.log(req.params);
	//如果在访问/detail就会出错，它要求必须传递两个参数，才能继续访问
	res.send('这是商品详情');
});
/*练习：创建购物车的路由，请求的url：/shopping，请求的方法get，传递商品的价格(price)和名称(pname)。*/
server.get('/shopping/:price/:pname',(req,res)=>{
	var obj=req.params;
	res.send('商品的价格为:'+obj.price+'商品的名称为:'+obj.pname);
});