## 第十七天学习 11.22   
#### 一、复习 
#### 1.fs模块  
+ stat  
+ mkdir  
+ rmdir  
+ readdir  
+ writeFile  
+ appendFile  
+ readFile  
+ unlink  
+ existsSync  
#### 2.http协议  
+ 通用的头信息  
+ 请求的头信息  
+ 响应的头信息   
+ 请求的主体  
#### 3.http模块  
#### 3.1模拟浏览器   
``` 
http.get(url,(res)=>{  
    statusCode状态码 
    res.on('data',(buf)=>{
        var buf=buf.toString();
    })
})   

```
#### 3.2创建服务器      
``` 
var sever=http.createSever();  
sever.listen(3000);
server.on('request',(req,res)=>{
    req.url/req.method(get/post)/req.headers  
    res.write/res.writeHead(302,{
        Location:
    });
    //响应结束
    res.end();
});
```   
#### 3.3express框架  
#### 3.3.1创建服务器  
```  
const express=require('express');
var server=express();
server.listen(3000);
//通过创建路由接收浏览器的请求和作出响应
server.get('./login',(req,res)=>{
    res.send('响应文本');//只能响应一次
    //响应一个文件
    res.sendFile(__dirname+'/login.html');
    //重定向  
    res.redirect('/index');
})  
```  
#### 二、作业讲评  
#### 三、今日内容  
#### 1.路由中的请求对象  
+ req.method  获取请求的方法  
+ req.url 获取请求的url  
+ req.headers 获取请求的头信息  
+ req.query   获取请求时以查询字符串形式传递的数据，返回格式为对象。  
练习：创建文件03_post.js,创建web服务器，新建路由(get,/reg),响应一个注册文件(reg.html)  [03_post.js](03_post.js)&emsp;[reg.html](reg.html)
#### 2.post和get请求  
+ get请求以查询字符串的形式传递数据，服务器端使用req.query获取数据，结果为对象  
+ post请求是通过表单提交(现阶段)的方式传递数据,服务器端通过事件形式获取数据(后期会有简单的方法)  
```
req.on('data',(buf)=>{
    //获取的数据是buffer数据，需要使用查询字符串解析为对象

    var str=buf.toString();
    var obj=querystring.parse(str);

    //此时得到的才是一个对象object

});

```  
#### 3.使用路由传递数据 ---路由传参   
设置路由中接收的名称  
```
server.get('/detail/:lid/:pname',(req,res)=>{
req.params//获取路由中传递的数据，格式为对象
}) ;
浏览器请求方式为:  
http://127.0.0.1:3002/detail/233/dell  
233就是传递的数据，使用lid来接收  
dell就是传递的数据，使用pname来接收  
``` 
练习：创建购物车的路由，请求的url：/shopping，请求的方法get，传递商品的价格(price)和名称(pname)。[练习](04_params.js)  
+ (1)用户模块  
    用户列表  /list    
    详情 /detail  
    删除  /delete  
+ (2)商品模块  
    商品列表 /list  ---/product/list
    详情  /detail  ---/product/detail
    删除 /delete  ---/product/delete  
#### 4.路由器  
路由在使用过程中，不同的模块可能出现相同的url，把同一个模块下的路由挂载到特定的前缀。  
例如：商品模块下的路由挂载到/product，访问形式/product/list,用户模块下的路由挂载到/user，访问形式/user/list。  
路由器就是一个js文件，把同一模块下的路由放在一起。  
```
const express=require('express');
//创建空的路由器对象
var router=express.Router(); 
//往路由器中添加路由 
router.get('/list',(req,res)=>{
    res.send('这是列表');
});  
//导出路由器
module.exports=router;
```  
在web服务器下使用路由器  
```  
//引入路由器模块
const userRouter=require('./user.js');   
//把路由器挂载到/user下，访问形式为/user/list  
server.use('/list',userRouter);  
```
练习：创建商品模块路由器(product.js)，添加商品列表(list)、商品删除(delete)、商品添加(add)，在web服务器引入路由器，并挂载到/product。  
#### 5.中间件  
中间件的作用：为主要的业务逻辑所服务。    
分为5个：  
+ 应用级中间件  
+ 路由级的中间件 
+ 内置中间件  
+ 第三方的中间件  
+ 错误级中间件    

(1)应用级中间件    
每一个中间件就是一个函数，需要配合其他的中间件或者路由来使用。  
+ 拦截所有的路由：server.use((req,res,next)=>{ });  
+ 拦截特定的路由：server.use('/detail',(req,res,next)=>{ });  
练习：创建一个路由，请求方法get ,url:/view，响应当前的浏览次数，每次请求，响应的次数要加1。  
初始化一个全局变量,设置值为0，在中间件中实现变量的加1，在路由中响应变量。
(2)路由级中间件  
用于在服务器中将路由器挂载在特定的url中 
server.use('/user',userRouter);  
(3)内置中间件   
在express4中只有一个内置的中间件    
server.use(express.static('要托管的目录'));  
托管静态资源到某一个目录，如果浏览器要请求静态资源，则自动到这个目录下查找。    
静态资源：html、css、客户端js、图像...  
练习：将静态资源托管到files目录下，查看如果两个静态目录下有相同名称的文件，显示哪一个？  
课后任务：  
+ (1)复习今天内容，复习Mysql中的语句，整理思维导图。  
+ (2)练习：    
    创建web服务器，托管一个静态文件,点击查询，服务器端获取输入的身份证号(在中间件中),截取出生的年月日和性别；在路由中响应给浏览器。 [练习](09_homework.js) 
+ (3)预习mysql模块的使用










