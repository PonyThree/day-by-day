//Buffer对象---缓冲区  
//创建buffer
var buf=global.Buffer.alloc(5,'abcde');
console.log(buf);
//将buffer转为普通字符
console.log(buf.toString());