//使用mysql第三方模块
//引入第三方mysql模块
const mysql=require('mysql');
//创建普通连接
var connection=mysql.createConnection({
host:'127.0.0.1',
port:3306,
user:'root',
password:'',
database:'tedu'
});
//执行连接
connection.connect();
//执行sql语句
connection.query('SELECT * FROM emp',(err,result)=>{
	if(err) throw err;
	console.log(result);
});
//sql语句执行完，关闭连接
connection.end();