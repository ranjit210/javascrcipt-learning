function LoginUserMessage(user){
    return `${user},Just logged in...`
}
//console.log(LoginUserMessage('ranjit')); //always use console.log after using return

function CalculataItemsINCart(value1,value2,...num1){    //...rest operator

    return num1

}
//console.log(CalculataItemsINCart(100,466,234)) //it will return only 100
//console.log(CalculataItemsINCart(100,345,233,4556)) // it will return array of number


// using object in function.
const user={
    userName:"rnajit",
    price:234
}
function PrintObject(anyobject){
    console.log(`username is ${anyobject.userName},and price is ${anyobject.price}`)

}
PrintObject(user)

// using array in function
const myarray=[234,211,34,45,]
function returnsecondValue(getarray){
    return getarray[1]
}
console.log(returnsecondValue(myarray))