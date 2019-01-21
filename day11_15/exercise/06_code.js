//练习：初始化4个英文字母(有大小写)保存变量中，循环弹出提示框，输入4个字符(不区分大小写)，如果输入正确结束循环。
//初始化4个英文字符
var code='PonY';
do{
	var str=prompt("请输入验证码："); 
	//和code比较不区分大小写
	//把初始化的都转换成大写
	 code=code.toUpperCase();
	 //把输入的都转换成大写
	 str=str.toUpperCase();
	if(code===str){
		alert('输入正确');
		break;
	}
}while(true)
/*while(true){
	var str1=prompt('请输入4个英文字母：');
	if(str1.toLowerCase()===str.toLowerCase()){
		break;
	}
}*/