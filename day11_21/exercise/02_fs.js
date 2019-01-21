
//引入fs模块
const fs=require('fs');
//1.追加写入
/*fs.appendFile('1.txt','hello\n',(err)=>{
	if(err) throw err;
});*/
/*var user={ud:1,uname:'tom',upwd:'123456'};
//遍历对象，获取每一个数据
for(var key in user){
//console.log(key+'----'+user[key]);
//将每一个数据写入到文件user.txt中
fs.appendFileSync('user.txt',user[key]+' ');
}
//每次写完一组数据，在写入一个换行符
fs.appendFileSync('user.txt','\n')*/



var users=[{ud:1,uname:'tom',upwd:'123456'},{ud:2,uname:'jerry',upwd:'123456789'},{ud:3,uname:'lom',upwd:'456'},{ud:4,uname:'kate',upwd:'789'}];
//遍历每一个对象
users.forEach((index)=>{
//遍历每一个对象的每一组数据
for(var key in index){
//将每一个数据写入到文件user.txt中
fs.appendFileSync('user2.txt',index[key]+' ');
}
//每次写完一组数据，在写入一个换行符
fs.appendFileSync('user2.txt','\n');
})


