//(2)练习：  
//双色球：随机取1~33之间的6个数字不能重复并且从小到大排序，取1~16之间的1个数字(最后)，组成一个新数组。
function getDoubleBall(){
	var arr1=[],newArr=[];
	//生成一个1~33的数组
	for(var i=1;i<34;i++){
		arr1.push(i);
	}
	//随机取6个不重复的数字
	for(var i=1;i<7;i++){
		//将取到的随机数放入数组2中
		var index=Math.floor(Math.random()*arr1.length);
		newArr.push(arr1[index]);
		//将数组1中当前的值删除
		arr1.splice(index,1);
		newArr.sort( (a,b)=>a-b );
		console.log(index);
	}
	//取1~16之间的1个数字，并放在数组arr2的最后面  
	newArr.push(Math.floor(Math.random()*16+1));
	console.log( newArr);

}
getDoubleBall();