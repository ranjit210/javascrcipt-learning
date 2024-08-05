let myDate = new Date()
console.log(myDate)          //2024-08-05T08:00:57.161Z
console.log(myDate.toString())//Mon Aug 05 2024 08:00:57 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toLocaleString())//8/5/2024, 8:00:57 AM
console.log(myDate.toJSON())        //2024-08-05T08:00:57.161Z
console.log(myDate.toLocaleTimeString())

console.log("+++++++++")
//let newdate =new Date(2024,0,25)
//let newdate =new Date(2024,0,25,5,6)
let newdate =new Date("11/23/2021")
console.log(newdate)
//console.log(newdate.toString())
console.log(newdate.toLocaleString())

let timeStamp =Date.now();
console.log(timeStamp)