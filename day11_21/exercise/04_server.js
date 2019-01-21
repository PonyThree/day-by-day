//服务器
//引入http模块
const http=require('http');
//1.创建web服务器
var server=http.createServer();
//使用3000端口
//2.监听3000端口的变化
server.listen(3000,()=>{
//console.log('服务器创建成功!');
});
//3.接收浏览器的请求
//当有请求进来事件
server.on('request',(req,res)=>{
	/*
	//3.1req请求的对象
	//console.log('有一个请求进来了');
	//请求的路径
	console.log(req.url);
	//请求的方法
	console.log(req.method);
	//请求的头信息
	console.log(req.headers);
	*/
	//3.2res响应的对象  
	//响应文本
	//res.write('welcome to my house~~~~');
	//res.write('welcome ponywei');
	//3.3响应的重定向
	res.writeHead(200,{
		Location:'http://www.codeboy.com'
	});
	//响应结束
	res.end();
});
