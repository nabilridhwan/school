/*
    Name: Nabil Ridhwanshah (2007421)
    Class: DCITP/01
*/

var intArr = new Array(10);
var biggest, biggestIndex;
for (var i = 0; i < intArr.length; i++) {
    //generate a random integer between 1 & 10
    intArr[i] = Math.floor(Math.random() * 10) + 1;
}

biggest = intArr[0];
for(var i = 0; i < intArr.length; i++){
    if(intArr[i] > biggest){
        biggest = intArr[i]
        biggestIndex = i
    }
}


console.log("Original array: " + intArr)
console.log("The largest number is " + biggest);
console.log(biggest + " is stored at array index #" +
    biggestIndex);