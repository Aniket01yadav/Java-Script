//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Aniket"

    function two(){
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "Aniket"
    if (username === "Aniket") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


// console.log(addone(5))

// function addone(num){
//     return num + 1
// }


// Here we got error 
// addTwo(5)
// const addTwo = function(num){
//     return num + 2
// }


// practice 

function addition(num5, num6) {
    function sub(x, y) {
        return x - y;  // Use correct parameter names
    }
    
    console.log(sub(9, 6)); // Call the function correctly
    return num5 + num6; // Return the sum
}

console.log(addition(34, 43));






