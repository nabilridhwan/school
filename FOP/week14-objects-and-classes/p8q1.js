/*
    Name: Nabil Ridhwanshah Bin Rosli
    ID: 2007421
*/

class Rectangle{
    constructor(length, width){
        this.length = length;
        this.width = width
    }

    getArea(){
        return this.length * this.width
    }

    getPerimeter(){
        return (this.length * 2) + (this.width * 2)
    }
}

var r1 = new Rectangle(10, 5)
console.log("Area of rectangle r1 is " + r1.getArea())
console.log("Perimeter of rectangle r1 is " + r1.getPerimeter())