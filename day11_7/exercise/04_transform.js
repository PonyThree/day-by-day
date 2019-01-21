
//强制转换成整型
/*var num1=parseInt("15.9");
console.log(num1);//15
console.log(typeof(num1));*/
//从开头查找数字，遇到非数字或者小数点；就返回前边的数字;如果开头是非数字，就返回NaN  
//var num2=parseInt("12.5a34");
//console.log(num2);//12
//练习：转换以下数据为整型
//"1.5a" "b7" "3c"
//console.log(parseInt("1.5a"),parseInt("b7"),parseInt("3c"));
//console.log(Number("1.56"));
//console.log(parseFloat("1.5a")); //1.5
//console.log(parseFloat("a1.5"));//NaN
//console.log(parseFloat(true)); // NaN  
//要转换的数据中含有非数字返回NaN
/*console.log(Number("1.5a"));
console.log(Number(true));
console.log(Number(false));*/
var num=10;
var isLogin=true;
var res1=num.toString(2);
console.log(res1);
console.log(typeof(res1));
var res2=isLogin.toString();
console.log(res2);
console.log(typeof(res2));


