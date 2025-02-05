//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3
 
let arr = [1,2,3,4,6,7,8,9]

// console.log(typeof myObj)
// console.log(typeof arr);
// console.log(typeof myFunction);


// stack(primitive), Heap(Non-primitive)


//                          Stack(primitive)

let myrealname = "Aniket"

let anothername = myrealname
anothername = "Hello"

console.log(anothername);
console.log(myrealname);


//                              Heap(Non-primitive)

//             It is also called refrence type memory allocation

let userone = {
    email : "ayush@gmail.com",
    upi : "user@ybl" 
}

let usertwo = userone

usertwo.email = "aniket@gmail.com" 

 console.log(userone.email);
 console.log(usertwo.email);
 






