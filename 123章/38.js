var multi = (function () {
    var cache = {};
    return                                                                                                                                                                        function () {
        var args = Array.prototype.join.call(arguments, ',');
        console.log(args);
        console.log(cache);
        if (cache[args]) {
            return cache[args];
        }

        var a = 1;
        for (var i = 0; i < arguments.length; i++) {
            a = a * arguments[i]
        }
        return cache[args] = a;
    }
}())


console.log(multi(1, 2, 5));
console.log(multi(1, 2, 5));

console.log(multi.cache);
