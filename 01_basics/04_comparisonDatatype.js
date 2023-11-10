console.log("2">1); //true
console.log("02">1); //true

console.log(null>0); //false
console.log(null<0); //false
console.log(null==0); //false
console.log(null>=0); //true
console.log(null<=0); //true

//DataType of JS
//Primitve
const bigInteger=34567892567893567n;
console.log(bigInteger);
console.log(typeof bigInteger);


const id=Symbol("123");
console.log(id);
const id1=Symbol(123);
console.log(id1);
console.log(id==id1);
console.log(id===id1);


//non-primitive

const arr=[1,2,3];
console.log(arr);
console.log(typeof arr);
const obj={
    name:"Ankur",
    age:24
}
console.log(obj);
console.log(typeof obj);

function sum(){
    return "Hello, World!"
}
console.log(sum());
console.log(typeof sum); //function object.
 