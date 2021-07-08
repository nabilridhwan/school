/*
    Name: Nabil Ridhwanshah
    ID: P2007421
*/

var input = require("readline-sync");

var pat = choosePattern();
var num = readInput();

switch (pat) {
    case 1:
        printPattern1(num);
        break;
    case 2:
        printPattern2(num);
        break;
    case 3:
        printPattern3(num);
        break;
    case 4:
        console.log("Program exited with code 4 (exit)")
        break;
    default:
        console.log("Please give me an option!")
        break;
}

function readInput() {
    if(pat != 4) return input.questionInt("Enter the number of rows: ")
}

function choosePattern() {
    return input.questionInt("1. Print Pattern 1\n2. Print Pattern 2\n3. Print Pattern 3\n4. Exit\nOption: ")
}

/*part c*/
function printPattern1(n) {
    let str = "";
    for (let j = 1; j <= 4; j++) {

        for (let i = 0; i < n; i++) {
            str += j + "\t"
        }

        str += "\n"
    }

    console.log(str)
}

/*part d*/
function printPattern2(n) {
    let str = "";
    for (let i = 0; i < n; i++) {
        for (let j = 1; j <= 4; j++) {
            str += j + "\t"
        }

        str += "\n"
    }

    console.log(str)
}

/*part e*/
function printPattern3(n) {
    let str = "";
    for (let j = 1; j <= 4; j++) {

        for (let i = 1; i <= n; i++) {
            str += i * j + "\t"
        }

        str += "\n"
    }

    console.log(str)
}