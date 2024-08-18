// reduce

const myNums =[1,2,3]

const myTotal= myNums.reduce((accu,cv)=>{

    //console.log(`accu${accu} and cv is ${cv}`)

    return accu+cv

},0)
//console.log(myTotal)

// more redue example

const myshop =[
    {itemName:"javascript",Price:3999},
    {itemName:"python", Price:4999},
    {itemName:"ai",Price:8999},
    {itemName:"data science", Price:69999}
]
 const totalPrice =myshop.reduce((accu,item)=> accu+item.Price, 0)

 console.log(totalPrice)

