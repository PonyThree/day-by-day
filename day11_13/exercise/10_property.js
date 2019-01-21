var emp={
	eid:13,
	ename:'jerry',
	sex:1,
	birthday:'1994-7-20',
};

//检测对象中是否含有ename属性
//有true  没有false
//console.log('ename' in emp);
//console.log('salary' in emp);
console.log(emp.hasOwnProperty('salary'));
//如果一个对象属性的属性值是undefined，说明属性不存在
//console.log(emp.deptId);
//结果是true,不存在；false ,存在
console.log( emp.deptId===undefined);
