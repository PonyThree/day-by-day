const express=require('express');
var server=express();
server.listen(3000);
//创建路由：  
//请求方法：get ,请求URL:/detail  
server.get('/detail',(req,res)=>{
	//获取请求的方法
	console.log(req.method);
	//获取请求的url
	console.log(req.url);
	//获取请求的头信息
	console.log(req.headers);
	//获取浏览器以查询字符串传递的数据
	console.log(req.query);//最后得到的结果是一个对象
	res.send('这是商品详情');
});
//请求方法 get ,请求url：/login  ,响应文件login.html
server.get('/login',(req,res)=>{
res.sendFile(__dirname+'/login.html');
});
//请求方法:get ，请求url：'/mylogin'
server.get('/mylogin',(req,res)=>{
	//获取表单中get传递的数据
	//console.log(req.query);
	var obj=req.query;
	res.send('注册成功,用户名为:'+obj.uname);
	//res.send('注册成功');
})