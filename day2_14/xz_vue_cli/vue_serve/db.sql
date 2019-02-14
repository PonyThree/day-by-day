--  功能一：创建新闻表
-- 1.表名:xz_news
-- 2.几列 4
-- 3.列名 id/title/img_url/ctime/point/content
-- 4.类型
	-- id 			INT
	-- title		VARCHAR(255)
	-- img_url		varchar(255)
	-- ctime  		DATETIME
	-- point		INT
	-- content		VARCAHR(2000)
-- 5.添加20条件

use xz;
CREATE TABLE xz_news(
	id INT PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(255),
	img_url VARCHAR(255),
	ctime	DATETIME,
	point	INT,
	content	VARCHAR(2000)
);
INSERT INTO xz_news VALUES(null,'123a','http://127.0.0.1:3000/1.png',now(),0,'123');
INSERT INTO xz_news VALUES(null,'123b','http://127.0.0.1:3000/1.png',now(),0,'123');
INSERT INTO xz_news VALUES(null,'123c','http://127.0.0.1:3000/1.png',now(),0,'123');
INSERT INTO xz_news VALUES(null,'123d','http://127.0.0.1:3000/1.png',now(),0,'123');
INSERT INTO xz_news VALUES(null,'123e','http://127.0.0.1:3000/1.png',now(),0,'123');
INSERT INTO xz_news VALUES(null,'123f','http://127.0.0.1:3000/1.png',now(),0,'123');
INSERT INTO xz_news VALUES(null,'123g','http://127.0.0.1:3000/1.png',now(),0,'123');
INSERT INTO xz_news VALUES(null,'123h','http://127.0.0.1:3000/1.png',now(),0,'123');
INSERT INTO xz_news VALUES(null,'123i','http://127.0.0.1:3000/1.png',now(),0,'123');
INSERT INTO xz_news VALUES(null,'123j','http://127.0.0.1:3000/1.png',now(),0,'123');
INSERT INTO xz_news VALUES(null,'123k','http://127.0.0.1:3000/1.png',now(),0,'123');
INSERT INTO xz_news VALUES(null,'123l','http://127.0.0.1:3000/1.png',now(),0,'123');
INSERT INTO xz_news VALUES(null,'123m','http://127.0.0.1:3000/1.png',now(),0,'123');
INSERT INTO xz_news VALUES(null,'123n','http://127.0.0.1:3000/1.png',now(),0,'123');
INSERT INTO xz_news VALUES(null,'123o','http://127.0.0.1:3000/1.png',now(),0,'123');
INSERT INTO xz_news VALUES(null,'123p','http://127.0.0.1:3000/1.png',now(),0,'123');
INSERT INTO xz_news VALUES(null,'123q','http://127.0.0.1:3000/1.png',now(),0,'123');
INSERT INTO xz_news VALUES(null,'123r','http://127.0.0.1:3000/1.png',now(),0,'123');
INSERT INTO xz_news VALUES(null,'123s','http://127.0.0.1:3000/1.png',now(),0,'123');
INSERT INTO xz_news VALUES(null,'123t','http://127.0.0.1:3000/1.png',now(),0,'123');
-- 功能二:创建一个评论表
-- 内容、时间、哪条新闻、编号
CREATE TABLE xz_comment(
	id INT PRIMARY KEY AUTO_INCREMENT,
	content VARCHAR(50),
	ctime DATETIME,
	nid INT
);
INSERT INTO xz_comment VALUES(null,'赞一个1',now(),1);
INSERT INTO xz_comment VALUES(null,'赞一个2',now(),2);
INSERT INTO xz_comment VALUES(null,'赞一个3',now(),3);
INSERT INTO xz_comment VALUES(null,'赞一个4',now(),4);
INSERT INTO xz_comment VALUES(null,'赞一个5',now(),5);
INSERT INTO xz_comment VALUES(null,'赞一个6',now(),6);
INSERT INTO xz_comment VALUES(null,'赞一个7',now(),7);
INSERT INTO xz_comment VALUES(null,'赞一个8',now(),8);
INSERT INTO xz_comment VALUES(null,'赞一个9',now(),9);
INSERT INTO xz_comment VALUES(null,'赞一个10',now(),10);
INSERT INTO xz_comment VALUES(null,'赞一个11',now(),11);
-- 创建用户的登录表
-- 用户登录密码需要加密保存使用  mysql 自带的函数md5()
CREATE TABLE xz_login(
	id INT PRIMARY KEY AUTO_INCREMENT,
	uname VARCHAR(25),
	upwd VARCHAR(32)
);
INSERT INTO xz_login VALUES(null,'tom',md5('123'));
-- 理解：用户输入123对比用户输入内容加密
-- 加密后与数据库密码比较
-- SELECT id FROM xz_login WHERE uname=? AND upwd=md5(?); 
-- 创建购物车表
CREATE TABLE xz_cart(
	id INT PRIMARY KEY AUTO_INCREMENT,
	count INT,
	price DECIMAL(15,2),
	pid INT,
	uid INT  --谁买的
);
