#设置客户端连接数据库编码为UTF8
SET NAMES UTF8;
#丢弃数据库,如果存在dangdang
DROP DATABASE IF EXISTS dangdang;
#创建数据库dangdang,设置编码为UTF8
CREATE DATABASE dangdang CHARSET=UTF8;
#进入数据库
use dangdang;
#创建表book
CREATE TABLE book(
bid INT,
title VARCHAR(20),
price INT,
pubDate VARCHAR(10),
isJia VARCHAR(1)
);
#插入4条记录  
INSERT INTO book VALUES('1','哈克斯','60','1992-03-15','1'),('2','凯乐科技','120','1994-08-15','0'),('3','凯乐科技','120','1994-08-15','0'),('4','看到经济','360','1990-03-15','1');
#修改第二条书的信息
UPDATE book SET title='娱乐',price='56' WHERE bid='2';
#删除第三条书的信息
DELETE FROM book WHERE bid='3';
#查询所有书
SELECT * FROM book;



