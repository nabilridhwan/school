/*
    Name: Nabil Ridhwanshah (2007421)
    Class: DCITP/01
*/

var numArr = new Array(100);
var count = 0;

for (var i = 0; i < numArr.length; i++) {
    //generate a random integer between 1 & 100
    numArr[i] = Math.floor(Math.random() * 100) + 1;
}

for(var i = 0; i < numArr.length; i++){
    if(numArr[i] >= 30 && numArr[i] < 50) count++
}

console.log("There are " + count + " numbers.");