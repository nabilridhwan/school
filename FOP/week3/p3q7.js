/*
Name: Nabil Ridhwanshah
ID: P2007421
*/

let input = require("readline-sync");
let fahrenheit = input.questionFloat("Enter Temperature in Fahrenheit: ")
let celsius = (5/9) * (fahrenheit - 32)

console.log("Temperature in Celsius: " + celsius)