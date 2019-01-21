###  第十二天学习  
#### 一、复习   
#### 1.数组的创建  
+ 字面量[]  
+ 内置构造函数 new Array('a','b');    new Array(5);    
#### 2.访问数组    
arr.length
+ 下标 0 最后一个 arr.length-1  
#### 3.数组的分类  
+ 索引数组 下表是整数  
+ 关联数组 下标是字符串    

#### 4.遍历数组中的元素  
+ for循环 &emsp; 遍历下标 &emsp;  0~arr.length  
+ for-in &emsp;   
#### 5.数组中的方法（API）  
+ 转为字符串：  
    + toString()  
    + join('|')  
+ 拼接数组  arr1.concat(arr2);  
+ 截取数组元素  slice(start,end);  
+ 删除数组元素 splice(start,count,value1,value2)  
+ 翻转数组元素  reverse()  
+ 数组元素排序  sort(function(a,b){return a-b;})  
#### 6.作业 
+ 1.将数组中的元素进行翻转，不能进行reverse ,例如：['a','b','c','d'] -->['d','c','b','a']  [作业](01_homework.js)  
+ 2.冒泡排序  
```
    var arr=[6,78,23,9,45];
    //外层循环：比较4轮(循环4次)
    for (var i=1;i<arr.length ;i++ ){
        //1 4	5	5-1
        //2 3	5	5-2
        //3 2	5	5-3
        //4 1	5	5-4
        //内层循环 ：比较的次数,j代表元素的下标
        for(var j=0;j<arr.length-i;j++){
            //如果当前的元素大于下一个元素
            //交换两个元素的值
            if(arr[j]>arr[j+1]){
                var tmp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=tmp;
            }
            
        }

    }
    console.log(arr);
```  
### 二、今日内容  
#### 1.数组的API    
+ push()往数组的末尾添加元素，返回数组的长度  
+ pop()删除数组末尾的元素，返回删除的元素
+ unshift() 往数组的开头添加元素，返回数组的长度
+ shift() 删除数组开头的元素，返回删除的元素 
#### 2.二维数组  
数组中的每一个元素也是数组  
```
    var arr=[ [],[],[]...]];
```  
访问二维数组中的元素 <font color='purple'>arr[下标][下标];</font>  

#### 3.字符串操作   
包装对象：目的是让原始类型的数据也可以像引用类型一样，具有属性和方法。  
JS提供了三种包装类型：  
+ String
+ Number 
+ Boolean   
将任意数据包装成字符串对象  
new String(true)  返回object类型  
String(true)  返回字符串  'true'  
#### 4.1转义字符---转换字符的意义  
+ \n 将字符转换成换行  
+ \t 将字符t转换成制表符(tab)  
+ \' 将引号转成普通字符    
练习：打印出现welcome to chi\na [练习](04_string.js)     
#### 4.2 字符串中常用的方法   
+ toUpperCase() 将英文字母转为大写  
+ toLowerCase() 将英文字母转为小写
练习：初始化4个英文字母(有大小写)保存变量中，循环弹出提示框，输入4个字符(不区分大小写)，如果输入正确结束循环。  
+ length()获取字符串的长度 
+ charAt() 获取下标对应的字符
+ charCodeAt() 获取某个字符对应的Unicode码  
练习：使用变量保存字符串'javascript',获取字符'a'出现的个数。[练习](05_string.js)  
+ indexOf(value,start) 查找某个字符串的下标,value是要查找的字符串，start开始查找的下标,默认是0，如果找不到，返回-1。  
+ lastIndexOf() 查找某个字符串最后一次出现的下标，找不到返回-1。  
练习：声明变量保存字符串，检测字符串是否为邮箱格式；如果是打印true,不是打印false。  [练习](05_string.js)
+ slice(start,end) 截取字符串，start开始的下标,end结束的下标，不包含本身，如果end为空，表示截取到最后。  
练习：使用变量来存储身份证号，获取其中的年月日和性别。
110230 1997 05 20 3310 身份证倒数第二位偶数是女，奇数是男。[练习](05_string.js)  
![have a rest](img/xk.jpg)  
练习：使用变量保存一个邮箱地址，分别截取邮箱的用户名和域名。[练习](05_string.js)      
+ substr(start,count) start开始的下标，count截取的长度,如果开始为空，截取到最后，同样也可以倒着截取。
+ substring(start,end) 截取字符串,start开始的下标,end结尾的下标,不包含本身；如果两个参数是负数，自动转换为0。
练习：讲一个英文单词的首字母转大写，其余转小写。'hELlo' ->'Hello'[练习](05_string.js)

+ split(sep) 按照指定的字符分隔为数组，sep是分隔符。  
练习：使用split获取邮箱的用户名和域名(jerry@qq.com)[练习](05_string.js)  
练习：将所有单词的首字母转大写，其余字母转小写。'hOW arE yOu' -> 'How Are You'[练习](05_string.js)    
#### 4.3匹配模式  
作用：用于查找、替换字符串。  
+ replace(value1,value2) 查找并替换。value1要查找的字符串，value2要替换的字符换；value可以使用字符串形式，也可以使用正则表达式形式  /china/ig  
i -->ignore 忽略大小写  
g -->global 全局查找  
+ match(value)用于查找匹配的字符串，返回一个数组  
+ search(value) 用于查找满足条件的第一个字符下标，如果找不到返回-1。  
#### 5.Math对象  
Math对象不需要使用new创建，可以直接使用。  
Math.PI 获取圆周率  
Math.abs 取绝对值  
Math.floor() 向下取整  
Math.ceil() 向上取整  
Math.round()四舍五入取整 
Math.max()取一组数字的最大值  
Math.min() 取一组数字的最小值  
Math.pow(x,y)取x的y次幂  
Math.random()取随机 [0,1)  
课后任务：  
+ (1)复习今天的内容，整理思维导图  
+ (2)练习：
创建数组，存储若干个员工的姓名，每次运行随机取出1个员工的姓名打印出来。   
创建数组，包含a-z,A-Z,0-9元素，在数组中随机取4个字符，放到新的数组中。push  [练习](09_homework.js)
+ (3)预习Date对象 






