/*
Name: Nabil Ridhwanshah
ID: P2007421
*/

let input = require("readline-sync");
let firstAngle = input.questionFloat("Enter first angle: ")
let secondAngle = input.questionFloat("Enter second angle: ")

console.log("The third angle is " + (180 - firstAngle - secondAngle) + " degrees")
