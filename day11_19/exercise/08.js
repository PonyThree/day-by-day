//在nodejs下，任意一个文件中的代码都是被一个构造函数所包含
//(function(exports,require,module,__dirname,__filename){
	var a=1;
	//当前文件的完整路径
	console.log(__dirname);//directory
	//当前文件的完整路径和文件名称
	console.log(__filename); 
	
//})

