//循环嵌套
//打印五行五颗星  外层循环：控制循环的行数
//j代表行号
/*for(var j=1;j<=8;j++){
//打印一行五颗星 内层循环：控制循环的列数
//i代表列号
	for(var i=1,str='';i<=8;i++){
		str+='*';
	}
console.log(str);
}*/


//do-while嵌套for循环
/*var j=1;
do{
//打印一行五颗星
	for(var i=1,str='';i<=8;i++){
		str+='*';
	}
	console.log(str);
	j++;
}while(j<=5);*/
//要产生9行，j控制行数
/*for(var j=1;j<=9;j++){
	//i控制列数 i是列号
	for(var i=1,str='';i<=j;i++){
		str+='*';
	}
	//每一行循环结束，打印一行结果
	console.log(str);
}*/

/*
1*1=1
1*2=2 2*2=4
1*3=3 2*3=6 3*3=9
*/
/*for(var i=1;i<=3;i++){
	for(var j=1,str='';j<=i;j++){
		str+=j+'*'+i+'='+i*j+' ';
	}
	console.log(str);
}*/
//九九乘法表
//行数 行号
/* for(var j=1;j<=9;j++){
	 //列 列号
	 for(var i=1,str='';i<=j;i++){
		 str+=i+'*'+j+'='+i*j+' ';
		 
	 }
	 console.log(str);
 }*/


  /*for(var j=1;j<=9;j++){
	 //列
	 for(var i=9,str='';i>=j;i--){
		 str+=i+'*'+j+'='+i*j+' ';
		 
	 }
	 console.log(str);
 }*/





