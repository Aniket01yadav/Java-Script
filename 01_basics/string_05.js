const name = "Aniket"
const repocount = 79

console.log(name + repocount + " value");

console.log(`Hello my name is ${name} and my repocount is ${repocount}`);

const gamename = new String('the-aniket-yadav')

console.log(gamename[7]);
console.log(gamename.__proto__);

console.log(gamename.length);
console.log(gamename.toUpperCase());
 
console.log(gamename.charAt(5));
console.log(gamename.indexOf('i'));


const newstring = gamename.substring(0,7)
console.log(newstring);


const anotherstring = gamename.slice(-7,0)
console.log(anotherstring);


const newStringOne = "   Aniket    "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://aniket.com/aniket%20yadav"

console.log(url.replace('%20', '-'));
console.log(url.includes('Hello'));
console.log(gamename.split('-'));

