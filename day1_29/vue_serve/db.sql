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