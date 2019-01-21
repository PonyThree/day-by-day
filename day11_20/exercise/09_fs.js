//引入fs模块
const fs=require('fs');//也是一个对象
//1.查看文件的状态
//异步方法，不会阻塞后续代码执行
/*fs.stat('07_url.js',(err,stats)=>{
	//如果有错误信息，会存储到err中
	//stats文件的具体状态信息 
	//console.log(err);
	//如果有错误，就抛出，不会继续执行后边的代码
	if(err) throw err;
	//查看文件是目录形式还是文件形式  
	//查看是否为目录
	console.log(stats.isDirectory());
	//查看是否为文件
	console.log(stats.isFile());
	console.log(123);
	//console.log(stats);
});*/



//2.使用同步方式---阻塞方式
//同步方法：会阻止后续代码执行
/*var res=fs.statSync('07_url.js');
console.log(res.isDirectory());
console.log(123);*/


//3.创建目录---异步方法
/*fs.mkdir('mydir',(err)=>{
if(err) throw err;
console.log('目录创建成功！');
});
console.log(123);*/
//同步创建目录方法
/*var res=fs.mkdirSync('mydir2');
console.log(res);
console.log(123); */ 
//4.删除目录--异步 
/*fs.rmdir('mydir',(err)=>{
if(err) throw err;
console.log('删除成功!!');
});*/
//同步方法
//fs.rmdirSync('mydir2');


//5.读取目录---异步
/*fs.readdir('05',(err,files)=>{
	if(err) throw err;
	//files如果没有错误，读取的文件
	console.log(files);
});
//同步
var files=fs.readdirSync('05');
console.log(files);  */

//练习：创建目录hello，读取03_2下所有的文件。删除目录hello
/*fs.mkdir('hello',(err)=>{
	if(err) throw err;
});*/
/*fs.readdir('03_2',(err,files)=>{
	if(err) throw err;
	console.log(files);
});
fs.rmdir('hello',(err)=>{
	if(err) throw err;
});*/
//6.创建文件  
fs.writeFile('data.txt','world',(err)=>{
	if(err) throw err;
	console.log('创建成功');
});




