//primitives

//7-types =>string,number,null , undefined,boolean,symbol,bigInt

//reference type(non-primitive)=>array,objects,functions

let sy=Symbol('123')
let sy1=Symbol('123')
console.log(sy===sy1);
let emptyvalue = null
console.log(typeof emptyvalue);  //object
let value = undefined
console.log(typeof value);  //undefined

let arr =["ranjit","goutam","amar"]
console.log(typeof arr) //object

let obj={
    name:"ranjit",
    score:34,
    school:"pvm"
}
console.log(typeof obj); //return object



