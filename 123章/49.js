let cost = (function () {
    let args = [];
 
    return function () {
        if (arguments.length === 0) {
            let money = 0;
            for (let i = 0; i < args.length; i++) {
                money += args[i]
            }
            return money;
        } else {
            [].push.apply(args, arguments)
            console.log(args);  
        }
    }
})();

cost(100);
cost(100);
cost(100);
cost(100);
cost(100);
//以上皆未求值
//只有下一行求值
console.log(cost());
