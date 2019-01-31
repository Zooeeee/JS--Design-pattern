let isType = function (type) {
    return function (obj) {
        return Object.is(Object.prototype.toString.call(obj),`[object `+type+`]`) ;
    }
}

let isString = isType('String');
console.log(isString('ss'));

 
