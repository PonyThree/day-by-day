
const express=require('express');
const bodyParser=require('body-parser');
const mysql=require('mysql');
//创建web服务器   
var server =express();
server.listen(3000);  
//托管静态资源到public下  
server.use(express.static('public'));  
//使用body-parser中间件将post数据解析为对象
server.use(bodyParser.urlencoded({
	extended:false
}));
//连接mysql---创建连接池
var pool=mysql.createPool({
	host:'127.0.0.1',
	port:3306,
	user:'root',
	password:'',
	database:'tedu',
	connectionLimit:20
});
//路由，接收浏览器的请求
//method:post url:/add
	server.post('/add',(req,res)=>{
		var obj=req.body;
		//将数据插入到表中
		pool.query('INSERT INTO emp SET ?' ,[obj],(err,result)=>{
			if(err) throw err;
			if(!obj.ename){ return;}
			if(!obj.sex){ return;}
			if(!obj.birthday){ return;}
			if(!obj.salary){ return;}
			if(!obj.deptId){ return;}
			if(result.affectedRows>0){
				res.send({code:200,msg:'seccess'});
			}
		});
	});

