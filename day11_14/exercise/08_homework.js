//将数组中的元素进行翻转，不能进行reverse ,例如：['a','b','c','d'] -->['d','c','b','a']
/*var arr=['a','b','c','d'], nArr=[];
	for(var i=0;i<arr.length;i++){
		//nArr[i]=arr[arr.length-1-i];
	} 
	console.log(nArr);*/



	var arr=['a','b','c','d'],nArr=[];
	for(var i=arr.length-1;i>=0;i--){
		nArr.push(arr[i]);
	} 
	console.log(nArr);
//了解冒泡排序
//外层循环控制排序次数
var arr=[288,72,193,466,160,245,100];
for(var i=0;i<arr.length-1;i++){
	//里层循环控制每次排序
	for(var j=arr.length-1;j>=i;j--){
		//让每次比较的最大值在前面
		if(arr[j]<arr[j-1]){
			//让大值在前面
			var min=arr[j];
			arr[j]=arr[j-1];
			arr[j-1]=min;
		}	
	}
	//console.log(arr);
}
console.log(arr);