console.log('08_2.js');
var a=1;
function fn(){
	console.log(123);
}
//把a和fn这个函数公开出去 
module.exports.a=a;
module.exports.fn=fn;
console.log(module.exports===exports);