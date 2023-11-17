let arr=[1,2,3,4,5];
for(let num in arr){
    console.log(num)
}

const obj={
    Name:"ANKUR",
    Age:24,
    Place:"Dehradun"
}

for(let key in obj){
    console.log(key+":"+obj[key]);
}

const newMap=new Map();
newMap.set("Name","SHIVAL")
newMap.set("Age",31)
newMap.set("Place","Delhi")
console.log(newMap)

for(let [key,value] in newMap){ //will not work
    console.log(key);
} 
