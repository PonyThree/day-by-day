/*创建脚本文件xz.sql,重新创建数据库xuezi;丢弃数据库xuezi,如果存在。创建数据表user,包含列uid编号,uname用户名,upwd密码,email邮箱,phone电话,sex性别,user_name真实姓名,registerTime注册时间。插入3条记录,查询出所有记录。*/  
#丢弃数据库xuezi
DROP DATABASE IF EXISTS xuezi;
#创建数据库xuezi 
	CREATE DATABASE xuezi;
#进入数据库
	use xuezi;
#创建表user
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
#插入数据  
	INSERT INTO user VALUES(1,'ponywei','1973063114@qq.com','18323479896','0','ponythree','1990-10-12'),(2,'ponythree','1973063115@qq.com','18323479897','1','ponywei','1991-11-12'),(3,'jack','1973063115@qq.com','18323479898','1','rose','1992-10-28');
#查询数据
	SELECT * FROM user;


