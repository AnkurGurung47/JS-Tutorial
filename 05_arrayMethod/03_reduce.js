const num=[1,2,3,4];
const myTotal=num.reduce(function(acc,current1){
    console.log(`acc: ${acc} current value : ${current1}`)
    return acc+current1
},0)
console.log(myTotal);

const courses=[
{
    Name:"Data Science",
    Price:13000
},
{
    Name:"Data Analyst",
    Price:10000
},
{
    Name:"Web Development",
    Price:1990
},
{
    Name:"Cyber security",
    Price:13500
}
]

const TotalCartValue=courses.reduce((acc,items)=>{
    return acc+items.Price;
},0)
console.log(TotalCartValue)