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
			//是否添加成功
			if(result.affectedRows>0){
				res.send({code:200,msg:'register success'});
			}
		});
		//res.send('注册成功');
	});
	//2.用户登录路由
	//url:/login method:post
	//创建路由，获取请求的数据，验证数据是否为空
	//401 'uname required'
	//402 'epwd required'
	router.post('/login',(req,res)=>{
		 var obj=req.body;
		 //console.log(obj);
		 //验证数据是否为空
		 var $uname=obj.uname;
		 var $upwd=obj.upwd;
		 //console.log($uname);
		 if(!$uname){
		  res.send({code:401,msg:'uname required'});
		  return;
		 }
		 if(!$upwd){
		  res.send({code:402,msg:'upwd required'});
		  return;
		 }
		 //执行sql语句查看是否登录成功(使用用户名和密码两个条件能查询到数据)
		 pool.query('SELECT * FROM xz_user WHERE uname=? AND upwd=? ',[$uname,$upwd],(err,result)=>{
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
		 });
	});
	//3.用户检索
	router.get('/detail',(req,res)=>{
		//获取get请求的数据
		var obj=req.query;
		//console.log(obj);
		//判断是否为空
		//响应查询到的用户对象
		var $uid=obj.uid;
		if(!$uid){
			res.send({code:401,msg:'uid required'});
			return;
		}
		pool.query('SELECT * FROM xz_user WHERE uid=?',[$uid],(err,result)=>{
			if(err) throw err;
			//console.log(result);
			//返回的是一个数组
			//判断查询的结果(数组)长度是否大于0
			if(result.length>0){
				res.send({code:200,msg:'search seccess'});
			}else{
				res.send({code:301,msg:'detail err'})
			}
		});
	});
	//4.用户修改
	//获取数据，验证是否为空
	//执行SQL语句，修改用户表中对应的数据
	router.post('/update',(req,res)=>{
		var obj=req.body;
		var $uid=obj.uid;
		var $uname=obj.user_name;
		var $email=obj.email;
		var $phone=obj.phone;
		var $gender=obj.gender;
		//验证是否为空
		if(!$uid){
			res.send({code:401,msg:'uid required'});
			return;
		}
		if(!$uname){
			res.send({code:402,msg:'uname required'});
			return;
		}
		if(!$email){
			res.send({code:403,msg:'email required'});
			return;
		}
		if(!$phone){
			res.send({code:404,msg:'phone required'});
			return;
		}
		if(!$gender){
			res.send({code:405,msg:'gender required'});
			return;
		}
		//根据uid修改数据
		pool.query('UPDATE xz_user SET email=?,phone=?,gender=?,user_name=? WHERE uid=?',[$email,$phone,$gender,$uname,$uid],(err,result)=>{
			if(err) throw err;
			//判断是否更改成功
			if(result.affectedRows>0){
				res.send({code:200,msg:'update success'});
			}else{
				res.send({code:301,msg:'update err'});				
			}
		});

	});
	//5.用户列表
	router.get('/list',(req,res)=>{
		var obj=req.query;
		//将数据转为整型
		var $pno=parseInt(obj.pno);
		var $count=parseInt(obj.count);
		//如果页码和每页数量为空，设置默认值
		if(!$pno){
			//如果页码为空，默认为第一页
			 $pno=1;
		}
		if(!$count){
			//如果每页数量为空，默认设置为每页3条
			$count=3;
		}
		//计算开始查询的值
		var start=($pno-1)*$count;		
		//返回商品列表数据
		pool.query('SELECT * FROM xz_user LIMIT ?,?',[start,$count],(err,result)=>{
			if(err) throw err;
			res.send(result);
		});	
	});
	//6.用户删除
	router.get('/delete',(req,res)=>{
		var obj=req.query;
		var $uid=obj.uid;
		//验证编号是否为空
		if(!$uid){
			res.send({code:401,msg:'uid required'});
			return;
		}
		//执行sql语句，删除对应的数据
		pool.query('DELETE  FROM xz_user WHERE uid=?',[$uid],(err,result)=>{
			if(err) throw err;
			if(result.affectedRows>0){
				res.send({code:200,msg:'delete success'});
			}else{
				res.send({code:302,msg:'delete err'});
			}
		});
	})
//导出路由器 
module.exports=router;