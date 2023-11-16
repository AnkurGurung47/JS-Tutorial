const arr=[1,2,3,4];
const str="ANKUR";
for(const num of arr){
    console.log(num);
}
for(const character of str){
    console.log(character);
}

const newMap=new Map();
newMap.set("Name","Ankur");
newMap.set("Age",24);
newMap.set("Salary","100K");
// console.log(newMap);
for(const [key,value] of newMap){
    console.log(key,value);
}

//didnot work in object{}.
