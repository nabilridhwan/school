/*
Name: Nabil Ridhwanshah
ID: P2007421
*/

var input = require("readline-sync")
var score = input.questionInt("What is your score? ")
var grade;

if (score >= 80) {
    grade = "A";
} else if (score >= 70 && score < 80) {
    grade = "B"
} else if (score >= 60 && score < 70) {
    grade = "C"
} else if (score >= 50 && score < 60) {
    grade = "D"
} else {
    grade = "E"
}

console.log("Your grade is " + grade)