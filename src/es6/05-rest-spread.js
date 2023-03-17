//arrays destructuring

let fruits = ['apple', 'banana'];
let [a,b] = fruits;
console.log(a, fruits[1]);

//object destructuring
let user = {username: "luis", age: 33};
let {username, age}= user;
console.log(username, age);


//spread operator

let person = {name: "luis", age: 22};
let country ='MX';

let data = {...person, country};
console.log (data)


//rest parameter

function sum(num, ...values){
  console.log(values);
  console.log (num + values [0]);
  return num + values [0];
}
sum (1,5,2,4)

