/*
    Name: Nabil Ridhwanshah Bin Rosli
    ID: 2007421
*/

class Circle{
    constructor(radius){
        this.radius = radius
    }

    getArea(){
        return Math.PI * this.radius * this.radius
    }

    enlargeCircle(){
        this.radius *= 3
    }

    shrinkCircle(){
        this.radius /= 2
    }
}

var circle1 = new Circle(2)
console.log("Area of circle1 with radius " + circle1.radius + " is " + circle1.getArea())

circle1.enlargeCircle()
console.log("Circle is enlarged 3 times")
console.log("Area of circle1 with radius " + circle1.radius + " is " + circle1.getArea())

circle1.shrinkCircle()
console.log("Circle is shrunk by halve")
console.log("Area of circle1 with radius " + circle1.radius + " is " + circle1.getArea())
