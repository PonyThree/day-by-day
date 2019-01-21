/*练习：练习：创建脚本文件02_xuezi.sql;创建数据库xuezi,设置保存的数字编码为UTF8;创建保存笔记本信息的表laptop,包含列lid编号,title标题，price价格,stockCount库存量,shelfTime上架时间,isIndex是否显示在首页。插入4条记录。*/ 
#设置客户端连接服务器使用的编码为UTF8 
SET NAMES UTF8;
#丢弃数据库，如果存在xuezi
DROP DATABASE IF EXISTS xuezi;
#创建数据库xuezi时，设置存储的编码为UTF8
	CREATE DATABASE xuezi CHARSET=UTF8;
#进入数据库
	use xuezi;
#创建表laptop
	CREATE TABLE laptop(
		lid INT,
		title VARCHAR(128),##128个字符
		price DECIMAL(7,2),##99999.99
		stockCount SMALLINT,
		shelfTime DATE,
		isIndex BOOL
		);
#向表中插入数据
    INSERT INTO laptop VALUES(1,'小米AIR',4666.45,500,'2015-5-15',TRUE),
	(2,'联想Thinkpad','5000.99',1000,'2017-12-1',FALSE),
	(3,'戴尔燃700','8000',233,'2018-4-25',1);
#更改记录
#UPDATE laptop SET 
#UPDATE laptop SET 
#删除记录
#DELETE FROM laptop WHERE lid='2';
#查询表中数据
	SELECT * FROM laptop;


