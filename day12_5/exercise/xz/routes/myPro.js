//用户路由器
//引入mysql连接池对象
const pool=require('../pool.js');
const express=require('express');
//创建空路由器对象
var router=express.Router();
//添加路由
//1.用户登录路由
	router.post('/login',(req,res)=>{
		var $uname=req.body.uname;
		var $upwd=req.body.upwd;
		if(!$uname){
			res.send({code:401,msg:'用户名不存在'});
			return;
			}
		if(!$upwd){
			res.send({code:402,msg:'密码不存在'});
			return;
		}
		var sql='select * from xz_user where uname=? and upwd=?';
		pool.query(sql,[$uname,$upwd],(err,result)=>{
			if(err) throw err;
			if(result.length>0){
				res.send('登陆成功');
			}else{
				res.send('用户名密码错误');
			}
		})
	})
//2.查询用户列表路由	
	router.get('/getlist',(req,res)=>{
		var sql='select * from xz_user';
		pool.query(sql,(err,result)=>{
			if(err) throw err;
			if(result.length>0){
				res.send(result);
			}else{
				res.send('没有任何用户可查询');
			}
		});
	});
//3.用户注册post路由
	router.post('/register',(req,res)=>{
		var obj=req.body;
		var code=400;
		for(var key in obj){
			code++;
			if(!obj[key]){
				res.send({'code':code,msg:key+'required!'});
			}
		}
		var sql='insert into xz_user set ?';
		pool.query(sql,[obj],(err,result)=>{
			if(err) throw err;
			if(result.affectedRows>0){
				res.send('注册成功!');
			}
		});
	});
//4.用户删除路由
	router.get('/delete',(req,res)=>{
		var $uid=req.query.uid;
		//console.log($uid);
		if(!$uid){
			res.send({code:401,msg:$uid+'required'});
		}
		var sql='delete from xz_user where uid=?';
		pool.query(sql,[$uid],(err,result)=>{
			if(err) throw err;
			if(result.affectedRows>0){
				res.send('删除成功');
			}else{
				res.send('要删除的uid不存在');
			}
		
		});
	})
//导出路由器 
module.exports=router;