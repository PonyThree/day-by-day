/*(2)练习：  
 创建一个目录mydir,在该目录下创建文件1.txt,写入1;在继续创建文件2.txt，写入2,；读取mydir下所有的文件，删除mydir(自学删除文件unlink)。  
 整个过程全部使用同步方法。*/
//导入fs模块
const fs=require('fs');
//创建一个目录mydir
//fs.mkdirSync('mydir');
//读取当前目录mydir
fs.readdirSync('mydir');
//在该目录下创建文件1.txt
fs.writeFileSync('./mydir/1.txt','1');
//在该目录下创建文件2.txt
fs.writeFileSync('./mydir/2.txt','2');
//读取mydir下所有的文件
var files=fs.readdirSync('mydir');
//删除mydir->先删除目录中的所有数据->让目录成为空目录之后再删除目录
files.forEach((index)=>{
	//删除每一个文件
	fs.unlinkSync('./mydir/'+index);
	//console.log(index);
});
fs.rmdirSync('mydir');
