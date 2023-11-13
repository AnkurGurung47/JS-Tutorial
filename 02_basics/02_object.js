const mySys=Symbol("hello");

const obj={
    name:"Ankur",
    age:24,
    "Hobbies of":"football",
    [mySys]:"This is Hello",
    action:function(){
        return "Hello, World!"
    }
}
const ans=obj.action();
console.log(ans);
console.log(obj.name);
console.log(obj["name"]);
console.log(obj[mySys]);
console.log(obj["Hobbies of"]);
// console.log(obj.Hobbies of); throw error with dot notation


//freeze
obj.sex="Male"
console.log(obj);
// Object.freeze(obj);
obj.email = "Ankur@microsoft.com"
console.log(obj);

//adding function

obj.greeting=function(){
    console.log("Hello, Namaste")
}
console.log(obj);
obj.greeting();