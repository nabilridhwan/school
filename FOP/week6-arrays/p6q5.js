/*
    Name: Nabil Ridhwanshah (2007421)
    Class: DCITP/01
*/

let intArray = new Array(50)
let oddArray = [];
let evenArray = [];
let highestValue = 0;

for(let i = 0; i < 50; i++){
    intArray[i] = Math.floor(Math.random() * 101)
}

for(let i = 0; i < intArray.length; i++){
    if(intArray[i] % 2 == 0) evenArray.push(intArray[i])
    else oddArray.push(intArray[i])
}

console.log("Original Array: " + JSON.stringify(intArray))
console.log("Even Numbers: " + JSON.stringify(evenArray))
console.log("Odd Numbers: " + JSON.stringify(oddArray))