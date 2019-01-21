#设置客户端连接服务器的编码UTF8
SET NAMES UTF8;
#丢弃数据库xuezi ,如果存在
DROP DATABASE IF EXISTS xuezi;
#创建数据库xuezi,设置存储方式为UTF8
CREATE DATABASE xuezi CHARSET=UTF8;
#进入数据库
use xuezi;
#创建表xz_laptop_family笔记本分类表
CREATE TABLE xz_laptop_family(
	fid SMALLINT PRIMARY KEY,
	fname VARCHAR(8),
	laptopCount SMALLINT
);
#插入数据
INSERT INTO xz_laptop_family VALUES(10,"戴尔",3),
									(20,"小米",1),
									(30,"苹果",2);
#创建表xz_laptop 笔记本信息表 FOREIGN KEY外键 REFERENCES引用
CREATE TABLE xz_laptop(
	 lid INT PRIMARY KEY AUTO_INCREMENT,#主键约束
	 title VARCHAR(128) UNIQUE,#唯一约束
	 price DECIMAL(6,2),
	 detail VARCHAR(3000) NOT NULL,#非空约束 
	 shelfTime DATE,
	 isOnsale BOOL DEFAULT 1,#设置默认值为在售
	 familyId SMALLINT,
	 #familyId取值范围是到另一个表的fid中去取
	 FOREIGN KEY (familyId) REFERENCES xz_laptop_family(fid) 
);
#插入数据
INSERT INTO xz_laptop VALUES(1,"小米AIR",39999.55,NULL,"2018-7-1",1,20),
									(2,NULL,5000,"商品描述","2018-10-1",1,10),
									(3,"ThinkPad",4000,"商品介绍","2016-5-1",0,30),
									(4,NULL,4000,"商品介绍","2017-5-1",0,20),
									(5,NULL,10000,"商品介绍","2018-12-1",0,30),
									(6,"小米PRO",9800,"商品介绍","2017-3-15",DEFAULT,20);
INSERT INTO xz_laptop(lid,detail,shelfTime,familyId) VALUES(7,"这是详情","2017-12-1",30);
INSERT INTO xz_laptop VALUES(NULL,"小米New",7200,"商品描述","2018-9-1",1,20),(12,"戴尔New",7600,"商品描述","2018-9-22",1,10);
INSERT INTO xz_laptop(lid,detail,shelfTime,familyId) VALUES(NULL,"这是详情","2017-12-1",30);
#查询数据
SELECT * FROM xz_laptop;
