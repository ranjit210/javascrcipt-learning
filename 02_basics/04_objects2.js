//  object by using singleton or constructor
const tinder =new Object();// singleton objects
//console.log(tinder) //it will return empty objects.

const newtinder ={}  //non-singleton objects

newtinder.id ="123abc";
newtinder.name="ranjit";
newtinder.isLoggedIn =false;
//console.log(newtinder) //

const newUser= {
    email:"chowdhury@gmail.com",
    FullName:{
        userFullName:{
            FirstName:"Ranjit",
            LastName:"Chowdhury"
        }
    }
}
//console.log(newUser)
//console.log(newUser.FullName?.userFullName.FirstName) //to access object value and use ? mark for protection

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3={obj1,obj2}// it will give { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
//console.log(obj3) //it will combine the objects but it will create problems.Dont use
const obj4=Object.assign({},obj1,obj2);  //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
//console.log(obj4)

//user spreads methods to join objects
obj5={...obj1,...obj2}
//console.log(obj5)


// objects in array

const user =[
    {
        id:123,
        password:"123abn"
    },
    {
        id:456,
        password:"ran567"
    }
]
//console.log(user[1].id) //to access array object value

//console.log(newtinder)
//console.log(Object.keys(newtinder))
//console.log(Object.values(newtinder))
console.log(Object.entries(newtinder)) //it will return objects key and value in array




