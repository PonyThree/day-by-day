## 第二十九天学习 12.10  
#### 一、尺寸和边框  
##### 1.尺寸属性  
##### 2.溢出处理  
overflow  &emsp;overflow-x &emsp;  overflow-y  
当内容多,元素区域小的时候，就会产生溢出效果  
默认是纵向溢出  
取值：  
+ visible 可见的，默认值，溢出可见 
+ hidden 隐藏的，溢出的内容不可见 
+ scroll 显示滚动条 ，不管溢不溢出，都添加横向和纵向的滚动条(不溢出不可用)  
+ auto 溢出的部分才显示滚动条，并可用  
##### 3.边框属性 
border:width style color;  
width:边框的宽度,以px为单位的数字  
style:边框的样式   
取值：  
+ solid 实线  
+ dotted 虚线(点点)  
+ dashed 虚线(短线)  
+ double 双实线 
color:边框的颜色,合法的颜色值,(transparent透明色) 
这种写法，同时设置4个边框，是一种简写方式   
取消边框  border:none/0  
练习：创建一个div，id=content，尺寸 200*200,设置4个方向的边框2px 实线 橙色  
单边设置    
border-top/right/bottom/left   
border-top:5px solid orange;
border-right:5px solid #f00;
border-bottom:5px solid #0ff;
border-left:5px solid #f0f;  
单属性设置  
border-color:#f00;  
border-style:dotted;
border-width:10px;  
单边单属性  
border-方向-属性(共12个  
border-top-style:double;    
```
    border-top-color: #f00;
    border-right-color: #0f0;
    border-bottom-color: #00f;
    border-left-color: #ff0;  
```   
4.边框的倒角(圆角)    
将直角倒成圆角  
border-radius:  
取值:以px为单位的数字  
    % 设置圆角(50%)    
单角设置:  
使用两条边去确认一个角，先写上下后写左右  
border-top-left-radius:左上  
border-top-right-radius:右上  
border-bottom-left-radius:左下  
border-bottom-right-radius:右下  
5.边框阴影  
box-shadow:  
h-shadow水平方向偏移量,必须值  
v-shadow 垂直方向偏移量,必须值  
以下是可选参数  
blur:阴影的模糊距离,可选值，越大模糊距离越明显  
spread：阴影的尺寸，指定要在基础阴影上扩出的大小  
color:阴影的颜色   
inset:把默认的外部阴影设置为内部阴影  
练习：设置一个圆形发光的效果(太阳)   
6.轮廓：   
轮廓指的是边框的边框，绘制与边框外边的线条  
outline:width style color;  
练习：尝试完成一个乒乓球拍  
#### 二、框模型(盒子模型)  
页面元素皆为框(盒子)    
定义了元素边框处理元素内容,内边距，外边距以及边框的一种计算方式  
定义了一个元素占地大小的计算方式  
盒子模型默认的计算方式:  
+ 元素的实际占地宽度=左外边距+左边框的宽度+左内边距+内容区域的宽度+右内边距+右边框的宽度+右外边距   
+ 元素的实际占地高度=上外+上边框+上内+内容区域的高度+下内+下边框+下外  
内边距：元素边框与内容之间的空白边距  
外边距：围绕在元素边框外的空白区域(元素与元素之间的距离)
1.外边距  
margin 定义在4个方向的外边距  
margin-top:
margin-right:  
margin-bottom: 
margin-left:  
定义某一个方向上的外边距  
取值：  
+ 以px为单位的数字 
为正数  top,元素往下移动  
        left,元素往右移动 
        right,元素往左移动  
        bottom,元素往上移动  
为负数  top,元素往上移动  
        left,元素往左移动   
+ 取值为%，相对于父元素尺寸的百分比
+ auto ,自动计算块级元素的外边距，控制块级元素在水平方向居中对齐   
margin的效果，改变元素在页面上的位置，多用于微调    
简写方式：  
margin:value，设置四个方向的距离  
margin;v1  v2;&emsp; v1:上下外边距 &emsp;  v2:左右外边距    
margin:v1 v2 v3;&emsp; v1上边距&emsp; v2左右边距&emsp; v3下边距    
margin:v1 v2 v3 v4;&emsp;上右下左外边距(顺时针)  
margin: 0 auto;  块级元素在水平方向上水平居中对齐  
练习：05_ex创建两个div300*300，随意设置两个不同背景颜色 ，两个div之间的间距为50px，第二个div水平居中显示   
3.自带外边距的元素有哪些  
h1~h6  
p  
body  
ol  
ul  
div  
pre  
dl  
通常要清除这些元素的自带外边距 *{padding:0;margin:0}    
<font color='hotpink'>4.外边距的特殊效果 
+ 外边距的合并  
 当两个垂直外边距相遇时，他们将合并成一个外边距  
 最终的取值取决于两个外边距中距离大的值  
+ 行内元素以及行内块元素的外布局  
行内元素垂直外边距无效(img除外),水平外边距相遇两个值会相加  </font>  
<font color='red'>行内块，设置垂直外边距，整行元素跟着发生变化</font>。   
练习：06_ex创建两个div,#d1,#d2,200*200 不同的背景颜色    
在#d2中添加一个div#d3 100*100添加不同背景颜色  
最后设置d3的上外边距为50px，查看页面效果    
+ 外边距溢出  
在特殊条件下，给子元素设置的上外边距，会作用到父元素上  
特殊条件:  
    + 父元素没有上边框  
    + 只有第一个子元素设置上边距时  
解决方案：  
    + 为父元素增加上边框；弊端：元素实际占地高度增大  
    + 为父元素添加上内边距；弊端：元素实际占地高度增大  
    + 在父元素的第一个子元素位置添加一个空的table标签，添加table的原因，table的内容是由自身撑开的,所以把第一个元素挤到第二个元素去了。  

5.内边距  
不会影响其他元素，但是会改变元素自己的占地尺寸，会变大  
padding:value;设置4个方向的内边距  
padding  
以px为单位的数字 
%  
简写方式：    
padding:value;设置4个方向的内边距  
padding:v1 v2;v1上下  v2左右  注意：padding没有auto  
padding:v1 v2 v3;上  左右 下  
padding: v1 v2 v3 v4 ;上右下左  
box-sizing属性 
设置盒子模型的计算方式  
默认计算方式：  
元素实际占地宽度=左外边距+左边框+左内边距+内容区域+右内边距+右边框+右外边距  
元素实际占地高度=上下边距+上边框+上内边距+内容区域+下内边距+下边框+下外边距  
box-sizing取值  
+ content-box 默认值，会采用默认计算方式  
+ border-box 元素的尺存(定义得宽高),包含border,padding和内容区域宽高  
元素实际占地宽度=左右外边距+设置的宽度width  
元素实际占地高度=上下外边距+设置的高度height  
<font color='purple'>块级元素、行内元素、行内块元素</font>  
块级元素独立成行，可以设置宽高，margin上下有效  
行内元素:与其他行内元素共用一行,不能设置宽高，只能靠内容称,margin上下无效  
行内块：与其他行内元素、行内块共用一行，可以设置宽高，margin上下有效   
注意:一行行内元素，其中一个设置了margin，整行都跟着移动  
作业：  
+ 实现外边距的合并效果  
+ 实现外边距溢出效果，及其解决方案  
+ 观察行内元素怒以及行内块元素的外边距效果 
+ 使用倒角，边框阴影，完成宇智波族徽     











