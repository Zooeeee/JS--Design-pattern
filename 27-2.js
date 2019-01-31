let obj = {
    myName : 'sven',
    getName : function(){
        return this.myName;
    }
}
console.log(obj.getName());

let getName2 = obj.getName;
console.log(getName2());

