//for of loops in array

let arr =[1,2,3,4,5]

for (const num of arr) {
   // console.log(num)
    
}
let greet = "harsh"
for (const greeting of greet) {
   // console.log(greeting)
    
}
//Map
const map = new Map()

map.set('IN',"India");
map.set('pak',"Pakistan");
map.set('USA',"United America")

//console.log(map) //print all the values
//for (const key of map) {
    //console.log(key) //print each objects of array
  for (const [key,value] of map) {
   // console.log(key, value)
    
  }  

    
// for in loops .....for objects

const myobj={
  js:"javascript",
  cpp:"c++",
  swift:"swift",
  java:"java",
}
for (const key in myobj) {
  
    //console.log(key,myobj[key])
  }


  //Foreach loop

  const myarr=["jaava","python","node.js","react"]
  myarr.forEach( function(item){
    //console.log(item)
  })
  
// foreach loop in objects of array
const mycoding =[
{
  language:"python",
  price:3000
},
{
  language:"java",
  price:5000
},
{
  language:"javascript",
  price:6000
}
]

    
mycoding.forEach( (items)=>{
    console.log(items.language)

})
