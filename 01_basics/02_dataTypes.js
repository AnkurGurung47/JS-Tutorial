"use strict";  //treat all JS code as a newer version.

//alert(3+2); //did not work as we are using nodejs,not browser.
let str="Ankur";
let num=10;
let special=Symbol("hello");
let bool=true;
let a;
let b=null;

console.table([str,num,special,bool,a,b]);
console.log(typeof a);
console.log(typeof b);