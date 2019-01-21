#创建数据库jd  
#CREATE DATABASE jd;
#丢弃数据库，如果存在jd
	DROP DATABASE IF EXISTS jd;
#创建数据库jd
	CREATE DATABASE jd;
#进入数据库jd
	USE jd;
#创建数据表
CREATE TABLE student(
	sid INT  ,#interger 整型
	sname VARCHAR(6), #variable charactor 可变的字符
	sex VARCHAR(1),#男 ->M 女->F
	score INT
);
#想表中插入一行数据(记录)
INSERT INTO student VALUES('10','Tom','M','89');
INSERT INTO student VALUES('11','Bom','F','90');
INSERT INTO student VALUES('12','Pom','M','91');
INSERT INTO student VALUES('13','Fom','M','92');
INSERT INTO student VALUES('14','Jom','F','93');

#练习：再次插入4行数据
INSERT INTO student VALUES('15','Gom','M','94'),('16','Yom','F','95'),('17','Rom','F','96'),('18','Dom','M','97');
#查询数据表中的记录
SELECT * FROM student;