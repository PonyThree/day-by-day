//用户路由器
//引入mysql连接池对象
const pool=require('../pool.js');
const express=require('express');
//创建空路由器对象
var router=express.Router();
//添加路由
//1.用户注册
router.post('/register',(req,res)=>{
	//获取post请求的数据
	var obj=req.body;
	//判断用户名是否为空
	var $uname=obj.uname;
	var $upwd=obj.upwd;
	var $email=obj.email;
	var $phone=obj.phone;
	if(!$uname){
		res.send({code:401,msg:'uname required'});
		//阻止继续往后执行
		return;
	}
	//练习：验证密码、邮箱、手机是否为空
	if(!$upwd){
		res.send({code:402,msg:'upwd required'});
		//阻止继续往后执行
		return;
	}
	
	if(!$email){
		res.send({code:403,msg:'email required'});
		//阻止继续往后执行
		return;
	}
	if(!$phone){
		res.send({code:404,msg:'phone required'});
		//阻止继续往后执行
		return;
	}
	//执行sql语句，将注册的数据插入到xz_user数据表中，成功响应{code:200,msg:'register success'}
	pool.query('INSERT INTO xz_user SET ?',[obj],(err,result)=>{
		if(err) throw err;
		if(result.affectedRows>0){
			res.send({code:200,msg:'register success'});
		}
	});
	//res.send('注册成功');
})
//导出路由器
module.exports=router;