/*
    Name: Nabil Ridhwanshah
    ID: P2007421
*/

let input = require("readline-sync");
let yearOfService = input.questionInt("Please enter your year of service: ");
let userSalary = input.questionFloat("Please enter your salary: ");
let increment;

if(yearOfService < 10){
    if(userSalary < 1000) increment = 100
    else if(userSalary < 2000) increment = 200
    else increment = 300
}else{
    if(userSalary < 1000) increment = 200
    else if(userSalary < 2000) increment = 300
    else increment = 400
}

console.log("Your increment is $" + increment)