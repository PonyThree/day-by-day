/*练习：创建web服务器，监听3001端口，使用事件监听浏览器的请求，打印请求的方法、URL；
http://127.0.0.1:3001/admin/login.html  
http://localhost:3001/member/shopping.html  
05_server.js*/
const http=require('http');
//创建web服务器
var server=http.createServer();
//监听3001端口
server.listen(3001);
//接收浏览器的请求
server.on('request',(req,res)=>{
	console.log(req.url);
	console.log(req.method);
})