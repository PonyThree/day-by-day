## 第十五天学习 11.20  
#### 一、复习  
#### 1.ES6新特征  
+ 函数中的参数    
function fn(a,b=2){

}
fn();
+ 模板字符串    
```
` ${} `;  
```
#### 2.Nodejs  
+ 全局对象---global---global.fn();  
+ 浏览器全局对---window---window.console.log();  
+ console对象  
    + console.log()//打印消息  
    + console.info()//打印消息  
    + console.warn()//警告消息
    + console.error() //错误消息 
    + console.time('字符串')//开始计时
    + console.timeEnd('字符串')//结束计时  
+ process对象  
    + arch 查看架构--X64  
    + platform   
    + env  
    + version  
    + pid  
    + kill    
+ Buffer对象---缓冲区    
    + buffer.alloc(5,'abcde');//存储五个字节  
#### 3.定时器  
+ 一次性定时器  
    + var timer=setTimeout(回调函数，间隔时间)  
    + clearTimeout(timer)  
+ 周期性定时器  
    + setInterval(回调函数，间隔时间)  
    + clearInterval()  
+ 立即执行定时器  
    + process.nextTick(回调函数) //第一组末尾 
    + setImmediate(回调函数)//第二组开头  
    + clearImmediate();//清除立即执行定时器   
#### 4.模块    
自定义模块、核心模块、第三方模块    
任意一个文件都是一个模块  
+ exports  
+ require  //引入一个模块
+ module.exports   //默认导出是一个空对象 
+ __dirname  
+ __filename    

#### 5.作业讲评    
&emsp;&emsp;创建两个模块main.js(主模块),circle.js(功能模块);在功能模块中创建两个函数，分别获取圆的周长和面积，导出这两个函数;在主模块中引入功能模块，调用两个方法 [main.js](01_homework/main.js) [circle.js](01_homework/circle.js)

#### 二、今日内容  
#### 1.模块
+ 文件模块 ---<font color='#f66'>以路径开头</font>---require('./circle.js')---常用于用户自定义的模块，如果后缀名是.js的话，可以省略。  
+ 目录模块---<font color='#f66'>以路径开头</font>---require('./02_2')要求在02_2目录下自动引入文件index.js；或者使用package.json文件声明main属性，来指定要引入的文件名称   
![have a rest](img/01.png)  
练习：创建一个模块03_1.js，引入当前目录下的03_2目录模块；在03_2创建test.js，导出一个函数fn(打印两个数字相加)，在03_1里边调用。  
+ <font color='#f66'>不以路径开头的目录模块</font>---require('04_2')---要求引入的目录放在当前目录下的node_modules目录中。如果查找不到，则到上一级目录下查找，直到顶层目录。常用于第三方模块。  
+ <font color='#f66'>不以路径开头的目录模块</font>---require('querystring')---常用于引入官方提供的核心模块。  
练习：在05目录下创建一个模块05_1.js,引入不带路径的05_2，在05_2目录中含有hello.js文件(打印一句话)。  
#### 2.包和NPM  
NPM:Node Package Manage  
包(package):就是一个目录模块，里面包含有多个文件，其中就有一个文件命名为package.json的文件，是包说明文件。  
自动下载：http://www.npmjs.com  
切换到下载目录：  
+ cd 完整路径  
change directory   
+ 在要下载的目录下，按住shift键，单击鼠标右键->在此处打开powershell窗口  
使用NPM安装第三方包  
npm install 包的名称   
#### 3.核心模块  
是Nodejs官方提供的模块，可以直接引用，不需要创建。   
##### (1)查询字符串模块----querystring 
浏览器向服务器发送请求时，传递数据的一种方式。  
http://www.codeboy.com/product_details.html?lid=5&name=dell  
+ parse() 将查询字符串解析为对象  
+ stringify() 将一个对象转换成查询字符串  
练习：把百度搜索时的查询字符串解析为对象，获取关键词。  
ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd=电脑&emsp;[练习](06_querystring.js)  
##### (2)url模块 ---url  
+ parse() 将一个url解析为对象 
``` 
Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'www.codeboy.com:80',
  port: '80',
  hostname: 'www.codeboy.com',
  hash: null,
  search: '?lid=5&pname=dell',
  query: 'lid=5&pname=dell',
  pathname: '/list/details.html',
  path: '/list/details.html?lid=5&pname=dell',
  href: 'http://www.codeboy.com:80/list/details.html?lid=5&pname=dell' }  
  ```  
  protocol协议   
  hostname 主机名(域名/ip地址)  
  port 端口   
  pathname 文件在服务器上的路径   
  query 查询字符串    
+ format()将对象转换为一个url   
```
此时传入的对象如下：
   var obj={
        protocol:'http',
        hostname:'www.codeboy.com',
        port:8080,
        pathname:'/course/100037.html',
        query:{lid:17,pname:'apple'}
    }
``` 
<font color='red'>注意：</font>此时的query所对应的是一个对象  
练习：浏览器请求的url  
https://www.tmooc.cn:3000/web/1810.html?sid=10&name=tom  
获取url中传递的sid和name的值  
##### (3)文件系统模块    
+ fs.stat(path,callback)查看文件的状态，通过回调函数来获取结果。  
path:要查看的文件的路径  
callback:回调函数，参数1：err，文件查看失败的错误信息；参数2：stats,文件的状态信息。  
    stats里面的两个方法：  
    (1)isDirectory()是否为目录  
    (2)isFile()是否为文件  
 <font color='purple' style='font-size:16px'>对比同步和异步(非阻塞)的区别</font>  

  <font color='#cc0'>同步会阻止后续代码的执行，只有方法执行完，才能继续执行后边的代码;通过返回值来获取结果。</font>  
 <font color='#cc0'>异步不会阻止后续代码的执行，把执行的结果放到整个程序的最后;通过回调函数来获取结果。</font>  
 + fs.mkdir(path,callback)/fs.mkdirSync(path)创建目录  
 path:要创建的目录  
 callback:回调函数,只有一个参数,参数1：err如果创建失败的错误信息  
 + fs.rmdir(path,callback)/fs.rmdirSync(path)删除目录  
 path:要删除的目录的路径 
 callback:回调函数，获取删除的结果,参数1：err，如果删除失败的错误信息  
 + fs.readdir(path,callback) 读取目录中的文件   
 path:要读取的目录的路径 
 callback:回调函数，获取删除的结果,参数1：err，读取失败的错误信息，参数2：files，读取的文件，返回数组。  
 + fs.writeFile(path,data,callback) 写入文件/创建文件  
 data 要写入的数据  
 如果文件不存在，会创建文件；如果文件已经存在，则清空文件中的内容，然后写入。  
 课后任务：  
 (1)复习今天内容，整理思维导图。  
 (2)练习：  
 创建一个目录mydir,在该目录下创建文件1.txt,写入1;再继续创建文件2.txt，写入2,；读取mydir下所有的文件，删除mydir(自学删除文件unlink)。[答案](10_homework.js)  
 整个过程全部使用同步方法。  
 (3)预习http协议  








