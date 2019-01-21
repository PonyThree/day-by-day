//http学习
//引入http模块
const http=require('http');
//模拟浏览器向服务器发请求
//请求的方法和请求的URL
/*http.get('http://www.codeboy.com',(res)=>{
	//服务器端相应的对象
	//console.log(res.statusCode);//响应的状态码
	//获取服务器端的数据
	//事件：当有数据传输的时候会执行这个事件
	//通过回调函数来获取响应的数据
	res.on('data',(buf)=>{
		console.log(buf.toString());
	});
});*/
/*http.get('http://www.weather.com.cn/data/sk/101010100.html',(res)=>{
	//res相应的对象
	console.log(res.statusCode);//响应的状态码
	res.on('data',(buf)=>{
		var str=buf.toString();
		//console.log(str);
		//JSON 对象
		var obj=JSON.parse(str);
		console.log(obj);
	})
});*/

