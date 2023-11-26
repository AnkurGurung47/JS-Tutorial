const promiseOne=new Promise(function(resolve,reject){
     setTimeout(function(){
        console.log("Task completed");
        resolve();
     },1000)
})
promiseOne.then(function(){
    console.log("Finally Done");
})

//we can also do this without using reference variable.

const promiseTwo=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({user:"ankur",age:24})
    },1000)
})

promiseTwo.then(function(user){
    console.log(user);
}
)

