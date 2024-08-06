const m_hero =["ironman","spiderman","thor"];
const dc_hero=["batman","flash","superman"];

//m_hero.push(dc_hero);//not good practice
//console.log(m_hero)// it will return [ 'ironman', 'spiderman', 'thor', [ 'batman', 'flash', 'superman' ] ]

//const all_hero=m_hero.concat(dc_hero)//add the array but difficult if there is more than two arrays
//console.log(all_hero) // return this [ 'ironman', 'spiderman', 'thor', 'batman', 'flash', 'superman' ]
//to add a array use spread[...]

//const new_hero =[...m_hero,...dc_hero]; //use spread to add more than two array

//console.log(new_hero)

const another_array = [1,2,3,[4,5,6],7,8,[2,4,5,[0,2,3]]]
console.log(another_array)
const ano_array=another_array.flat(Infinity)//return a new array
console.log(ano_array)

console.log(Array.isArray("ranjit")) //it will return boolean as false
//useful for data scrapping 
console.log(Array.from("ranjit"))// now it will return new array,convert any value ex,string,object into array

console.log(Array.from({name:"ranjit"}))//interesting and it will return empty array

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3))//it will return new array :output[100,200,300]
