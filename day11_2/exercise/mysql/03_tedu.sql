/*练习：创建脚本文件03_tedu.sql; 创建数据库tedu，设置存储的编码；  
创建保存部门信息的表dept,包含(did,dname,empCount员工数量),插入三条数据  
10 研发部 3   
20 市场部 2   
30 运营部 1   
创建保存员工信息的表emp，包含(eid,ename姓名,sex,birthday生日,salary工资deptid所属部门编号)。*/ 
#设置客户端连接服务器使用的编码为UTF8 
SET NAMES UTF8;
#丢弃数据库，如果存在tedu
DROP DATABASE IF EXISTS tedu;
#创建数据库tedu时，设置存储的编码为UTF8
	CREATE DATABASE tedu CHARSET=UTF8;
#进入数据库
	use tedu;
#创建部门表dept 
	CREATE TABLE dept(
		did TINYINT,
		dname VARCHAR(8),
		empCount SMALLINT
		);
#向dept部门表中插入数据
	INSERT INTO dept VALUES(10,'研发部',3),
	(20,'市场部',2),
	(30,'运营部',1);
#创建员工表emp
	CREATE TABLE emp(
		eid SMALLINT,
		ename VARCHAR(8),
		sex BOOL,#1->男 0->女
		birthday DATE,
		salary DECIMAL(7,2),#99999.99
		deptid TINYINT 
	);
#向emp员工表中插入数据
INSERT INTO emp VALUES(1,'汤姆',1,'1993-3-2',8000,10),
(2,'路西',0,'1995-10-22',7000,20),
(3,'杰瑞',1,'1997-5-2',1000,30);	
#查询表中数据
	SELECT * FROM dept;


