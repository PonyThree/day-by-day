### 第六天 11.7   
### 复习  
#### 1.运行环境：  
+ 浏览器：js  
+ 服务器：nodejs  
#### 2.变量声明  
var $_c1=3;
字母，数字，美元符号，下划线。  
var a;  undefined  
var a,b=2,c=5;  
#### 3.常量声明  
const PI=3.14；  
#### 4.数据类型  
原始类型和引用类型  
原始类型：数值型、字符串型、布尔型、undefined、null。  
练习：  
+ 使用常量保存圆周率。使用程序分别计算半径为5(变量)的30度/60度/90度的弧度是多长。[练习](02_homework.js)  
+ 使用变量分别保存商品的单价为12.5，商品的数量为20；单价为30，数量为8.5，计算总和是多少。  
### 今天内容  
####  1.数据类型  
##### (1)数值型 number 
分为整型和浮点型  
8进制(012以0开头)  16进制(以0X开头) 10进制  
1234.56 -> 1.23456*10^3->1.23456E3   
<font color="#f66">typeof(数据) &emsp;&emsp;检测数据类型</font>  
##### (2)字符串类型 string  
数据被引号包含就是字符串类型;不区分单双引号。
查看一个字符的Unicode编码
"a".charCodeAt() //97   
##### (3)布尔类型 boolean   
在程序中表示<font color="#f66">真</font>或者<font color="#f66">假</font>的结果    true/false  
常用于一些是否的结果，是否登录。，是否注册，是否是会员，是否在售  
isLogin=true; isOnsale=false  
##### (4)未定义类型 undefined    
声明了变量未赋值，结果就是undefined  
##### (5)空 null    
用于销毁一个引用类型的地址,只有一个值null    
#### 2.数据类型转换  
##### (1)隐式转换  
+ 数字+字符串：数字被转换成字符串  
```
1+"a" -> 1a   
```   
+  数字+布尔型：布尔型被转换成数字 true->1 false->0  
1+true //2  
1+false //1  
+ 布尔型+字符串：布尔型转换成了字符串  
true+"ponywei"  //"trueponywei"  
    + <font color="purple">总结：JS中加号(+)的作用-----执行字符串的拼接</font>  
练习：使用- * /分别执行字符串、数值、布尔类型两两之间的运算   
    + <font color="purple">使用- * /执行运算</font>  
尝试将运算符的两端转换成数值型，如果含有非数字则返回NaN(Not a Number)，不是一个数字。  
NaN类型 number   

练习：查看以下程序的运行结果   
var num1=3,num2=true,num3="tedu";  
console.log(num1+num2+num3); //"4tedu"   
console.log(num2+num3+num1); //"truetedu3"   
console.log(num3+num1+num2); //"tedu3true"    
##### (2)强制转换  
+ 将任意类型转为整型  
    + parseInt();  
    parseInt("1.5a");  //1
+ 将任意类型转为浮点型
    + parseFloat();   
    parseFloat("1.5a");  // 1.5  
    parseFloat("a1.5");  //NaN   
    转换规则和parseInt类似，区别在于遇到小数点继续往后查找数字。  
+ 将任意类型转为数值型  
    + Number();    
    ```
    console.log(Number("1.5a"));  //NaN
    console.log(Number(true));  //1
    console.log(Number(false)); //0  
    如果要转换的数据中含有非数字，则返回NaN  
    ```
+ 将数值、布尔类型转为字符串
    toString();  
    var num=10;  
    num.toString();//"10"  
    num.toString(16);  //a  
    如果要转换的数据是数值，可以设置进制(8,16,2)  
##### (3)运算符   
由运算符连接操作的数据，所组成的形式就是表达式。  
+ 算术运算符(+  -  *  /  % ++ --)    
% 取余   
++自增：在原来的基础之上加1  
--自减：在原来的基础之上减1  
```
console.log(num++);//先打印num的值，然后再自增
```  
```
console.log(++num);//先执行自增，在打印num的值  
```  
+ 比较运算符  ----<font color="red">返回一个布尔型的结果</font>  
< &emsp; > &emsp; >= &emsp; <= &emsp;  == &emsp; !== &emsp; ===(全等于) &emsp; !==(不全等于)   
==只是比较两个值是否相同  
===不仅比较值，还会比较类型是否相同  
3>"10" //false  数字和字符串比较，字符串转成数字。  
"3">"10" //true 比较首个字符的Unicode码，如果首个字符相同，则比较第二个字符  
"3"->59 "1"->49  
3>"10a" //false 
3<"10a"  //false
3=="10a" //false  
<font color="red">原因：</font>"10a"转换为NaN
NaN和任何数比较都返回false  
NaN==NaN 返回false  
+ 逻辑运算符---返回一个布尔型的结果  
&& 并且  
|| 或者  
! 非(取反)  
&& 关联的两个条件都满足，结果是true，否则是false  
|| 关联的两个条件只需满足其一，结果就是true，否则是false   
练习：声明两个变量保存用户名和密码，如果用户名是"root"，并且密码是"123456"打印true，否则打印false。  
```
var uname="root";
var upwd="123456";
console.log(uname=="root"&&upwd=="123456");
``` 
练习：声明一个保存年龄，如果年龄大于等于90岁，或者年龄小于等于3岁，打印true，否则打印false。  
<font color="red">逻辑短路：</font>  
    && 当第一个条件为false的时候，就不需要再执行第二个条件  
    || 当第一个条件为true的时候，就不需要在执行第二个条件   
练习：以下两个语句是否会报错  
```
var num=3;
num>5&&console.log(a); ->不会报错
num<1||console.log(a); ->报错
``` 
+ 位运算符  (了解)  
1 10 11 100 101 110 111 1000 1001 1010(二进制)  
  
3&5(先转换成对应的二进制数,再按位进行与操作)  
按位与(&)  上下两位都是1，结果是1，否则是0
011  
101  
001  
按位或(|) 上下两位含有1，结果是1，否则是0  
3|5  
011  
101  
111  
按位异或(^)上下两位不同为1，相同为0  
5^7    
101  
111  
010    
按位右移(>>)删除二进制的最后一位，会逐渐变小，大概是变小到原来的一半   
7>>1  
111  
&emsp;11  
按位左移(<<)在二进制的最后添加一个0，增加一倍  
+ 赋值运算符 (= &emsp;+= &emsp;*= &emsp;%=)   
练习：声明变量保存商品的价格，打五折，计算价格。  
```
var price=88;
//打五折
price*=0.5;
console.log(price);
```     
+ 三目运算符  
    + 单目运算符：只需要一个数据或者表达式  
    a++  &emsp; a--  &emsp;  !false   
    + 双目运算符：需要两个数据或者表达式  
     &emsp;+&emsp; -&emsp; * &emsp;/ &emsp;%&emsp; <&emsp; >&emsp; >=&emsp; <= &emsp;== &emsp;!= &emsp;=== &emsp;!=&emsp; &&&emsp; ||&emsp; & &emsp;| &emsp;^&emsp; >>&emsp; <<&emsp; =&emsp; +=&emsp; -=&emsp; *= &emsp;/=&emsp; %=&emsp;   
    + 三目运算符：需要三个数据或者表达式  
     条件表达式 ? 表达式1 :表达式2  
     如果条件表达式为true,执行表达式1;  
     如果条件表达式为false,执行表达式2;   
     练习：声明两个变量，分别保存两个数字，比较两个数字的大小，打印最大值。   
    ```
    var a=19,b=6;
    a>=b?console.log(a):console.log(b);
    console.log(a>=b?a:b);

    ```    
    练习：声明两个变量，分别保存用户名和密码；如果用户名是root,并且密码是123456，打印"登录成功",否则打印"登录失败"。  
    ```
        var uname="abc",upwd="456891";
        uname=="root"&&upwd=="123456"?console.log("登陆成功"):console.log("登录失败")
        console.log(uname=="root"&&upwd=="123456"?"登录成功":"登录失败");
    ```
    课后任务：  
        (1)复习今天的内容，整理当天的思维导图  
        (2)练习：  
        声明一个变量保存年份，判断这个年份是否为闰年，如果是打印“是闰年”,否则打印"不是闰年"。  
        闰年：4年一个闰年 (能被4整除，和4取余为0)，并且不能被100整除，货真能够被400整除。[练习](11_homework.js)  
        (3)预习逻辑结构(if  if...else..)








  








       






  












