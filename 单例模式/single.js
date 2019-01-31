let getSingle = function (fn) {
    let ret ;
    return function () {
        return ret||(ret = fn.apply(this,arguments));
    };
};  