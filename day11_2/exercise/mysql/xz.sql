
#设置客户端连接服务器使用的编码为UTF8 
SET NAMES UTF8;
/*课后任务：  
(1)复习今天的内容，保留注释，重新编写代码  
(2)创建脚本文件xz.sql,重新创建数据库xuezi;丢弃数据库xuezi,如果存在。创建数据表user,包含列uid编号,uname用户名,upwd密码,email邮箱,phone电话,sex性别,user_name真实姓名,registerTime注册时间。插入3条记录,查询出所有记录。*/  
#丢弃数据库，如果存在xuezi
DROP DATABASE IF EXISTS xuezi;
#创建数据库xuezi时，设置存储的编码为UTF8
	CREATE DATABASE xuezi CHARSET=UTF8;
#进入数据库
	use xuezi;
#创建数据库user
	CREATE TABLE user(
		uid INT,
		uname VARCHAR(20),
		upwd  VARCHAR(26),
		email VARCHAR(30),
		phone VARCHAR(11),
		sex VARCHAR(1),
		user_name VARCHAR(36),
		registerTime VARCHAR(18)
		);
#向表中插入数据
    INSERT INTO user VALUES('20','AA','123','123@163.com','17347730050','M','李莉','1999-01-22'),('21','BB','124','124@163.com','17347730051','F','张三','1999-02-22'),('23','CC','125','125@163.com','17347730052','M','亮哥','1999-03-22');
#更改记录
UPDATE user SET upwd='654321',email='LiLi@qq.com' WHERE  uid='21';
UPDATE user SET phone='13188888888',sex='M',registerTime='2017-3-1' WHERE uid='20';
#删除记录
DELETE FROM user WHERE uid='21';
#查询表中数据
	SELECT * FROM user;


