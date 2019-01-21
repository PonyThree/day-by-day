//练习：创建一个圆对象，添加属性半径，圆周率；添加方法计算圆的周长(getLength)和计算面(getArea);分别返回圆的周长和面积; 
var round={
	radius:6,
	PI:3.14,
	getLength:function(){
		return 2*this.PI*this.radius;
	},
	getArea:function(){
		return this.PI*this.radius*this.radius;
	}
};
console.log(round.getLength());
console.log(round.getArea());
