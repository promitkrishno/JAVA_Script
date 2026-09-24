// primitive data types
// 7 types of primitive data types in JavaScript
// 1. Number
// 2. String
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. Symbol
// 7. BigInt


const score = 100; // number
const scoreValue = 100.5; // number
const isLoggedIn = false; // boolean
const outsideTemp = null; // null
const user = undefined; // undefined
const user1 = undefined; // undefined
const id = Symbol("123"); // symbol
const id1 = Symbol("123"); // symbol // variable id and id1 are not equal because symbol is unique
const bigNumber = 1234567890123456789012345678901234567890n; // BigInt
console.log(id === id1); // false

// non-primitive (reference) data types
// 1. Object
// 2. Array
// 3. Function

const heros=["ironman","spiderman","thor"]; // array

let myObj={
    name:"John",
    age:30,
    isLoggedIn:true
} // object

const myFunction = function(){
      console.log("Hello World");
}

console.log( typeof score); // number
console.log( typeof scoreValue); // number
console.log( typeof isLoggedIn); // boolean
console.log( typeof outsideTemp); // object
console.log( typeof user); // undefined
console.log( typeof id); // symbol
console.log( typeof bigNumber); // bigint
console.log( typeof heros); // object
console.log( typeof myObj); // object
console.log( typeof myFunction); // function

// Momory allocation for primitive data types is done in stack memory and for non-primitive data types is done in heap memory.

let myName = "Promit Krishno Sarker"; // string
let anotherName = myName; // anotherName is a copy of myName
anotherName="Shukto";
console.log(myName, anotherName); // Promit Krishno Sarker Promit Krishno Sarker
console.log( anotherName); // Shukto


let userOne={
    email:"userone@example.com",
    id:"0242310005101154"

}

let userTwo=userOne; // userTwo is a reference to userOne
userTwo.email="usertwo@example.com";
console.log(userOne.email); // userone@example.com
console.log(userTwo.email); // usertwo@example.com