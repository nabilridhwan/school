/*
Name: Nabil Ridhwanshah
ID: P2007421
*/

let input = require("readline-sync");
let x1 = input.questionFloat("Enter x1: ")
let y1 = input.questionFloat("Enter y1: ")
let x2 = input.questionFloat("Enter x2: ")
let y2 = input.questionFloat("Enter y2: ")
let distance = Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2))

console.log("The distance between " + "(" + x1 + "," + y1 + ")" + " and " + "(" + x2 + "," + y2 + ") is " + distance)

