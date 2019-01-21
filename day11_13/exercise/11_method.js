//函数的方法
//创建一个人对象
var per={
	name:'tom',
	age:18,
	sex:'男',
	say:function(){
		//this指代当前的对象
		//console.log('我叫卡特，性别女，年龄28');
		console.log('我叫'+this.name+'今年'+this.age+'岁'+'性别'+this.sex);

	}
};
//调用对象中的方法
//var say=function(){};
//per['say']();
per.say();