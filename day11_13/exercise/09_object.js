 
 
 //获取对象的属性值
 /*var emp ={
	 eid:3,
	 ename:'kate',
	 sex:0,
	 birthday:'1997-2-1',
	 salary:8000,
	 key:'hello'
 };*/
/*console.log(emp.ename);
console.log(emp['birthday']);
//访问不存在的属性，默认值是undefined
console.log(emp.deptId);*/
//使用遍历来获取对象中的每一个属性名和属性值 
//key表示对象中的每一个属性
//in 后边的表示要遍历的对象
/*for(var key in emp){
	//此时的key 是一个变量
	console.log(key+'----'+emp.key);
	console.log(key+'----'+emp[key]);
}*/
//练习：创建一个商品对象，包含编号、标题、价格、是否在售(isOnsale)，商品库存量(stockCount)，使用for-in遍历所有的属性。
var product={
	pid:18,
	title:'戴尔笔记本',
	price:4999,
	isOnsale:1,
	stockCount:88,
};
for(var key in product){
	console.log(key+'---'+product[key]);
}

