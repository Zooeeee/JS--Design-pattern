/*
 * @Author: Zoe 
 * @Date: 2019-01-22 20:17:15 
 * @Last Modified by: Zy
 * @Last Modified time: 2019-01-22 21:10:42
 */
/**
 * 此处是关于 js 的原型链
 * prototype 是 原型的意思 在对象创建时会继承 原型的属性和方法
 * __proto__ 指向 一个 原型并在创建时继承
 * b.name 先在b中找 找不到 
 * 再去B.prototype 也就是  new A () 里去找  
 *  new A () 里找不到 去 A.prototype中去找
 * 找到了就停止 找不到再去找 Object里面的 name属性
 */

let A = function(){};
A.prototype = {name : 'sven'};

let B = function(){};
B.prototype = new A();

let b = new B();
console.log(b.name);
console.log(b.sex);

//原型模式  克隆一个完全一样的对象
let c = Object.create(b);
console.log(c.name);

