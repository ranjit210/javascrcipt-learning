(function one(){
    console.log("db is connected...")
})() ; // iife function execute immediately and save us from global populated in variable and objects

//use of arrow() in iife

( ()=>{
    console.log("db is connected too")

})()