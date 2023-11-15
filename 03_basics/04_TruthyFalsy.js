//truthy:- "0"," ",1,[],{},function(){},"false",
//Falsy:- false,0,-0,null,undefined,"",NaN,BigInt 0n

if(-0){
    console.log("Truthy value")
}else{
    console.log("falsy value")
}

//checking empty object

const obj={};

if(Object.keys(obj).length===0){
    console.log("empty Object");
}

//nullish coalescing operator(??)

let val1;
val1=9??8;
console.log(val1);

val1=null??8
console.log(val1);

val1=null??10??20;
console.log(val1);