//Scope

let a=10;
const b=20;
var c=30;

{
    console.log("Inside Scope: ")
    let a=100;
    const b=200;
    var c=300;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log("Outside Scope: ")
console.log(a);
console.log(b);
console.log(c);

//Hoisting

console.log(d);// return undefined, in case of let and const throw Error
var d=100; 

console.log(sum(4,5)); // return 9

function sum(num1,num2){
    return num1+num2;
};

console.log(action(4,5)); //throw error
var action=function(num1,num2){ 
    return num1+num2;
};

// console.log(action(4,5));