  
/*练习：创建web服务器，托管一个静态资源到public下，在该目录下创建一个add.html,点击提交按钮，向服务器发送请求(/add,post)*/
const express=require('express');
//使用中间件
const bodyParser=require('body-parser');
//引入数据库模块
//连接mysql
const mysql=require('mysql');
var pool=mysql.createPool({
host:'127.0.0.1',
port:3306,
user:'root',
password:'',
database:'tedu',
connectionLimit:20
});
//创建web服务器
var server =express();
server.listen(3000);
//托管静态资源到public下
server.use(express.static('public'));
server.use(bodyParser.urlencoded({
	extended:false
}));
//路由---往部门表中插入部门信息
server.post('/add',(req,res)=>{
	//获取post请求的数据
	//console.log(req.body);
	//获取到的数据是对象，将数据插入到数据库中
	//执行SQL语句，把数据插入到数据库中
	pool.query('INSERT INTO dept SET ?',[req.body],(err,result)=>{
		if(err) throw err;
		//console.log(result);
		//判断是否插入成功
			if(result.affectedRows>0){
				res.send({code:200,msg:'add success'});
			}
		});
});
//路由---往员工表中插入信息
server.post('/emp',(req,res)=>{
	//console.log(req.body);
	/*pool.query('INSERT INTO emp VALUES (?,?,?,?,?,?)',[null,req.body.ename,req.body.sex,req.body.birthday,req.body.salary,req.body.deptId],(err,result)=>{
		if(err) throw err;
		if(result.affectedRows>0){
			res.send({code:200,msg:'add emp success'});
		}
	});*/
	pool.query('INSERT INTO emp SET ?',[req.body],(err,result)=>{
		if(err) throw err;
		if(result.affectedRows>0){
			res.send({code:200,msg:'add emp success'});
		}
	});
});


