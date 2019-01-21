////练习：使用变量保存1个数字，循环使用弹出提示框的形式输入数字，如果数字猜大了。警示框弹出'big';如果数字猜小了，警示框提示'small’；否则提示'right'，结束循环。
var a=10;
while(true){
	//获取用户输入的值
	var num=prompt('请输入值：');
	//说明：当什么都不输入时，''在和数字进行比较时，会隐式转换为0。
	//如果输入的值大于保存的值
	/*if(num>a){
		alert('big');
	}else if(num<a){
		alert('small');
	}else{
		alert('right');
		break;
	}*/
	if(num>a){
		alert('big');
	}else if(num<a){
		//如果输入的值小于保存的值
		alert('small');
	}else{
		//否则既不是大也不是小，只能说明大小一致，结束循环
		alert('right');
		break;
	}
}
