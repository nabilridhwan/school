/*
Name: Nabil Ridhwanshah
ID: P2007421
*/

let input = require("readline-sync");
let amount = input.questionFloat("Enter amount: ")
let denominations = [1000, 100, 50, 10, 5, 2, 1]

denominations.forEach(d => {
    let notesNeeded = parseInt(amount / d)
    console.log(`${notesNeeded} Note(s) needed for $${d}: ${notesNeeded}`)
    amount -= notesNeeded * d
})
