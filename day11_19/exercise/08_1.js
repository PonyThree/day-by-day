console.log('08_1.js');
//引入08_2.js模块  
//   ./表示同一级目录
var obj=require('./08_2.js');
//调用模块中的函数---此时为出现引用错误  
//fn();
//console.log(a);
//console.log(obj);
//当对应模块已经公开时，此时可以调用模块中的函数和模块中的变量
obj.fn();
console.log(obj.a); 

 
