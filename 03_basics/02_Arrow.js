//explicit return
const action=(num1,num2)=>{
    return num1+num2;
}
console.log(action(5,6));

//implicit return

const action2=(num1,num2)=>(`Sum of num1 and num2 is ${num1+num2}`)

console.log(action2(6,5));