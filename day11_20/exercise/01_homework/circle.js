//两个函数 
/*function getLength(r){
	return 2*3.14*r;
}
function getArea(r){

	return 3.14*Math.pow(r,2);
}
//导出函数  
module.exports.getLength=getLength;
module.exports.getArea=getArea;*/
/*module.exports.getLength=function(){
	return 2*3.14*r;
}
module.exports.getArea=function(){
	return 3.14*Math.pow(r,2);
}*/
module.exports={
	getLength:function(r){
		return 2*3.14*r;
	},
	getArea:function(r){
		return 3.14*Math.pow(r,2);
	}
};
//console.log(module.exports===exports);