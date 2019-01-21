# 设置客户端连接服务器编码为UTF8
SET NAMES UTF8;
# 丢弃数据库,如果存在web1810  
DROP DATABASE IF EXISTS web1810;
#创建数据库web1810
CREATE DATABASE web1810 CHARSET=UTF8;
#使用数据库
USE web1810;
#1.创建表student
CREATE TABLE student(
Id INT(10) PRIMARY KEY NOT NULL UNIQUE AUTO_INCREMENT,
Name VARCHAR(20) NOT NULL,
Sex VARCHAR(4),
Birth YEAR,
Department VARCHAR(20) NOT NULL,
Address VARCHAR(50)
);
#1.创建表score
CREATE TABLE score(
Id INT(10) PRIMARY KEY NOT NULL UNIQUE AUTO_INCREMENT,
Stu_id INT(10) NOT NULL,
C_name VARCHAR(20),
Grade INT(10),
FOREIGN KEY(Stu_id) REFERENCES student(Id)
);
# 2.向表student中插入数据
INSERT INTO student VALUES( 901,'张老大', '男',1985,'计算机系', '北京市海淀区');
INSERT INTO student VALUES( 902,'张老二', '男',1986,'中文系', '北京市昌平区');
INSERT INTO student VALUES( 903,'张三', '女',1990,'中文系', '湖南省永州市');
INSERT INTO student VALUES( 904,'李四', '男',1990,'英语系', '辽宁省阜新市');
INSERT INTO student VALUES( 905,'王五', '女',1991,'英语系', '福建省厦门市');
INSERT INTO student VALUES( 906,'王六', '男',1988,'计算机系', '湖南省衡阳市');
#2.向表score中插入数据
INSERT INTO score VALUES(NULL,901, '计算机',98);
INSERT INTO score VALUES(NULL,901, '英语', 80);
INSERT INTO score VALUES(NULL,902, '计算机',65);
INSERT INTO score VALUES(NULL,902, '中文',88);
INSERT INTO score VALUES(NULL,903, '中文',95);
INSERT INTO score VALUES(NULL,904, '计算机',70);
INSERT INTO score VALUES(NULL,904, '英语',92);
INSERT INTO score VALUES(NULL,905, '英语',94);
INSERT INTO score VALUES(NULL,906, '计算机',90);
INSERT INTO score VALUES(NULL,906, '英语',85);
#3.查询student表的所有记录
SELECT * FROM student;
#4.查询student表的第2条到4条记录
SELECT * FROM student WHERE Id LIMIT 1,3;
#5.从student表查询所有学生的学号（id）、姓名（name）和院系（department）的信息
SELECT Id,Name,Department FROM student;
#6.从student表中查询计算机系和英语系的学生的信息
SELECT * FROM student WHERE Department='计算机系' OR Department='英语系';
SELECT * FROM student WHERE Department IN ('计算机系' ,'英语系');
#7.从student表中查询年龄18~22岁的学生信息
SELECT id,name,sex,Birth,department,address  FROM student WHERE Birth BETWEEN  '1996' AND '2000';
#8.从student表中查询每个院系有多少人 
  SELECT Department,COUNT(*) FROM student GROUP BY Department;
#9.从score表中查询每个科目的最高分
SELECT C_name,MAX(Grade) FROM score GROUP BY C_name;
#10.查询李四的考试科目（c_name）和考试成绩（grade）
SELECT C_name,Grade FROM score WHERE Stu_id=(
	SELECT Id FROM student WHERE Name='李四'	
);
#11.用连接的方式查询所有学生的信息和考试信息
SELECT student.Id,Name,Sex,Birth,Department,Address,C_name,Grade FROM student,score WHERE score.Stu_id=student.Id;
#12.计算每个学生的总成绩
SELECT Student.id,Name,SUM(Grade) FROM score,student WHERE Student.id=score.Stu_id GROUP BY Student.Id;
#13.计算每个考试科目的平均成绩
SELECT C_name ,AVG(Grade) FROM score GROUP BY C_name ;
#14.查询计算机成绩低于95分的学生信息
SELECT * FROM student,score WHERE Grade<95 AND C_name='计算机' AND Student.id=score.Stu_id;
#15.查询同时参加计算机和英语考试的学生的信息
SELECT * FROM score WHERE C_name='计算机' AND C_name='英语';
#16.将计算机考试成绩按从高到低进行排序
SELECT * FROM score WHERE C_name='计算机'  ORDER BY Grade DESC;
#17.从student表和score表中查询出学生的学号，然后合并查询结果
(SELECT Id FROM student)
UNION 
(SELECT Stu_id FROM score);
#18.查询姓张或者姓王的同学的姓名、院系和考试科目及成绩
SELECT Name,Department,C_name,Grade FROM student,score WHERE ( Name LIKE '张%' OR '王%') AND score.Stu_id=student.Id ;
#19.查询都是湖南的学生的姓名、年龄、院系和考试科目及成绩
SELECT Name,Birth,Department,C_name,Grade FROM student,score WHERE  Address LIKE '湖南%'AND score.Stu_id=student.Id; 