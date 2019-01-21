
//模式匹配
//1.replace查找替换
var str='China是世界上人口最多的国家,china的互联网高度发达,CHINA有好多的程序员,China是一个伟大的国家';
//查找所有的china,并替换为中国。
//console.log(str.replace('china','中国'));
//使用正则表达式的方式查找
//i->ignore(忽略大小写)
//g->global(全局查找)
//console.log(str.replace(/china/ig,'中国'));
//2.match查找匹配的字符串，返回一个数组
//console.log(str.match(/china/ig));
//3.search查找字符的下标 找不到返回-1  只查找满足条件的第一个
console.log(str.search(/chinese/i));