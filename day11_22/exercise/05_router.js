//引入user.js路由器模块
const userRouter=require('./user.js');
const productRouter=require('./product.js');
//创建服务器
const express=require('express');
var server =express();
server.listen(3000);   
//服务器要使用路由器
//把引入的用户路由器挂载到/user
//访问形式/user/list
server.use('/user',userRouter);

/*练习：创建商品模块路由器(product.js)，添加商品列表(list)、商品删除(delete)、商品添加(add)，在web服务器引入路由器，并挂载到/product。*/
//引入product.js路由器
server.use('/product',productRouter);



