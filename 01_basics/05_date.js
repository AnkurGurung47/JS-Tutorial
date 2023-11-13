const myDate=new Date();
console.log(myDate.getDate());
console.log(myDate.toLocaleString());

//custom date
const newDate=new Date(2024,9,1);
console.log(newDate.toLocaleString());

//for specific format
const customDate=new Date("09-05-1995");
console.log(customDate.toLocaleString());

//time stamp

const myTime=Date.now()
console.log(myTime.toLocaleString("en-IN"));

let newDate1 = new Date();
let ans=newDate1.toLocaleString('default', {
    weekday: "long",
    
})
console.log(ans);