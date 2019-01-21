
/*var arr=['头条','热点','娱乐','财经'];
//1.将数组中的元素转为字符串,数组中的元素使用逗号分隔  ----arr.toString()
//console.log(arr.toString());
//2.按照指定的字符来分隔数组中的元素----arr.join()
//console.log(arr.join(''));
//3.拼接数组 ---concat()
var arr2=['汽车','体育'];
console.log(arr.concat(arr2));*/


//练习：创建3个数组，分别存储不同的员工姓名，将3个数组拼接成一个新的数组
/*var arr1=['tom'],
arr2=['jack'],
arr3=['jerry'];
console.log(arr1.concat(arr2,arr3));*/

//var arr=['推荐','热点','娱乐','财经','汽车','体育'];
//4.截取娱乐，财经 ---slice()---不改变原数组
//console.log(arr.slice(2));//截取范围是2~最后
//console.log(arr.slice(2,5));
//console.log(arr.slice(-3,-1));


//练习：创建数组，保存a~h,每个元素存储1个字母,截取bc和ef，拼接成一个新数组。
/*var arr=['a','b','c','d','e','f','g','h'];
var arr1=arr.slice(1,3).concat(arr.slice(-4,-2));
console.log(arr1);*/
//5.删除数组中的元素----splice---改变原数组
//arr.splice(2,2)返回的是删除的元素
//arr.splice(2,3);
//arr.splice(2);//一个参数，从下标一直删除到最后
//arr.splice(-3);
//arr.splice(2,2,'新闻','旅游');
//arr.splice(2,0,'新闻');
//console.log(arr);


//练习：创建数组,包含a~h,每个元素存储1个字母；删除d,e;替换f为m，在下标为1的位置插入字母z。
//var arr=['a','b','c','d','e','f','g','h'];
//arr.splice(3,2);
//arr.splice(3,1,'m');
//arr.splice(1,0,'z');
//console.log(arr);

//6.翻转数组中的元素--reverse()
var arr=['a','b','c','d'];
arr.reverse();
//7.对数组元素排序
var arr=[70,65,101,9,82,205];
//console.log(arr.sort());//默认按照Unicode排序的
//对数字进行由大到小/由小到大排序
console.log(arr.sort(function (a,b){return a-b;}));


