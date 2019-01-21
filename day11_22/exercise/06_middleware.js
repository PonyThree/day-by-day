//中间件是express下的一个功能
const express=require('express');
var server=express();
server.listen(3000);
//创建中间件
//拦截浏览器的请求，也可以作出响应。
//拦截所有路由中的请求
server.use((req,res,next)=>{
	console.log('验证了是否为空');
	//res.send('验证失败');
	//如果验证通过，执行下一个中间件  
	next();
});


//创建一个注册路由
server.get('/reg',(req,res,next)=>{
	res.send('注册成功');
	//执行下一个中间件
	next();
});
//创建登录路由 请求方法get url：/login
server.get('/login',(req,res,next)=>{
	res.send('登录成功');
	next();
});
  


//再次创建一个中间件
//将数据存储到数据库中
server.use((req,res,next)=>{
	console.log('将数据存储到了数据库中');
});
