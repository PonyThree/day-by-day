//字符串的API
//var str='WelCome To China';  
//1.转为大写 ---toUpperCase()
//console.log(str.toUpperCase());
//2.转小写 --toLowerCase()
//console.log(str.toLowerCase());  
//3.获取字符串的长度
var str='你好world';
//console.log(str.length);
//4.获取字符串中指定位置上的字符内容
//console.log(str.charAt(str.length-1));
//5.charCodeAt
//console.log(str.charAt(0).charCodeAt());
//练习：使用变量保存字符串'javascript',获取字符'a'出现的个数。
/*var str='javascript';
function getNumber(str,character){
	for(var i=0,count=0;i<str.length;i++){
		if(str.charAt(i)===String(character)){
			count++;
		}
	}
	return count;
}
var res=getNumber(str,'a');
console.log(res);*/
//6.获取指定字符的下标---indexOf()
//var str='javascript';
//console.log(str.indexOf('a',2));//第二个参数是从哪一个位置开始查找
//console.log(str.indexOf('z'));//找不到返回-1
//console.log(str.lastIndexOf('a'));

//练习：声明变量保存字符串，检测字符串是否为邮箱格式；如果是打印true,不是打印false。(查看是否有@符号)
/*var str='javascript';
function searchEmail(str,character){
	for(var i=0;i<str.length;i++){
		if(str.charAt(i)===String(character)){
			return 'true';
		}
	}
	return 'false';
}
var res=searchEmail(str,'@');
console.log(res);*/

//var str='tom@163.com';
//是否有@，查看@在字符串中的下标
//如果找到了下标，返回0~数字，否则-1
/*if(str.indexOf('@')>=0){
	console.log(true);
}else{
	console.log(false);
}*/
//console.log(str.indexOf('@')>=0?true:false);

//7.截取字符串---slice()
var str='javscript';
//console.log(str.slice(4));
//console.log(str.slice(4,7));
//console.log(str.slice(-3,-1));
//练习：使用变量来存储身份证号，获取其中的年月日和性别。
//110230 1997 05 20 3310 身份证倒数第二位偶数是女，奇数是男。
/*var str='110230199705203320';
var year=str.slice(6,10)+'年';
var month=str.slice(10,12)+'月';
var day=str.slice(12,14)+'日';
var sex=str.slice(-2,-1);
var birth=year+month+day;*/
/*if(Number(sex)%2==0){
	sex='女';
}else{
	sex='男';
}*/
/*sex=Number(sex)%2==0?'女':'男';
console.log(birth,sex);*/

//练习：使用变量保存一个邮箱地址，分别截取邮箱的用户名和域名。
/*var email='jerry1995@sina.com.cn';
//获取@的下标
var index=email.indexOf('@');
//获取用户名
var userName='用户名：'+email.slice(0,index);
var domainName='域名：'+email.slice(index+1);
console.log(userName,domainName); */

//8.截取字符串 substr()
//var str='javascript';
//console.log(str.substr(4,3));
//console.log(str.substr(-3,2));
//console.log(str.substr(4));  

//练习：讲一个英文单词的首字母转大写，其余转小写。'hELlo' ->'Hello'
/*var str='hELlo';
//截取首个字母,并转为大写
var first=str.substr(0,1).toUpperCase();
//var index=str.charAt(0).toUpperCase();
//console.log(index);
//截取第2个到最后，并转为小写
var last=str.substr(1).toLowerCase();
//var rest=str.substr(1).toLowerCase();
//str=index+rest;
str=first+last;
console.log(str);*/

//9.将字符串分隔数组
//数组转字符串
/*var arr=['a','b','c'];
console.log(arr.join('|'));*/
//var str='a|b|c';
//console.log(str.split('|'));


//练习：使用split获取邮箱的用户名和域名(jerry@qq.com)
/*var str='jerry@qq.com';
console.log('用户名：'+str.split('@')[0]+'  '+'域名：'+str.split('@')[1]);*/

//练习：将所有单词的首字母转大写，其余字母转小写。'hOW arE yOu' -> 'How Are You'
/*var str='hOW arE yOu';
var arr=str.split(' ');
for(var i=0;i<arr.length;i++){
	var first=arr[i].substr(0,1).toUpperCase();
	var last=arr[i].substr(1).toLowerCase();
	arr[i]=first+last;
}
str=arr.join(' ');
console.log(str);*/



