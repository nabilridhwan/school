/*
    Name: Nabil Ridhwanshah
    ID: P2007421
*/


let input = require("readline-sync");

function getInput() {
    return input.questionInt("What is your rank?: ");
}

function printPrize(rank) {
    let prizeMoney;

    switch (rank) {
        case 1:
            prizeMoney = 1000;
            break;
        case 2:
            prizeMoney = 800;
            break;
        case 3:
            prizeMoney = 700;
            break;
        case 4:
            prizeMoney = 300;
            break;
        case 5:
            prizeMoney = 300;
            break;
        default:
            prizeMoney = 20;
            break;
    }

    console.log("Your prize money is $" + prizeMoney)
}

printPrize(getInput())