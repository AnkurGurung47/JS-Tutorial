//named iife
(function sum(num1,num2){
    console.log(num1+num2);
})(5,6);

//unnamed iife

((num1,num2)=>{
    console.log(num1-num2);
})(9,2);