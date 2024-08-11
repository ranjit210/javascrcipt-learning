//  use of this keywords

const user ={
    username:"ranjit",
    price:345,
    welcomeMessage:function(){
        console.log(`${this.username},welcome to my website`)//this keyword is used in current context.
        console.log(this)
    }

}
//user.welcomeMessage()
//user.username="sam"
//user.welcomeMessage()
//console.log(this) //it will print empty objects

//Arrow function()
let one =()=>{
    const 

}