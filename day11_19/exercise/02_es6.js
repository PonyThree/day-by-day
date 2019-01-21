//1.函数中的参数
/*function add(a,b,c=6){
	return a+b+c;
}
var res=add(2,7);
console.log(res);
//模板字符串
var year=2018;
var month=10;
var date=19;
var hours=10;
var minutes=47;
var seconds=5;
console.log(`${year}年${month+1}月${date}日   ${hours}:${minutes}:${seconds<10?'0'+seconds:seconds}`);
*/

//练习：创建一个员工对象，包含姓名、性别、生日、工资；使用模板字符串打印员工的信息。
var emp={};
emp.name='tom';
emp.sex=1;
emp.birth='1995-5-12';
emp.salary=12000;
console.log(`姓名:${emp['name']}, 性别:${emp.sex===1?'男':'女'},  生日:${emp.birth},  工资:${emp['salary']}`);

