## 第二十三天学习 11.30  
### 一、复习  
#### 1.图像格式  
+ jpg jpeg  
+ png 透明背景   
+ gif 动态图   
#### 二、今日内容  
##### 1.列表  
(1)定义列表  
+ 作用  
作名词解释时使用,常用于图文排版  
```
<dl>  
    <dt>需要被解释说明的名字</dt>  
    <dd>对名词的解释内容</dd>
</dl>  
```  
##### 2.结构标记  
(1)结构标签的作用  
代替div,用于描述整个网页的结构，提升标记的语义。  
```  
<header></header>   
<nav></nav> 
<section>  
    <aside></aside>  
    <div></div>  
    <aside></aside>
</section>  
<footer></footer>  
```    
```
<header></header>    

定义网页或者某个区域的头部内容  
````  
  
```  
<nav></nav>    

定义网页的导航链接部分  
```
   
```
<section></section>    
```
定义网页的主体内容  
```  
<aside></aside>  

定义网页侧边栏 
```  
  
```  
<footer></footer>   
定义网页的底部内容，多用于版权，解释说明，备案号。  
```  
 
```  
<article></article>    
  
  定义与文字相关的内容  
  论坛、帖子、微博头条、用户评论   
```  


##### 3.<font color='red'>表单(重点****) </font> 
+ 作用  
(1)提供可视化的输入控件  
(2)收集用户填写的信息，并提交给服务器  
+ 表单的组成部分 
(1)前端部分  
提供表单的控件，与用户做交互的可视化控件  
(2)后端部分    
对提交的数据进行处理(接口)  
+ 表单  
```
<form></form>  
```  
(1)属性：  
action:定义表单被提交时发送的动作，通常是定义服务器处理数据的地址，接口(url)   
默认是提交给本页地址。  
method:指定表单提交数据的方式(方法)   
<font color='red'> 
+ get(默认值)  
明文提交，提交时内容会显示在浏览器地址栏上  
提交的数据有大小限制，2kb  
向服务器要数据的时候使用get  
+ post  
提交数据无大小限制  
隐式提交，提交的数据不会显示在地址栏中  
把数据传递给服务器的时候使用post     
</font>   
+ delete  
+ put point(point预处理)   
<font color='red'>
(2)enctype 编码方式 ---设置表单允许将什么样的数据提交给服务器   
提交普通字符,不能有特殊符号# $ @ % ---text/plain  
允许将任意字符提交给服务器---application/x-www-form-urlencoded    
允许将文件提交给服务器---multipart/form-data
</font>  
##### 4.表单控件  
能够与用户进行交互的可视化元素  
(1)input控件    
在页面中提供各种各样的输入控件，通过type属性来设置输入控件的类型    
```
<input>或者<input/>   
type 设置输入控件的类型 
name 为控件定义名称，提供给服务端使用(必须填)   
value 控件的值，提交给服务端使用  
disabled 禁用此控件，不能操作也不能提交(无值属性) 
```  
+ 文本框--text  
type="text" 默认值  
type='password'  
属性：  
maxlength:限制输入的最大字符数  
<font color='red'>readonly:只读，只能看不能写，但允许被提交(无值属性)</font>  
placeholder 占位符，默认显示在控件上的文本，只要得到焦点，文本就无效了，此文本不能提交。  
+ 按钮  
type='submit'  提交按钮
将表单中的数据提交给服务器  
type='reset' 重置按钮 
让表单中的内容恢复到初始状态  
type='button'无功能按钮，可以调用js脚本  
+单选按钮   
属性：     
type='radio'  
name='gender'除了定义控件的名称，还起到了分组的效果  
必须有value，不然提交的值是on
checked：设置默认选中项，无值属性  
+ 多选按钮  
type='checkbox'  
name属性：除了定义控件外，还起到了分组的作用  
必须有value，不然默认为on    
checked：设置默认选中项，无值属性  
checkbox的name要写成数组hobby[]  
+ 隐藏域  
type='hidden'  
想提交给服务器，但是不想展示给用户看的数据，使用隐藏域  
+ 文件选择框  
type='file'   
<font color='red'> 
注意：  
method='post'  
enctype='multipart/form-data'     
multiple无值属性，可以同时上传多个文件，需要name属性为数组</font>   

(2)多行文本域的控件---textarea   
```  
<teatarea></textarea>     

允许录入多行数据的文本框 
```   
name 控件的名称  
readonly只读  
cols 指定文本域的列数，以英文单词为准,中文减半  
rows指定文本域的行数
(3)下拉选择框  
```  
    <select name="" ><!--表示一个下拉选-->
		<option value="">北京</option><!--表示一个下拉选中的一个选项-->
		<option value="">上海</option>
		<option value="">广州</option>
		<option value="">佳木斯儿</option>
	</select>  
```  
注意：当option没有value属性时，提交的时候select的value为选中的option的内容。当option有value，提交时select的value为选中的option的value。  
name 选项框的名称  
size 默认为1，定义显示选项的数量  
如果值是大于1的数字，下拉选表现为滚动列表。  
multiple无值属性，可以多选，但是name要为数组  
    设置multiple之后，就算size='1'，也是滚动列表  
selected 设置默认选中项  
练习：[练习](06_ex.html)  
+ label  ---文本关联  
```
<label for='id号'></label>  
属性：  
for：要与label中文字发生关联的form控件的id一致  
```  
+ 为控件分组   
```  
<fieldset> 
    <legend></legend>
</fieldset>  
fieldset为控件分组  
legend分组标题 
```  
+ 浮动框架---iframe  
允许在一个网页中，引入另一个网页  
属性：  
src='url'  
width='100%'  
height='200px' 高度存在问题，需要使用js.dom来解决  
srcolling='no' 不显示滚动条  
frameborder='0'不显示边框  

(4)其他元素(H5新出)   
什么是新表单元素控件  
在html5版本中新提出来的表单控件  
+ 邮箱验证类型  
```
<input type='email'>    
```
表单提交时，会验证数据是否符合email的规范(以@以及@后面的内容)     
+ 查询类型 
```
<input type='search'>  
```  
提供了快速清除文本框的功能    
+ url类型
```
url类型的验证：  
<input type='url'>  
```  
提交时验证数据是否符合url的规范，指绝对路径的规范  
验证http://以及后面的内容    
+ tel类型
```  
<input type='tel'>   
```  
在移动设备中，显示拨号键的效果  
+ 数字类型  
```  
<input type='number'>  
```  
只能接受数字，并且提供了箭头灵活的调整数字。   
属性：  
value 指定数字   
min 能接受的最小数字   
max 能接受的最大数字   
step 步数，每次点击箭头，变化的数量    
+ 范围类型    
``` 
<input type='range' name='range'>   
```  
提供一个滑块组件，允许用户   
属性：  
value 指定初始数字   
min 范围最小值   
max 范围最大值   
step 步数   
+ 颜色拾取器  
```  
<input typpe='color'>  
```  
提供一个颜色的拾取器  
+ 日期类型  
```  
<input type='date'>  
```  
提供了一个选择日期的控件，可以选择年/月/日  
+ 月分类型 
```  
<input type='month'>  
```  
提供了一个选择月份的控件，可以选择年/月  
+ 周类型 
```  
<input type='week' >  
```  
提供了一个选择周的控件，可以选择年/周  
课后任务：  
1.复习node.js  
2.课后练习：  
[作业](10_homework.html)



