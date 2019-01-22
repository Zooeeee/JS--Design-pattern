/*
 * @Author: Zoe 
 * @Date: 2019-01-22 17:14:19 
 * @Last Modified by: Zy
 * @Last Modified time: 2019-01-22 17:16:51
 */ 

let Plane = function(){
    this.blood = 1000;
    this.attackLevel = 1 ;
    this.defenseLevel = 1 ;
};
let plane = new Plane();
plane.blood = 500 ;
plane.attackLevel = 10 ;
plane.defenseLevel = 7 ;

Object.prototype;

let clonePlane = Object.create(plane);
console.log(clonePlane.blood);
console.log(clonePlane.attackLevel);
console.log(clonePlane.defenseLevel);
