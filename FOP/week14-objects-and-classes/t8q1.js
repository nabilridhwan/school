/*
    Name: Nabil Ridhwanshah Bin Rosli
    ID: 2007421
*/

class Square {
    constructor(length) {
        len = this.length;
            }
    function getArea() {
        return this.length ** 2;
    }
}  //end Square class

var s1 = new Square();
s1.length = 20;
console.log("Area is " + s1.getArea());

// len should be length
// function keyword should not be there
// new Square has no argument passed into it
