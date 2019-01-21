/*(2)练习：  
使用express来创建web服务器，创建以下路由  
get '/index' 发送文本'这是首页'  
get '/login'  发送文件'login.html'  
post '/register' 发送文本'注册成功'  
get '/' 跳转到/index  */
const express=require('express');
var server=express();
server.listen(3001,()=>{});
server.get('/index',(req,res)=>{
	res.send('这是首页');
});
server.get('/login',(req,res)=>{
	res.sendFile(__dirname+'/login.html');
});
server.post('/register',(req,res)=>{
	res.send('注册成功');
});
server.get('/',(req,res)=>{
	res.redirect('/index');
});