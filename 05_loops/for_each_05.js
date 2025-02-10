const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

let empinfo = [
    {
        name : "Aniket",
        salary : 52000
    },
    {
        name : "Ayush",
        salary : 55000
    },
    {
        name : "nikhil",
        salary : 51000
    }
]

empinfo.forEach((key) => {
    console.log(`Employee name is ${key.name} and salary is ${key.salary}`);
    
})


