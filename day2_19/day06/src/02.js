//Worker接收数据
onmessage=function(e){
	var total=0;
	// console.log('Worker接收到了数据');
	// console.log(e.data);  
	for(var i=1;i<=e.data;i++){
		total+=i;
	}
	//Worker发送数据给UI
	postMessage(total);	
	// console.log(total);	
}
