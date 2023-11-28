// const promiseOne=new Promise(function(resolve,reject){
//      setTimeout(function(){
//         console.log("Task completed");
//         resolve();
//      },1000)
// })
// promiseOne.then(function(){
//     console.log("Finally Done");
// })

//we can also do this without using reference variable.

const promiseTwo=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({user:"ankur",age:24})
    },1000)
})

// promiseTwo.then(function(user){
//     console.log(user);
// }
// )

const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        let err=true;
        if(!err){
            resolve({name:"Ankur",Age:24});
        }else{
            reject("HAHA error!!!!");
        }
    },1000)
})
promiseThree
.then(function(user){
    console.log("Ran Succesfully");
    return user.name;  //this is must
}).then((name1)=>{
    console.log(name1);
}).catch(function(err){
    console.log(err);
}).finally(()=>console.log("Task either resolved or rejected!!"))

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(error){
            resolve({name:"Python",amount:2400});
        }else{
            reject("No course available")
        }
    },1000)
})

async function consumePromiseFour(){
    try {
        const response=await promiseFour
        console.log(response);
    } catch (error) {
        console.log(error);
    }
    
}

consumePromiseFour();

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()
        // console.log(response);
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers()

// fetch('https://api.github.com/users/ankurgurung47')
// .then((response) => {
//     return response.json()
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => console.log(error))