/*
    Name: Nabil Ridhwanshah
    ID: 2007421
*/

let input = require("readline-sync")

// Question 2e
let multipleOf = input.question("What multiples do you want to print? ")

// Question 2f
let start = input.question("Starting Number? ")
let end = input.question("Ending Number? ")

for(let c = parseInt(start); c <= parseInt(end); c++){
    // c % parseInt(multipleOf) == 0 ? console.log(c) : null
    if(c % parseInt(multipleOf) == 0){
        console.log(c)
    }
}