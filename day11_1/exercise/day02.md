# 第二天笔记 11.1  数据库DDL（定义数据语言）  
 1.保存数据的几种形式  
 + 内存 临时保存数据  
 + 文件 不便于管理
 + 第三方机构 例如：腾讯云、阿里云、百度云
 + 独立数据库服务器  
 
2.数据库的概述  

**Database**(数据库)，以特定的结构批量存储数据的软件。   
**数据库的发展史：**  
+ 网状数据库
+ 层次型数据库  
+ 关系型数据库 (重点)  RDBMS（关系型数据库管理 relation database manage system） 里面可以拥有多个数据库  
==关系型数据库中数据的逻辑结构==  
Server-> Database->Table->Row->Column
服务器->数据库->表->行->列   
**数据库的类型：**  
+ SQLite 微型数据库，常用于移动设备
+ Mysql 开源中小型数据库，可用于各种操作系统
+ SQL Server Microsoft开发的中型数据库，只用于Windows系统
+ Oracle Oracle公司开发的中大型数据库，可用于各种操作系统 (亚马逊)   
![老哥稳住呀](timg.jpg)

3.Mysql(关系型数据库)   
最初由瑞典MySQL AB公司开发，后被SUN收购，随后又被Oracle收购。
MysqlDB分支 ->oracle 海豚
MariaDB-分支>马蒂  海狮  

4.==xampp服务器==套装软件，包含多款服务器软件[xampp下载地址](https://www.apachefriends.org/download)  

d->Deamon 精灵，守护者   

**启动mysql服务器:** 

(1)mysqld.exe 启动Mysql服务器

(2)xampp文件夹 ->Mysql->bin->mysqld.exe   启动mysql服务器  

5.Mysql数据库系统  
+ 服务器端：负责存储数据
 C:/xampp/mysql/bin/mysqld.exe
+ 客户端：负责向服务器发起增删改查的命令
    C:/xampp/mysql/bin/mysql.exe  

6.客户端连接数据库服务器   

mysql.exe -h127.0.0.1 -P3306 -uroot -p   
mysql.exe -hlocalhost -P3306 -uroot -p  
-h host服务器的IP地址/域名 可以使用localhost  
-P 端口，Mysql服务使用的端口3306  
-u 用户   
-p 密码  
***最简单的进入形式->mysql -uroot***  
练习：尝试使用错误的信息连接数据库服务器，看看有什么区别。  
7. **Mysql**管理命令(==注意有结束符号分号==)  
+ quit; 退出服务器连接
+ show databases; 显示数据库服务器下当前的所有数据库 
+ use 数据库名; 开始使用指定的数据库
+ show tables; 查看当前数据库中所有的表
+ desc(description) 表名;  描述表中有哪些列（表头）   
练习：查看phpmyadmin数据库下都有哪些列
pma_favorite pma_history pma_recent   

![老哥稳住呀](timg_1.gif)    ![帅老哥](handsome.gif)
 
***8.Mysql常用的SQL命令*** 

***SQL:*** Structured Query Language，结构化查询语言，用于操作==关系型数据库服务器==中的数据。  

SQL语言最早是由IBM提出，后提交给ISO，成为行业内标准语言。分为多个版本：SQL-87、SQL-92、SQL-99。当前标准的SQL语言被绝大多数关系型数据库所支持。  
SQL命令的两种模式：
+ （1）客户端连接MySQL，输入一行回车，服务器执行一行。适用于临时性的查看数据。  
**mysql -uroot  回车**  

+ （2）脚本模式：客户端把要执行的多行命令写在一个脚本文件中，一次性提交给服务器执行。适用于批量的操作数据。    
**mysql -uroot < 文件拖拽过来(显示的是当前sql执行脚本文件的路径)**  

**SQL语法规范**   

(1)每条SQL语句必须以英文分号作为结尾，一条语句可以跨越多行，见到分号认为结束。  
(2)若第n条SQL语句有语法错误，则后续所有的语句不会再执行。  
(3)在SQL命令中，不区分大小写，但是习惯上数据库的关键字用大写，非关键字用小写。  
(4)SQL语句中还可以使用单行注释：#...或者/*...*/，注释的内容不会被服务器所执行。  

***日常开发常用的SQL命令***  
(1)丢弃数据库，如果存在的话  
**DROP DATABASE IF EXISTS jd;**  
(2)创建新的数据库  
**CREATE DATABASE jd;**  

![帅的一批](lx.jpg)   
练习：创建脚本文件06.sql；先丢弃数据库tedu,如果存在的话，创建新数据库tedu;[练习](mysql/06.sql)

(3)进入刚刚创建的数据库  脚本文件05.sql 
**use jd;**  
(4)创建新的数据表  
**CREATE TABLE student(
    sid INT  ,#interger 整型  
    sname VARCHAR(6), #variable charactor 可变的字符  
    sex VARCHAR(1), #男 ->M 女->F  
    score INT
);**  
(5)插入数据(记录)  
**INSERT INTO student VALUES('10','Tom','M','89');  
INSERT INTO student VALUES('11','Bom','F','90');  
INSERT INTO student VALUES('12','Pom','M','91');  
INSERT INTO student VALUES('13','Fom','M','92');  
INSERT INTO student VALUES('14','Jom','F','93');  
INSERT INTO student VALUES('15','Gom','M','94'),('16','Yom','F','95'),('17','Rom','F','96'),('18','Dom','M','97');**  

(6)查询数据表中所有的记录  
**SELECT * FROM student;**  

练习：创建脚本文件07.sql;先丢弃数据库xuezi，如果存在的话，创建数据表laptop,包含列有lid(编号),title(标题),price(价格),number(数量);插入三条记录，查询出所有记录。  [练习](mysql/07.sql)

课后任务：  
(1)复习今天的内容，保留注释，重新编写代码  
(2)创建脚本文件xz.sql,重新创建数据库xuezi;丢弃数据库xuezi,如果存在。创建数据表user,包含列uid编号,uname用户名,upwd密码,email邮箱,phone电话,sex性别,user_name真实姓名,registerTime注册时间。插入3条记录,查询出所有记录。 
[练习](mysql/xz.sql)


 




