//1. 计算：1+3+5+7.......+99
/*for(var i=1,sum=0;i<100;i+=2){
	sum+=i;
}
console.log(sum);*/
// 2.计算：1-1/2+1/3-1/4+........-1/100= 1+(-1/2)+1/3+(-1/4)
for(var i=1,sum=0;i<=100;i++){
	//i=(i%2==1)?1/i:-1/i;
	/*if(i%2==0){
		 sum+=-1*1/i;
	}else{
	sum+=1/i;
	}*/
	sum+=(i%2==0)?(-1/i):(1/i);
}
console.log(sum);
// 3.打印输出100-999之间的水仙花数  所谓"水仙花数"是指一个三位数， 其各位数字立方和等于该数本身 如	153=1*1*1+5*5*5+3*3*3
/*for(var i=100;i<1000;i++){
	//个位数
	var ge=i%10;
	//十位数
	var shi=Math.floor(i/10%10);
	//百位数
	var bai=Math.floor(i/100);
	//console.log(i+'-------'+ge,shi,bai);
	if(ge*ge*ge+shi*shi*shi+bai*bai*bai==i){
		console.log(i);
	}
}*/
//4.要求用户输入一个整数n值，则计算出该值的阶乘  即：   n! = 1*2*3*4*5*6*7*8*....*n;
/*var num=prompt('请输入一个阶乘数：');
for(var i=1,sum=1;i<=num;i++){
	sum*=i;
}
console.log(sum);*/
/*	打印正三角形
      *       5 " "  1 *    1
     ***      4 " "  3 *    2
    *****     3 " "  5 *    3
   *******	  2 "  " 7 *    4
  *********	  1 "  " 9 *    5
 ***********  0 "  " 11*	6
*/
//控制行
/*for(var i=1;i<=6;i++){
	//每行前面的空格
	for(var j=6-i,str='';j>=1;j--){
		str+=' ';
	}
		//每行后面的*
	for(var k=1;k<=2*i-1;k++){
		str+='*'	
	}
	console.log(str);
}*/
/* 6. 打印
      *			1     5"  "  1*	 0" "
     * *		2     4"  "  1*  1" " 1*
    *   *		3	  3"  "  1*  3" " 1*
   *     *		4	  2"  "  1*  5" " 1*
  *       *		5	  1"  "  1*	 7" " 1*
 *         *	6	  0"  "  1*  9" " 1*
 ***********	7	  0" "   1*  9*  1*
*/
for(var i=1;i<=7;i++){
	var str='';
	if(i<7){
		//每行后面开头的空格
		for(var j=6-i;j>=1;j--){
			str+=' ';	
		}
		if(i==1){
			str+='*';
		}else{
			//每行的追加一个*
			str+='*';
			//每行中间追加的空格
			for(var k=0;k<2*i-3;k++){	
				str+=' ';
			}
			//每行末尾追加的空格
			str+='*';
		}	
	}else{
		//打印最后一行*
		for(var h=1;h<=2*i-3;h++){
		str+='*';
		}	
	}
console.log(str);	
}


for( var i = 0; i <6; i++){
	var str="";
    for( var j = 0; j < 5 - i ;j++ ){
       str+=(" ");
    }
    for( var j = 0; j < 2 * i + 1 ;j++ ){
        if(j == 0 || j == 2 * i)
           str+=("*");
		else{
			str+=(" ");
		}
     }
	console.log(str);
	if(i == 5){
		var str = "";
		for( var j = 0; j < 2 * i + 1 ;j++ ) str+="*";
		console.log(str);
    }
}
