/*
    Name: Nabil Ridhwanshah (2007421)
    Class: DCITP/01
*/

var marks = []
var input = require("readline-sync")
var count = 0;

for (var i = 0; i < 10; i++) {
    marks.push(input.questionInt("Enter marks for student #" + (i + 1) + " "))
}

for(var i = 0; i < marks.length; i++){
    if(marks[i] >= 80) count++
}

console.log(count + " students scored A grade.")