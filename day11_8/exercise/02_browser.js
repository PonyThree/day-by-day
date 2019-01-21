
//1.弹出警示框
//alert("hello world");
//2.弹出提示框(文本框)
//通过变量存储输入的值
/*var s=prompt("please input");
console.log(s);
console.log(typeof(s));*/
//练习：弹出两次提示框，分别使用两个变量保存，计算两个变量相加的结果，使用警示框的形式显示。
/*var num1=prompt('please input a  number:');
var num2=prompt('please input a number:');
alert(parseInt(num1)+parseInt(num2));*/  
/*var total=42;
//判断总价是否满30，如果满30减15
if(total>=30){
	total-=15;
}
console.log('应付金额:'+total);*/
//练习：声明变量保存年龄，如果年龄大于60，在原来的基础之上减5，打印最终年龄。  
 /*var age=65;
 if(age>60){
	 age-=5;
 }
 console.log('最终年龄是：'+age);*/
 //练习：声明两个变量分别保存用户名和密码，如果用户名是root，并且密码是123456；打印登陆成功。  
 /*var uname="root",upwd="123456";
 if(uname=="root"&&upwd=="123456"){
	 console.log("登录成功");
 }*/
 //if大括号只有一行,大括号可以省略。
 var age=21;
 if(age<=18)
	 console.log('成年人');
//if大括号里面有多行,大括号不能省略,一旦省略将只会执行第一条语句，忽略后面的语句
/* var age=21;
 if(age<=18)
	 console.log('成年人');
	 console.log('可以去网吧了');*/


//if判断语句为假的六种数据情况：
if(0){
	console.log(1);
}
if(NaN){
	console.log(1);
}
if(''){
	console.log(1);
}
if(undefined){
	console.log(1);
}
if(null){
	console.log(1);
}
if(false){
	console.log(1);
}
 