const myNums = [1, 2, 3, 4]

const myTotal = myNums.reduce(function (acc, currval) {
    // console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0)

// const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

// console.log(priceToPay);

// Marks in idvidual subject
let marks = [72, 81, 71, 72, 66]

// const totalmarks = marks.reduce( (acc, num) => acc + num, 0)

const totalmarks = marks.reduce( (acc, num) => {
    console.log(`acc value is : ${acc} and marks is : ${num}`);
    
    return acc+num;
}, 0)

console.log("Total marks = ",totalmarks);
