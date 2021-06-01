/*
    Name: Nabil Ridhwanshah
    ID: P2007421
*/


let input = require("readline-sync");
let year = input.questionInt("What is the year? ")

function isLeapYear(year){
    return (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0))
}

console.log(year + " is Leap year? " + isLeapYear(year))

