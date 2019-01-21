
/*练习：  
 使用while循环打印 11~19之间所有的整数  
 使用while循环打印1~100之间所有的奇数(使用if判断是否为奇数)  
 使用while循环打印20 22 24 26 28 30  
 使用while循环计算1~100之间所有数之和*/ 
 //第一题
 /*var i=11;
 while(i<=19){
	 console.log(i);
	 i++;
 }*/
 //第二题  
 /*var i=1;
 while(i<=100){
	 if(i%2!=0){
		 console.log(i);
	 }
	 i++;
 }*/
 //第三题
 /*var i=20;
 while(i<=30){
	 if(i%2==0){
	 console.log(i);
	 }
	 i++;
 }*/
 //第四题
 var i=1,total=0;
 while(i<=100){
	 total+=i;
	 i++; 	 
 }
  console.log(total);  
  


