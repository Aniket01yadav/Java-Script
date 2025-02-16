// const button = document.querySelectorAll(".button")
// document.querySelector("body")

// button.forEach( function(button){
//     console.log(button)
// })

const red = document.getElementById("red");
const white = document.getElementById("white");
const orange = document.getElementById("orange");
const yellow = document.getElementById("yellow");

red.addEventListener("click",()=>{
    document.body.style.backgroundColor="red";
});
white.addEventListener("click",()=>{
    document.body.style.backgroundColor="white";
    const h1 = document.getElementById("h1");
    const h2 = document.getElementById("h2");
    h1.style.color = "black"
    h2.style.color = "black"
});
orange.addEventListener("click",()=>{
    document.body.style.backgroundColor="orange";
});
yellow.addEventListener("click",()=>{
    document.body.style.backgroundColor="yellow";
});
