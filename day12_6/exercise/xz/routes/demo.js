//用户路由器
//引入mysql连接池对象
const pool=require('../pool.js');
const express=require('express');
//创建空路由器对象
var router=express.Router();
	//添加路由
	router.get('/ajaxDemo',(req,res)=>{
		res.send('测试案例ajax');
	});
	//2.用户get登录路由
	//url:/login method:post
	//创建路由，获取请求的数据，验证数据是否为空
	//401 'uname required'
	//402 'epwd required'
	router.get('/login',(req,res)=>{
		 //console.log(obj);
		 //验证数据是否为空
		 var $uname=req.query.uname;
		 var $upwd=req.query.upwd;
		 //console.log($uname);
		 if(!$uname){
		  res.send('用户名为空');
		  return;
		 }
		 if(!$upwd){
		  res.send('密码为空');
		  return;
		 }
		 //res.send('用户名为:'+$uname+"  密码为:"+$upwd);
		 //执行sql语句查看是否登录成功(使用用户名和密码两个条件能查询到数据)
		 /*pool.query('SELECT * FROM xz_user WHERE uname=? AND upwd=? ',[$uname,$upwd],(err,result)=>{
			if (err) throw err;
			//返回的是一个数组
			//判断查询的结果(数组)长度是否大于0
			//如果大于0.说明查询到数据，有这个用户登录成功
			console.log(result);
			if(result.length>0){
				res.send({code:200,msg:'login seccess'});
			}else{
				res.send({code:301,msg:'login err'});
			}
		 });*/
		 var sql='select * from xz_user where uname=? and upwd=?';
		 pool.query(sql,[$uname,$upwd],(err,result)=>{
			if(result.length>0){
				res.send('登陆成功');
			}else{
				res.send('用户名密码错误');
			}
		 });
	});
	//3.用户post登录路由
	//url:/login method:post
	//创建路由，获取请求的数据，验证数据是否为空
	//401 'uname required'
	//402 'epwd required'
	router.post('/postlogin',(req,res)=>{ 
		 //获取用户名和密码
		 //验证数据是否为空
		 var $uname=req.body.uname;
		 var $upwd=req.body.upwd;
		 if(!$uname){
		  res.send('用户名不存在');
		  return;
		 }
		 if(!$upwd){
		  res.send('密码不存在');
		  return;
		 }
		 //res.send('用户名为:'+$uname+"  密码为:"+$upwd);
		 //执行sql语句查看是否登录成功(使用用户名和密码两个条件能查询到数据)
		 /*pool.query('SELECT * FROM xz_user WHERE uname=? AND upwd=? ',[$uname,$upwd],(err,result)=>{
			if (err) throw err;
			//返回的是一个数组
			//判断查询的结果(数组)长度是否大于0
			//如果大于0.说明查询到数据，有这个用户登录成功 
			if(result.length>0){
				res.send({code:200,msg:'login seccess'});
			}else{
				res.send({code:301,msg:'login err'});
			}
		 });*/
		 var sql='select * from xz_user where uname=? and upwd=?';
		 pool.query(sql,[$uname,$upwd],(err,result)=>{
			if(result.length>0){
				res.send('登陆成功');
			}else{
				res.send('用户名密码错误');
			}
		 });
	});

	//3.查询用户列表路由
	router.get('/userlist',(req,res)=>{
		var sql='select * from xz_user';
		pool.query(sql,(err,result)=>{
			if(err) throw err;
			//响应的是一个JSON数组对象
			res.send(result);
		});
	})
	//4.模拟注册需求 
	router.get('/checkUname',(req,res)=>{
		var $uname=req.query.uname;
		//console.log($uname);
		var sql='select * from xz_user where uname=? ';
		pool.query(sql,[$uname],(err,result)=>{
			if(result.length>0){
				res.send('用户名已被占用');
			}else{
				res.send('用户名可用');
				}
		});
	});
	
//导出路由器 
module.exports=router;