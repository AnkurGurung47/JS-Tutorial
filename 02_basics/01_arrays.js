const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, [5,6]]]];
console.log(another_array);
console.log(another_array.flat(1));
console.log(another_array.flat(2));
console.log(another_array.flat(Infinity));

//from string to array

const str="ANKUR";
console.log(Array.from(str));

//combining 

let a=100;
let b=200;
let c=300;

let arr1=Array.of(a,b,c);
console.log(arr1);