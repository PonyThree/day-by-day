//函数作用域和局部作用域
//创建一个全局函数
/*function fn(){
	console.log(1);
}
//fn();
function fun(){
	fn();//在函数的内部可以调用另外一个全局函数
	console.log(2);
}
fun();
*/

//创建局部函数
/*function fn(){
	//创建局部函数
	 function fn1(){
		console.log(1);
	}
	fn1();
	
}
fn();*/
var a=10;
function fn(){
	function fn1(){
		//var a=1;
		function fn2(){
			//var a=2;
			function fn3(){
				//var a=3;
				console.log(a);
			}
			fn3();
		}
		fn2();
	}
	fn1();
}
fn();


/*function fn(){
	return function fn1(){
		return function fn2(){
			return function fn3(){
				console.log(3);
			}
		}
	}
}
fn()()()();*/
