//双色球：随机取1~33之间的6个数字不能重复并且从小到大排序，取1~16之间的1个数字(最后)，组成一个新数组。
var arr=[];
//循环产生1~33，放入到arr中
for(let i=1;i<=33;i++){
	arr.push(i);
}
var newArr=[];
//在arr中随机取6个,不能重复
for(let i=1;i<=6;i++){
	//向下取整(随机数 *数组长度)
	var index=Math.floor(Math.random()*arr.length);
	newArr.push(arr[index]);
	//在arr中删除当前的元素---通过下标
	arr.splice(index,1);
	
}

newArr=newArr.sort((a,b)=>a-b);
//取1~16之间的1个随机数
//0~15  +1
var blue=Math.floor(Math.random()*16)+1;
newArr.push(blue);
console.log(newArr);
