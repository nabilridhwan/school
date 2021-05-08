/*
    Name: Nabil Ridhwanshah
    ID: P2007421
*/

let input = require("readline-sync");
let bicycleType = input.questionInt("Enter bicycle type \n(1) Single Seater\t(2) Double seater\n:");
let hoursRented = input.questionInt("Enter number of hours rented: ");
let rentalFee;
const hourlyRentalSingle = 5.5, hourlyRentalDouble = 7.8;

// Swtich statements
switch (bicycleType) {

    // Single seater
    case 1:
        rentalFee = hourlyRentalSingle * hoursRented
        break;

    // Double seater
    case 2:
        rentalFee = hourlyRentalDouble * hoursRented
        break;

    default:
        break;
}

// Discount
if(hoursRented >= 3){
    rentalFee = (70 / 100) * rentalFee
}

console.log("Total Rental Fee: $" + rentalFee)