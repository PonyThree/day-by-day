# 第三天笔记 11.2  数据库DDL（定义数据语言）  
## 1.更改记录  
**UPDATE user SET upwd='654321',email='LiLi@qq.com' WHERE  uid='21';**   
![轻松练习](xz1.jpg)  
练习：更改编号为21的数据，电话号码为13188888888，性别改为'M'，注册时间改为'2017-3-1'。  
## 2.删除记录  
**DELETE FROM user WHERE uid='21';**   
## 3.解决数据库中文乱码问题  
***计算机中如何存储英文字符？***    
>ASCII:总共有128个，多所有的听英文字符号进行了编码。  
 hello 72698977  
Latin-1:总用有256个，兼容 ASCII，同时对欧洲符号进行了编码。  

***<font color="#f66">计算机中如何存储中文字符?</font>***  
+ GB2312:对6千多个常用的汉子进行了编码，兼容ASCII码。  
+ GBK：对2万多汉字进行了编码，兼容GB2312。  
+ BIG5:台湾繁体字编码，不兼容GB2312和GBK，兼容ASCII。  
+ Unicode:对世界上主要的语言的字符进行的编码，兼容ASCII码，不兼容GBK，GB2312，具体分为UTF8，UTF16，UTF32三种存储方案。    
***<font color="hotpink">中文乱码产生的根源</font>***   
Mysql中默认使用的Latin-1 编码，而这个编码不能存储中文。   
***<font color="#f66">解决Mysql存储中文乱码！！！</font>***  
>(1)sql脚本文件另存为的编码  
(2)客户端连接服务器使用的编码  
(3)服务器端数据库存储数据使用的编码    

&emsp;&emsp;都统一使用UTF8编码。  
<font color="red">设置editplus的默认编码：</font>  
Tools->preferences->file->default encoding  
![尝试小练习](xz2.gif)    

练习：创建一个脚本文件01_dangdang.sql；设置连接数据库编码为utf8，创建数据库dangdang，进入该数据库，创建数据表book,包含bid编号,title标题,price价格,pubDate出版时间，isJia是否加购价(是->1,不是->0)；插入4本书的信息，修改第2条书的信息，删除第3条，查询结果。 [练习](mysql/01_dangdang.sql) 
## 4. Mysql中列类型  
列类型：创建表的时候，指定列可以存储的数据类型
CREATE TABLE book(bid 列类型);  
(1)数值类型    
><font color="purple">TINYINT:</font>&emsp;微整型,占用1个字节(byte),范围-128 ~ 127    
<font color="purple">SMALLINT:</font>&emsp;小整型,占用2个字节,范围-32768 ~ 32727  
<font color="purple">INT:</font>&emsp;整型，占用4个字节，范围-2147483648  ~ 2147483647    
<font color="purple">BIGINT:</font>&emsp;大整型，占用8个字节，范围很大。
1tb=1024gb 1gb=1024mb 1mb=1024kb 1kb=1024byte 1byte=8bit  
<font color="purple">FLOAT:</font>&emsp;单精度浮点型，占4个字节,3.4E38,范围比INT大得多，但是精度不如INT，可能产生误差。  
<font color="purple">DOUBLE:</font>&emsp;双精度浮点型，占8个字节,1.79E308,范围比BIGINT大得多，但是精度不如BIGINT,可能产生误差。  
<font color="purple">DECIMAL(M,D):</font>&emsp;定点小数,例如：219.85 DECIMAL(5,2)，不会产生计算误差的舍入;M代表总的有效位数(不包含小数点)，D 代表小数点后有效位数。  
<font color="purple">BOOL:</font>&emsp;布尔型，取值只能是TRUE/1、FALSE/0,但实际上数据库在存储的时候使用TINYINT(1或0),<font color="red">不能加引号</font>。   

(2)字符串类型<font color="red">------必须加引号</font>  
><font color="green">VARCHAR(M):</font>&emsp;变长字符串,不会产生空间浪费，操作速度相对慢,M不能超过65535。  
<font color="green">CHAR(M):</font>&emsp;定长字符串，可能产生浪费，操作速度相对快,M不能超过255。   
<font color="green">TEXT:</font>&emsp;大型变长字符串，M不超过2G。      

(3)日期时间类型<font color="red">------必须加引号</font>   
><font color="green">DATETIME:</font>&emsp;日期时间类型,'2018-11-2 15:18:30'    
<font color="green">TIME:</font>&emsp;时间类型 '15:18:30'   

&emsp;&emsp;练习：创建脚本文件02_xuezi.sql;创建数据库xuezi,设置保存的数字编码为UTF8;创建保存笔记本信息的表laptop,包含列lid编号,title标题，price价格,stockCount库存量,shelfTime上架时间,isIndex是否显示在首页。插入4条记录。[练习](mysql/02_xuezi.sql)  
&emsp;&emsp;练习：创建脚本文件03_tedu.sql; 创建数据库tedu，设置存储的编码；  
&emsp;&emsp;创建保存部门信息的表dept,包含(did,dname,empCount员工数量),插入三条数据  
&emsp;&emsp;&emsp;&emsp;10 研发部 3   
&emsp;&emsp;&emsp;&emsp;20 市场部 2   
&emsp;&emsp;&emsp;&emsp;30 运营部 1   
&emsp;&emsp;创建保存员工信息的表emp，包含(eid,ename姓名,sex,birthday生日,salary工资deptid所属部门编号)。[练习](mysql/03_tedu.sql)  

![休息片刻](xz2.jpg) 
## 5.列约束  
Mysql可以对插入的数据进行特定的检验，只有满足条件的数据才能插入成功，否则会提示"非法插入","禁止插入"。例如：插入人的年龄范围为0~100之间，商品的价格大于0。  
<font color="blue">Mysql提供了六种列约束</font>  
(1). 主键约束-----PRIMARY KEY   
 声明了主键约束的列上不能插入重复的值，如果主键的数据是数值辉自动按照由小到大的顺序排列————加快查找速度。  
 <font color="red">注意：</font>一个表中最多有一个主键。  
 <font color="Skyblue">Mysql中的NULL含义：</font>空的，空缺的；指应该有某个数据，但是暂时还不能够确定具体的值；  
 例如：还没到发年终奖，未决定员工的部门，未确定部门经理。  
 课后任务：  
 + 复习今天内容  
 + 练习：创建脚本文件xuezi.sql,创建数据库xuezi,使用UTF8编码，创建保存笔记本分两类表xuezi_laptop_family(fid,fname分类名称,laptopCount笔记本数量)   
 10 戴尔 3  
 20 小米 1  
 30 苹果 2  
 创建笔记本信息表xz_laptop,包含(lid,title,price,detail介绍,shelfTime上架时间,isOnsale是否在售,familayId所属分类),插入6条记录。[练习](mysql/xuezi.sql)








