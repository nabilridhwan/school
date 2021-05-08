/*
Name: Nabil Ridhwanshah
ID: P2007421
*/

let years = [1996, 1900];

years.forEach(year => {
    let isLeapYear = false;
    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
        isLeapYear = true
    }

    console.log(year + " is Leap year? " + isLeapYear)
})