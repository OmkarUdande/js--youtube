// ***primitive***

// 7 Types : String, Number, Boolean, null, Symbol,BigInt

const score = 100
const scoreValue = 100.3

const isLoogedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id == anotherId );

const bigNumber = 274378293948584832n





//Reference(Non primitive)

//Array, Objects,Functions

const heros = ["shaktiman", "naagraj", "doga"]


let myobject={
    name:"omkar",
    age:23,
}


const myfuntions = function(){
    console.log("Hello World");
    
}

// type check (typeof)
// console.log(typeof scoreValue);
// console.log(typeof score);
// console.log(typeof anotherId);
// console.log(typeof Objects);


// https://262.ecma-international.org/5.1/#sec-11.4.3


//*********************************************************

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = " omkarudandedotcom"

let anothername = myYoutubename

anothername = " Start Coding Journey"

console.log(myYoutubename);
console.log(anothername);


let userOne = {
    email:"omii@gmail.com",
    upi: "omii@ybl"
}

let userTwo = userOne

userTwo.email = "omkarudand@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

