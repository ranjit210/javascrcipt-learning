const num =new Number(100)
console.log(num)
console.log(num.toString().length)  //convert to string and gives its length
console.log(num)
console.log(num.toFixed(2))  //it will return 100.00

const otherNum =123.345
console.log(otherNum.toPrecision(4)) // it will return 123.3

const hundreds = 1000000000
console.log(hundreds.toLocaleString())  //it will give 1,000,000,000
console.log(hundreds.toLocaleString('en-IN')) //it will give in indian number and print 1,00,00,00,000


// +++++++++++++++++++++++Maths++++++++++++++++++++++++++
console.log(Math);
console.log(Math.abs(-5)); //return positive value
console.log(Math.round(4.6)) //return round off value of 5
console.log(Math.floor(4.8))  //it will return nearest to 4
console.log(Math.ceil(4.3))  // it will give 5
console.log(Math.min(2,4,5,6,7,8)); //it will give min value of 2
console.log(Math.max(5,6,9,1,12));  //it will give max value of 12
console.log('random value')
console.log(Math.random()) //it will give value between 0 to 1

const max =20;
const min =10;
console.log(Math.floor(Math.random()*(max-min+1)+min))//after doing this we will get value from 10 to 20

