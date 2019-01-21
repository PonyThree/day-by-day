//for in
/*var book=[];
//添加元素
book['id']=113;
book['title']='水浒传';
book['price']=223;
book['pubTime']='2001-10-1';*/
//console.log(book);
//使用for-in遍历 
/*for(var key  in book){
	//console.log(key+'------'+book[key]);
	//console.log(typeof(book));
	console.log(`${key}------${book[key]}`);//ES6 模板字符串
}*/

//练习：创建数组，包含元素推荐、热点、娱乐、财经；分别使用for循环和for-in遍历数组中的元素。
//var arr=['推荐','热点','娱乐','财经'];
//使用for循环遍历
/*for(var i=0;i<arr.length;i++){
	console.log(i+'-----'+arr[i]);
}*/
//使用for-in遍历
/*for(var key in arr){
	console.log(key+'-----'+arr[key]);
}*/

/*练习：创建一个函数getIndex()，需要传递两个参数，第一个参数是数组，第二个参数是字符串,返回字符串的下标，如果找不到该字符串的下标则返回-1。getIndex(['a','b','c'],'e');*/

 /*function getIndex(arr,str){
	 for(var i=0;i<arr.length;i++){
		 //判断数组元素中是否含有str这个值
		 if(arr[i]==str){
			 return i;
		 }
	 }
	 //如果以上所有的都没有找到，返回-1
	 return -1;
 }
 var res=getIndex(['奔驰','大众','宝马','奥迪'],'宝马');
 console.log(res);*/
 //练习：创建函数getAvg,传递1个参数(数组),返回平均工资。
 //function getAvg(salary){
	 /*for(var i=0,sum=0;i<salary.length;i++){
		 sum+=salary[i];
	 }*/
	/*var sum=0;
	 for(var key in salary){
		 sum+=salary[key];
	 }
	 return sum/salary.length;
 }
 var res=getAvg([8000,3000,9000,6000]);
 console.log(res);*/


 //练习：创建一个函数getCount,传递2个参数(数组,字符串)，返回字符串在数组元素中出现的次数。  
 /*function getCount(arr,str){
	 //var count=0;
	// for(var key in arr){
		 //if(arr[key]===str){
		//	 count++;
		// }
	 //}
	 //变量count记录str出现的次数
	 //循环
	 for(var i=0,count=0;i<arr.length;i++){
		 //判断每一个元素是否为str
		 if(arr[i]===str){
			 count++;
		 }
	 }
	 //全部判断结束，返回count的值
	 return count;
	 }*/
/* var res=getCount(['tom','jerry','tom','david','tom'],'tom');
 console.log(res);*/
 //练习：创建函数getMax,传递1个参数(数组)，返回数组中元素的最大值
 //getMax([88,72,93,66]);//93
 /*function getMax(arr){
	 //声明一个变量记录最大值
	for(var i=1,max=arr[0];i<arr.length;i++){
		//判断 进行比较 每一次把大值放入max变量中  让大值与后面的值进行下一次比较
		//如果max小于数组元素，则把数组元素放入到max中
		if(arr[i]>max){
			max=arr[i];
		}
	}
	//全部比较结束，返回最大值
	return max;
 }
 var res=getMax([88,72,93,66,160,45,100]);
 console.log(res);*/

/*var a=1;
 var b=2;
 //a=2 b=1 交换两个变量的值	
 var c=a;
 a=b;
 b=c;*/