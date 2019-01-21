const http=require('http');
//创建web服务器
var server=http.createServer();
//监听端口3000
server.listen(3000);
//接收浏览器的请求
server.on('request',(req,res)=>{
	//根据请求的url不同，来做出不同的响应
	var url=req.url;
	switch(url){
	case '/login':
		res.write('this is login page  ');
		break;
	case '/member':
		res.write('this is member page ');
		break;
	case '/':
		res.writeHead(302,{
		Location:'http://127.0.0.1:3000/member'
		});
		break;
	default:
		res.write('404 not found');
	}
	/*if(url==='/login'){
		res.write('this is login page  ');
	}else if(url==='/member'){
		res.write('this is member page ');
	}else if(url==='/'){
		res.writeHead(302,{
		Location:'http://127.0.0.1:3000/member'
		});
	}else{
		res.write('404 not found');
	}*/
	res.end();
});
