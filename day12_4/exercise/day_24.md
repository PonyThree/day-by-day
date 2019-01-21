## 第二十四天学习  12.4      
### 一、复习    
### 二、作业讲评  
### 三、今日内容  
#### 1.获取元素的对象  
直接使用这个元素的id值  
#### 2.获取/修改元素内容(只有双标签叫内容)  
```
    d1.innerHTML  
    可以获取/修改内容的文本  
    还可以动态的添加元素
```   
#### 3.获取/设置表单控件的数据 
 1.使用input控件的id代表控件对象  
 2.通过对象的value属性,获取/设置控件的值      
 ```
    <input type="text" id="uname"  value>
    <input type="button"  value="获取文本" onclick="show()">    
   ```   
  练习:输入内容，点击计算结果，显示在后面。  [练习](03_ex.html)  
  #### 4.HTML元素的事件  
  允许通过用户的行为来激发的操作就是事件  
  常用的事件：  
  + onclick 用户单击元素激发某项操作  
  + onblur 文本框/密码框，失去焦点事件  
  + onfocus 文本框/密码框,获得焦点事件   
     
  body的事件 ---onload 
  当页面加载完成，马上要激发的操作  
  #### 5.AJAX  
  同步Synchronous  
  在一个任务进行的过程中，不能开启其他的任务。  
  同步访问：浏览器在向服务器发送请求时，浏览器只能等待服务器的响应，不能做其他的事情。  
  出现场合：  
  + 地址栏输入网址并跳转  
  + a 标记跳转  
  + submit表单的提交  
  异步  Asynchronous  
  在一个任务开启的同时，可以开启其他的任务。  
  异步的访问：  浏览器在向服务器发送请求时，不耽误用户在网页的其他操作  
  出现的场合：  
  + 用户名的重复验证  
  + 聊天室  
  + 搜索建议(百度、京东、淘宝)  
  + 股票走势图  
  ##### 5.1什么是AJAX  
  Asynchronus Javascript And Xml  
  异步的js 和xml  
  本质：使用js提供的异步对象(XMLHttpRequest--xhr)    
功能： (重点)    
  (1)异步的向服务器发送请求  
  (2)并接受响应回来的数据 
 ajax中,可以无刷新效果，去更改页面的布局结构和内容。  
 ##### 5.2使用AJAX步骤   
 + 创建xhr对象 
 ```
    var xhr=new XMLHttpRequest();
 ```    
 + 绑定监听  
 ```
    xhr.onreadystatechange=function (){
    if(xhr.readyState==4&&xhr.status==200){
        xhr.responseText;
    }
    }
    
```
 + 打开链接，创建请求  
 ```
    xhr.open(method,url,true);  
    method 必须是字符串  
    url="127.0.0.1:3000/list?uname="+name+"&upwd="+pwd;
```   
+ 发送请求  
```
    xhr.send();

```
 ##### 5.3创建异步对象  
标准创建: 
 ```
    var xhr=new XMLHttpRequest()    
 ```
  IE8 以下创建：  
  ```
   var xhr=new ActiveXObject("Microsoft.XMLHttp");  
  ```      
  ##### 5.4异步对象的常用属性和方法  
  readystate 表示xhr对象的请求状态  
  取值：0~4表示着5个状态  
  + 0:请求尚未初始化 
  + 1：打开服务器连接，正在发送请求  
  + 2：接收响应头  
  + 3：接收响应主体  
  + 4：接收响应数据成功  
  当readystate的值为4的时候才表示所有的数据才接收完毕    
  onreadystatechange当xhr的readystate属性发生改变时触发  
  status表示服务器的响应状态码  
  只有在status=200，表示服务器已经正确处理了请求。  
  ##### 5.5使用get发送带参数的请求  
  url="demo/login?uname=value1&upwd=value2"  
  练习：把01_ajax.html对应接口/ajaxDemo,删除，整体重新敲一遍和02_login.html以及/login删除，整体重新敲一遍。[01_ajax.html](xz/myex/01_ajax.html)&emsp;&emsp; 
  [demo.js](xz/routes/demo.js)&emsp;&emsp; [app.js](xz/app.js) &emsp;&emsp;[02_login.html](xz/myex/02_login.html)  
  作业:提升  
  1. 第一题   
  + 在demo.js中创建一个接口userlist,在接口中查询出所有的数据，并相应给前端页面  
  + 创建一个网页03_getList.html,网页中有一个按钮，点击后，获取userlist接口的数据  [03_getList.html](xz/myex/03_getList.html)&emsp;&emsp;[demo.js](xz/routes/demo.js)&emsp;&emsp; [app.js](xz/app.js) 
    
   2.在demo.js，创建接口checkUname模拟学子商城的注册需求。  
  文本失去焦点时，使用ajax连接checkUname查询数据库是否存在用户名，如果存在，响应给页面"用户名被占用"  
  如果不存在，响应给页面"用户名可用"  
  创建网页04_register.html.一个文本框，一个密码框，文本框失去焦点的时候调用连接服务器的ajax方法。  
  [04_register.html](xz/myex/04_register.html)&emsp;&emsp;[demo.js](xz/routes/demo.js)&emsp;&emsp; [app.js](xz/app.js) 
  
        