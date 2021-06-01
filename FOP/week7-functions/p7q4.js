/*
    Name: Nabil Ridhwanshah
    ID: P2007421
*/
var input = require("readline-sync")

function getInput(s){
    return input.questionInt("Please enter " + s + " integer: ")
}

function findMax(num1, num2){
    if(num1 == num2){
        console.log("The 2 numbers are equal")
    }else{
        if(num1 > num2){
            console.log("1st number is bigger")
        }else{
            console.log("2nd number is bigger")
        }
    }
}

findMax(getInput("1st"), getInput("2nd"))