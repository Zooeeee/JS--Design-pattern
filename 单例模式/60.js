//单例模式v1
//缺点是这个类不透明
//使用者必须要知道这是一个单例类
let Singleton = function (name) {
    this.name = name ;
}

Singleton.instance = null ;
console.log(Singleton.prototype);
Singleton.prototype.getName = function () {
    console.log(this.name);
}
console.log(Singleton.prototype);
Singleton.getInstance = function (name) {
    if(!this.instance){
        this.instance = new Singleton(name);
    }
    return this.instance;
}
console.log(Singleton.prototype);

let a = Singleton.getInstance('sven1');
let b = Singleton.getInstance('sven2');

console.log(Object.is(a,b));


