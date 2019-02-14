// 1:引入express模块
// 2:创建express对象
// 3：指定静态目录
// 4:为express服务器绑定监听端口3000
// 5:接收请求 /sales 返回销售统计信息
const express=require('express');
var app=express();
app.use(express.static('public'));
app.listen(3000);
app.get('/sales',(req,res)=>{
	var rows=[
		{id:1,name:'东口',value:100},
		{id:2,name:'南口',value:200},
		{id:3,name:'地铁口',value:300}
	];
	res.send(rows);
})