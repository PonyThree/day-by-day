//引入url模块
const url=require('url');
//
/*var str='http://www.codeboy.com:80/list/details.html?lid=5&pname=dell';
//将一个url解析为对象
var obj=url.parse(str);
console.log(obj);*/
var obj={
	protocol:'http',
	hostname:'www.codeboy.com',
	port:8080,
	pathname:'/course/100037.html',
	query:{lid:17,pname:'apple'}
}
//把对象转换成url
var str=url.format(obj);
console.log(str);
