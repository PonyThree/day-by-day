#丢弃数据库，如果存在xuezi 
DROP DATABASE IF EXISTS xuezi;
#创建数据库xuezi 
CREATE DATABASE xuezi;
#进入数据库xuezi
use xuezi;
#创建表laptop
CREATE TABLE laptop(
	lid INT ,
	title VARCHAR(20),
	price INT,
	number INT
);
#向表laptop中插入数据
INSERT INTO laptop VALUES('01','computer','9988','100'),('02','game','998800','20'),('03','study','98','1000');
#查询表中的数据
SELECT * FROM laptop;