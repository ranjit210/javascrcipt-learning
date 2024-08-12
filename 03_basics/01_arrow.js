//  use of this keywords

const user ={
    username:"ranjit",
    price:345,
    welcomeMessage:function(){
        console.log(`${this.username},welcome to my website`)//this keyword refer current context.
        console.log(this)
    }

}
//user.welcomeMessage()
//user.username="sam"
//user.welcomeMessage()
//console.log(this) //it will print empty objects

//Arrow function()
let one =()=>{
    let userName="Harsh"
    console.log(this.userName)

}
//one()

const addtwo=(num1,num2)=>{//explicit return
    return num1+num2;


}
console.log(addtwo(4,7))
//const addtwo = (num1,num2)=> (4+8) //implicit return 
//const addtwo=({Namee:"ayush"}) object return