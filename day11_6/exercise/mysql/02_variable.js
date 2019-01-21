//声明一个变量 variable(可变的)
var a=1;
console.log(a);
//练习：声明多个变量，分别保存员工的编号、姓名、性别、生日、工资、部门。
var eid=1;
var ename="Tom";
var sex="男";
var birthday="1998-2-5";
var salary=5000;
var deptId=30;
console.log(eid,ename,sex,birthday,salary,deptId);
//var 中国="中国";
//console.log(中国);
//变量的命名规则
//var _c1="hello";
//console.log(_c1);
//不能使用关键字和保留字作为变量名
//var break=5;
//变量声明后,可以重新赋值
var b=10;
b=20;
b="Tom";
console.log(b);
//变量声明后未赋值，此时的值为undefined(未定义)
var c;
console.log(c);
//console.log(d);
//一次性声明多个变量
var bid=10,title="水浒传",price=300;
console.log(bid,title,price);
//练习：创建一个变量保存语文成绩，一个变量保存数学成绩，一个变量保存总成绩(语文和数学的和);最后打印语文、数学、总成绩。
var cScore=110,mScore=120,totalScore=cScore+mScore;
console.log(cScore,mScore,totalScore);