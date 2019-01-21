###  第十三天学习 11.16  
#### 一、复习  
#### 1.数组的API  
+ push()
+ unshift()
+ pop()  
+ shift()  
#### 2.二维数组  
[   [],[],[]...]   数组[1][3]  
#### 3.字符串  
##### 3.1包装对象  
(1)创建一个实例new String();  
(2)调用实例的方法  
(3)销毁实例  实例=null  
##### 3.2字符串的API 
+ toUpperCase()  
+ toLOwerCase()  
+ charAt()  
+ iindexOf()  
+ lastIndexOf()  
+ slice(start,end)  
+ substr(start,counnt)  
+ substring(start,end)  
+ split()    
##### 3.3查找替换 
匹配模式：查找替换  
+ replace(/china/ig,'中国');  
+ match(/china/ig)  匹配后形成一个数组  
+ search(/china/i)  返回查找字符的下标  ---只查找一个  
#### 4.Math对象  
+ PI  
+ abs()  
+ ceil()  
+ floor()  
+ round()  
+ max()  
+ min()   
+ pow()  
+ random()  
#### 作业讲评  
1.创建数组，存储若干个员工的姓名，每次运行随机取出1个员工的姓名打印出来。   
2.创建数组，包含a-z,A-Z,0-9元素，在数组中随机取4个字符，放到新的数组中。push [作业](01_homework.js)  
#### 二、今日内容  
#### 1.字符串方法  
+ String.fromCharCode(index) 获取任意Unicode码对应的字符,其中index为Unicode码。  
+ substring(start,end)  截取字符串,start开始的下标,end结尾的下标,不包含本身；如果两个参数是负数，自动转换为0。
#### 2.Date对象  
作用：用于对日期和时间进行存储和计算。  
##### 2.1创建一个Date对象   
+ new Date('2018/11/11 10:20:30');
+ new Date(2018,10,11,10,20,30)  //第二个参数范围是0~11  
+ new Date() 存储当前的系统时间
+ new Date(1000*60*60*24) //存储的是距离计算机元年的毫秒数对应的日期时间&emsp;[练习](02_date.js)
##### 2.2获取Date对象的信息  
+ getFullYear()
+ getMonth() ---(月0~11)
+ getDate()
+ getHours()
+ getMinutes()
+ getSeconds()
+ getMilliseconds()
+ getDay()---(星期0~6)  
+ getTime()---(距离计算机元年毫秒数)  
##### 2.3转为本地字符串  
+ toLocaleString() //年-月-日 时：分：秒  
+ toLocaleDateString() //年-月-日  
+ toLocaleTimeString() //时：分：秒    
##### 2.4设置Date对象的信息  
+ setFullYear()
+ setMonth()
+ setDate()
+ setHours()
+ setMinutes() 
+ setSeconds()
+ setMilliseconds()
+ setTime()//设置距离计算机元年毫秒数，一旦使用后，年月日，时分秒都会受到影响。  
练习：创建一个对象，保存一个员工的入职时间'2018-11-16',三年后到期，计算到期时间,合同到期前1个月续签合同，假如续签时间是周末，提前到周五。提前一周通知人事准备续签(提醒时间)。[练习](04_exercise.js)
#### 3.Number对象  
new Number(值)  创建对象  
将一个数据转为Number对象，本质还是数字。  
+ Number.MAX_VALUE &emsp;获取计算机能存储的最大值  
+ Number.MIN_VALUE &emsp;获取计算机能存储的最小值  
+ Number.toFixed(n) &emsp;保留小数点后n位  
+ toString()将数字转为字符串类型  
<font color='red'>数字+'' //隐式转为字符串类型</font>  
#### 4.Boolean对象  
new Boolean(值)，创建布尔对象，本质上将数据转为布尔类型。  
+ Boolean(值) 转为布尔型
+ !!值   隐式转换为布尔型    
+ toString() 将布尔型数据转为字符串  
<font color='red'>null的作用：用于释放(销毁)一个引用类型的数据。</font>  
#### 5.错误处理  
SyntaxError语法错误，错误的使用了中文，缺少括号...程序不会执行。  
ReferenceError 引用错误，使用未声明的变量。  
TypeError 类型错误，错误地使用了数据类型，错误的使用括号。  
RangeError 范围错误，参数的使用超出了范围。---> new Array(-1)  
<font color='#f66'>引用错误、类型错误、范围错误出现后，会影响后续代码的执行。</font>   
异常处理：  
```
try{
    尝试执行的代码,可能出现的错误
}catch(err){
    err:捕获的错误信息
    处理错误的方案
}
```  
#### 6.ES6新特征  
ECMAScript6  
ES2017 ES2018...  
##### 6.1块级作用域  ---局部作用域    
是使用let关键字声明的变量，只能在块级作用域下访问，不能被外部访问。  
块级作用域：{ }、for、while、do-while都是块级作用域。  
##### 6.2箭头函数  
是回调函数的另一种写法，和匿名函数不完全一致。  
```
sort(
    (a,b)=>{
        return a-b;
    }
)

如果箭头函数的函数体中只有一行代码，并且是以return形式，可以简化为：  
sort(
    (a,b)=>a-b
)
```  
课后任务：  
(1)复习今天的内容，整理思维导图  
(2)练习：  
双色球：随机取1~33之间的6个数字不能重复，取1~16之间的1个数字(最后)，组成一个新数组。 [答案](09_homework.js)   
(3)预习服务器概念，NODEJS中的模块。



 
