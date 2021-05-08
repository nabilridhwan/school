/*
Name: Nabil Ridhwanshah
ID: P2007421
*/

let input = require("readline-sync");
let firstNumber = input.questionInt("Enter first number: ")
let secondNumber = input.questionInt("Enter second number: ")

console.log("Here are the results... \n\n" + firstNumber + " + " + secondNumber + " = " + (firstNumber+secondNumber) +"\n" + firstNumber + " divisble by " + secondNumber + "? " + (firstNumber % secondNumber == 0))