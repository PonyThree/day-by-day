//创建一个web服务器
//新建路由  请求的方法get 请求的url：/detail
//在路由前,添加中间件，打印查"询了是否存在"
const express=require('express');
var server=express();
server.listen(3000);
/*server.use('/detail',(req,res,next)=>{
	console.log('查询了是否存在');
	next();
});
server.get('/detail',(req,res)=>{
	res.send('这是商品的详情');
});*/


/*练习：创建一个路由，请求方法get ,url:/view，响应当前的浏览次数，每次请求，响应的次数要加1。  
初始化一个全局变量,设置值为0，在中间件中实现变量的加1，在路由中响应变量。*/
var num=0;
server.use('/view',(req,res,next)=>{
	num++;
	next();
});
server.get('/view',(req,res)=>{
	res.send(num.toString());
});
