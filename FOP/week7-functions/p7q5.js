/*
    Name: Nabil Ridhwanshah
    ID: P2007421
*/
let input = require("readline-sync");

function readYear(s){
    return input.questionInt("Enter " + s + " Year: ")
}

function isLeapYear(year){
    return (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0))
}

let startYear = readYear("Start"), endYear = readYear("End");

if(startYear > 0 && endYear > startYear){
    for(var i = startYear; i <= endYear; i++){
        isLeapYear(i) ? console.log(i + " is a Leap Year") : console.log(i + " is not a Leap Year");
    }
}



