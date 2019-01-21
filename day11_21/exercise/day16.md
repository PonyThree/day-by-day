## 第十六天学习 11.21   
### 一、复习  
#### 1.模块分类   
(1)以路径开头 
+ 文件模块----自定义模块  
require('./circle.js')  
+ 目录模块  
    + require('./mydir') 默认自动寻找index.js文件,或者创建package.json文件，设置main属性对应的文件。  
    + require('mysql') 到当前目录下的node_modules目录下寻找mysql的目录
(2)不以路径开头  
+ 核心模块  
require('querystring')  
NPM包的安装  
npm install 包名称  
#### 2.核心模块  
##### 2.1querystring---查询字符串  
+ parse()  
+ stringify() 
##### 2.2url  
+ parse()  
+ format()  
   五个参数 ：  
    + protocol  
    + hostname  
    + port  
    + pathname  
    + query  
##### 2.3fs---文件系统  
+ fs.stat()/fs.statSync()    
+ fs.mkdir()/fs.mkdirSync()  
+ fs.rmdir()/fs.rmdirSync()  
+ fs.readdir(path,callback)/var res=fs.readdirSync(path)    
+ fs.writeFile(path,data,callback)  
#### 3.作业讲评  
(2)练习：  
 创建一个目录mydir,在该目录下创建文件1.txt,写入1;再继续创建文件2.txt，写入2,；读取mydir下所有的文件，删除mydir(自学删除文件unlink)。
 整个过程全部使用同步方法。[答案](01_homework.js) 
## 二、今日内容  
#### 1.文件系统模块  
fs.unlink(path,callback)/fs.unlinkSync(path) 删除文件  
fs.existsSync(path)判断文件是否存在  
存在true 不存在false    
练习：先判断文件num.txt是否存在，如果不存在，则创建，并初始化数字0；在原来的数字上加1。[练习](01_homework.js)
+ fs.readFile(path,callback)  读取数据，返回的数据是buffer形式
+ fs.readFileSync(path) 读取文件  
+ fs.appendFile(path,data,callback)  追加写入，如果文件不存在，则创建文件，如果文件已经存在，则在末尾写入数据。
+ fs.appendFileSync(path,data)    

练习：创建文件user.txt，每次写入一个对象，{ud:1,uname:'tom',upwd:'123456'}。  
#### 2.http协议  
是浏览器和web服务器之间的通信协议  
+ (1)通用头信息 ---Genaral  
    + <font color='red'>Requst URL:</font>请求的URL，要向服务器请求哪个文件。  
    + <font color='red'>Requst Method:</font>请求的方法  get/post  
    + <font color='red'>Status Code:</font>相应的状态码：  
        + 2** 服务器成功的响应  
        + 3** 响应的重定向，跳转到另一个网址  
        + 4** 客户端错误 
        + 5** 服务器错误  
    + <font color='red'>Romote Address:</font>请求的远程服务器的IP地址和端口号
+ (2)响应头信息 ---Response   
    + Connection:keep-alive；连接的方式：持续连接  
    + Content-Type:text/html;响应的文件类型  
    + Content-Encoding:响应的文件压缩形式  
    + Transfer-Encoding:响应时的传输方式,chunked(分段传输)。  
    + Location:响应时跳转的URL，通常结合着300系列状态码。
+ (3)请求头信息---Requst  
    + Accept:客户端接受的文件类型有哪些  
    + Accept-Encoding:客户端接受的文件压缩形式  
    + Accept-Language:客户端接受的语言类型  
    + Connection:客户端和服务器端的连接方式，持续连接  
+ (4)请求主体  
可有可无，客户端向服务器端传递数据  
#### 3.http模块  
可以模拟浏览器向服务器发出请求，也可以创建web服务器  
+ (1)模拟浏览器  
http.get(url,callback)  
    + get请求的方法  
    + url请求的网址  
    + callback回调函数，用来获取服务器端的响应  
    res.statusCode 获取响应的状态码     
    使用事件来获取服务器端响应的数据
    res.on('data',(buf)=>{  })    
    buf是服务器端响应的数据，格式为buffer数据，转为普通数据toString(buf)。  
+ (2)创建服务器
```  
var server=http.createServer();  //创建web服务器
server.listen(3000);//分配端口，监听3000端口的变化  
server.on('request',(req,res)=>{
    
});
    //接收浏览器的请求，是一个事件，一旦有请求，自动执行  
    //req请求的对象  
     url:请求的路径，只显示端口以后的部分
     method:请求的方法，直接通过地址栏，默认使用get方法  
     headers:请求的头信息  
    //res相应的对象  
    write()响应的内容为文本形式，向浏览器中写入文本。  
    writeHead(302,{ })设置响应的状态码和响应的头信息；如果要跳转需设置Location属性。  
    end()响应结束。
```  
练习：创建web服务器，监听3001端口，使用事件监听浏览器的请求，打印请求的方法、URL；[练习](05_server.js)
>http://127.0.0.1:3001/admin/login.html  
>http://localhost:3001/member/shopping.html    
练习：创建web服务器，监听3000端口；接收浏览器端的请求；如果浏览器端请求登录，响应'this is login page'；  
/login 响应文本 this is login page  
/member 响应文本 this is member page   
/ 跳转 /member  
如果以上都没有匹配到，响应文本404 not found  
#### 3.express框架   
基于Nodejs，用于构建web服务器的框架  
官网：http://www.expressjs.com.cn/  
安装：npm install express  
#### 3.1创建web服务器  
``` 
const  express=require('express');   
var server=express();
server.listen(3000);   
```  
(1)路由  
浏览器向web服务器发来请求，web服务器要根据请求的方法和请求的URL来作出相应。  
路由的三要素：  
+ 请求的方法  
+ 请求的URL  
+ 响应的内容  
(2)响应的对象(res)  
res.send()响应文本，只能响应一次send；如果是数字认为是状态码。   
res.sendFile()响应文件，必须使用绝对路径(__dirname)   
res.redirect()响应的重定向  
课后任务：  
+ (1)复习今天内容，整理思维导图。  
+ (2)练习：  
使用express来创建web服务器，创建以下路由  
get '/index' 发送文本'这是首页'  
get '/login'  发送文件'login.html'  
post '/register' 发送文本'注册成功'  
get '/' 跳转到/index  [练习](08_homework.js)  
(3)预习express的中间件，浏览器向服务器传递数据方式有哪些(post,查询字符串,路由传递)。





