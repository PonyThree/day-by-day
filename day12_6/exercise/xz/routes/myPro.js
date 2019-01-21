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
		var $uname=obj.uname;
		var $upwd=obj.upwd;
		var $email=obj.email;
		var $phone=obj.phone;
		var $user_name=obj.user_name;
		var $gender=obj.gender;
		console.log(obj);
		var code=400;
		if(!$uname){
			code++;
			res.send({code:code,msg:'uname required'});
			return;
		}
		if(!$upwd){
			code++;
			res.send({code:code,msg:'upwd required'});
			return;
		}
		if(!$email){
			code++;
			res.send({code:code,msg:'email required'});
			return;
		}
		if(!$phone){
			code++;
			res.send({code:code,msg:'phone required'});
			return;
		}
		if(!$gender){
			code++;
			res.send({code:code,msg:'gender required'});
			return;
		}
		
		
		var sql='insert into xz_user values(null,?,?,?,?,null,?,?)';
		pool.query(sql,[$uname,$upwd,$email,$phone,$user_name,$gender],(err,result)=>{
			if(err) throw err;
			if(result.affectedRows>0){
				res.send("1");
			}else{
				res.send("0");
			}
		});
	});
//4.用户删除路由
	router.get('/deleteUser',(req,res)=>{
		var $uid=req.query.uid;
		//console.log($uid);
		//验证是否为空
		if(!$uid){
			res.send({code:401,msg:'uid required'});
		}
		var sql='delete from xz_user where uid=?';
		pool.query(sql,[$uid],(err,result)=>{
			if(err) throw err;
			if(result.affectedRows>0){
				res.send('1');
			}else{
				res.send('要删除的uid不存在');
			}
		});
	})
//5.用户检索
router.get('/queryuser',(req,res)=>{
	var uid=req.query.uid;
	if(!uid){
		res.send({code:401,msg:'uid required'});
		return;
	}
	var sql='select * from xz_user where uid=?';
	pool.query(sql,[uid],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			//将JSON字符换转为对象
			res.send(result[0]);
		}else{
			
			res.send('0');
		}
	});
});
//6.用户form修改路由
router.post('/update',(req,res)=>{
	var obj=req.body;
	console.log(obj);
	var code=400;
	for (var key in obj ){
		code++;
		if(!obj[key]){
			res.send({code:code,msg:key+'required'});
			return;
		}
	}
	console.log(obj.uid);
	var sql='update xz_user set uname=? , upwd=? , email=? , phone=? , user_name=? , gender=? where uid=?';
	pool.query(sql,[obj.uname,obj.upwd,obj.email,obj.phone,obj.user_name,obj.gender,obj.uid],(err,result)=>{
		if(err) throw err;
		if(result.affectedRows>0){
			//res.send("<script>alert('修改成功');location.href='http://127.0.0.1:3000/02_list.html'</script>");
			res.send('1');
		}else{
			res.send('更新失败');
		}
	});
	
});
//7.验证用户名是否存在路由
router.get('/checkUname',(req,res)=>{
	var $uname=req.query.uname;
	if(!$uname){
		res.send('用户名不存在');
		return;
	}
	var sql='select * from xz_user where uname=?';
	pool.query(sql,[$uname],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			//重名,不能注册
			res.send('1')
		}else{
			res.send('0');
			}
	});
});
//导出路由器 
module.exports=router;