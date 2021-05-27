/*
    Name: Nabil Ridhwanshah (2007421)
    Class: DCITP/01
*/

var nameOfMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

var daysOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

for(var i = 0; i < nameOfMonths.length; i++){
    console.log(nameOfMonths[i] + " has " + daysOfMonth[i] + " days.")
}