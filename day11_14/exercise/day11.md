## 第十一天学习  11.14  数组  
### 一、复习  
#### 1.匿名函数  
```
function fn(){} //函数声明  
var fn =function (){}  //函数表达式  
```
#### 2.创建函数  
#### 3.匿名函数自调用   
```
(function(a){     })(1); 
```  
#### 4.回调函数  

```  
function add(num){   num();}
add(function (){   
    var a=1;  
    return 1;
    });
 ``` 
 #### 5.系统函数  

 + encodeURI()
 + decodeURI()
 + parseInt()
 + parseFloat()
 + isNaN()
 + isFinite()/eval()
 #### 6.对象  
 ##### 6.1属性和方法的集合  
 字面量、内置构造函数、自定义构造函数
 ```  
 {name:'tom',age:18}   
 var person=new Object();
 person.name='tom';
 person['age']=18;
 ```
 ##### 6.2遍历对象中的属性 
 ``` 
 for(var key in person){
     person[key]
 }
 ```
  ##### 6.3判断对象中是否有该属性：
 + 'name'  in person   
 + person.hasOwnProperty('age')  //true  false
 + person.name===undefined  //false  true    
 #### 7.对象中的方法  
 ```
 var person={
     say:function(){

     },
     name:'tom',
     run:function(){

     }
 }  
 方法的调用：person.say();
 ```
 #### 8.作业讲评  
 练习：创建一个圆对象，添加属性半径，圆周率；添加方法计算圆的周长(getLength)和计算面(getArea);分别返回圆的周长和面积;[练习](01_homework.js)  
 ### 二、今日内容    
#### 学习目标---数组    
数组是由多个元素组成的集合。  
每一个元素就代表一个数据。   
#### 1.创建数组  
##### (1)数组字面量  
[元素1,元素2...]  
数组中可以存放任意类型的数据  
##### （2）内置构造函数  
new Array(5)//初始化数组的长度为5 ，可以继续添加第六个元素 
new Array(元素1,元素2....)  
访问数组中的元素  数组名称[下标] ，下标是从0开始。  
练习：创建数组，初始化长度为5，添加5个课程。[练习](03_array.js)  
练习：创建数组，直接添加5个员工的姓名。[练习](03_array.js)    
##### 2.获取数组元素的个数  

数组名.length  
使用数组长度添加一个新的元素 
数组[数组.length]
练习：创建一个空数组，使用数组长度添加3个国家名称。 [练习](04_array.js) 
##### 3.数组的分类    
数组分为索引数组和关联数组  
索引数组：以整数作为下标  
关联数组：以字符串作为下标    
<font color='purple'>创建关联数组：</font>
```
    var arr=[];
    arr['eid']=1;
    arr['enme']='tom';
```
##### 4.遍历数组中的元素  
+ for循环，循环遍历数组元素的下标  <font color='red'>(只能遍历索引数组)</font>
```
    var score=[85,92,75,69,80,73,79];
    //遍历数组中每个元素的下标  
    for(var i=0,sum=0;i<score.length;i++){
        //i 代表数组元素的下标
        //score[i]  下标对应的元素
        console.log(i+'-----'+score[i]);
        sum+=score[i];
    }
    console.log(sum);
```    
+ for-in  <font color='red'>(既可以遍历索引数组，也可以遍历关联数组。)</font>
```
for(var key in arr){
    key 数组的下标
    arr[key] 下标对应的元素  
}
```
练习：保存所有员工的工资，使用for循环计算平均工资是多少？  [练习](05_for.js)  
练习：创建数组，保存4个汽车的品牌名称，把品牌名称为'宝马'改为'BMW'。[练习](05_for.js)    
练习：创建数组，包含元素推荐、热点、娱乐、财经；分别使用for循环和for-in遍历数组中的元素。[练习](06_forin.js)  
练习：创建一个函数getIndex()，需要传递两个参数，第一个参数是数组，第二个参数是字符串,返回字符串的下标，如果找不到该字符串的下标则返回-1。
getIndex(['a','b','c'],'e');[练习](06_forin.js)      
练习：创建函数getAvg,传递1个参数(数组),返回平均工资。[练习](06_forin.js)      
##### 5.数组中的方法 (API )   
API：应用程序编程接口，预先定义好的函数/方法。  
+ (1)toString()将数组中的元素按照逗号分隔成字符串  
+ (2)join('|')将数组中的元素按照指定的字符分隔成字符串  
+ (3)concat(arr1,arr2...)拼接两个或者更多的数组
+ (4)slice(start,end)截取数组中的元素，start开始的下标，end结尾的下标 ，不包含end本身；负数表示倒数。
+ (5)splice(start,count,value1,value2...)删除数组中的元素；start开始的下标，count删除的个数，value1,value2...删除后补充的元素。  
+ (6)翻转数组中的元素  
+ (7)sort()对数组中的元素进行排序，默认是Unicode由大到小排序  
```
sort(function(a,b){
    return a-b;//由小到大
    //return b-a;//由大到小
});
```  
课后任务：  
(1)整理思维导图；  
(2)练习：  
将数组中的元素进行翻转，不能进行reverse ,例如：['a','b','c','d'] -->['d','c','b','a']  [练习](08_homework.js)  
(3)预习字符串下的方法(api)










