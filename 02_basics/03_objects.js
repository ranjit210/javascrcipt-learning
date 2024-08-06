// singleton
//object.create

//object literals

const mysmb=Symbol("key1"); //symbol declaration

const jusers={
    Name:"ranjit",
    email:"chowdhuryranjit@gmail.com",
    age:89,
    [mysmb]:"mykey1",
    islogedIn:false,
    lastLoginDays:["saturday","sunday"]
}

console.log(jusers.email)

console.log(jusers['email'])
console.log( typeof jusers[mysmb])
jusers.email="ranju@gmail.com";//to change the value of the object.
console.log(jusers.email)
//Object.freeze(jusers)  //it will freeze the object and not change the value of object
jusers.email="harsh";
console.log(jusers.email) //it will not change the value after freezing the object
console.log(jusers)
jusers.greetings = function(){
    console.log("hello jusers")
}
console.log(jusers.greetings); // it will give undefined
console.log(jusers.greetings())

