/*
    Name: Nabil Ridhwanshah
    ID: P2007421
*/

class Square{
    constructor(length){
        this.length = length;
    }

    calculateArea(){
        return this.length ** 2;
    }
}

function createSquareArray(){
    var len;
    var sqArray = [];

    for(let i = 0; i < 10; i++){
        len = 10 + Math.floor(Math.random() * 11);
        sqArray.push(new Square(len));
    }

    return sqArray;
}

function printSquareArray(array){
    console.log("Length\tArea")
    for(let i = 0; i < array.length; i++){
        console.log(array[i].length + "\t" + array[i].calculateArea());
    }
}

var myArray = createSquareArray();
printSquareArray(myArray);