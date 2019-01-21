## 第二十九天学习 12.11  
### 一、背景  
#### 1.背景颜色  
background-color:  
取值  
+ 合法的颜色值  
+ transparent;透明  
注意：背景色的填充，默认从边框位置处开始。  
#### 2.背景图片  
background-image:url(资源路径)  
#### 3.背景图片的平铺  
background-repeat:  
取值  
+ repeat 默认值，平铺  
+ repeat-x 水平方向平铺  
+ repeat-y 垂直方向平铺  
+ no-repeat 不平铺，只显示一张  
#### 4.背景图的定位  
background-position: x y  
取值：  
+ 以px为单位的数字  
指的是，图片在水平和垂直方向上的偏移量     
+ x% y%  
50% 50% 中间  
0% 0% 左上  
100% 100%右下  
+ 关键字  
x:left/center/right  
y:top/center/bottom  
#### 5.背景图的尺寸  
background-size:width height  
取值：   
+ 以px为单位的数字  
+ %     

+ cover,填满容器,图片你的宽高比不变，铺满整个容器的宽高，图片溢出的部分会被裁剪掉   
将背景图同比缩放，直达背景图完全覆盖容器，不留一丝空白，图片溢出的部分会被裁减掉 
+ contain 图片自身宽高比不变，但是，要缩放到图片能够完全展示出来,所以会有空白区域   
#### 6.背景图的固定  
background-attachment  
将背景图固定在网页某个位置，一直在可视的区域中显示，不会随着 网页滚动条改变位置  
取值；  
+ scroll 默认值，会随着网页的滚动条改变位置 
+ fixed 固定,不会随着网页的滚动条改变位置   
#### 7.背景的简写方式  
在一个属性中,指定背景的多个值  
属性：background  
取值:color url repeat attachment position       
background:#faa url('08.png') no-repeat center center;    
练习：学子商城登录页面  [练习](exercise/02_ex.html)  
#### 二、渐变gradient  
#### 1.什么是渐变  
多种颜色平缓变化的一种显示效果   
#### 2.渐变的主要因素---色标  
色标，一种颜色以及他出现的位置  
一个渐变至少两个色标  
#### 3.渐变的分类  
+ 线性渐变，以直线的方向来填充渐变色  
+ 径向渐变，以圆形的方式实现渐变色  
+ 重复渐变，将线性渐变或径向渐变重复几次  
#### 4.线性渐变      
background-image  
取值：  
新版本:linear-gradient(方向,色标1,色标2....)  
色标的写法：颜色的合法值  位置的百分比  
方向的取值:to top/right/bottom/left  
        角度  0deg to top   
        90deg to right  
        180deg to bottom  
        270deg to left  
旧版本写法:  -浏览器内核-linear-gradient(方向,色标1,色标2...)  
            方向top/right/bottom/left    
#### 5.径向渐变  
background-image:radial-gradient(半径 at 圆心,色标1,色标2...);  
半径：以px为单位的具体数值  
圆心:x y,以px为单位的具体数值  
x% y%元素的宽高占比  
关键字 x:left /center/right  
        y:top/center/bottom  
#### 6.重复线性渐变  
```  
    background-image:repeating-radial-gradient(100px at center center,#ff0 10px ,pink  30px,#000 50px);  
```  
在一个属性中,指定背景多个值  
repeating-linear-gradient(to right,#faa 0px,#ffa 50px);  
注意再重复渐变中,色标的位置，要给绝对值数字，不要用%
#### 7.重复的径向渐变    
repeating-radial-gradient(50px at center center ,#060606 0px,#af8bd8 20px,#292727 35px);
#### 8.浏览器兼容性  
各个浏览器新版本都渐变  
对于不支持的旧版本，可以添加浏览器内核前缀的方式，做兼容，让浏览器  
#### 三、文本格式化(重点)  
#### 1.字体属性    
+ 指定的字体的类型
font-family:"类型1","类型2"...   
#### 2.字体大小 
font-size:  
以px、pt为单位的数值  
em、rem  
#### 3.字体加粗  
font-weight  
bold/normal/lighter/bolder  
无单位的数字  100-1000整百数   常用400-900  
#### 4.字体样式  
font-style  
normal  
italic    
#### 5.小型大写字母  
font-variant:  
noraml ; 
small-caps;   
#### 6.字体属性的简写方式  
font:style variant weight size family;  
font:italic small-caps bold 20px "黑体";   

简写方式最少要有size和family  
练习：创建04_ex一个div,内容随意，最好中英结合，设置以下样式  
字体：黑体  
大小:32 px  
加粗并斜体  
所有小写字母变为小型大写字母 [练习](exercise/04_ex.html)     
2. 文本格式  
+ 文本颜色   
color:合法的颜色值    
+ 文本的水平对齐方式
text-align  
left/center/right/justify(两端对齐)  
+ 文本的垂直对齐方式 (行高)  
如果行高大于字体本身的大小，该行文本在行高内成垂直居中的显示效果  
line-height  
以px为单位的数字，一般与容器的高相同  
无单位数字,line-height:2;是字体大小的倍数。   

4.线条的修饰  
text-decoration  
+ none没有线条，去掉a标签的下划线  
+ overline上划线  
+ underline 下划线  
+ line-through 删除线   

5.首行缩进  
text-indent  
以px为单位的数字    
6.文本的阴影  
练习：  
在04_ex中，创建div#d2,内容随意，添加以下样式  
+ 文本水平两端对齐  
+ 有下划线    
+ 行高是字体大小的1.5倍  
+ 首行缩进50px[练习](exercise/04_ex.html)



