##  一、复习  
## 二、今日内容  
#### 1.Bootstrap  
+ 调试,使用webstorm
+ 安装包
+ 注册--help--register
设置字体大小和颜色
在file-->setting-->输入font可以改变字号
color&font-->html的选项,可以更改html文件的字体颜色
修改tab
general-->editor tab-->修改成2
修改快捷键
keymap中选择eclipse
#### 2.全局css样式  
+ 2.1按钮相关的css样式  
btn基本按钮  
颜色按钮  
btn-danger  危险    
btn-success  成功  
btn-warning  警告  
btn-info  信息  
btn-primary  主要  
btn-secondary  次要  
btn-dark  黑色  
btn-light  浅色  
btn-link 链接  
不同的边框按钮  
btn-outline-颜色  
按钮大小  
btn-lg  
btn-sm      
+ 2.2图片相关的class  
.rounded 倒角  
.rounded-circle 圆  
.img-thumbnail 缩略图  
.img-fluid响应式布局,图片会缩放，但不会超过原始大小  
+ 2.3文字相关    
.h1~.h6字体大小 
字体颜色  
text-danger/success/info/warning/primary/secondary  
文字对齐  
text-*-left/center/right/justify  
*代表:lg/sm 在大屏幕下对齐,在小屏幕下对齐  
大小写 
text-uppercase/lowercase/capitalize大写,小写,首字母大写  
粗体  
font-weight-bold  
斜体  
font-italic  
#### 3.列表相关的class   
ul   
list-unstyled  去除标识符
list-group 创建列表组 
li  
list-group-item创建列表项  
active激活状态  
disabled禁用状态  
li的颜色  
list-group-item-danger/success/info/warning/primary/secondary/dark/light  
#### 4.table相关的class      
table的class  
table基本类  
table-bordered 带边框的表格  
table-striped隔行变色  
table-hover鼠标悬停  
table-danger/success/info/warning  
响应式表格  
需要在table的父级元素上,添加类table-responsive   
#### 5.辅助类  
边框  
+ border 基础类
border-top/right/bottom/left  设置4个方向的边框
border-0  取消边框
border-top-0  取消上边框
border-danger/success/info/warning... 边框颜色  
+ rounded/rounded-0设置圆角/取消圆角
rounded-top/right/left/bottom 设置对应的圆角    
+ 浮动
float-*-left/right  
*:xl/lg/md/sm  
clearfix    
+ 显示
visible/invisible显示/隐藏  
+ 背景
bg-danger/success/info...  
+ 居中对齐
m-auto  
+ margin
m-\*(0/1/2/3/4/5)--->(0/0.25/0.5/1/1.5/3)
+ padding
p-\*(0/1/2/3/4/5)--->(0/0.25/0.5/1/1.5/3)
pt-\*/pr-\*/pb-\*/pl-(0/1/2/3/4/5)---(0/0.25/0.5/1/1.5/3)
宽度/高度  
w-\*(25/50/75/100)
h-*同上  
## 三、栅格布局 (重要******)   
+ 3.1web页面布局的方法 
    + 3.1.1table布局   
    ```  
    table布局  
        优点：简单,容易控制
        缺点:语义错误
        缺点：渲染效率低(最后一个数据加载完成之后，才能统一开始渲染)
    div+css  
        优点：语义正确，渲染效率高
        缺点：控制比较麻烦
        缺点：媒体查询写起来更繁琐
    bootstrap中的栅格布局
      优点：简单，容易控制，语义正确，渲染效率高，支持响应式
      缺点：页面如果太复杂，不太适合使用
    ```  
总结：  
1.最外层需要使用容器  
.container 定宽容器 最大宽度是写死的  
.container-fluid变宽容器 宽度是父元素的100%  
2.容器中声明.row弹性布局(一行内等分为12个单元格)  
3.行中声明列col-n(每个列都需要制定宽度占比n/12)    
作业：  
使用栅格布局完成下面作业  




     







