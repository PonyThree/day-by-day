
//创建计算周函数
function getRound(r1){
	return 2*Math.PI*r1;
}
//创建计算面积函数
function getArea(r2){
	return Math.PI*r2*r2;
}
//公开两个函数
module.exports.getRound=getRound;
module.exports.getArea=getArea;
