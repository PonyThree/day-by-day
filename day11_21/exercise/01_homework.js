/*(2)练习：  
 创建一个目录mydir,在该目录下创建文件1.txt,写入1;再继续创建文件2.txt，写入2,；读取mydir下所有的文件，删除mydir(自学删除文件unlink)。[答案](10_homework.js)  
 整个过程全部使用同步方法。*/  
//引入模块
const fs=require('fs');
//创建目录mydir
//fs.mkdirSync('mydir');
//创建文件1.txt,写入1
/*fs.writeFileSync('1.txt','1');
//创建文件2.txt,写入2
fs.writeFileSync('2.txt','2');*/

//删除目录,mydir
//fs.rmdirSync('mydir');
//删除文件
//fs.unlinkSync('1.txt');
//fs.unlinkSync('2.txt');*/
//先判断文件或者目录是否存在，如果存在
/*var res=fs.existsSync('2.txt');
//console.log(res);
if(res){
	fs.unlinkSync('2.txt');
}*/

//练习：先判断文件num.txt是否存在，如果不存在，则创建，并初始化数字0；在原来的数字上加1。
var res=fs.existsSync('num.txt');
if(!res){
	fs.writeFile('num.txt','0');
}
//读取文件中的内容

fs.readFile('num.txt',(err,data)=>{
	if(err) throw err;
	//data就是读取文件中的数据
	//格式是buffer的形式
	//console.log(data.toString());
	var num=data.toString();
	num++;
	//把加1后的结果再次写入到num.txt中
	//清空写入
	fs.writeFileSync('num.txt',num);
})
