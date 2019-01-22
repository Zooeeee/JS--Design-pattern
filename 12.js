let Person = (function (name){
    name = name;        //private
    return {
        getName:function(){
            return name ;    //public
        }
    }
})/* ('Zy') */;   //以Zy这个字符串为参数  执行该函数并返回给Person
let person = new Person('Zy');

console.log(person.name);
console.log(person.getName());

