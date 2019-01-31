/*
 * @Author: Zoe 
 * @Date: 2019-01-27 13:53:11 
 * @Last Modified by: Zy
 * @Last Modified time: 2019-01-27 14:13:09
 */
let Person = function(){
    this.name = '正常值';
    return {
        name:'返回值'
    }
}
let Person2 = function(){
    this.name = '正常值2';
    return 'return'
}

let a = new Person();
console.log(a.name);
console.log(a);
let b  = new Person2();
console.log(b.name);
console.log(b);
console.log('--------------------------');





let obj1 = {
    name : 'sven',
    getName : function(){
        return this.name
    }
}

let obj2 = {name:'anne'};

console.log(obj1.getName());
console.log(obj1.getName.call(obj2));













