let makeSound = function (animal) {
    if (animal instanceof Duck) {
        console.log('嘎嘎嘎');
    } else if (animal instanceof Chicken) {
        console.log('咯咯咯');
    }
}

let Duck = function () {};
let Chicken = function () {};

makeSound(new Duck());
makeSound(new Chicken());