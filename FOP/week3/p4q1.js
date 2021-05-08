/*
Name: Nabil Ridhwanshah
ID: P2007421
*/
var input = require("readline-sync")

var number1 = input.questionInt("What is the first number? ");
var number2 = input.questionInt("What is the second number? ");

if (number1 > number2) {
    console.log("1st number is bigger");
} else {
    if (number1 == number2) {
        console.log("1st number is same as 2nd number")
    } else {
        console.log("2nd number is bigger")
    }
}

// if (number1 > number2) {
//     console.log("1st number is bigger");
// } else if (number1 < number2) {
//      console.log("2nd number is bigger")
// } else {
//     console.log("1st number is same as 2nd number")
// }