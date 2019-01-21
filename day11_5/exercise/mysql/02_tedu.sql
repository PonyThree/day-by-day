#设置客户端连接服务器的编码UTF8
SET NAMES UTF8;
#丢弃数据库tedu ,如果存在
DROP DATABASE IF EXISTS tedu;
#创建数据库tedu,设置存储编码方式为UTF8
CREATE DATABASE tedu CHARSET=UTF8;
#进入数据库
USE tedu;
#创建表dept
CREATE TABLE dept(
	did TINYINT PRIMARY KEY,
	dname VARCHAR(8) UNIQUE
);
#插入数据
INSERT INTO dept VALUES(10,"研发部"),
									(20,"市场部"),
									(30,"运营部"),
									(40,"测试部");
#创建表emp员工表 FOREIGN KEY外键 REFERENCES引用
CREATE TABLE emp(
	eid SMALLINT PRIMARY KEY AUTO_INCREMENT,
	ename VARCHAR(8),
	sex BOOL,
	birthday DATE,
	salary DECIMAL(7,2),
	deptId TINYINT,
	 #deptId取值范围是到另一个表的did中去取
	 FOREIGN KEY (deptId) REFERENCES dept(did) 
);
#插入数据
INSERT INTO emp VALUES(NULL,"张三丰",1,"1996-6-2",10000,20),
					(NULL,"李三丰",0,"1992-8-22",8000,30),
					(NULL,"陈三丰",0,"1996-6-2",9999.99,10),
					(NULL,"李四丰",1,"1993-9-12",6500,30),
					(NULL,"李丰",0,"1993-9-12",6080,10),
					(NULL,"三丰",1,"1998-9-12",6000,30),
					(NULL,"刘丰",1,"1993-9-12",6800,20),
					(NULL,"王四",0,"1993-9-12",6000,30),
					(NULL,"李月",0,"1995-9-12",6000,20),
					(NULL,"王麻子",1,"1993-9-12",6000,10),
					(NULL,"刘宇",1,"1990-9-12",6000,30),
					(NULL,"张晶",0,"1980-9-12",9000,30),
					(NULL,"李东",0,"1992-8-12",6000,20),
					(NULL,"马静",1,"1860-1-12",6900,30);
#查询数据
SELECT * FROM emp;
