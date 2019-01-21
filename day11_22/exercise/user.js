//使用路由器来管理用户模块下的路由
//引入express
const express=require('express');   
//创建空的路由器----是一个路由器对象
var router=express.Router();
//添加路由
//请求方法：get 请求url：/list
router.get('/list',(req,res)=>{
	res.send('这是用户列表');
});
//在路由器中添加路由  
//请求方法：get 请求url：/delete 删除成功
router.get('/delete',(req,res)=>{
	res.send('删除成功');
})
//导出路由器router 
module.exports=router;
