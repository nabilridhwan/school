/*
    Name: Nabil Ridhwanshah
    ID: 2007421
*/

let input = require('readline-sync')
let numberOfChildren;
let numberOfChildren_while_loop = input.questionInt("Please enter the number of children: ")

while (numberOfChildren_while_loop < 0 || numberOfChildren_while_loop > 50) {
    console.log("Invalid number of children!")
    numberOfChildren_while_loop = input.questionInt("Please enter the number of children: ")
}

// do{
//     numberOfChildren = input.questionInt("Please enter the number of children: ")
// }while(numberOfChildren < 0 || numberOfChildren > 50)
// console.log("Input Accepted! Program terminated..")

console.log("Input Accepted! Program terminated..")