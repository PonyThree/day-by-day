//使用连接池连接mysql
//引入mysql模块
const mysql=require('mysql');
//创建连接池对象
var pool=mysql.createPool({
	host:'127.0.0.1',
	port:3306,
	user:'root',
	password:'',
	database:'tedu',
	connectionLimit:20  //设置连接池的数量
});
//执行sql语句
//取1个连接执行SQL语句
//1.查询编号为5的员工信息
/*pool.query('SELECT * FROM emp WHERE eid=5 ',(err,result)=>{
	if(err) throw err;
	console.log(result);
});*/
//2.删除编号为5的员工
//返回对象中的affectedRows属性表示是否成功删除，如果大于0有数据删除，否则没有删除数据。
//使用占位符?,防止SQL注入
/*pool.query('DELETE  FROM emp WHERE eid=? AND sex=?',[2,0],(err,result)=>{
    if(err) throw err;
	console.log(result);
});*/
//3.修改编号为7的员工的姓名为'张三',生日为'1980-5-1'，查看结果。
//使用affectedRows判断是否修改成功
/*pool.query('UPDATE emp SET ename=? ,birthday=? WHERE eid=? ',['张三','1980-5-1',7],(err,result)=>{
    if(err) throw err;
	console.log(result);
});*/
//4.添加一条员工的信息数据
// null Peter 1 1997-2-28 8000 20
/*pool.query('INSERT INTO emp VALUES(?,?,?,?,?,?)',[null,'Peter',1,'1997-2-28',8000,20],(err,result)=>{
	if(err) throw err;
	console.log(result);
});*/


var person={
	salary:6000,
	eid:null,
	sex:1,
	ename:'Apache',
	birthday:'1999-1-1',
	deptId:10
};
//
pool.query('INSERT INTO emp SET ?',[person],(err,result)=>{
	if(err) throw err;
	console.log(result);
});
