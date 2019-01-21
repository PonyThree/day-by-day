/*创建两个模块main.js(主模块),circle.js(功能模块);在功能模块中创建两个函数，分别获取圆的周长和面积，导出这两个函数;在主模块中引入功能模块，调用两个方法*/
//主模块main.js
//引入功能模块circle.js
var obj=require('./circle.js');
console.log('周长为:'+obj.getRound(6));
console.log('面积为:'+obj.getArea(16));

