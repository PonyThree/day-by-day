## 第十九天学习 11.26    
### 一、复习  
#### 1.第三方中间件  (给服务器使用的,所有的post请求都会把数据转换为对象)  
server.use(bodyParser.urlencoded({
    extended:false
}));
#### 2.mysql模块  
+ (1)普通连接   
``` 
var connection=createConnection({
host:'127.0.0.1',
post:3306,  
user:'root',
password:'',
database:'tedu'
});  

connection.connect();  
connection.query(sql,callback);  
connection.end();   
``` 
+ (2)连接池    
```
varr pool=mysql.createPool({
host:'127.0.0.1',
post:3306,  
user:'root',
password:'',
database:'tedu',
connectionLimit:20
});    
```  
#### 二、作业讲评  
#### 三、今日内容   
### 前端：商品列表、商品详情
### 后端：
#### 1.用户路由器  
#### 2.商品路由器  
##### 2.1商品列表  
##### 2.2商品详情  
##### 2.3商品添加
##### 2.4商品修改  
##### 2.5商品删除  
##### 课后任务：    
+ (1)总结学子商城项目(步骤)  
+ (2)练习：  
完成商品更改路由  [add.js](xz/app.js)&emsp;[product_update.html](xz/public/product_update.html)&emsp;[product.js](xz/routes/product.js)
+ (3)《nodejs实战》第二版