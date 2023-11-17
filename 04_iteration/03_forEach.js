let arr=["Ankur","Shival","Shivansh"];
arr.forEach(function(items){
    console.log(items);
})

let arr1=[
    {Name:"Ankur",job:"Software Developer",Age:30},
    {Name:"Shival",job:"SPG Commando",Age:32},
    {Name:"Shivansh",job:"to play",Age:2}
]
arr1.forEach((items)=>{
    console.log(`My Name is ${items.Name}, I Work as a ${items.job} and My Age is ${items.Age} years old.`)
})