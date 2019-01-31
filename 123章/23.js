/*
 * @Author: Zoe 
 * @Date: 2019-01-22 20:42:20 
 * @Last Modified by: Zy
 * @Last Modified time: 2019-01-22 21:04:20
 */
//此处是关于js 在 es6 中 新增的class内容
class Animal {
    constructor(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
}

class Dog extends Animal{
    constructor(name){
        super(name);
    }
    speak(){
        return "汪"
    }
}

let dog = new Dog("狗");
console.log(dog.getName() + ':' + dog.speak());
