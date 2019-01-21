//引入功能模块  
//引入的模块默认返回的是一个空对象
//自定义模块格式为js结尾的，可以省略后缀名
var circle=require('./circle.js');
//console.log(circle);
console.log(circle.getLength(5));
console.log(circle.getArea(2));
