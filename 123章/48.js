Function.prototype.before = function (beforefn) {
    let __self = this ;
    return function () {
        beforefn.apply(this,arguments);
        return __self.apply(this,arguments);
    };
};

Function.prototype.after = function (afterfn) {
    let __self = this ;
    return function () {
        let ret = __self.apply(this,arguments);
        afterfn.apply(this,arguments);
        return ret ;
    }
};

let func = function () {
    console.log(2);
}

func = func.after(function(){
    console.log(1);
}).before(function(){
    console.log(3);
})()