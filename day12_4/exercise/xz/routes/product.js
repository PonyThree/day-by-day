//引入数据库连接池模块
const pool=require('../pool.js')
const express=require('express');
//创建商品路由器
var router=express.Router();
//1.商品详情路由
	router.get('/list',(req,res)=>{
		var obj=req.query;
		//console.log(obj);
		//将字符串转为整型
		var $pno=parseInt(obj.pno);
		var $count=parseInt(obj.count);
		//设置默认值
			if(!$pno){
				$pno=1;
			}
			if(!$count){
				$count=10;
			}
		//计算开始查询的值
		var start=($pno-1)*$count;
		pool.query('SELECT * FROM xz_laptop LIMIT ?,?',[start,$count],(err,result)=>{
			if(err) throw err;
			res.send(result);
		});
	});
//2.商品详情路由
	router.get('/detail',(req,res)=>{
		//获取数据
		var obj=req.query;
		var $lid=obj.lid;
		//验证是否为空
		if(!$lid){
		res.send({code:401,msg:'lid required'});
		return;
		}
		pool.query('SELECT * FROM xz_laptop WHERE lid=?',[$lid],(err,result)=>{
			if(err) throw err;
			console.log(result);
			if(result.length>0){
				res.send(result);
			}else{
				res.send({code:402,msg:'lid err'});
			}
		});
	});

//3.商品删除
	router.get('/delete',(req,res)=>{
		var obj=req.query;
		var $lid=obj.lid;
		if(!$lid){
			res.send({code:401,msg:'lid required'});
			return;
			}
		pool.query('DELETE FROM xz_laptop WHERE lid=?',[$lid],(err,result)=>{
			if(err) throw err;
			if(result.affectedRows>0){
				res.send({code:200,msg:'delete success'});
			}else{
			
				res.send({code:301,msg:'delete err'});
			}
		});
	});
//4.商品添加路由
	router.post('/add',(req,res)=>{
		//获取数据
		var obj=req.body;
		/*var $title=obj.title;
		var $subtitle=obj.subtitle;
		var $familyId=obj.family_id;
		var $price=obj.price;
		var $promise=obj.promise;
		var $spec =obj.spec;*/
		//console.log(obj);
		//通过遍历对象获取每个属性值
		var $code=400;
		for(var key in obj){
			$code++;
			//console.log(key+'----'+obj[key]);
			//验证是否为空
			if(!obj[key]){
				res.send({code:$code,msg:key+'required'});
				return;
			}
		}
		//验证是否为空
		/*if(!$title){
			res.send({code:401,msg:'title required'});
			return;
		}
		if(!$subtitle){
			res.send({code:402,msg:'subtitle required'});
			return;
		}
		if(!$familyId){
			res.send({code:403,msg:'familyId required'});
			return;
		}
		if(!$price){
			res.send({code:403,msg:'price required'});
			return;
		}
		if(!$promise){
			res.send({code:403,msg:'promise required'});
			return;
		}
		if(!$spec){
			res.send({code:403,msg:'spec required'});
			return;
		}*/
		//开始添加数据
		pool.query('INSERT INTO xz_laptop SET ?',[obj],(err,result)=>{
			if(err) throw err;
			if(result.affectedRows>0){
				res.send({code:200,msg:'add success'});
			}
		});
	});

//5.商品更改路由
router.post('/update',(req,res)=>{
	//获取元素
	var $code=400;
	var obj=req.body;
	var $title=obj.title;
	var $subtitle=obj.subtitle;
	var $familyId=obj.family_id;
	var $price=obj.price;
	var $lid=obj.lid;
	//验证是否为空
	for (var key in obj ){
		$code++;
		if(!obj[key]){
			res.send('code:'+$code+'required');
			return;
		}
	}
	//开始更改数据
	pool.query('UPDATE xz_laptop SET title=?,subtitle=?,family_id=?,price=? WHERE lid=?',[$title,$subtitle,$familyId,$price,$lid],(err,result)=>{
		if(err) throw err;
		if(result.affectedRows>0){
			res.send({code:200,msg:'update success'});
		}else{
			res.send({code:304,msg:'update err'});
		}
		});
    });
//导出路由器
module.exports=router;


/*-- --------------+---------------+------+-----+---------+----------------+
| lid          | int(11)       | NO   | PRI | NULL    | auto_increment |
| family_id    | int(11)       | YES  |     | NULL    |                |
| title        | varchar(128)  | YES  |     | NULL    |                |
| subtitle     | varchar(128)  | YES  |     | NULL    |                |
| price        | decimal(10,2) | YES  |     | NULL    |                |
| promise      | varchar(64)   | YES  |     | NULL    |                |
| spec         | varchar(64)   | YES  |     | NULL    |                |*/