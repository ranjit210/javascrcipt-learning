const myArray =[0,1,2,3,4,5]
//console.log( myArray)
//console.log(myArray[1])
//const myArray2=new Array(0,1,2,3,4,5)
//console.log(myArray2)

//.....Array Methods.....
//myArray.push(6)   // add value at the end of the array
//console.log(myArray)
//myArray.pop()   //remove last element of the  array
//console.log(myArray)
//myArray.unshift(9) //add first element in the array

//console.log(myArray.includes(5))
//console.log(myArray.indexOf(8))
//const newArray =myArray.join()//out will be in string
//console.log(myArray)
//console.log(newArray)

//slice and splice
console.log("A",myArray)

const arr1=myArray.slice(1,3) //index of element 3 is not included
console.log(arr1)
console.log("B",myArray)

const arr2=myArray.splice(1,3)// index of element 3 is included and affect the main array.
console.log(arr2)
console.log("c",myArray)//it will return only left portion of array after using splice
