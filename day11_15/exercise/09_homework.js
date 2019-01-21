/*(2)练习：
创建数组，存储若干个员工的姓名，每次运行随机取出1个员工的姓名打印出来。   
创建数组，包含a-z,A-Z,0-9元素，在数组中随机取4个字符，放到新的数组中。push*/
//1.创建数组，存储若干个员工的姓名，每次运行随机取出1个员工的姓名打印出来。
var emp=['tom','kate','lucy','jerry','emma','pony'];
function getRandomName(){
		console.log(emp[Math.floor(Math.random()*emp.length)]);
}
getRandomName();
//2.创建数组，包含a-z,A-Z,0-9元素，在数组中随机取4个字符，放到新的数组中。push

/*var arr=['chin0A','9Ak6','B4oR2','Dg8B3'];
var newArr=[];
function getAchar(arr){
	//随机获取数组的下标之一 0~arr.length-1
	var randomArr=arr[Math.floor(Math.random()*arr.length)];
	//随机获取当前对应字符串的字母0~str.length-1
	var index=Math.floor(Math.random()*randomArr.length);
	//console.log(index);
	//获取第一个字符
	var firstChar=randomArr.charAt(index);	
	newArr.push(firstChar);
	
}
function fourTimes(){
	getAchar(arr);
	getAchar(arr);
	getAchar(arr);
	getAchar(arr);
}
fourTimes();
console.log(newArr);*/
var arr=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p',',q','r','s','t','u','v','w','x','z','0','1','2','3','4','5','6','7','8','9'];
var newArr=[];
//生成一个4~10位的随机码
/*var num=Math.floor(Math.random()*7+4);
function getCode(arr,num){
	var count=0;
	do{
		var rancode=arr[Math.floor(Math.random()*arr.length)];
		count++;
		 newArr.push(rancode);
		if(count==num){
			break;
		}
	}while(true);
}
getCode(arr,num);
console.log(newArr);*/
function getCode(arr){
	/*var count=0;
	do{
		var rancode=arr[Math.floor(Math.random()*arr.length)];
		count++;
		 newArr.push(rancode);
		if(count==4){
			break;
		}
	}while(true);*/
	for(var i=0;i<4;i++){
		var rancode=arr[Math.floor(Math.random()*arr.length)];
		newArr.push(rancode);
	}
}
getCode(arr);
console.log(newArr);
