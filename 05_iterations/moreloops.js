const myarr=["js","java","python","node"]

const lett=myarr.forEach(function(item){
    //console.log(item)
})
//console.log(lett) //return undefined.

//fillter methods
const myNums=[1,2,3,4,5,6,7,8,9,10]
const newN =myNums.filter( (nums) => nums > 5)
//console.log(newN);

//same thing by foreach
const nums=[];
myNums.forEach( (num)=>{
    if(num>5){
        nums.push(num)
    }
})
//console.log(nums)

//more examples of filter

const books =[
    {title:'bookOne',genre:'friction',publish:1892,edition:2002},
    {title:'bookTwo',genre:'horror',publish:1890,edition:2005},
    {title:'bookThree',genre:'science',publish:1830,edition:2010},
    {title:'bookFour',genre:'romance',publish:1862,edition:2020},
    {title:'bookfive',genre:'animation',publish:1820,edition:2009},
    {title:'bookSix',genre:'friction',publish:1792,edition:2004},
    {title:'bookSeven',genre:'science',publish:1800,edition:2017},
    {title:'bookEight',genre:'romance',publish:1872,edition:2015},
]
const userBooks =books.filter( (bk) => bk.genre==='friction')
console.log(userBooks)