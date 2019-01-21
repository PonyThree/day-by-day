//创建Date对象  
//var d1=new Date('2018/11/11 10:20:30');
//var d2=new Date(2018,10,11,10,20,30);//月份的范围：0~11 可以省略时分秒
//存储Date是当前的系统时间  
//var d3=new Date();
//传递数字
//var d4=new Date(1000*60);
//console.log(d1);
//console.log(d2);
//console.log(d3);
//console.log(d4);

//获取具体的日期时间信息 
//var d1=new Date('2018/11/16 10:40:30');
//对象的方法
//获取
//console.log(d1.getFullYear());
//console.log(d1.getMonth()); //0~10  
/*console.log(d1.getDate());
console.log(d1.getHours());
console.log(d1.getMinutes());
console.log(d1.getSeconds());
console.log(d1.getMilliseconds());
console.log(d1.getDay());*/  //星期日-星期六 0~6  
//练习：创建当前系统时间的Date对象，使用该对象打印'2018年11月16日  10点55分30秒  星期五'
var d=new Date();
var year=d.getFullYear();
var month=d.getMonth()+1;
var date=d.getDate();
var hour=d.getHours();
var min=d.getMinutes();
var sec=d.getSeconds();
var day=d.getDay();
//var arr=['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
	/*switch(day){
		case 0:
			day= '星期日';
			break;
		case 1:
			day='星期一';
			break;
		case 2:
			day='星期二';
			break;
		case 3:
			day='星期三';
			break;
		case 4:
			day='星期四';
			break;
		case 5:
			day='星期五';
			break;
		case 6:
			day='星期六';
			break;
		default:
	}*/

//console.log(year+'年'+month+'月'+date+'日 '+(hour<12?'上午':'下午')+hour+'点'+min+'分'+sec+'秒 '+arr[day]); 
//获取距离计算机元年的毫秒数 
console.log(d.getTime());


