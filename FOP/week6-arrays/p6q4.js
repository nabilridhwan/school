/*
    Name: Nabil Ridhwanshah (2007421)
    Class: DCITP/01
*/

let intArray = new Array(5)
let highestValue;

for(let i = 0; i < 5; i++){
    intArray[i] = Math.floor(Math.random() * 12)
}

highestValue = intArray[0]
for(let i = 0; i < intArray.length; i++){
    if(intArray[i] > highestValue) highestValue = intArray[i]
}

console.log("Array: " + JSON.stringify(intArray))
console.log("Highest Value: " + highestValue)