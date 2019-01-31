/**
 * 想使用Array的push并用call方法来增加要满足两个条件
 * 1.对象可以改变存取
 * 2.对象要有可以改变的length属性
 */

let a = [];
Array.prototype.push.call(a,1);
console.log(a[0]);


let b = 1;
Array.prototype.push.call(b,1);
console.log(b[0]);


//以下代码段会报错 因为函数类型的length是个只读类型
/* let c  = function(){};
Array.prototype.push.call(c,1);
console.log(c[0]); */
