# 第四天笔记 11.5  DDL 定义数据语言  
## 1.列约束  
(1)主键约束----PRIMARY KEY   
(2)唯一约束----UNIQUE  
&emsp;&emsp;声明了唯一约束的列上不能插入重复的值，但可以插入NULL，而且可以插入多个NULL。  

![休息时间](xz2.jpg)   

(3)非空约束---NOT NULL  
&emsp;&emsp;声明非空约束的列上不能插入NULL值，如果插入的是NULL也不会报错，只是会显示空内容。  
(4)默认值约束---DEFAULT  
&emsp;&emsp;可以使用DEFAULT关键字为列声明默认值，有以下两种方法：  

 <font color="purple">INSERT INTO xz_laptop VALUES(1,"小米AIR",DEFAULT...)</font>  

  <font color="purple">INSERT INTO xz_laptop(lid,title) VALUES(2,"苹果PRO")</font>   
  (5)检查约束  
  &emsp;&emsp;检查约束可以对插入的数据范围进行验证  
  CREATE TABLE student(
      age TINYINT CHECK(age>18 AND age<60)
  );  
    <font color="red">注意：</font>mysql数据库不支持检查约束(CHECK),它认为会降低插入和更新等操作效率。  
(6)外键约束---FOREIGN KEY   
&emsp;&emsp;声明了外键约束的列，取值必须在另一个表的主键上出现过,取值可以是NULL。  
<font color="red">注意：</font>外键的列类型要和另外一个表主键的列类型一致。所有的列约束中，主键约束是推荐使用的---可以提高查询效率，其他的列约束是否使用根据项目而定，可以不用---会影响数据的插入和更新效率。   
<font color="purple">FOREIGN KEY (familyId) REFERENCES xz_laptop_family(fid) </font>   
## 2.Mysql中的自增列  
AUTO_INCREMENT:自动增加,加入一个列声明了自增列，无需手动赋值，直接指定为NULL，会自动获取当前的最大值，新纪录会执行+1然后插入。   
<font color="red">注意：</font>   
+ 允许手动赋值  
+ 只用于整数型的主键列上   
练习：使用列约束  
创建脚本文件02_tedu.sql，创建数据库tedu,创建部门表dept,包含did,dname部门名称  
10 研发部  
20 市场部  
30 运营部  
40 测试部  
创建员工表emp,包含eid,ename,sex,birthday生日,salary工资,deptId隶属部门编号  
插入14条记录,分属于10/20/30部分，其中最后一个员工不属于任何一个部门。[练习](mysql/02_tedu.sql)   
![午饭时间到](wf.jpg) 
## 3.项目中如何存储日期时间数据  
&emsp;&emsp;208-11-11&emsp;&emsp;11-11-2018&emsp;&emsp;25/11/2018  
&emsp;&emsp;2018年11月25日  
&emsp;存储的是距离计算机元年的毫秒数,使用<font color="hotpink">BIGINT</font>类型。  
&emsp;计算机元年  1970-1-1 0:0:0 
&emsp;1秒钟=1000毫秒  
&emsp;数据库存储1000   1970-1-1  0:0:1  
&emsp;1000*60     1970-1-1 0:1:0  
&emsp;1000*60*60  1970-1-1 1:0:0  
&emsp;2018年距离计算机元年的毫秒数是：48*365*24*60*60*1000    
## 4.简单查询  
(1)查询所有的列  
SELECT * FROM emp;   
<font color="green">*</font> 代表所有的列  
(2)查询特定的列  
示例：查询所有员工的姓名、生日、工资。  
<font color="purple">SELECT ename,birthday,salary FROM emp;</font>  
练习：查询所有员工的编号、姓名、性别、工资。  
<font color="purple">SELECT eid,ename,sex,salary FROM emp;</font>   
(3)给列取别名   
示例：查询所有的员工的姓名和工资、列名使用汉字。  
SELECT <font color="#f66"> ename AS 姓名,salary AS 工资</font> FROM emp;   
练习：查询所有员工的编号、姓名、性别、生日，全部使用中文别名。  
 SELECT eid AS 编号,ename AS 姓名,sex AS 性别,birthday AS 生日 FROM emp;   
 练习：查询所有员工的编号、姓名、性别、生日；全部使用1个英文字母作为别名。  
 <font color="purple">SELECT eid a,ename b,sex c,birthday d FROM emp;</font>   
 <font color="green">AS</font>关键字可以省略   
 (4)查询只显示不同的值/合并相同的项 ----DISTINCT  
 练习：查询公司都有哪些性别的员工。  
 <font color="#f60">SELECT DISTINCT sex FROM emp; </font>  
 练习：查询公司员工都分布在哪些部门？  
  <font color="#f60">SELECT DISTINCT deptID FROM emp;</font>    
  (5)查询时执行运算  
  示例：计算5+3-7/2*9  
  SELECT 5+3-7/2*9;  执行结果为-23.5000  
  取别名：SELECT 5+3-7/2*9 结果;  
  练习：查询所有员工的姓名及其年薪,并且起别名   
<font color="#f60">SELECT ename AS 姓名,salary*12 AS 年薪 FROM emp; </font>  
练习：假设所有员工工资加500，年终奖是5000，查询出姓名和年薪，并且起别名。  
 <font color="#f60">SELECT ename AS 姓名,(salary+500)*12+5000 AS 年薪 FROM emp;</font>  
 (6)查询的结果排序  
 示例：查询所有员工的信息，结果按照工资由低到高排序  
 <font color="purple">SELECT * FROM emp ORDER BY  salary ASC;</font> 
 示例：查询出所有员工的信息，结果按照工资由低到高排序  
 <font color="purple">SELECT * FROM emp ORDER BY salary DESC;</font>   
 练习：查询所有员工的信息，结果按照年龄由大到小显示。  
 <font color="purple">SELECT * FROM emp ORDER BY birthday ASC; </font>     
 练习：查询所有员工的信息，结果按照姓名升序排序  
  <font color="purple">SELECT * FROM emp ORDER  BY ename ASC;</font>   
练习：查询所有员工的信息，按照生日由大到小，若生日相同,再按照姓名升序排列。  
 <font color="purple">SELECT * FROM emp ORDER BY birthday DESC,ename ASC; </font> 
练习：查询所有员工信息，按照工资由大到小排序，要求女员工必须排在男员工的前边。  
 <font color="purple">SELECT * FROM emp ORDER BY sex ASC,salary DESC;</font>
 ```
 ASC ascent 升序   
 DESC ->descent 降序  
    如果不加排序规则，默认是按照升序排列的(ASC)。 
    ORDER BY 可以按照数值、日期、字符串(字符的编码)来排序。  
 ```   
 (7)条件查询  ---WHERE 
 练习：查询编号为5的员工工资  
 SELECT * FROM emp WHERE eid=5;   
 SQL语句中支持的比较运算符：  
  =  <    >      <=      >=  !=  
  等于 小于 大于 小于等于  大于等于 不等于  
  练习：查询出工资大于等于6000的员工所有信息  
  SELECT * FROM emp WHERE salary>=6000;  
  练习：查询出所有女员工的信息  
  SELECT * FROM emp WHERE sex=0;  
  练习：查询出所有员工姓名为king的所有信息  
  SELECT * FROM emp WHERE ename="king";  
  练习：查询出不在10号部门的员工信息  (此时查询不到部门号为NULL的员工信息)
  SELECT * FROM emp WHERE deptId !=10;    
  练习：查询出1990年之前出生的员工信息  
  SELECT * FROM emp WHERE birthday <"1990-1-1";  
  练习：查询出1993年之后出生的员工信息  
  SELECT * FROM emp WHERE birthday >"1993-12-31";  
  练习：查询没有明确部门的员工信息  
  SELECT * FROM emp WHERE deptId IS NULL;  
  <font color="red">注意：</font>NULL不能和任何值进行等于/不等于判定，包括NULL自己。 可以使用IS NULL 和 IS NOT NULL。   
  练习：查询所有有明确部门的员工信息  
  SELECT * FROM emp WHERE deptId IS NOT NULL;  
  练习：查询出10号部门所有女员工的信息  
  SELECT * FROM emp WHERE deptId=10 AND sex=0;  
  <font color="green">AND(并且)&emsp;&emsp;OR(或者)</font>    
  练习：查询出10号部门和30号部门所有员工的信息  
  SELECT * FROM emp WHERE deptId=10 OR deptId=30;  
  练习：查询出工资在6000到8000之间所有员工信息   
  SELECT * FROM emp WHERE salary>=6000 AND salary <=8000;  
  SELECT * FROM emp WHERE salary <font color="green">BETWEEN</font> 6000 <font color="green">AND</font> 8000;    
  BETWEEN ... AND...大于等于第一个值，小于等于第二个值  
  NOT BETWEEN...AND...不在...之间  
  练习：查询出工资不在6000到8000之间所有的员工信息  
  SELECT * FROM emp WHERE salary NOT BETWEEN 6000 AND 8000;
  SELECT * FROM emp WHERE salary<6000 OR salary>8000;    
  练习：查询出1990年出生的所有员工信息  
  SELECT * FROM emp WHERE birthday BETWEEN "1990-1-1" AND "1990-12-31";  
  SELECT * FROm emp WHERE birthday >="1990-1-1" AND birthday<="1990-12-31";  
  练习：查询10号和20号和30号部门的员工信息  
  SELECT * FROM emp WHERE deptId=10 OR deptId=20 OR deptId=30;  
  SELECT * FROM emp WHERE deptId IN (10,20,30);  
  练习：查询出不在10号和20号部门的员工信息  
  SELECT * FROM emp WHERE deptId NOT IN(10,20);  
  (8)模糊条件查询 --- LIKE  
  示例：查询出姓名中含有字母e的员工信息    
  SELECT * FROM emp WHERE ename LIKE "%e%";   
  ```
  % 表示有0到多个字符   >=0    
  _ 表示任意一个字符   =1    
  上述两个符号不能和=连用，必须结合关键字LIKE使用。
  ```   
  练习：查询出姓名以e 结尾的员工信息   
  SELECT * FROM emp WHERE ename LIKE "%e";  
  练习：查询出姓名中倒数第二个字符为e的员工信息 
  SELECT * FROM emp WHERE ename LIKE "%e_";     
(9)分页查询---LIMIT  
分页显示：假如查询的结果中的有太多的记录，一次显示不完，可以分多页显示。  

页码  开始  结束  
第一页&emsp;0&emsp;&emsp;4  
第二页&emsp;5&emsp;&emsp;9  
第三页&emsp;10 &emsp;14  
第四页&emsp;15&emsp;19   

得出结果：开始位置为：<font color="orange">(页码-1)*每页大小 </font>  
示例：每页大小为5，查询第一页的数据  
SELECT * FROM emp LIMIT start,count;  
<font color="#f66">start 开始的值</font>  
<font color="#f66">count 查询的数量</font>   
SELECT * FROM emp LIMIT 0,5;    
练习：每页大小是5，查询第2页的数据  
SELECT * FROM emp LIMIT 5,5;  
练习：每页大小是5，查询第3页的数据  
SELECT * FROM emp LIMIT 10,5;  
<font color="red">注意:</font>LIMIT后边的两个数值不能够添加引号。  
<font color="blue">综合：SELECT  * FROM emp  
          WHERE...   
          ORDER BY...  
          LIMIT...</font>  
练习：查询出所有的男员工工资最高的前三人  
SELECT * FROM emp  
    WHERE sex=1  
    ORDER BY salary DESC
    LIMIT 0,3;  






  
  








