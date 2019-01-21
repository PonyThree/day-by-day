const express=require('express');
const querystring=require('querystring');
var server=express();
server.listen(3000);
server.use(express.static('public'));
server.post('/idCard.html',(req,res)=>{
	req.on('data',(buf)=>{
	var str=buf.toString();
	var obj=querystring.parse(str);
	str=obj.idNum;
	var year=str.substr(6,4);
	var month=str.substr(10,2);
	var day=str.substr(12,2);
	var sex=str.slice(-3,-1);
	sex=sex%2==0?'女':'男';
	res.send(`出生日期为: ${year}年 ${month}月 ${day}日 性别: ${sex}`);
	});	
});