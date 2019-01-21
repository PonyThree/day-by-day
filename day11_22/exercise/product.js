//商品模块路由器
const express=require('express');
//创建商品路由器对象
var router=express.Router();
//添加商品列表路由
router.get('/list',(req,res)=>{
 res.send('这是产品列表');
});
//添加商品删除路由
router.get('/delete/:lid',(req,res)=>{
console.log(req.params);
res.send('这是产品删除');
});  
//添加商品添加路由
router.get('/add',(req,res)=>{
	res.send('这是商品添加页');
});
//导出商品路由器 
module.exports=router;
